import styles from "./profile.module.scss";
import { Link } from "react-router-dom";
import Person from "../../../assets/images/person1.png";
import IDFC from "../../../assets/images/idfc.jpg";
import Modal from "../../../components/Modal/Modal";
import Settings from "../../../container/form/Settings/Settings";
import Login from "../Log/Login";
import { useState, useEffect } from "react";
import Jinx from "./jinx.png";
import axios from "axios";
import { Popover } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from 'react-toastify';
import { Popconfirm } from 'antd';
import Copy from './copy.png'
import Shop from '../../../assets/icons/shop111.png'
import 'react-toastify/dist/ReactToastify.css';
const Profile = () => {
  const [ordersdata, setOrders] = useState({
    isArrived: false,
    data: {},
    error: null,
  });

  const [profile, setProfile] = useState({
    isFetched: false,
    data: {},
    error: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const LSTORE = JSON.parse(localStorage.getItem("token"));
  const token = LSTORE && LSTORE.token;
  useEffect(() => {
    axios
      .get(
        "https://api.craftmeets.design/v1/profile/get-user-orders?expand=product,orders.product",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) =>
        setOrders({
          isArrived: true,
          data: res.data.orders,
          error: false,
        }),
      )
      .catch((err) =>
        setOrders({
          isArrived: false,
          data: [],
          error: err,
        })
      );



    axios
      .get(`https://api.craftmeets.design/v1/profile/user-info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) =>
        setProfile({
          isFetched: true,
          data: res.data,
          error: false,
        })
      )
      .catch((err) =>
        setProfile({
          isFetched: false,
          data: [],
          error: err,
        })
      );
  }, [token]);
  const confirm = () => {
    window.localStorage.removeItem('token')
    window.location.reload()
  };
  
  const notify = () => toast("Tracking id copied !");
  function content(){
    return <div>
       <p>Copy your tracking id, click on id and paste your id in the site</p>
     </div>
   }

  return (
    <div className={styles.profile_wrapper}>
      <div className="container">
        <div className={styles.bread}>
          Home <span>/ Profile</span>
        </div>
        <div className={styles.user_image_mobile}>
          <img src={Jinx} alt="" />
        </div>
        <div className={styles.customer_info}>
          <div className={styles.left_side}>
            <img src={Jinx} alt="" />
            <div className={styles.customer_name}>
              {profile.isFetched ? (
                <h2>
                  {profile && profile.data.profile.firstname}{" "}
                  {profile && profile.data.profile.lastname}
                </h2>
              ) : (
                ""
              )}
              {
                profile.isFetched ? <span>User ID {profile && profile.data.profile.user_id}</span> : ''
              }
            </div>
          </div>
          <div className={styles.right_side}>
            {
              token ? (
                <>
                <button onClick={() => setIsOpen(true)} className={styles.link}>
              profile settings
            </button>
            <Link className={styles.link} to="/country/wishlist">
              wishlist
            </Link></>
              ): null
            }
            {token ? (
              <Popconfirm
              title="Are you sure to sign out?"
              onConfirm={confirm}
              
              okText="Yes"
              cancelText="No"
            >
              <button
                className={styles.link}
              >
                sign out
              </button>
            </Popconfirm>
              
            ) : (
              null
            )}
          </div>
        </div>

        {
          token ? (
<div className={styles.profile_show}>
        {ordersdata.isArrived ? (
          ordersdata.data && ordersdata.data.length > 0 ? (
            ordersdata.data &&
            ordersdata.data.map((elone, index) => (
              <div className={`${styles.customer_table} ${elone.status === 1 ? styles.done : styles.error}`} key={index}>
                <div className={styles.table_holder}>
                  <div className={styles.product}>
                    <span>Product</span>
                  </div>
                  <div className={styles.id}>
                    <span>Quantity</span>
                  </div>
                  <div className={styles.price}>
                    <span> per unit</span>
                  </div>
                  <div className={styles.price}>
                    <span> for collection</span>
                  </div>
                  <div className={styles.date}>
                    <span>track id</span>
                  </div>
                  <div className={styles.info}>
                    <span>Info</span>
                  </div>
                </div>
                <div className={styles.table_wrapper_mobile_top}>
                  <div className={`${styles.product_mobile} ${styles.active}`}>
                    <img src={IDFC} alt="" />
                    <div className={styles.item_size}>
                      <h3>{}</h3>
                      <div className={styles.buttons}>
                        <button>{}</button>
                        <button>{}</button>
                      </div>
                    </div>
                  </div>
                  <div className={styles.table_wrapper_mobile}>
                    <div className={styles.table_holder_mobile}>
                      <div className={styles.product}>
                        <span>Product</span>
                      </div>
                      <div className={styles.id}>
                        <span>Quantity</span>
                      </div>
                      <div className={styles.price}>
                        <span> per unit</span>
                      </div>
                      <div className={styles.price}>
                        <span> for collection</span>
                      </div>
  
                      <div className={styles.date}>
                        <span>track id</span>
                      </div>
                      <div className={styles.info}>
                        <span>Info</span>
                      </div>
                    </div>
                    {elone.orderProperties.map((el, index) => (
                      <div className={styles.table_card} key={index}>
                        <div className={`${styles.product} ${styles.active}`}>
                          <img
                            className={styles.image}
                            src={`${el.product.image_base}/${el.product.image_file_name}`}
                            alt=""
                          />
                          <div className={styles.item_size}>
                            <h3>{el.product.name}</h3>
                            <div className={styles.buttons}>
                              <button>{el.product.color}</button>
                              <button>{el.product.weight}</button>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.id} `}>
                          <h4>{el.product_quantity}</h4>
                        </div>
                        <div className={`${styles.price} `}>
                          <h4>$ {el.price_per_unit}</h4>
                        </div>
                        <div className={`${styles.price} `}>
                          <h4>$ {el.price_for_collection}</h4>
                        </div>
                        <div className={`${styles.date} `}>
                        {
                          JSON.parse(elone.delivery_info) !== null ? (
                            <div className={styles.copy}>
                              <Popover content={content} title='Attention'>
                                <CopyToClipboard text={JSON.parse(elone.delivery_info).tracking_code}>
                                  <button className={styles.button} onClick={notify}><img src={Copy} alt="" /></button>
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
                        <div
                          className={`${styles.info}`}
                        >
                          <h4 className={styles.error}>Tracking processing</h4>
                          <h4 className={styles.done}>Payment complete</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ):  <div className={styles.empty_shop}>
          <img src={Shop} alt="" />
          <h1>Shopping cart is empty</h1>
          <Link className={styles.link} to="/country/shopMain">
            Go to shop
          </Link>
        </div>
        ) : (
          <>Loading ... </>
        )}
        </div>
          ):(
            <div className={styles.non_profile}>
              <h1 className={styles.profile_hidden}>Please sign up for profile</h1>
              <button onClick={() => setIsOpenTwo(true)}>Sign up</button>
            </div>
          )
        }
      </div>
      <div
        className={styles.banner}
        style={{ backgroundImage: `url(${Person})` }}
      ></div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <Settings />
      </Modal>

      <Modal open={isOpenTwo} onClose={() => setIsOpenTwo(false)}>
        <Login />
      </Modal>
    </div>
  );
};

export default Profile;
