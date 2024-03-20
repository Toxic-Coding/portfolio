"use client";
import React, { useState } from "react";
import style from "./style.module.scss";
import Text from "@/common/AnimText/Text";
import Button from "@/common/button/Button";
const Form = () => {
  const [input, setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  const inputDom = [
    {
      name: "name",
      label: "What's your name?",
      required: true,
      placeholder: "John Doe *",
      type: "text",
      value: input.name,
    },
    {
      name: "email",
      label: "What's your email?",
      required: true,
      placeholder: "john@doe.com *",
      type: "email",
      value: input.email,
    },
    {
      name: "company",
      label: "What's the name of your organization?",
      required: false,
      placeholder: "John & Doe ®",
      type: "text",
      value: input.company,
    },
    {
      name: "service",
      label: "What services are you looking for?",
      required: false,
      placeholder: "Web Development, Digital Marketing...",
      type: "text",
      value: input.service,
    },
  ];
  return (
    <form onSubmit={onSubmit} className={style.form}>
      {inputDom.map((field, i) => {
        return (
          <div key={i} className={style.form_col}>
            <h5>0{i + 1}</h5>
            <label htmlFor={field.name}>
              <Text txt={field.label} />
            </label>
            <input className={style.field} onChange={handleChange} {...field} />
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
          value={input.message}
          onChange={handleChange}
          required
          rows={6}
          placeholder="Hello Muhammad, can you help me with...*"
        />
      </div>
      <button type="submit">
        <Button background={"#62b0e9"} className={style.submit}>
          <span>Send</span>
        </Button>
      </button>
    </form>
  );
};

export default Form;
