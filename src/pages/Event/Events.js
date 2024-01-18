import styles from './events.module.scss'
import Sort from '../../assets/icons/sort.png'
import './slick.scss'
import { Popular, NewsCard } from '../../components'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import searchicon from '../../assets/icons/Group.png'
import { useState } from 'react'
import GetData from '../../hooks/getData'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'
import Calendar from "../../components/Calendar";

const Events = () => {
  const [api, setApi] = useState(false);
  const [changeCategory, setChangeCategory] = useState('38')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, data, error] = GetData(
    api ? "/v1/events?sort=-published_at" : "/v1/events"
  );
  const [loadingThree, dataThree, errorThree] = GetData(`/v1/events/events?category_id=${changeCategory}`)
  const [loadingTwo, dataTwo, errorTwo] = GetData('/v1/news/categories?category=events')
  const parse = require("html-react-parser");
  const banner = data
    ? data.filter((el) => el.category.slug === "banners")
    : "";
  const upcoming = data
    ? data.filter((el) => el.category.slug === "upcoming-events")
    : "";
  const [search, setSearch] = useState(false);
  function searchPlace() {
    setSearch(!search);
  }
  const categoryName = dataThree[0] && dataThree[0].category.title
  if (loading && loadingTwo && loadingThree) return <Loading />;
  if (error && errorTwo && errorThree) return <Error />;
  return (
    <div className={styles.events_page_wrapper}>
      <div className="container">
        <div className={styles.search_and_breadcrumb_place}>
          <div className={styles.breadcrumb}>
            <p>
              Home <span>/ Events</span>
            </p>
          </div>
          <div className={styles.search_place}>
            <span className={styles.titles_span}>
              SEARCH BY{" "}
              <img
                onClick={searchPlace}
                className={styles.search_place_icon}
                src={searchicon}
                alt=""
              />
            </span>
            <form className={search ? styles.mob_search_item : ""} action="">
              <span className={styles.mob_title}>SEARCH BY</span>
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                name=""
                id=""
                placeholder="Name"
              />
              <input
                type="text"
                onChange={(e) => setSearchTerm(e.target.value)}
                name=""
                id=""
                placeholder="Content"
              />
            </form>
            <img onClick={()=>setApi(!api)} src={Sort} alt="" />
          </div>
        </div>

        <div className={styles.events_cards_category_wrapper}>
          <div className={styles.events_card_wrapper}>
            <div className={styles.slider_event}>
              {banner
                ? banner.map((el, i) => (
                    <div key={i} className={styles.slider_event_banner_card}>
                      <div
                        className={styles.event_big_card}
                        style={{
                          backgroundImage: `url(${el.thumbnail_base_url}/${el.thumbnail_path})`,
                        }}
                      >
                        <h1>{el.title}</h1>
                        <div className={styles.lorem_ipsum}>
                          <span>{parse(`${el.body}`)}</span>
                        </div>
                        {/* <span className={styles.tag}>12 days left</span> */}
                      </div>
                    </div>
                  ))
                : ""}
            </div>
            <h1 className={styles.mini_card_name}>{categoryName}</h1>
            <div className={styles.mini_cards_wrapper}>
              {dataThree.length > 0
                ? dataThree.filter(el => {
                  if(searchTerm === ''){
                    return el
                  }else if(el.title.toLowerCase().includes(searchTerm.toLowerCase()) || el.category.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return el
                  }
                }).map((el, index) => (
                    <div className={styles.mini_card} key={index}>
                      <NewsCard
                        type="events"
                        id={el.id}
                        image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                        name={el.title}
                        date={el.published_at}
                        description={parse(`${el.body}`)}
                        category={el.category.title}
                      />
                    </div>
                  ))
                : <h1>Any data not found</h1>}
            </div>
            <div className={styles.upcoming_events_mobille}>
              <h1 className={styles.text}>Upcoming events</h1>
              {upcoming
                ? upcoming.map((el, index) => (
                    <Popular
                      key={index}
                      desc={el.title}
                      image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                      date={el.published_at}
                    />
                  ))
                : ""}
            </div>
          </div>
          <div className={styles.events_category_wrapper}>
            <h1 className={styles.text}>Categories</h1>
            <div className={styles.categories}>
              {dataTwo.Categories && dataTwo.Categories.map((el, index) => (
                <button onClick={()=> setChangeCategory(el.id)} key={index} className={`${styles.changeCategory} ${changeCategory === el.id ? styles.active : null}`}>{el.title}</button>
              ))}
            </div>
            <div style={{marginBottom: '40px'}}>
              <Calendar />
            </div>
            <div className={styles.upcoming_events}>
              <h1 className={styles.text}>Upcoming events</h1>
              {upcoming
                ? upcoming.map((el, index) => (
                    <Popular
                      type={'events'}
                      id={el.id}
                      key={index}
                      desc={el.title}
                      image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                      date={el.published_at}
                    />
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events