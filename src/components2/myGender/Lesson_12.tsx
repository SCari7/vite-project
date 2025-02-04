import { useState } from "react";
import MyButton from "../../components2/myButton/MyButton";
import styles from "./lesson_12.module.css";
import { useFormik } from "formik";
interface IFormValues {
  name: string;
}
interface IFormData{
  gender: string;
  isMale: boolean;
}
export default function Lesson_12(): JSX.Element {
  const [gender, setGender] = useState<string>("");
  const fetchGender = async (name: string) => {
    const response = await fetch(`https://api.genderize.io/?name=${name}`);
    const data = await response.json();
    setGender(data.gender);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
    } as IFormValues,
    onSubmit: (values: IFormValues) => {
      fetchGender(values.name)
    },
  });
  return (
    <>
    <div className={styles.gender}>
           <h2>Lesson 12. Formik</h2>
      <form onSubmit={formik.handleSubmit}>
        <input className={styles.inputField}
          onChange={formik.handleChange}
          value={formik.values.name}
          type="text"
          placeholder="Enter your name: "
          name="name"
        />
        <MyButton  type="submit" text="send data" />
      </form>
     <h2>{gender==="male" ? "мужчина": "женщина"}</h2> 
    </div>
  
    </>
  );
}