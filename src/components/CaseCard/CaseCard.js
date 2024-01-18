import styles from './casecard.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const CaseCard = ({odd, image1, image2, image3, name, cate, text, id}) => {
    const url  = useSelector(state => state.data.url)

    const [hover, setHover] = useState('one')
    return (
        <div className={styles.CaseCard_wrapper}>
            <div className="container">
                <div className={`${styles.inner}  ${odd % 2 ? '' : styles.active}`} >
                    <div className={styles.left_side}>
                        <div className={styles.animation_images}>
                            <div className={`${styles.card_image} ${hover === 'one' ? styles.active : ''}`} onMouseEnter={() => setHover('one')} >
                                <img src={image1} alt="" />
                            </div>
                            <div className={`${styles.card_image} ${hover === 'two' ? styles.active : ''}`} onMouseEnter={() => setHover('two')}>
                                <img src={image2} alt="" />
                            </div>
                            <div className={`${styles.card_image} ${hover === 'three' ? styles.active : ''}`} onMouseEnter={() => setHover('three')}>
                                <img src={image3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <h1>
                            {name}
                        </h1>
                        <span>{cate}</span>
                        <p>
                            {text}
                        </p>
                        <Link className={styles.button} to={`${url}/storySingle/${id}`}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseCard