import React, { useState } from "react";
import style from "./Sandwich.module.css";
export default function Sandwich(): JSX.Element {
  const [sandwich, setSandwich] = useState<string>("Бутербродный конфигуратор");

  function handleAddBread(): void {
    setSandwich(`${sandwich} Bread🍞`);
  }
  function handleAddCheese(): void {
    setSandwich(`${sandwich} Cheese🧀`);
  }
  function handleAddBeacon(): void {
    setSandwich(`${sandwich} Beacon🥓`);
  }
  function handleAddAvocado(): void {
    setSandwich(`${sandwich} Avocado🥑`);
  }

  function handleClear(): void {
    setSandwich("Бутербродный конфигуратор");
  }
  // Состояние - может быть чем угодно: строкой, числом, массивом и т.д.
  // и с ним можно работать как с любой другой переменной,
  // но изменять только с помощью функции изменения состояния.
  // Если делать через обычную переменную без юзстэйт то нужен будет слушатель событий
  //  и значение на странице не будет обновляться а юзстэйт отлавливает изменение
  // и отрисовывает на странице
  return (
    <div className={style.container}>
      <h2>Sandwich</h2>
      <img className={style.imgClass}
        src="https://i.blogs.es/1cbc97/collage_sanwich/1366_2000.jpg"
        alt=""
      />
      <p>{sandwich}</p>
      <div className={style.btnContainer}>
        <button
          type="button"
          className={style.btn}
          onClick={handleAddAvocado}
        >add avocado</button>
        <button
          type="button"
          className={style.btn}
          onClick={handleAddBeacon}
        >add beacon</button>{""}
        <button
          type="button"
          className={style.btn}
          onClick={handleAddBread}
        >add bread</button>{" "}
        <button
          type="button"
          className={style.btn}
          onClick={handleAddCheese}
        >add cheese</button>
          <button
          type="button"
          className={style.btn}
          onClick={handleClear}
        >eat me</button>
      </div>
    </div>
  );
}
