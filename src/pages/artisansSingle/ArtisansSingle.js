import styles from "./artisanssingle.module.scss";
import GetData from "../../hooks/getData";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import parse from 'html-react-parser'
import { useState } from "react";
import Modal from '../../components/Modal/Modal'
import { Link } from "react-router-dom";

const ArtisansSingle = ({ match }) => {
  const [loading, data, error] = GetData(
    `/v1/craftsman/view?id=${match.params.id}`
  );
  const [show, setShow] = useState(false)
  if (error) return <Error />;
  if (loading) return <Loading />;

    const base_url = 'https://api.craftmeets.design/source'

  return (
    <div className={styles.artisans_single_wrapper}>
      <div className="container">
        <div className={styles.breadcrumb}>
          <p>ARTISANS <span className={styles.black_txt}>/ NAME OF ARTISAN</span> </p>
        </div>

{/* first sample div until 700 px */}

        <div className={styles.single_info_wrapper}>
          <div className={styles.left_side}>
            <img
              src={`${data.thumbnail_base_url}/${data.thumbnail_path}`}
              alt=""
            />
          </div>
          <div className={styles.right_side}>
            <h1>{data && data.fullname}</h1>
            <div className={styles.loca_cate}>
              <span>{data.typeOfCrafts.name}</span>
              <span>{data && data.address}</span>
            </div>
            <div className={styles.contact_shop}>
              <button onClick={()=> setShow(true)}>Contact</button>
              <Link className={styles.shop_forward_link} to="/country/shopMain">Browse shop</Link>
            </div>
            <div className={styles.p}>{parse(`${data && data.description}`)}</div>
          </div>
        
        </div>

        {/* second sample div after 700px */}
 <div className={styles.single_info_wrapper2}>
          <div className={styles.left_side}>
          <img
              src={`${data.thumbnail_base_url}/${data.thumbnalil_path}`}
              alt=""
            />
          </div>
          <div className={styles.right_side}>
          <h1>{data && data.fullname}</h1>
            <div className={styles.loca_cate}>
            <span>{data.typeOfCrafts.name}</span>
              <span>{data && data.address}</span>
            </div>
            <div className={styles.contact_shop}>
              <button>Contact</button>
              <button>Browse shop</button>
            </div>
          </div>
          <div className={styles.final_txt}>
            <p>{data && data.description}</p>
          </div>
        </div>

      </div>

      <div className={styles.artisans_images}>
        {data &&
          data.craftsmanPagesAttachments.map((el, index) => (
            <img src={`${el.base_url}/${el.path}`} alt="" key={index} />
          ))}
      </div>

      <Modal open={show} onClose={()=> setShow(false)}>
        <div className={styles.comment_message}>
          <h1>contact with artisan</h1>
          <form action="">
            <input type="text" name="" id="" placeholder="Name"/>
            <input type="text" name="" id="" placeholder="Email"/>
            <textarea placeholder="Comment" name="" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
          </form>
        </div>
      </Modal>
     
    </div>
  );
};

export default ArtisansSingle;
