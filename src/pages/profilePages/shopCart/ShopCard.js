import styles from "./shopcart.module.scss";
import { ShopTable } from "../../../components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShopTableMobile from "../../../components/ShopTableMobile/ShopTableMobile";
import Shop from "../../../assets/icons/shop111.png";
import axios from "axios";

const ShopCart = () => {
  const [screenSize, setScreenSize] = useState(window.screen.width);
  const [products, setProducts] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  const dbData = JSON.parse(localStorage.getItem('token'))
  const tokenHas = dbData && dbData.token !== '' ? true : false
  const token = dbData && dbData.token
  const unique_id = localStorage.getItem('unique_key')

  const [updateStore, setUpdateStore] = useState(false)
  
  useEffect(() => {
      var FormData = require("form-data");
      var data = new FormData();
      if (token) {
        data.append("user_token", "0XWB9jTPsp9HWyKN7GzKhZBoQLmL04cH");
      } else {
        data.append("guest_unique_id", unique_id);
      }
      let url = tokenHas ? 
      `https://api.craftmeets.design/v1/shop/get-cart-items?user_token=${token}`:
      `https://api.craftmeets.design/v1/shop/get-cart-items?guest_unique_id=${unique_id}`
      var config = {
        method: "get",
        url: url,
        headers: {
          Authorization: "Bearer NMky9_eySwUYM1MyRLXpu37iqBkCuTC-1pFXs9bx",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          setProducts({
            isFetched: true,
            data: response,
            error: false,
          });
        })
        .catch(function (error) {
          setProducts({
            isFetched: false,
            data: [],
            error: error,
          });
        });
  }, [updateStore]);
  return (
    <div className={styles.shop_cart_wrapper}>
      {products.data.length !== 0 ? (
        <div className="container">
          <div className={styles.bread}>
            <p>
              Home <span> / Shop / Shopping cart</span>
            </p>
          </div>

          <div className={styles.table_wrapper}>
            <div className={`${styles.table_holder} ${screenSize < 750 ? styles.active : null}`}>
              <div className={styles.product}>
                <span>Product</span>
              </div>
              <div className={styles.price}>
                <span>Price</span>
              </div>
              <div className={styles.id}>
                <span>Quantity</span>
              </div>
              <div className={styles.date}>
                <span>Total</span>
              </div>
              <div className={`${styles.date} ${styles.another}` }>
                <span></span>
              </div>
            </div>
            {
              products.isFetched ? (
                   products && products.data.data.cart.map((el,index) => (
                    <div className={styles.swipe_element} key={index}>
                    {screenSize > 750 ? (
                      <ShopTable
                        id={el.product_id}
                        count={el.quantity}
                        product_name={el.product && el.product.name}
                        price={el.product && el.product.price}
                        image={el.product && `${el.product.thumbnail_base_url}/${el.product.thumbnail_path}`}
                        colors={el.product && el.product.color}
                        total_price={el.product && el.product.price}
                        key={index}
                        order={index}
                        size={el.product && el.product.volume}
                        update={() => setUpdateStore(!updateStore)}
                      />
                    ) : (
                      <ShopTableMobile
                        id={el.product_id}
                        count={el.quantity}
                        product_name={el.product && el.product.name}
                        price={el.product && el.product.price}
                        image={el.product && `${el.product.thumbnail_base_url}/${el.product.thumbnail_path}`}
                        colors={el.product && el.product.color}
                        total_price={el.product && el.product.price}
                        key={index}
                        order={index}
                        size={el.product && el.product.volume}
                        update={() => setUpdateStore(!updateStore)}
                      />
                    )}
                  </div>
                  ))
              ):(
                <>loading</>
              )
            }
          </div>

          <div className={styles.codes_total}>
            {/* <div className={styles.discount_code}>
              <h2>Discount codes</h2>
              <div className={styles.code_enter}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter your coupon code"
                />
                <button>APPLY</button>
              </div>
            </div> */}
            <div className={styles.cart_total}>
              <div className={styles.right}>
                <Link className={styles.button} to="/country/shop/checkout">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.empty_shop}>
          <img src={Shop} alt="" />
          <h1>Shopping cart is empty</h1>
          <Link className={styles.link} to="/country/shopMain">
            Go to shop
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShopCart;





{/*  */}
