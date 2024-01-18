import styles from "./singlePage.module.scss";
import { Category } from "../../components";
import Mail from "../../assets/icons/mail.png";
import Check from "../../assets/icons/check.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import  { useEffect, useState } from "react";
import { Popular } from "../../components";
import Eye from "../../assets/icons/eyes.png";
import FB from "../../assets/icons/fb.png";
import TW from "../../assets/icons/tw.png";
import IN from "../../assets/icons/in.png";
import ML from "../../assets/icons/ml.png";
import PR from "../../assets/icons/pr.png";
import QaysidirOpa from "../../assets/icons/qaysidir_opa.png";
import { useForm } from "react-hook-form";
import GetData  from '../../hooks/getData';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  EmailShareButton,
} from "react-share";
import Loading from "../../components/loading/Loading";
const SinglePage = ({ match }) => {
  const urlString = window.location.href;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [like, setLike] = useState(0);
  const [list, setList] = useState([]);
  const style = {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "30px",
    letterSpacing: "0.1em",
    color: "#9F9F9F",
    marginBottom: "48px",
    display: "block",
  };
  const parse = require('html-react-parser');
  
  const [loading,data,error]=GetData(`/v1/${match.params.type}`)
  const [loadingTwo, dataTwo, errorTwo] = GetData(`/v1/news/categories?category=${match.params.type}`)
  const datas = data.filter(el => el.id === parseInt(match.params.id))
  const popular = data.filter(el => el.category.slug=== 'popular-posts' || el.category.slug === 'upcoming-events')
  // useEffect(() => {
  //   setData(New.filter((el) => el.id === parseInt(match.params.id)));
  // }, [match.params.id]);
  const todaydate = datas.map(el=>el.published_at)
  const handleSubmitForm = (values) => {
    setList([...list, values]);
    window.localStorage.setItem("comments", JSON.stringify([...list, values]));
    reset();
  };
  if (loading && loadingTwo) return <Loading/>;
  if (error && errorTwo) return <>error</>;

  const commentPack = JSON.parse(window.localStorage.getItem("comments"));
    const base_url = 'https://assets.craftmeets.design/source'

  const notifyTwo = () => toast("Thank for your subscription!");
  return (
    <div className={styles.single_wrapper}>
      <div className="container">
        <p className={styles.breadCrumb} style={style}>
          Home <span className={styles.black_txt}>/ news / Silkandspice</span>
        </p>
        {/* <NewsSearch /> */}
        <div className={styles.inner_page}>
          <div className={styles.left_side}>
            <div className={styles.single_page_main_content}>
              <h1 className={styles.single_page_name}>
                {datas.map((el) => el.title)}

              </h1>
              <div className={styles.single_page_shorts}>
                <div className={styles.single_page_category}>
                  <span>Category: </span>
                  <span>{datas.map((el) => el.category.title)}</span>
                </div>
                <span className={styles.single_page_date}>
                  {/* {`${day} ${month} ${year}`} */}
                </span>
                <div className={styles.single_page_view_count}>
                  <img src={Eye} alt="" />
                  <span>317k</span>
                </div>
              </div>
              <div className={styles.single_page_image}>
                <img src={datas.map((el) => `${base_url}/${el.thumbnail_path}`)} alt="" />
                <div>{datas.map((el) => parse(`${el.body}`))}</div>
              </div>
              {/* <div className={styles.singfle_page_middle_content}>
                <h2></h2>
                <div>{datas.map((el) => parse(`${el.body}`))}</div>
              </div> */}
              <div className={styles.single_page_image_block_one}>
               {
                  datas.map((elem)=>(
                    elem.articleAttachments.map((item)=>(
                      <img src={ `${base_url}/${item.path}`} alt="" />
                    ))
                  ))
               }
                
                {/* <div>{datas.map((el) => parse(`${el.body}`))}</div> */}
              </div>

              {/* <div className={styles.singfle_page_middle_content}>
                <h2></h2>
                <div>{datas.map((el) => parse(`${el.body}`))}</div>
              </div>   
              <div className={styles.single_page_image_block_one}>
                <div>{datas.map((el) => parse(`${el.body}`))}</div>
                <img src={datas.map((el) => `${el.thumbnail_base_url}/${el.thumbnail_path}`)} alt="" />

              </div> */}

              <div className={styles.single_page_shares_place}>        
               

                <div className={styles.single_page_top_share}>
                  <div className={styles.single_page_click_like}>
                    <button
                      onClick={() => setLike(like + 1)}
                      className={styles.click_me}
                    >
                      Like <span>{like}</span>
                    </button>
                  </div>
                  <div
                    className={`${styles.single_page_click_like} ${styles.another_link}`}
                  >
                    <button className={styles.click_me}>Tweet</button>
                  </div>
                </div>
                <div className={styles.single_page_bottom_share}>
                  <h3>Share</h3>
                  <div className={styles.single_page_socials_block}>
                    <button className={style.single_page_socials}>
                      <FacebookShareButton
                        url={urlString}
                        quote={"share"}
                        className={styles.button_share_block}
                      >
                        <img src={FB} alt="" />
                      </FacebookShareButton>

                      <LinkedinShareButton
                        url={urlString}
                        quote={"share"}
                        className={styles.button_share_block}
                      >
                        <img src={IN} alt="" />
                      </LinkedinShareButton>

                      <TwitterShareButton
                        url={urlString}
                        quote={"share"}
                        className={styles.button_share_block}
                      >
                          <img src={TW} alt="" />
                      </TwitterShareButton>

                      <PinterestShareButton
                        url={urlString}
                        quote={"share"}
                        className={styles.button_share_block}
                      >
                          <img src={PR} alt="" />
                      </PinterestShareButton>

                      <EmailShareButton
                        url={urlString}
                        quote={"share"}
                        className={styles.button_share_block}
                      >
                          <img src={ML} alt="" />
                      </EmailShareButton>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.single_page_write_comment}>
                <div className={styles.single_page_holder}>
                  <h2>Comments</h2>
                  <p>Your email address will not be published.</p>
                </div>
                <div className={styles.single_page_writer_comments_place}>
                  <div className={styles.commenter_avatar}>
                    <img src={QaysidirOpa} alt="" />
                  </div>
                  <div className={styles.single_page_top_comments}>
                    <form
                      onSubmit={handleSubmit(handleSubmitForm)}
                      action=""
                      className={styles.single_page_forma}
                    >
                      <textarea
                        placeholder="Type your text here"
                        cols="30"
                        {...register("comment", { required: true })}
                        rows="10"
                      />
                      {errors.comment && (
                        <span style={{ fontWeight: 600, color: "red" }}>
                          Please add you comment here
                        </span>
                      )}
                      <div className={styles.single_page_inputs}>
                        <input
                          placeholder="Name"
                          type="text"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <span style={{ fontWeight: 600, color: "red" }}>
                            Please add you name here
                          </span>
                        )}
                        <input
                          {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                          })}
                          placeholder="Email"
                          type="text"
                        />
                        {errors.email && (
                          <span style={{ fontWeight: 600, color: "red" }}>
                            Please add you email here
                          </span>
                        )}
                        <input
                          placeholder="Website"
                          type="text"
                          id=""
                          {...register("website", { required: true })}
                        />
                        {errors.website && (
                          <span style={{ fontWeight: 600, color: "red" }}>
                            Please add you email here
                          </span>
                        )}
                      </div>
                      <div className={styles.check_wrap}>
                        <input
                          className={styles.checkbox}
                          type="checkbox"
                          name=""
                          id="check"
                        />
                        <label htmlFor="check">
                          Save my name, email, and website in this browser for
                          the next time I comment.
                        </label>
                      </div>
                      <button className={styles.add_comment}>
                        Add comment
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={styles.single_page_comment_result_place}>
                {commentPack &&
                  commentPack.map((el, index) => (
                    <div className={styles.comments} key={index}>
                      <div className={styles.place_left}>
                        <img src={QaysidirOpa} alt="" />
                      </div>
                      <div className={styles.place_right}>
                        <h2>{el.name}</h2>
                        <p>{el.comment}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className={styles.popular_posts_mobile}>
              <div className={styles.holder}>
                <h2 className={styles.holder_text}>Popular posts</h2>
              </div>

              <div className={styles.popular_post_card_wrapper}>
              {popular.map((el) => (
                  <Popular
                    id={el.id}
                    index={el.id}
                    type={'news'}
                    desc={el.title}
                    date={el.published_at}
                    image={`${el.thumbnail_base_url}/${el.thumbnail_path}`}
                  />
                ))}
              </div>
            </div>
            </div>
          </div>
          <div className={styles.right_side}>
            <h1>Categories</h1>
            <div className={styles.cate_wrapper}>
                {
                  dataTwo && dataTwo.Categories.map((el, index)=>(
                    <Category cate_name={el.title} cate_count={1} key={index}/>
                  ))
                }
            </div>
            {/* <div className={styles.newsLetter}>
              <h2 className={styles.holder}>Newsletter</h2>
              <div
                className={check ? styles.news_input : styles.news_input_active}
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
                    notifyTwo();
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
                {popular.map((el) => (
                  <Popular
                    id={el.id}
                    index={el}
                    type={'news'}
                    desc={el.title}
                    date={el.published_at}
                    image={`${base_url}/${el.thumbnail_path}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SinglePage;
