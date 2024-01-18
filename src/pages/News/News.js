import styles from './news.module.scss'
import Error from "../../components/error/Error";
import GetData from '../../hooks/getData'
import Loading from '../../components/loading/Loading'
import parse from 'html-react-parser'
import Sort from '../../assets/icons/sort.png'
import {NewsCard, Popular} from '../../components'
import { motion } from 'framer-motion'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState,useEffect } from 'react'
import axios from 'axios';
const News = () => {
  const [check, setCheck] = useState(19);
  const [api,setapi]=useState(false)
  const [filteredResults, setFilteredResults] = useState([]);
  const [loading, data, error] = GetData(api ? 'v1/news?sort=-published_at' : '/v1/news')
  const [loadingTwo, dataTwo, errorTwo] = GetData(`/v1/news/news?news_id=${check}`)
  const popularData = filteredResults ? filteredResults.filter(el => el.category.slug === 'popular-posts'): ''
  const latestDate = filteredResults ? filteredResults.filter(el => el.category.slug === 'latest-news'):''
  const categoryNameData = filteredResults ? filteredResults.filter(el => el.category.slug === 'name-of-category-thats-important'):''
  
  const [category, setCategory] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(()=>{
    if (data) {
      setFilteredResults(data)
    }
  },[data])
  function setsort() {
    setapi(!api)
  }
   useEffect(()=>{
    axios.get('https://api.craftmeets.design/v1/news/categories?category=news')
    .then(res => setCategory({
      isFetched: true,
      data: res.data,
      error: false
    }))
    .catch(err => setCategory({
      isFetched: false,
      data: [],
      error: err
    }))
   },[])

   const categoryName = dataTwo[0] && dataTwo[0].category.title

  if(error && errorTwo) return <Error/>
  if(loading && loadingTwo) return <Loading/>
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.news_page_wrapper}>
        <div className={styles.page_search}>
          <div className={styles.block_top}>
            <div className="container">
              <div className={styles.inner}>
                <div className={styles.breadcrumb}>
                  <span className={styles.non_bold}>Home / </span>
                  <span className={styles.bold}>news</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.seearch_components}>
          
            <div className="container">
              <div className={styles.inner_mobile_div}>
                <div className={styles.holder}>
                  <h2>SEARCH ARTIST BY</h2>
                </div>
                <div className={styles.sort}>
                  <img onClick={setsort} src={Sort} alt="" />
                </div>
              </div>
              <div className={styles.inner}>
                <div className={styles.holder}>
                  <h2>SEARCH ARTIST BY</h2>
                </div>
                
                <div className={styles.search_inputs}>
                  <form action="">
                    <input placeholder="Name" onChange={(el) => setSearchTerm(el.target.value)} type="text" name="" id="" />
                    <input placeholder="Craft" onChange={(el) => setSearchTerm(el.target.value)} type="text" name="" id="" />
                  </form>
                </div>
                <div className={styles.sort}>
                  <img src={Sort} alt="" onClick={setsort}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.page_main_content}>
          <div className="container">
            <div className={styles.holder_content}>
              <div className={styles.left_side}>
                <h3>{categoryName}</h3>
              </div>
              <div className={styles.right_side}>
                <h3>Categories</h3>
              </div>
            </div>
            <div className={styles.page_main_content_blocks}>
              <div className={styles.result_cards}>
                <div className={styles.card_wrapper}>
                  {dataTwo.length > 0 ? dataTwo.filter(el =>{
                    if(searchTerm === ''){
                      return el
                    }else if(el.title.toLowerCase().includes(searchTerm.toLowerCase()) || el.category.title.toLowerCase().includes(searchTerm.toLowerCase())){
                      return el
                    }
                  }).map((el, index) => (
                    <div className={styles.own_card} key={index}>
                      <NewsCard
                        id={el.id}
                        type="news"
                        name={el.title}
                        category={el.category.title}
                        date={el.published_at}
                        description={parse(`${el.body}`)}
                        image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                      />
                    </div>
                  )): <h1>Coming soon ...</h1>}
                </div>
                {/* <div className={styles.pagination}>
                  <Pagination defaultCurrent={1} total={50} />
                </div> */}
              </div>
              <div className={styles.sortBy_categories}>
                <div className={styles.categories}>
                    {
                      category.isFetched ? (
                        category && category.data.Categories.map((el, index)=>(
                          <button className={check === el.id ? styles.active : null} onClick={()=> setCheck(el.id)} key={index}>{el.title}</button>
                        ))
                      ):(
                        <>Loading ...</>
                      )
                    }
                </div>
                {/* <div className={styles.newsLetter}>
                  <h2 className={styles.holder}>Newsletter</h2>
                  <div
                    className={
                      check ? styles.news_input : styles.news_input_active
                    }
                  >
                    <input
                      placeholder="Subscribe to our news "
                      type="text"
                      name=""
                      id=""
                    />
                    <button
                      onClick={() => {
                        setCheck(!check);
                        notify();
                      }}
                      className={check ? styles.active : ""}
                    >
                      <img src={check ? Check : Mail} alt="" />
                    </button>
                  </div>
                </div> */}
                <div className={styles.popular_posts}>
                  <div className={styles.holder}>
                    <h2 className={styles.holder_text}>Popular posts</h2>
                  </div>
                  <div className={styles.popular_post_card_wrapper}>
                    {popularData ? popularData.map((el, index) => (
                        <Popular
                          type={'news'}
                          key={index}
                          id={el.id}
                          desc={el.title}
                          date={el.published_at}
                          image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                        />
                      )): ''}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.latest_news}>
              <div className={styles.holder}>
                <h1>Latest news</h1>
              </div>
              <div className={styles.latest_news_card_wrapper}>
                {latestDate ? latestDate.map((el, index) => (
                  <div className={styles.lates_card} key={index}>
                    <NewsCard
                      id={el.id}
                        type="news"
                      name={el.title}
                      category={el.category.title}
                      date={el.published_at}
                      description={parse(`${el.body}`)}
                      image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                    />
                  </div>
                )): ''}
              </div>
            </div>
            <div className={styles.latest_news}>
              <div className={styles.holder}>
                <h1>Name of Category that’s important</h1>
              </div>
              <div className={styles.latest_news_card_wrapper}>
              {categoryNameData ? categoryNameData.map((el, index) => (
                  <div className={styles.lates_card} key={index}>
                    <NewsCard
                      id={el.id}
                      type="news"
                      name={el.title}
                      category={el.category.title}
                      date={el.published_at}
                      description={parse(`${el.body}`)}
                      image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                    />
                  </div>
                )) : ''}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </motion.div>
  );
};


export default News