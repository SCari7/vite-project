import * as Yup from "yup";

// .shape({...}) – определяем структуру объекта, то есть какие поля нужно валидировать и какие у них должны быть правила.
export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be less than 20 characters")
    .matches(/^[a-zA-Z0-9_]+$/, "Only letters, numbers, and underscores allowed")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password must be less than 32 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    // \d – это шорткат для [0-9]
    .matches(/\d/, "Password must contain at least one number")
    .matches(/[@$!%*?&]/, "Password must contain at least one special character (@$!%*?&)")
    .required("Password is required"),
  confirmPassword: Yup.string()
  //  oneOf([Yup.ref("поле")], "Сообщение") → значение должно совпадать с указанным полем.
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});


export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
