import styles from "./countryCard.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Countrycard = ({
  base_url,
  thumbnail_path,
  fullname,
  typeOfCrafts,
  region,
  path,
  description,
  craftsmanPagesAttachments,
  id
}) => {
  const url = useSelector((state) => state.data.url);
  return (
    <div className={styles.slide_card}>
      <div className={styles.info}>
        <div className={styles.left_info}>
          <img src={`${base_url}/${thumbnail_path}`} alt="" />
        </div>
        <div className={styles.right_info}>
          <h3>{fullname}</h3>
          <span>{typeOfCrafts}</span>
          <div className={styles.span_in_span}>
            <span>Uzbekistan/</span>
            <span>{region}</span>
          </div>
          <div className={styles.follow}>
            <span className={styles.fuck}>14k followers</span>
            <button>Follow</button>
          </div>
        </div>
      </div>
      <p>
        {description}
        ...
      </p>
      <div className={styles.images}>
        {craftsmanPagesAttachments.slice(0, 4).map((el, index) => (
          <img key={index}  src={`${base_url}/${el.path}`} alt="" />
        ))}
      </div>
      <Link to={`${url}/artisanssingle/${id}`} className={styles.button}>
        See more
      </Link>
    </div>
  );
};

export default Countrycard;
