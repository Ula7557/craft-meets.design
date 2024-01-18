import React, { useEffect, useState, useRef } from "react";
import styles from "./guestOrders.module.scss";
import Shop from '../../../assets/icons/shop111.png'
import { Link } from "react-router-dom";
import axios from "axios";
import Copy from './copy.png'
import { Popover } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../components/loading/Loading'

const GuestOrders = () => {
  const [guestOrders, setGuestOrders] = useState({
    isFetched: false,
    data: {},
    error: null,
  });

  const unique_id = localStorage.getItem('unique_key')
  useEffect(() => {
    let formdata = new FormData();
    formdata.append("guest_unique_id", unique_id);
    let config = {
      method: "POST",
      url: `https://api.craftmeets.design/v1/user/get-guest-orders?guest_unique_id=${unique_id}`,
      data: formdata,
    };
    axios(config)
      .then((res) =>
        setGuestOrders({
          isFetched: true,
          data: res.data.orders,
          error: false,
        })
      )
      .catch((err) =>
        setGuestOrders({
          isFetched: false,
          data: [],
          error: err,
        })
      );
  }, []);
  let reversedData = []
  if(guestOrders.isFetched){
    if(guestOrders.data === undefined){
      reversedData.push([])
    }else{
      for(let i=guestOrders.data.length - 1; i>=0; i--){
        reversedData.push(guestOrders.data[i])
      }
    }
  }

  

  let time = ''
  const newDate = (el)=>{
    let timestamp = new Date(el)
    time = timestamp.toLocaleString('sv')
  }

  function content(){
   return <div>
      <p>Copy your tracking id, click on id and paste your id in the site</p>
    </div>
  }

  const notify = () => toast("Tracking id copied !");

  

  return (
    <div className={styles.guest_orders_wrapper}>
      <div className="container">
        {guestOrders.isFetched ? (
          guestOrders.data !== undefined && guestOrders.data.length >= 0 ? (
            guestOrders.data &&
            reversedData.map((elone, index) => (
              <div className={`${styles.table_wrapper} ${elone.status === 1 ? styles.done : styles.error}`} key={index}>
                {
                  newDate(elone.created_on)
                }
                <div className={styles.table_head}>
                  <div className={styles.image}>
                    <span className={styles.data_date}>Ordered on: {`${time}`}</span>
                    <span>image</span>
                  </div>
                  <div className={styles.name}>
                    <span>product name</span>
                  </div>
                  <div className={styles.quantity}>
                    <span>quantity</span>
                  </div>
                  <div className={styles.unit}>
                    <span> unit</span>
                  </div>
                  <div className={styles.collection}>
                    <span> collection</span>
                  </div>
                  <div className={styles.token}>
                    <span>tracking id</span>
                  </div>
                  <div className={styles.info}>
                    <span>info</span>
                  </div>
                </div>
                {elone.orderProperties.map((el, index) => (
                  <div className={styles.table_cards} key={index}>
                    <div className={styles.card}>
                      <div className={styles.image}>
                        <img src={`${el.product.image_base}/${el.product.image_file_name}`} alt="" />
                      </div>
                      <div className={styles.name}>
                        <span className={styles.name_other}>
                          {el.product.name}
                        </span>
                        <div className={styles.buttons}>
                          <button>{el.product.color}</button>
                          <button>{el.product.weight}kg</button>
                        </div>
                      </div>
                      <div className={styles.quantity}>
                        <span>{el.product_quantity}</span>
                      </div>
                      <div className={styles.unit}>
                        <span>${el.price_per_unit}</span>
                      </div>
                      <div className={styles.collection}>
                        <span>${el.price_for_collection}</span>
                      </div>
                      <div className={styles.token}>
                        {
                          JSON.parse(elone.delivery_info) !== null ? (
                            <div className={styles.copy}>
                              <Popover content={content} title='Attention'>
                                <CopyToClipboard text={JSON.parse(elone.delivery_info).tracking_code}>
                                  <button onClick={notify}><img src={Copy} alt="" /></button>
                                </CopyToClipboard>
                              </Popover>
                              <a href="https://www.dhl.com/global-en/home/tracking.html" target="_blank" rel="noopener noreferrer">
                                <input disabled type="text" value={JSON.parse(elone.delivery_info).tracking_code} name="" id="" />
                              </a>
                              <ToastContainer autoClose={2000}/>
                            </div>
                          ):(
                              <span>Coming soon ...</span>
                          )
                        }
                      </div>
                      <div className={styles.info}>
                        <p className={styles.error}>Tracking processing</p>
                        <p className={styles.done}>Payment complete</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <div className={styles.empty_shop}>
            <img src={Shop} alt="" />
            <h1>Shopping cart is empty</h1>
            <Link className={styles.link} to="/country/shopMain">
              Go to shop
            </Link>
          </div>
          )
        ) : (
          <Loading/>
          )}
      </div>
    </div>
  );
};

export default GuestOrders;
