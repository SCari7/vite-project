import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './LoginForm.css';

function LoginForm() {
//     const handelSubmit = (e) => {
//         e.preventDefault();
//         //e (или event) — это объект, который передается в обработчик событий. В случае с событием отправки формы (onSubmit), этот объект содержит важную информацию о событии, в том числе методы, которые позволяют предотвратить стандартное поведение браузера (например, отправку формы и перезагрузку страницы).
//     }
//Без e форма по-прежнему будет отправляться с перезагрузкой страницы. Если перезагрузка не требуется (например, если форма не должна отправляться на сервер), то можно отказаться от использования e. Но для отмены стандартного поведения формы (перезагрузки) — нужно использовать e.preventDefault().

const handelSubmit = () => {
    alert('successful')
};
return (
<form onSubmit={handelSubmit} className="login-form">
      <h3>Personal account </h3>
      <MyInput
        name="login"
        type="text"
        placeholder="Введите логин"
        label="Логин"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="Введите email"
        label="Email"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Введите пароль"
        label="Пароль"
      />
      <MyButton text="Отправить" type="submit" />
    </form>
  );

}

export default LoginForm;