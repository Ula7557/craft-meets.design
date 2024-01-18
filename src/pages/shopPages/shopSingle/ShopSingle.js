import styles from "./shopsingle.module.scss";
import "./color.scss";
import "../shopMain/ant.scss";
import { Link } from "react-router-dom";
import Plus from "./Vector.png";
import Minus from "./Vector (1).png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { message } from 'antd';
import axios from "axios";
import { AmazonSlider } from "../../../container/carousel/Carousel";
import Loading from "../../../components/loading/Loading";
const ShopSingle = ({ match }) => {
  const [counter, setCounter] = useState(parseInt(1));
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
    if(counter <= 1){
      setCounter(1)
    }
  };
  const url = useSelector((state) => state.data.url);
  const [data, setData] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const unique_id = localStorage.getItem('unique_key')

  useEffect(() => {
    axios
      .get(
        `https://api.craftmeets.design/v1/craft-goods/view?id=${match.params.id}`
      )
      .then((res) =>
        setData({
          isFetched: true,
          data: res.data,
          error: false,
        })
      )
      .catch((error) =>
        setData({
          isFetched: false,
          data: [],
          error: error,
        })
      );
    console.log();
  }, [match.params.id]);

  const singleData = data && data.data;

  const user_token = JSON.parse(localStorage.getItem("token"));
  const tokenHas = user_token && user_token.token !== "" ? true : false;
  const token = user_token && user_token.token;

  const dataTwo = [];
  if (data.isFetched) {
    data.data.attachments.map((el) =>
      dataTwo.push({
        src: `${el.base_url}/${el.path}`,
      })
    );
  }
  const success = ()=>{
    message.success('Successefully added!')
}
  const addToCard = () => {
    const id = match.params.id;
    let myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    let formData = new FormData();

    if (tokenHas) {
      formData.append("isGuest", "0");
      formData.append("user_token", token);
      formData.append("product_id", id);
      formData.append("quantity", counter);
      formData.append("size", "xl");
      formData.append("color", "blue");
    } else {
      formData.append("isGuest", "1");
      formData.append("guest_unique_id", unique_id);
      formData.append("product_id", id);
      formData.append("quantity", counter);
      formData.append("size", "xl");
      formData.append("color", "blue");
    }
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow"
    }
    fetch("https://api.craftmeets.design/v1/shop/add-to-cart", requestOptions)
    .then(response => {
      response.text()
      success()

    })
    .then(result => result)
    .catch(error => console.log('error',error))
  };

  

  return (
    <div
      className={styles.shop_single_page_wrapper}
      style={{ marginBottom: "100px" }}
    >
      <div className="container">
        <p className={styles.bread}>
          Home <span className={styles.black_txt}>/ Shop / Name of craft</span>
        </p>
        {data.isFetched ? (
          <div className={styles.product_information}>
            <div className={styles.product_left_side}>
              <AmazonSlider images={dataTwo} />
            </div>
            <div className={styles.product_right_side}>
              <div className={styles.item_name_link}>
                <Link
                  to={`${url}/artisanssingle/${singleData.craftsman.id}`}
                  className={styles.artisans_link}
                >
                  Contact with artisan
                </Link>
              </div>
              <p>{singleData.name}</p>
              <div className={styles.price}>
                <div className={styles.sale}>
                  <span>$ {singleData.price}</span>
                  {/* <span>$65</span> */}
                </div>
                <h4>In Stock</h4>
              </div>

              <div className={styles.color_size_count}>
                <div className={styles.count}>
                  <span>Quantity:</span>

                  <div className={styles.counter}>
                    <button
                      onClick={() => {
                        increase();
                      }}
                    >
                      <img src={Plus} alt="" />
                    </button>
                    <h6>{counter}</h6>
                    <button onClick={() => decrease()}>
                      <img src={Minus} alt="" />
                    </button>
                  </div>
                </div>
                <div className={styles.color}>
                  <span>Available color:</span>
                  <div className={styles.colors}>
                    {singleData.color === "multicolor" ? (
                      <span className={styles.multicolor}>Multicolor</span>
                    ) : (
                      <span
                        className={`${styles.color_back_data}`}
                        style={{ backgroundColor: `${singleData.color}` }}
                      ></span>
                    )}
                  </div>
                </div>
                <div className={styles.size}>
                  <span>Available size:</span>
                  <div className={styles.sizes}>
                    <button>{singleData.volume}</button>
                  </div>
                </div>
              </div>
              {/* <div className={styles.delivery_adress}>
              <p>Add your personalization
                For a smooth delivery, please specify your phone number.</p>
              <input type="text"  placeholder="Type your delivery address here"/>
            </div> */}
              <button
                className={styles.add_card_btn}
                style={{ marginTop: "30px" }}
                onClick={() => addToCard(match.params.id)}
              >
                Add to cart
              </button>

              {/* <h2>Arrives by Jan 31st - Feb 4th <span>if you order today.</span></h2> */}

              {/* <div className={styles.comfortable}>
              <button>
                <img src={Ship} alt="" />
                <span>Free shipping</span>
              </button>
              <button>
                <h3>30%</h3>
                <span>Promotion</span>
              </button>
            </div> */}
              <div className={styles.description}>
                <h2>Description</h2>
                <p>{singleData.craftTypes.description}</p>
              </div>
            </div>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default ShopSingle;
