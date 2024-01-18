import styles from "./popular.module.scss";
import { Link } from "react-router-dom";

const Popular = ({ desc, date, id, image, type }) => {
  const utilDate = new Date(date * 1000);
  const day = utilDate.toLocaleString("en-US", { day: "numeric" });
  const month = utilDate.toLocaleString("en-US", { month: "long" });
  const year = utilDate.toLocaleString("en-US", { year: "numeric" });
  return (
    <Link to={`/single/${type}/${id}`} className={styles.popular_post_wrapper}>
      <div className={styles.left_side}>
        <img src={image} alt="" />
      </div>
      <div className={styles.right_side}>
        <p className={styles.pop_text}>{desc}</p>
        <span className={styles.pop_date}>{`${day} ${month}, ${year}`}</span>
      </div>
    </Link>
  );
};

export default Popular;
