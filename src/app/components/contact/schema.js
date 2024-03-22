import * as Yup from "yup";

export const contactSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  message: Yup.string().min(3).max(3000).required("Please enter a text between 3 and 3000 characters"),
});
