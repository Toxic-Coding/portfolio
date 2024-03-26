"use client";
import React, { useEffect } from "react";
import style from "./style.module.scss";
import Text from "@/common/AnimText/Text";
import Button from "@/common/button/Button";
import { useFormik } from "formik";
import { contactSchema } from "./schema";
import axios from "axios";
import { Toaster,toast } from "sonner";
const initialValues = {
  name: "",
  email: "",
  company: "",
  service: "",
  message: "",
};
const CForm = () => {
  const contactReq = async (values) => {
    console.log(values);
    await axios
      .post(`${process.env.HOST}/api/contact`, values)
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.error);
      });
  };
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: (values, action) => {
      setSubmitting(true);
      contactReq(values);
      setSubmitting(false);
      // action.resetForm();
    },
  });

  const inputDom = [
    {
      name: "name",
      label: "What's your name?",
      placeholder: "John Doe *",
      type: "text",
      value: values.name,
      error: errors.name && touched.name ? errors.name : null,
    },
    {
      name: "email",
      label: "What's your email?",
      placeholder: "john@doe.com *",
      type: "email",
      value: values.email,
      error: errors.email && touched.email ? errors.email : null,
    },
    {
      name: "company",
      label: "What's the name of your organization?",
      placeholder: "John & Doe ®",
      type: "text",
      value: values.company,
      error: null,
    },
    {
      name: "service",
      label: "What services are you looking for?",
      placeholder: "Web Development, Digital Marketing...",
      type: "text",
      value: values.service,
      error: null,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      document.activeElement.blur();
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Toaster richColors position="top-right" />
      <form onSubmit={handleSubmit} className={style.form}>
        {inputDom.map((field, i) => {
          return (
            <div key={i} className={style.form_col}>
              <h5>0{i + 1}</h5>
              <label htmlFor={field.name}>
                <Text txt={field.label} />
              </label>
              <input
                className={style.field}
                onBlur={handleBlur}
                onChange={handleChange}
                id={field.name}
                {...field}
              />
              {field.error !== null && (
                <p className={style.field_err}>{field.error}</p>
              )}
            </div>
          );
        })}
        <div className={style.form_col}>
          <h5>05</h5>
          <label htmlFor="message">
            <Text txt="Your message" />
          </label>
          <textarea
            className={style.field}
            type="text"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={6}
            placeholder="Hello Muhammad, can you help me with...*"
          />
          {errors.message && touched.message ? (
            <p className={style.field_err}>{errors.message}</p>
          ) : null}
        </div>
        <button disabled={isSubmitting} type="submit">
          <Button background={"#62b0e9"} className={style.submit}>
            <span>{isSubmitting ? "Sending..." : "Send"}</span>
          </Button>
        </button>
      </form>
    </>
  );
};

export default CForm;
