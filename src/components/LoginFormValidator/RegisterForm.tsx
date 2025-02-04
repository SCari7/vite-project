import { useFormik } from "formik";
import { registerSchema } from "../../components/validation/validationSchemas";
import styles from "./RegisterForm.module.css";
export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    validateOnChange: false,
    onSubmit: (values, { resetForm }) => {
      console.log("Registered:", values);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Register</h2>
      <div className={styles.register_form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
        <span>{formik.errors.username}</span>

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

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
        />
        <span>{formik.errors.confirmPassword}</span>
        <button type="submit">Register</button>
      </div>
    </form>
  );
}
