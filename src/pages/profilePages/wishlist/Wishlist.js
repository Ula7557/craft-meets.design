import styles from './wishlist.module.scss'
import Sort from '../../../assets/icons/sort.png'
import {ShopCard} from '../../../components'

const Wishlist = () => {


    const someArr = [1,2,3,4]

    return (
        <div className={styles.wishlist_wrapper}>
            <div className="container">
                <div className={styles.bread}><p>Home <span>/ Wishlist</span></p></div>

                <div className={styles.page_search}>
                    <div className={styles.seearch_components}>
                            <div className={styles.inner}>
                                <div className={styles.holder}>
                                    <h2>Search by</h2>
                                </div>
                                <div className={styles.search_inputs}>
                                    <form action="">
                                        <input placeholder='Name' type="text" name="" id="" />
                                        <input placeholder='Craft' type="text" name="" id="" />
                                        <input placeholder='Location' type="text" name="" id="" />
                                    </form>
                                </div>
                                <div className={styles.sort}><img src={Sort} alt="" /></div>
                            </div>
                    </div>
                </div>

                <div className={styles.wish_card_wrapper}>
                    {
                        someArr.map(el =>(
                            <div className={styles.wish_card}>
                                <ShopCard trash={false} sale={true} liked={false}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wishlist