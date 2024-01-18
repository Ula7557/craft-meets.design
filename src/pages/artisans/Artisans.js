import styles from "./artisans.module.scss";
import Sort from "../../assets/icons/sort.png";
import Banner from "../../assets/images/banner.png";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.scss";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import GetData from "../../hooks/getData";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import search_icon from "../../assets/images/search.png";
import OwlCarousel from "react-owl-carousel";
import {settingsArtisans} from '../../components/slider'

const Artisans = () => {
  const [api, setApi] = useState(false);
  const [loading, data, error] = GetData(
    api
      ? `/v1/craftsman/get-artisans?page=1`
      : `/v1/craftsman/get-artisans?page=1`
  );
  const url  = useSelector(state => state.data.url)
  const [filteredResults, setFilteredResults] = useState([]);
    const [isOpenTwo, setIsOpenTwo] = useState(false)

  function sortcrftsmen() {
    setApi(!api);
  }
  useEffect(() => {
    if (data.data && data.data) {
      setFilteredResults(data.data);
    }
  }, [data]);
  if (loading) return <Loading />;
  if (error) return <Error />;
  
  const newArrayData = filteredResults.filter(el => el.id !== 7)
  return (
    <div className={styles.artisans_page_wrapper}>
      <div
        className={styles.artisans_banner}
        style={{ backgroundImage: `url(${Banner})` }}
      >
        <h1>Artisans</h1>
      </div>
      <div className="container">
        <div className={styles.search_place}>
          <div className={styles.search_wrapper}>
            <span>SEARCH ARTIST BY</span>
            <button onClick={()=> setIsOpenTwo(true)}>
              <img src={search_icon} alt="search" />
            </button>
          </div>

          <form action="">
            <input
              type="text"
              onChange={(e) => e}
              placeholder="Craft"
              name=""
              id=""
            />
            <input
              type="text"
              onChange={(e) => e}
              name=""
              id=""
              placeholder="Name"
            />
            <input type="text" name="" id="" placeholder="Location" />
          </form>
          <img onClick={sortcrftsmen} src={Sort} alt="" />
        </div>
      </div>
      {newArrayData.map((el, index) => (
        <div className={styles.artisans_card_wrapper} key={index}>
          <div className={styles.artisans_info}>
            <div className={styles.left_side}>
              <img
                src={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                alt="images"
              />
            </div>

            <div className={styles.right_side}>
              <div className={styles.name}>
                <div className={styles.name_left}>
                  <h1>
                    {el.fullname}
                  </h1>
                  <div className={styles.loca_cate}>
                    <span>{el.typeOfCrafts.name}</span>
                    <span>{el.address}</span>
                  </div>
                </div>
              </div>
              <p>{el.description}</p>
              <Link
                className={styles.see_more_link}
                to={`${url}/artisanssingle/${el.id}`}
              >
                See more
              </Link>
            </div>
            <div className={styles.artisans_item_slider}>
              <div className={styles.slider_wrapper}>
                <OwlCarousel className="owl-theme"  {...settingsArtisans}>
                {el.craftsmanPagesAttachments && el.craftsmanPagesAttachments.map((el, index) => (
                  <div className={styles.slider_image} key={index}>
                    <img src={`${el.base_url}/${el.path}`} alt="" />
                  </div>
                ))}
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Modal open={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
        <div className={styles.input_modal}>
           <p className={styles.input_modal_title}>SEARCH ARTIST BY</p>
           <input placeholder="Name"/>   
           <input placeholder="Craft"/>       
           <input placeholder="Location"/>       
        </div>
      </Modal>
    </div>
  );
};

export default Artisans;
