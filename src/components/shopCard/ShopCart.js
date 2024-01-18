import styles from './shopcard.module.scss'
import { Link } from 'react-router-dom'
import Like from '../../assets/icons/heart.png'
import Ship from '../../assets/icons/ship.png'
import Delete from '../../assets/icons/carbon_delete.png'
import { message } from 'antd';

const ShopCard = ({sale, trash, liked, name, price, id, addCard , image})=>{

    const success = ()=>{
        message.success('Successefully added!')
    }

    message.config({
        duration: '1'
    })
      
    return (
        <div className={styles.shop_card_wrapper}>
            
                <div className={styles.card_top}>
                    <img src={image} alt="" />
                    {/* <button className={liked ? styles.active : ''}><img src={Like} alt="" /></button> */}
                    {/* <span>50% off</span> */}
                </div>
                <div className={styles.card_content}>
                <Link to={`/country/shopSingle/${id}`}>
                    <h3>{name}</h3>
                    </Link>
                    <div className={styles.shipping}>
                        <img src={Ship} alt="" />
                        <p>Eligible for Shipping</p>
                    </div>
                    <div className={`${styles.price_delivry} ${trash ? styles.active : ''}`}>
                        <div className={`${styles.response_block} ${trash ? styles.active : ''}`}>
                            <div className={styles.price_sale}>
                                <span>$ {price}</span>
                                <span className={`${styles.sale} ${sale ? styles.active : ''}`}>$49.50</span>
                            </div>
                            <button className={styles.animate_btn} onClick={()=>{
                                addCard();
                                success()
                            }}>Add to cart</button>
                        </div>

                        <button className={`${styles.delete_btn} ${trash ? styles.active : ''}`}><img src={Delete} alt="" /></button>
                    </div>
                </div>
        </div>
    )
}

export default ShopCard