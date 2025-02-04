import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FetchFox from "./components2/fetchFox/FetchFox";
import HomePage from "./components/homePage/HomePage";
import Layout from "./layout/Layout";
import NoPage from "./components2/NoPage/NoPage";
import Lesson13 from "./components/lessons/lesson13/Lesson13";
import Lesson12 from "./components/lessons/lesson12/Lesson12";
import Lesson11 from "./components/lessons/lesson11/Lesson11";
import Lesson10 from "./components/lessons/lesson10/lesson10";
import Lesson09 from "./components/lessons/lesson09/Lesson09";
import Lesson08 from "./components/lessons/lesson08/Lesson08";
import Lesson05 from "./components/lessons/lesson05/Lesson05";
import Lesson04 from "./components/lessons/lesson04/Lesson04";
import GenderForm from "./components/genderForm/GenderForm";
import LoginForm from "./components2/loginForm/LoginForm";
import Homework001 from "./homework/homework001/Homework001";

import RegisterForm from "./components/LoginFormValidator/RegisterForm";
import LoginFormik from "./components/LoginFormValidator/login/LoginFormik";
import Lesson_12 from "./components2/myGender/Lesson_12";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="fetch-fox" element={<FetchFox />} />
          <Route path="gender-form" element={<GenderForm />} />
          <Route path="login-form" element={<LoginForm />} />
          <Route path="homework001" element={<Homework001 />} />
          <Route path="lesson-1" element={<h2>Lesson 1</h2>} />
          <Route path="lesson-2" element={<h2>Lesson 2</h2>} />
          <Route path="lesson-3" element={<h2>Lesson 3</h2>} />
          <Route path="lesson-4" element={<Lesson04 />} />
          <Route path="lesson-5" element={<Lesson05 />} />
          <Route path="lesson-6" element={<h2>Lesson 6</h2>} />
          <Route path="lesson-7" element={<h2>Lesson 7</h2>} />
          <Route path="lesson-8" element={<Lesson08 />} />
          <Route path="lesson-9" element={<Lesson09 />} />
          <Route path="lesson-10" element={<Lesson10 />} />
          <Route path="lesson-11" element={<Lesson11 />} />
          <Route path="lesson-12" element={<Lesson12 />} />
          <Route path="lesson_12" element={<Lesson_12 />} />
          <Route path="lesson-13" element={<Lesson13 />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginFormik />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
