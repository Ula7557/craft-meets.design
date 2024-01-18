import styles from './shoptable.module.scss'
import Minus from '../../pages/shopPages/shopSingle/Vector.png'
import Plus from '../../pages/shopPages/shopSingle/Vector (1).png'
import { useEffect, useState } from 'react'
import Delete from '../../assets/icons/Delete.png'


const ShopTable = ({ product_name, colors, price, total_price, id, image, count, size, update}) => {
    const [counter, setCounter] = useState(parseInt(count))
    const increase = ()=>{
        setCounter(counter + 1)
    }
    const decrease = ()=>{
        setCounter(counter - 1)
    }

    const unique_id = localStorage.getItem('unique_key')

    useEffect(()=>{
        const user_token = JSON.parse(localStorage.getItem('token'))
        const tokenHas = user_token && user_token.token !== '' ? true : false
        const token = user_token && user_token.token
        let myHeaders = new Headers()
        myHeaders.append('Authorization', `Bearer ${token}`)
        let formData = new FormData()
        if(tokenHas){
            formData.append('isGuest','0')
            formData.append('user_token', token)
        }else{
            formData.append('isGuest', '1')
            formData.append('guest_unique_id', unique_id)
        }
        formData.append('product_id', id)
        formData.append('quantity', counter)
        formData.append('size', 'xl')
        formData.append('color', 'blue')
        let requestOptions = {
            method: "post",
            headers: myHeaders,
            body: formData,
            redirect: "follow"
        }
        fetch('https://api.craftmeets.design/v1/shop/add-to-cart', requestOptions)
        .then(response => response.text())
        .then(res => res)
        .catch(error => console.log(error))
    },[counter])
    if (counter === 0) return setCounter(1)


    const delProduct = ()=>{
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer DTktxMgXnmpE3GS7I7PFGUYZIBB6SrsW");
        myHeaders.append("Cookie", "PHPSESSID=fe5937c8cbeda17f47af5fa40ba0d851; _csrf=2dhnAGBS279zu7u91Md3VfxFF4N4Ftjm");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`https://api.craftmeets.design/v1/shop/delete-cart-item?product_id=${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            if(JSON.parse(result).success){
                update()
            }
        })
        .catch(error => console.log('error', error));
    }

    return (
        <div className={`${styles.shop_table_wrapper} `}>
            <div className={`${styles.customer_table}`}>
                <div className={`${styles.table_card}`}>
                    <div className={`${styles.product}`}>
                        <img className={styles.img} src={image} alt="" />
                        <div className={styles.item_size}>
                            <h3>{product_name}</h3>
                            <div className={styles.buttons}>
                                <select className={styles.button_select} name="" id="">
                                    <option>{colors}</option>
                                </select>
                                <select className={styles.button_select} name="" id="">
                                    <option>{size}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.price} `}>
                        <h4>$ {price}</h4>
                    </div>
                    <div className={`${styles.date} `}>
                        <div className={styles.counter}>
                            <button onClick={() => {
                                increase()
                            }}><img src={Minus} alt="" /></button>
                            <h6>{counter}</h6>
                            <button onClick={() => decrease()}><img src={Plus} alt="" /></button>
                        </div>
                    </div>
                    <div className={`${styles.id} `}>
                        <h4>$ {parseInt(total_price) * counter}</h4>
                    </div>
                    <div className={`${styles.info} `}>
                        <button onClick={() => delProduct()}><img src={Delete} alt="" /></button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ShopTable