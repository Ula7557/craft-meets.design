import styles from "./uzbekistan.module.scss";
import Bannertop from "../../assets/images/banner.png";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import parse from "html-react-parser";
import GetData from "../../hooks/getData";
import Vectorsd from "../../assets/icons/Vectorsd.png";
import OwlCarousel from "react-owl-carousel";
import Banner from "../../assets/images/uz1.jpg";
import Banners from "../../assets/uz4.jpg";
import Banner2 from "../../assets/AD1.jpg";
import { useState, useRef } from "react";
import AnimaIma from "../../assets/images/uz3.jpg";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Leaflet from "../../container/Leaflet";
import axios from "axios";
import Countrycard from "../../components/countryCard/CountryCard";
import { useEffect } from "react";
import { optionsOne, optionsTwo } from "../../components/slider";
import { categoryButtons } from "../../api/countryCategory";

const Uzbekistan = () => {
  const initialState = {
    isFetched: false,
    data: {},
    error: null,
  };
  const [newData, setNewData] = useState(initialState);
  const [activeId, setActiveId] = useState("");
  const slider = useRef(null);
  const miniSlider = useRef(null);
  const [hover, setHover] = useState("one");
  const [loading, data, error] = GetData(
    `/v1/crafts-by-country?country_id=215`
  );
  const [cordinate, setCordinate] = useState([
    [40.10358873345734, 65.36672111094956],
  ]);
  const [name, setName] = useState("");
  const [idType, setId] = useState("");
  const birnima = async (name) => {
    let wtf;
    setName(name);
    await axios
      .get(`https://api.craftmeets.design/v1/craftsman/get-artisans`)
      .then((res) => {
        wtf = res.data;
      });
    const id = await wtf.data.filter((item) => item.typeOfCrafts.name === name);
    console.log('id', id);
    if(id.length !== 0){
      setId(id[0].typeOfCrafts.id);
    }
    if (wtf.data && id.length !== 0) {
      const arr = [];
      for (let item of id) {
        arr.push([
          item.location_latitude,
          item.location_longitude,
          item.region_id,
          item.fullname,
          item.region.name,
          item.typeOfCrafts.id,
        ]);
      }
      setCordinate(arr);
    }else{
      setCordinate([])
    }
  };
  const introData = data.filter((el) => el.type === "intro");
  const crafts = data.filter((el) => el.type === "crafts");
  const schools = data.filter((el) => el.type === "schools");
  const base_url = "https://assets.craftmeets.design/source";
  const sortHandler = (id) => {
    birnima(name, id);
  };
  const [params, setParams] = useState({
    id: "00",
    region: "",
  });

  useEffect(() => {
    let isSubscribed = true;
    var data = new FormData();
    data.append("category_id", params.id);
    data.append("region_id", params.region);
    var config = {
      method: "post",
      url: "https://api.craftmeets.design/v1/craftsman/get-artisans",
      data: data,
    };
    axios(config)
      .then((res) =>
        isSubscribed
          ? setNewData((el) => ({
              ...el,
              isFetched: true,
              data: res.data.data,
            }))
          : null
      )
      .catch((err) =>
        isSubscribed
          ? setNewData({
              isFetched: false,
              data: [],
              error: err,
            })
          : null
      );
    return () => (isSubscribed = false);
  }, [params]);
  const region = localStorage.getItem("region");
  const changeCategory = (el) => {
    switch (el) {
      case "Ceramics":
        {
          window.localStorage.setItem("type_id", 1);
          return setParams({ id: 1, region: "" });
        }
        break;
      case "Textile":
        {
          window.localStorage.setItem("type_id", 6);
          return setParams({ id: 6, region: "" });
        }
        break;
      case "Jewelry":
        {
          window.localStorage.setItem("type_id", 7);
          return setParams({ id: 7, region: "" });
        }
        break;
      case "Embroidery":
        {
          window.localStorage.setItem("type_id", 2);
          return setParams({ id: 2, region: "" });
        }
        break;
      case "Visual Art": {
        window.localStorage.setItem("type_id", 8);
        return setParams({ id: 8, region: "" });
      }
      default:
        return setParams({id: 12, region:''});
    }
  };

  const markSwitch = (id, name) =>{
    if(region){
      setParams({id:id, region: region})
    }else{
      setParams({id:id, region: ''})
      birnima(name)
    }
  }


  if (loading) return <Loading />;
  if (error) return <Error />;
  return (
    <div className={styles.country_wrapper_pages}>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${Bannertop})` }}
      ></div>
      <div className="container">
        <div className={styles.page_hero}>
          <h1 className={styles.herp_text}>{introData && introData[0].name}</h1>
          <div className={styles.two_side_block}>
            <div className={styles.left_side}>
              {parse(`${introData && introData[0].description}`)}
            </div>
            <div className={styles.right_side}>
              <div className={styles.animation_images}>
                <div
                  className={`${styles.card_image} ${
                    hover === "one" ? styles.active : ""
                  }`}
                  onMouseEnter={() => setHover("one")}
                >
                  <img
                    src={`${introData && base_url}/${
                      introData &&
                      introData[0].attachments[0] &&
                      introData[0].attachments[0].path
                    }`}
                    alt=""
                  />
                </div>
                <div
                  className={`${styles.card_image} ${
                    hover === "two" ? styles.active : ""
                  }`}
                  onMouseEnter={() => setHover("two")}
                >
                  <img
                    src={`${introData && base_url}/${
                      introData &&
                      introData[0].attachments[1] &&
                      introData[0].attachments[1].path
                    }`}
                    alt=""
                  />
                </div>
                <div
                  className={`${styles.card_image} ${
                    hover === "three" ? styles.active : ""
                  }`}
                  onMouseEnter={() => setHover("three")}
                >
                  <img
                    src={`${introData && base_url}/${
                      introData &&
                      introData[0].attachments[2] &&
                      introData[0].attachments[2].path
                    }`}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className={styles.mobile_image_slider}>
              <OwlCarousel
                className="owl-theme"
                ref={miniSlider}
                loop
                margin={10}
                nav
                {...optionsOne}
              >
                <div className="item">
                  <div className={styles.inner_img}>
                    <img src={AnimaIma} alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className={styles.inner_img}>
                    <img src={Banner} alt="" />
                  </div>
                </div>
                <div className="item">
                  <div className={styles.inner_img}>
                    <img src={Banner2} alt="" />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <>
            {crafts.map((el, index) => (
              <div className={styles.map_blocks} key={index}>
                <div className={styles.left_side}>
                  <img src={`${base_url}/${el.thumbnail_path}`} alt="" />
                </div>
                <div className={styles.right_side}>
                  <h1 className={styles.text}>{el.name}</h1>
                  <div className={styles.more_text}>
                    {parse(`${el.description}`)}
                  </div>
                  <a
                    href="#map"
                    className={styles.text_btn}
                    onClick={() => {
                      birnima(el.name);
                      changeCategory(el.name);
                      localStorage.removeItem('region')
                    }}
                  >
                    VIEW ON MAP
                  </a>
                </div>
              </div>
            ))}
          </>
        </div>
      </div>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${Banners})` }}
      ></div>
      <div className="container">
        <div className={styles.what_the_fuck}>
          <h1>Craft schools and styles</h1>
          <div className={styles.craft_schools}>
            <OwlCarousel
              className="owl-theme"
              ref={slider}
              loop
              margin={10}
              nav
              {...optionsTwo}
            >
              {schools &&
                schools.map((el, index) => (
                  <div className="item" key={index}>
                    <div className={styles.slider_card}>
                      <div className={styles.craft_school_card}>
                        <img src={`${base_url}/${el.thumbnail_path}`} alt="" />
                        <h2>{el.name}</h2>
                        {parse(`${el.description}`)}
                        <a
                          href="#map"
                          onClick={() => {
                            setCordinate([
                              [el.location_latitude, el.location_longitude],
                            ]);
                            changeCategory(el.name)
                          }}
                          className={styles.map_views}
                        >
                          VIEW ON MAP
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </OwlCarousel>
            <div className={styles.btns_of_slider}>
              <button
                onClick={() => {
                  slider?.current?.prev();
                }}
                className={styles.slider_btn_prev}
              >
                <img alt="prev" src={Vectorsd} />
              </button>
              <button
                onClick={() => {
                  slider?.current?.next();
                }}
                className={styles.slider_btn_next}
              >
                <img alt="next" src={Vectorsd} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="map" className={styles.yandex_map_wrapper}>
        <Leaflet
          id={idType}
          sortHandler={sortHandler}
          cordinate={cordinate}
          setParams={setParams}
        />
      </div>

      <div className="container">
        <div className={styles.countr_single_data}>
          <div className={styles.category_buttons}>
            {categoryButtons.map((el, index) => (
              <button
                key={index}
                className={activeId === el.id ? styles.active : ""}
                onClick={() => {
                  setActiveId(el.id);
                  markSwitch(el.id, el.name)
                }}
              >
                {el.icon}
                <span>{el.name}</span>
              </button>
            ))}
          </div>

          <div className={styles.response_data}>
            <h1>Artisans</h1>
            <div className={styles.artisan_cards}>
              {newData.isFetched ? (
                newData?.data.length !== 0 ? (
                  newData?.data.map((el, index) => (
                    <div className={styles.single_cards}>
                      <Countrycard
                        key={index}
                        fullname={el.fullname}
                        typeOfCrafts={el.typeOfCrafts.name}
                        thumbnail_path={el.thumbnail_path}
                        craftsmanPagesAttachments={el.craftsmanPagesAttachments}
                        region={el.region.name}
                        description={el.description}
                        id={el.id}
                        base_url={"https://assets.craftmeets.design/source"}
                      />
                    </div>
                  ))
                ) : (
                  <div className={styles.no_data}>
                    <h1>
                      No artisans information was found for the given address
                    </h1>
                  </div>
                )
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uzbekistan;
