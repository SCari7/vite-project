import styles from "./catInfo.module.css"

interface CatInfo {
    info: string;
  }
  
  export default function CatInfo({ info }: CatInfo) {
    return (
      <div className={styles.textContainer}>
        <h3 className={styles.textCatInfo}>:smirk_cat:{info}:smirk_cat:</h3>
      </div>
    );
  }