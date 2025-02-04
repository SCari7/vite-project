import { useEffect, useState } from "react";
import CatInfo from "../../catInfo/CatInfo";
import Loader from "../../loader/Loader";
import style from "./lesson10.module.css";

interface ICatImageData {
  url: string;
}

interface ICatFactData {
  fact: string;
}

interface ICatData {
  fact: string;
  imageUrl: string;
}

export default function Lesson10(): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [catArray, setCatArray] = useState<ICatData[]>([]);

  // Функция для загрузки изображения кота
  const fetchCatImage = async (): Promise<string> => {
    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1"
    );
    const data: ICatImageData[] = await res.json();
    return data[0].url; //  URL изображения
  };

  // Функция для загрузки факта о коте
  const fetchTextCat = async (): Promise<string> => {
    const res = await fetch("https://catfact.ninja/fact");
    const data: ICatFactData = await res.json();
    return data.fact; 
  };

  // Функция   новый факт и изображения
  const handleGetCatAndFact = async (): Promise<void> => {
    setIsLoading(true); // показать индикатор загрузки

    const [newImageUrl, newFact] = await Promise.all([
      fetchCatImage(),
      fetchTextCat(),
    ]);

    setCatArray((prevArray) => [
      ...prevArray,
      { fact: newFact, imageUrl: newImageUrl },
    ]);

    setIsLoading(false); // выкл индикатор загрузки
  };

  const delFacts = (): void => {
    setCatArray([]);
  };

  useEffect(() => {
    handleGetCatAndFact();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.bbtn}>
        {isLoading && <Loader />}
        <button className={style.btn_info} onClick={handleGetCatAndFact}>
          Get more info!
        </button>

        {catArray.length > 0 && (
          <button className={style.btn_del} onClick={delFacts}>
            DELETE ALL DATA
          </button>
        )}
      </div>

      <div className={style.grid_container}>
        {catArray.map((item, index) => (
          <div className={style.grid_item} key={index}>
            <img className={style.cat_img} src={item.imageUrl} alt="Cat" />
            <CatInfo info={item.fact} />
          </div>
        ))}
      </div>
    </div>
  );
}
