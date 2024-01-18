import styles from './newsSearch.module.scss'
import Sort from '../../assets/icons/sort.png'

const NewsSearch = () => {
    return ( 
        <div className={styles.seearch_components}>
          
            <div className="container">
              <div className={styles.inner_mobile_div}>
                <div className={styles.holder}>
                  <h2>SEARCH ARTIST BY</h2>
                </div>
                <div className={styles.sort}>
                  <img src={Sort} alt="" />
                </div>
              </div>
              <div className={styles.inner}>
                <div className={styles.holder}>
                  <h2>SEARCH ARTIST BY</h2>
                </div>
                
                <div className={styles.search_inputs}>
                  <form action="">
                    <input placeholder="Name" type="text" name="" id="" />
                    <input placeholder="Craft" type="text" name="" id="" />
                    <input placeholder="Location" type="text" name="" id="" />
                  </form>
                </div>
                <div className={styles.sort}>
                  <img src={Sort} alt="" />
                </div>
              </div>
            </div>
          </div>
     );
}
 
export default NewsSearch;