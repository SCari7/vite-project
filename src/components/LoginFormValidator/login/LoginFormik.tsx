import { useFormik } from "formik";
import { loginSchema } from "../../validation/validationSchemas";
import styles from "./loginForm.module.css";
export default function LoginFormik() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      console.log("Logged in:", values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Login</h2>
      <div className={styles.input_form}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <span>{formik.errors.email}</span>

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <span>{formik.errors.password}</span>
      <button type="submit">Login</button>
      </div>

      
    </form>
  );
}
