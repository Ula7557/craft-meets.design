import styles from  './category.module.scss'


const Category = ({cate_name, cate_count})=>{
    return( 
       <div className={styles.Category_wrapper}>
           <button>{cate_name}</button>
           {/* <span>{cate_count}</span> */}
       </div>
    )
}

export default Category

