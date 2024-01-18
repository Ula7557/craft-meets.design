import styles from "./storysingle.module.scss";
import Banner from "../../assets/images/banner.png";
import { useEffect, useState } from "react";
import axios from "axios";
import parse from 'html-react-parser'
import Loading from "../../components/loading/Loading";

const CaseSingle = ({ match }) => {
    const [hover, setHover] = useState("one");
    const [singleStory, setSingleStory] = useState({
        isAxiosed: false,
        data: {},
        error: null
    });
    useEffect(() => {
        axios.get(`https://api.craftmeets.design/v1/craftsman-pages/view?id=${match.params.id}`)
        .then(res => 
            
                setSingleStory({
                    isAxiosed: true,
                    data: res.data,
                    error: false
                })
        )
        .catch(err => setSingleStory({
            isAxiosed: false,
            data: [],
            error: err
        }))
    }, [match.params.id]);

    const base_url = 'https://assets.craftmeets.design/source'
    return (
        <>
            {
                singleStory.isAxiosed ? (
                    <div className={styles.case_single_page_wrapper}>
            <div className={styles.bottom_place}>
                <div className={styles.animation_images}>
                    <div
                        className={`${styles.card_image} ${hover === "one" ? styles.active : ""
                            }`}
                        onMouseEnter={() => setHover("one")}
                    >
                        <img src={`${base_url}/${singleStory.data.attachments[0] && singleStory.data.attachments[0].path}`} alt="" />
                    </div>
                    <div
                        className={`${styles.card_image} ${hover === "two" ? styles.active : ""
                            }`}
                        onMouseEnter={() => setHover("two")}
                    >
                        <img src={`${base_url}/${singleStory.data.attachments[1] && singleStory.data.attachments[1].path}`} alt="" />
                    </div>
                    <div
                        className={`${styles.card_image} ${hover === "three" ? styles.active : ""
                            }`}
                        onMouseEnter={() => setHover("three")}
                    >
                        <img src={`${base_url}/${singleStory.data.attachments[2] && singleStory.data.attachments[2].path}`} alt="" />
                    </div>
                </div>
            </div>

            <div className={styles.single_case_main_content}>
                <div className="container">
                    <div className={styles.case_single_case_info_block}>
                        <h1 className={styles.personal_name}>
                            {singleStory.data.title}
                        </h1>
                        <span className={styles.personal_category}>Ceramic</span>
                        <div className={styles.personal_info_image}>
                            <p>
                                {singleStory.data.intro}
                            </p>
                            <img src={`${base_url}/${singleStory.data.thumbnail_path}`} alt="" />
                        </div>

                        <div className={styles.personal_info_full}>
                            <p>
                               {parse(singleStory.data.text)}
                            </p>
                        </div>
                        {/* <div className={`${styles.personal_info_image} ${styles.active}`}>
                            
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                            </p>
                           
                            <img src={Banner} alt="" />
                        </div> */}
                        {/* <div className={styles.personal_info_full}>

                            <h1>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ulugbek
                            </h1>
                            <p>
                           
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className={styles.bottom_banner}>
                <img src={Banner} alt="" />
            </div>
        </div>
                ):(
                    <Loading/>
                )
            }
        </>
    );
};
export default CaseSingle;
