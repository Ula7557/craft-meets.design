import styles from "./casesingle.module.scss";
import Banner from "../../assets/images/banner.png";
import Banner2 from "../../assets/images/banner2.png";
import AnimaIma from "../../assets/images/anima1.png";
import { useEffect, useState } from "react";
import { CaseSingleData } from "../../fakeApi/Fake";

const CaseSingle = ({ match }) => {
  const [hover, setHover] = useState("one");
  const [datas, setDatas] = useState([]);

  console.log(match);
  useEffect(() => {
    setDatas(
      CaseSingleData.filter((el) => el.id === parseInt(match.params.id))
    );
  }, [match.params.id]);

  return (
    <div className={styles.case_single_page_wrapper}>
      <div
        className={styles.top_place}
        style={{
          backgroundImage: `url(${Banner})`,
        }}
      >
        <h1>Craft as heritage</h1>
      </div>
      <div className={styles.middle}>
        <h1>Case Study</h1>
      </div>
      <div className={styles.bottom_place}>
        <div className={styles.animation_images}>
          <div
            className={`${styles.card_image} ${
              hover === "one" ? styles.active : ""
            }`}
            onMouseEnter={() => setHover("one")}
          >
            <img src={AnimaIma} alt="" />
          </div>
          <div
            className={`${styles.card_image} ${
              hover === "two" ? styles.active : ""
            }`}
            onMouseEnter={() => setHover("two")}
          >
            <img src={Banner} alt="" />
          </div>
          <div
            className={`${styles.card_image} ${
              hover === "three" ? styles.active : ""
            }`}
            onMouseEnter={() => setHover("three")}
          >
            <img src={Banner2} alt="" />
          </div>
        </div>
      </div>

      <div className={styles.single_case_main_content}>
        <div className="container">
          <div className={styles.case_single_case_info_block}>
            <h1 className={styles.personal_name}>
              {/* {datas.map(el => el.name)} */}
              Abdullo Narzullaev - Traditional Master of Gijduvan ceramics
            </h1>
            {/* <span className={styles.personal_category}>{datas.map(el => el.category)}</span> */}
            <span className={styles.personal_category}>Ceramic</span>
            <div className={styles.personal_info_image}>
              {/* <p>{datas.map(el => el.info)}</p> */}
              <p>
                Abdullo Narzullaev (born in 1963) comes from a world famous
                dynasty of master ceramists from Gijduvan. He has managed not
                only to preserve ancient traditions and restore some forgotten
                secrets of craftsmanship, but also to expand the artistic facets
                of the Gijduvan school of ceramics. Abdullo Narzullaev has
                visited more than 100 countries, where he participated in
                international exhibitions and conferences. He also founded a
                ceramics museum in Gijduvan, where items from all regions of
                Uzbekistan and Central Asia are displayed.
              </p>
              {/* <img src={datas.map(el => el.image1)} alt="" /> */}
              <img src={Banner} alt="" />
            </div>

            <div className={styles.personal_info_full}>
              {/* <h1>{datas.map(el => el.theme_one)}</h1> */}
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. sardor
              </h1>
              <p>
                {/* {datas.map(el => el.desc_one)} */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className={`${styles.personal_info_image} ${styles.active}`}>
              {/* <p>{datas.map(el => el.desc_two)}</p> */}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
              </p>
              {/* <img src={datas.map(el => el.image2)} alt="" /> */}
              <img src={Banner} alt="" />
            </div>
            <div className={styles.personal_info_full}>
              {/* <h1>{datas.map(el => el.theme_two)}</h1> */}
              <h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ulugbek
              </h1>
              <p>
                {/* {datas.map(el => el.desc_three)}
                            {datas.map(el => el.desc_four)} */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_banner}>
        <img src={Banner} alt="" />
      </div>
    </div>
  );
};
export default CaseSingle;
