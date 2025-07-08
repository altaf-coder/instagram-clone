import * as yup from "yup";
export const authValidation = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is reuqired"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  name: yup.string(),
  userName: yup.string(),
});
