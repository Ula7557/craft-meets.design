import styles from "./shopmain.module.scss";
import "./ant.scss";
import Search from "../../../assets/icons/search.png";
import { useState, useEffect } from "react";
import { ShopCard } from "../../../components";
import Loading from "../../../components/loading/Loading";
import Close from "./close-small.png";
import axios from "axios";

const ShopMain = () => {
  const [minValue, set_minValue] = useState(0);
  const [maxValue, set_maxValue] = useState(0);
  const [filter, setFilter] = useState(false);
  const [getProducts, setGetProducts] = useState({
    isFetched: false,
    data: {},
    error: null
  })

  const [activeContent, setActiveContent] = useState('')
  const [activeColor, setActiveColor] = useState('')

  const [separate, setSepatate] = useState({
    pagesize: '',
    category: '',
    size: '',
    search: '',
    color: ''
  })
  const unique_id = localStorage.getItem('unique_key')
  
  const handleInput = () => {
    set_minValue(minValue);
    set_maxValue(maxValue);
  };
  const user_token = JSON.parse(localStorage.getItem('token'))
  const tokenHas = user_token && user_token.token !== '' ? true : false
  const token = user_token && user_token.token
  

  const getData = ()=>{
    var data = new FormData();
    data.append('pagesize', '')
    data.append('search', separate.search)
    data.append('price_start', minValue)
    data.append('price_end', maxValue)
    data.append('color', separate.color)
    data.append('category', separate.category)
    data.append('size', separate.size)
    
    var config = {
      method: 'post',
      url: 'https://api.craftmeets.design/v1/craft-goods/products',
      headers: { 
        'Authorization': 'Bearer 0XWB9jTPsp9HWyKN7GzKhZBoQLmL04cH',
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      setGetProducts({
        isFetched: true,
        data: response.data,
        error: false
      })
    })
    .catch(function (error) {
      setGetProducts({
        isFetched: false,
        data: [],
        error: error
      })
    });
  }
  
  useEffect(()=>{
      getData()
  },[])
  
  const addToCardDB = (id)=>{
    const dbData = getProducts.data.find((item)=> item.id === id);
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    let formData = new FormData()

    if(tokenHas){
      formData.append("isGuest", '0');
      formData.append("user_token", token );
      formData.append("product_id", dbData.id);
      formData.append("quantity", 1);
      formData.append("size", "xl");
      formData.append("color", "blue");
    }else{
      formData.append("isGuest", '1');
      formData.append("guest_unique_id", unique_id);
      formData.append("product_id", dbData.id);
      formData.append("quantity", 1);
      formData.append("size", "xl");
      formData.append("color", "blue");
    }

    let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formData,
        redirect: "follow"
    }

    fetch("https://cmdesign-api.eurosoft.dev/v1/shop/add-to-cart", requestOptions)
    .then(response => response.text())
    .then(result => result)
    .catch(error => console.log('error',error))
  }

  return (
    <div className={styles.shop_page_wrapper}>
      <div
        onClick={() => setFilter(false)}
        className={`${styles.overlay} ${filter ? styles.active : ""}`}
      ></div>
      <div className="container">
        <div className={styles.bread}>
          <p>
            Home <span className={styles.black_txt}>/ Shop</span>
          </p>
        </div>

        <div className={styles.main_content}>
          <div
            className={`${styles.left_place} ${filter ? styles.active : null}`}
          >
            <button
              onClick={() => setFilter(false)}
              className={styles.close_btn}
            >
              <img src={Close} alt="" />
            </button>
            <div className={styles.input_field}>
              <img src={Search} alt="" />
              <input type="search" name="search" onChange={(e)=> setSepatate({...separate, [e.target.name] : e.target.value})} id="" placeholder="Search" />
            </div>
            <div className={styles.category}>
              <h1>Categories</h1>

              <div className={styles.cate_items}>
                <button className={activeContent === '' ? styles.active : null} onClick={()=> {
                  setSepatate({...separate, category: ''})
                  setActiveContent('')
                }}>All categories</button>
                <button className={activeContent === 'one' ? styles.active : null} onClick={()=> {
                  setSepatate({...separate, category: '1'})
                  setActiveContent('one')
                }}>Textile</button>
                <button className={activeContent === 'two' ? styles.active : null} onClick={()=> {
                  setSepatate({...separate, category: '2'})
                  setActiveContent('two')
                }}>Jewelery</button>
                <button className={activeContent === 'three' ? styles.active : null} onClick={()=> {
                  setSepatate({...separate, category: '3'})
                  setActiveContent('three')
                }}>Ceramics</button>
                <button className={activeContent === 'four' ? styles.active : null} onClick={()=> {
                  setSepatate({...separate, category: '4'})
                  setActiveContent('four')
                }}>Visual art</button>
                <button className={activeContent === 'five' ? styles.active : null} onClick={()=> {
                  setSepatate({...separate, category: '5'})
                  setActiveContent('five')
                }}>Embroidery</button>
              </div>
            </div>
            <div className={styles.item_price}>
              <h1>Shop by price</h1>
              <div className={styles.slider_range}>
                <div>
                  <label htmlFor="">Min value</label>
                  <input name="min" onChange={(e) => set_minValue(e.target.value)} value={minValue} type="number"  id="" />
                </div>
                <div>
                  <label htmlFor="">Max value</label>
                  <input name="max" onChange={(e)=> set_maxValue(e.target.value)} value={maxValue} type="number"  id="" />
                </div>
              </div>
              <h1 className={styles.color_by}>Shop by color</h1>

              <div className={styles.colors}>
                <button className={`${styles.btn_one} ${activeColor === '' ? styles.active : null}`} onClick={()=> {
                  setSepatate({...separate, color: ''})
                  setActiveColor('')
                }}>All</button>
                <div className={styles.color_item}>
                  <button className={activeColor === 'one' ? styles.active : null} onClick={()=> {
                    setSepatate({...separate, color: 'red'})
                    setActiveColor('one')
                  }}></button>
                  <button className={activeColor === 'two' ? styles.active : null} onClick={()=> {
                    setSepatate({...separate, color: 'brown'})
                    setActiveColor('two')
                  }}></button>
                  <button className={activeColor === 'three' ? styles.active : null} onClick={()=> {
                    setSepatate({...separate, color: 'green'})
                    setActiveColor('three')
                  }}></button>
                </div>
              </div>
              <button className={styles.filter} onClick={()=>{
                 handleInput()
                 getData()
              }}>Filter</button>
            </div>
          </div>
          <div className={styles.right_place}>
            <div className={styles.selectors}>
              {/* <select className={styles.select_one} name="" id="">
                <option value="">Cheaper</option>
              </select>
              <select className={styles.select_two} name="" id="">
                <option value="">Delivery options</option>
              </select> */}
              <button
                onClick={() => {
                  setFilter(true)
                  getData()
                }}
                className={styles.filter_btn_mobi}
              >
                Filter
              </button>
            </div>

            <div className={styles.shop_cards}>
             {
                getProducts.isFetched ? (
                    getProducts && getProducts.data.map((el,index)=>(
                      
                      <div className={styles.card} key={index}>
                        <ShopCard
                          name={el.name}
                          price={el.price}
                          id={el.id}
                          image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                          addCard={() => addToCardDB(el.id)}
                        />
                      </div>
                    ))
                ):(
                  <Loading/>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopMain;
