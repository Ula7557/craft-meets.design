import styles from './craftstory.module.scss'
import Banner from '../../assets/images/banner.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { CaseCard } from '../../components'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'
import GetData from '../../hooks/getData' 

const CraftStory = () => {
    const [changeTab, setChangeTab] = useState('')
    const [stories, setStories] = useState({
        isAxiosed: false,
        data: {},
        error: null
})
    useEffect(()=>{
        axios.get(`https://api.craftmeets.design/v1/craftsman-pages/craft-stories?category_id=${changeTab}`)
        .then(res => setStories({
            isAxiosed: true,
            data: res.data,
            error: false
        }))
        .catch(err => setStories({
            isAxiosed: false,
            data:[],
            error: err
        }))
    },[changeTab])
    
    const [loading, data, error] = GetData('v1/craftsman-pages/story-categories')
    return (
        <div className={styles.craft_story_wrapper}>
            <div className={styles.page_banner}
                style={{
                    backgroundImage: `url(${Banner})`
                }}
            >
                <h1>Craft stories</h1>
            </div>
            <div className={`container ${styles.containerScrool}`}>
                <div className={styles.category_buttons}>
                    {
                        data.length && data.map((el, index)=>(
                            <button onClick={()=> setChangeTab(el.id)} key={index} className={el.id === changeTab ? styles.active : null}>{el.title}</button>
                        ))
                    }
                </div>
            </div>
            <div className={styles.page_main_content_card_wrapper}>

                {
                    stories.isAxiosed ? (
                        <div className={styles.cards}>
                            {
                                stories.data.map((el, index)=>(
                                    <CaseCard
                                        key={index}
                                        id={el.id}
                                        odd={index-1}
                                        active={true}
                                        image1={`${el.attachments[0] && el.attachments[0].base_url}/${el.attachments[0] && el.attachments[0].path}`}
                                        image2={`${el.attachments[0] && el.attachments[0].base_url}/${el.attachments[1] && el.attachments[1].path}`}
                                        image3={`${el.attachments[0] && el.attachments[0].base_url}/${el.attachments[2] && el.attachments[2].path}`}
                                        name={el.title}
                                        text={el.intro}
                                    />
                                ))
                            }
                        </div>
                    ):(
                        <Loading/>
                    )
                }
            </div>
        </div>
    )
}

export default CraftStory