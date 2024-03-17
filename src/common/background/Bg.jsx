"use client";
import react, { useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { Linear, gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./bg.scss";
import { useGSAP } from "@gsap/react";

const Bg = () => {
  const canvas = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const Mathutils = {
        normalize: function ($value, $min, $max) {
          return ($value - $min) / ($max - $min);
        },
        interpolate: function ($normValue, $min, $max) {
          return $min + ($max - $min) * $normValue;
        },
        map: function ($value, $min1, $max1, $min2, $max2) {
          if ($value < $min1) {
            $value = $min1;
          }
          if ($value > $max1) {
            $value = $max1;
          }
          var res = this.interpolate(
            this.normalize($value, $min1, $max1),
            $min2,
            $max2
          );
          return res;
        },
      };

      var markers = [];

      var ww = window.innerWidth,
        wh = window.innerHeight;

      var renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("canvas"),
        antialias: true,
        shadowMapEnabled: true,
        shadowMapType: THREE.PCFSoftShadowMap,
      });
      renderer.setSize(ww, wh);

      var scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0x194794, 0, 100);

      var clock = new THREE.Clock();

      var cameraRotationProxyX = 3.14159;
      var cameraRotationProxyY = 0;

      var camera = new THREE.PerspectiveCamera(45, ww / wh, 0.001, 200);
      camera.rotation.y = cameraRotationProxyX;
      camera.rotation.z = cameraRotationProxyY;

      var c = new THREE.Group();
      c.position.z = 400;
      c.add(camera);
      scene.add(c);

      var renderScene = new RenderPass(scene, camera);
      var bloomPass = new UnrealBloomPass(
        new THREE.Vector2(window.innerWidth, window.innerHeight),
        1.5,
        0.4,
        0.85
      );
      bloomPass.renderToScreen = true;
      bloomPass.threshold = 1.0;
      bloomPass.strength = 1.0;
      bloomPass.radius = 0.0;
      var composer = new EffectComposer(renderer);
      composer.setSize(window.innerWidth, window.innerHeight);
      composer.addPass(renderScene);
      composer.addPass(bloomPass);

      var points = [
        [10, 89, 0],
        [50, 88, 10],
        [76, 139, 20],
        [126, 141, 12],
        [150, 112, 8],
        [157, 73, 0],
        [180, 44, 5],
        [207, 35, 10],
        [232, 36, 0],
      ];

      var p1, p2, p3;
      for (var i = 0; i < points.length; i++) {
        var x = points[i][0];
        var y = points[i][2];
        var z = points[i][1];
        points[i] = new THREE.Vector3(x, y, z);
      }

      var path = new THREE.CatmullRomCurve3(points);
      path.tension = 0.5;
      var geometry = new THREE.TubeGeometry(path, 300, 4, 32, false);

      var texture = new THREE.TextureLoader().load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/3d_space_5.jpg",
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.offset.set(0, 0);
          texture.repeat.set(15, 2);
        }
      );

      var mapHeight = new THREE.TextureLoader().load(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/68819/waveform-bump3.jpg",
        function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
          texture.offset.set(0, 0);
          texture.repeat.set(15, 2);
        }
      );

      var material = new THREE.MeshPhongMaterial({
        side: THREE.BackSide,
        map: texture,
        shininess: 20,
        bumpMap: mapHeight,
        bumpScale: -0.03,
        specular: 0x0b2349,
      });

      var tube = new THREE.Mesh(geometry, material);
      scene.add(tube);

      var geometry = new THREE.TubeGeometry(path, 150, 3.4, 32, false);
      var geo = new THREE.EdgesGeometry(geometry);

      var mat = new THREE.LineBasicMaterial({
        linewidth: 2,
        opacity: 0.2,
        transparent: 1,
      });

      var wireframe = new THREE.LineSegments(geo, mat);
      scene.add(wireframe);

      var light = new THREE.PointLight(0xffffff, 0.35, 4, 0);
      light.castShadow = true;
      scene.add(light);

      function updateCameraPercentage(percentage) {
        p1 = path.getPointAt(percentage % 1);
        p2 = path.getPointAt((percentage + 0.03) % 3);
        p3 = path.getPointAt((percentage + 0.05) % 1);

        c.position.set(p1.x, p1.y, p1.z);
        c.lookAt(p2);
        light.position.set(p2.x, p2.y, p2.z);
      }

      var cameraTargetPercentage = 0;
      var currentCameraPercentage = 0;

      gsap.defaultEase = Linear.easeNone;

      var tubePerc = {
        percent: 0,
      };

      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scrollTarget",
          start: "top top",
          end: "bottom 100%",
          scrub: 5,
        },
      });
      tl.to(tubePerc, {
        percent: 0.96,
        ease: Linear.easeNone,
        duration: 10,
        onUpdate: function () {
          cameraTargetPercentage = tubePerc.percent;
        },
      });

      function render() {
        currentCameraPercentage = cameraTargetPercentage;

        camera.rotation.y += (cameraRotationProxyX - camera.rotation.y) / 15;
        camera.rotation.x += (cameraRotationProxyY - camera.rotation.x) / 15;

        updateCameraPercentage(currentCameraPercentage);

        composer.render();

        requestAnimationFrame(render);
      }
      requestAnimationFrame(render);

      canvas.current.click(function () {
        console.clear();
        markers.push(p1);
        console.log(JSON.stringify(markers));
      });

      window.addEventListener(
        "resize",
        function () {
          var width = window.innerWidth;
          var height = window.innerHeight;

          camera.aspect = width / height;
          camera.updateProjectionMatrix();

          renderer.setSize(width, height);
          composer.setSize(width, height);
        },
        false
      );

      const documentMouseMove = (evt) => {
        cameraRotationProxyX = Mathutils.map(
          evt.clientX,
          0,
          window.innerWidth,
          3.24,
          3.04
        );
        cameraRotationProxyY = Mathutils.map(
          evt.clientY,
          0,
          window.innerHeight,
          -0.1,
          0.1
        );
      };

      document.addEventListener("mousemove", documentMouseMove);
      return () => {
        document.addEventListener("mousemove", documentMouseMove);
      };
    },
    { scope: canvas }
  );

  return (
    <>
      <canvas ref={canvas} className="experience"></canvas>
      <div className="scrollTarget"></div>
      <div className="vignette-radial"></div>
    </>
  );
};

export default Bg;
