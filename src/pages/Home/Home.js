import "./home.scss";
import "./homeRes.scss";
import FoundersBanner from './founders_banner.jpg'
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import Banner from "../../assets/images/banner.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner5 from "../../assets/images/banner3.png";
import Banner7 from "../../assets/images/banner7.png";
import GetData from "../../hooks/getData";
import LeftSwitch from '../../assets/left_switch.svg'
import RightSwitch from '../../assets/right_switch.svg'
import { useRef } from "react";
import { Link } from "react-router-dom";
import Image2 from "../../assets/images/image2.png";
import { Council, Team } from "../../components";
import {useState } from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { optionss, settings, settings1, settings2 } from "../../components/slider";
const Home = () => {
    const [open1, setOpen1] = useState(false)
    const slider = useRef(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);
  const [loading, data, error] = GetData("/v1/article/index");
  if (error) return <Error/>;
  if (loading) return <Loading/>;

  const parse = require('html-react-parser');
  const aboutProject = data.filter(el => el.slug === 'about-the-project')
  const platform = data.filter(el => el.slug === 'search' || el.slug === 'discover' || el.slug === 'contact')
  const aboutHeritage = data.filter(el => el.slug === 'craft-as-heritage')
  const aboutEconomy = data.filter(el => el.slug === 'craft-and-the-economy')
  const platSlider = data.filter(el => el.slug === 'eurosoft-llc' || el.slug === 'british-council-uzbekistan' || el.slug === 'the-university-of-leicester' || el.slug === 'hunarmand-association')
  const platformPerson = data.filter(el => el.slug === 'azizbek-murtozoyev' || el.slug === 'murod-sodiq' || el.slug === 'dr-marta-gasparin' || el.slug === 'dr-martin-quinn')
  const fundingSupport = data.filter(el => el.slug === 'gcrf' || el.slug === 'ahrc' || el.slug === 'ahrc1' )
  return (
      <div className="home-wrapper">
        <div className="banner" >
          <img src={Banner} alt="" />
        </div>
        <div className="inner-one" id="about">
          <div className="container">
            <div className="add-block">
              <div className="left-side" >
                <h1 className="left-side-holder">{data[0].title}</h1>
                <div className={`left_sede_block_text ${open1 ? 'opened' : ''}`}>
                <div className={`left-side-text`}>
                    {parse(`${aboutProject[0].body}`)}
                </div>
                </div>
                <button
            onClick={() => setOpen1(!open1)}
             className="founding_opened founding_opened1">
                  Show more
              </button>
              </div>
              <div className="right-side" >
                <img src={`${aboutProject[0].thumbnail_base_url}/${aboutProject[0].thumbnail_path}`} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="banner-two"
          style={{
            backgroundImage: `url(${Image2})`,
          }}
        ></div>

        <div className="how-to-platform" id="platform">
          <div className="container">
            <div className="inner">
              <div className="holder">
                <h1 className="text">HOW TO USE THE PLATFORM</h1>
              </div>
              <div className="platform-card platform-card_desktop ">
                {
                  platform.map((item, index) => (
                    <div key={index} className="cards cards_desktop">
                      <img src={`${item.thumbnail_base_url}/${item.thumbnail_path}`} alt="images" />
                      <h2>{item.title}</h2>
                      <div>{parse(`${item.body}`)}</div>
                    </div>
                  ))
                }
              </div>

              <div className="platform-card platform-card_tablet">
              <OwlCarousel className='owl-theme' loop margin={10} nav {...optionss}>
                    {
                    platform.map((item, index) => (
                      <div className="cards" key={index}>
                        <img src={`${item.thumbnail_base_url}/${item.thumbnail_path}`} alt="images" />
                        <h2>{item.title}</h2>
                        <div>{parse(`${item.body}`)}</div>
                      </div>
                    ))
                    }
              </OwlCarousel>
              </div>
              <div className="cards_caro_slider_btn_block">
                  <button className="cards_caro_slider_btn_block"></button>
                  <button className="cards_caro_slider_btn_block"></button>
              </div>
              <Link className="change-page" to="/platform">
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div
          className="banner-two third"
          style={{
            backgroundImage: `url(${Banner7})`,
          }}
        ></div>

        <div className="inner-one" id="heritage">
          <div className="container">
            <div className="inner-two">
              <div className="add-block">
                <div className="left-side" >
                  <h2 className="left-side-holder">{aboutHeritage[0].title}</h2>
                  <div className="left-side-text">
                    { parse(`${aboutHeritage[0].body}`)}
                  </div>
                
                  <Link className="read-more-link" to={"/heritage"}>
                    Read more
                  </Link>
                </div>
                
                <div className="right-side" >
                  <img src={`${aboutHeritage[0].thumbnail_base_url}/${aboutHeritage[0].thumbnail_path}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-two second">
          <img src={Banner2} alt="" />
        </div>
        <div className="inner-one second">
          <div className="container">
            <div className="inner-two">
              <div className="economy">
                <h2 className="left-side-holder another">
                  {aboutEconomy[0].title}
                </h2>
              </div>
              <div className="add-block">
                <div className="left-side" >
                  <div className="left-side-text">
                    {parse(`${aboutEconomy[0].body}`)}
                  </div>
                  <Link className="read-more-link" to={"/heritage"}>
                    Read More
                  </Link>
                </div>
                <div className="right-side" >
                  <img src={`${aboutEconomy[0].thumbnail_base_url}/${aboutEconomy[0].thumbnail_path}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner-two third">
          <img src={Banner3} alt="" />
        </div>

        <div className="founders" id="partners">
          <div className="container">
            <div className="founder-holder">
              <h1 className="founder-holder-text">Founders and Partners</h1>
            </div>
          </div>
          <img src={FoundersBanner} alt="" />
        </div>

        <div className="our-council">
          <div className="container">
            <div className="inner-div">
              <OwlCarousel ref={slider} className='owl-theme' loop margin={10} nav {...settings}>
                  {
                    platSlider.map((item, index) => (
                      <div className="card" key={index}>
                        <Council
                          image={`${item.thumbnail_base_url}/${item.thumbnail_path}`}
                          holder={item.title}
                          text={ parse(`${item.body}`)}
                        />
                      </div>
                    ))
                  }
              </OwlCarousel>
            </div>
            <div className="inner_div_btn_block">
                <button onClick={() => {
                slider?.current?.prev();}}  className="inner_div_btn_block_bt inner_div_btn_block_bt_prev">
                    <img  src={LeftSwitch} alt="prev" className="inner_div_btn_block_icon inner_div_btn_block_icon_prev" />
                </button>
                <button onClick={() => {
                slider?.current?.next();}}  className="inner_div_btn_block_bt inner_div_btn_block_bt_next">
                    <img  src={RightSwitch} alt="next" className="inner_div_btn_block_icon inner_div_btn_block_icon_next" />
                </button>
            </div>
          </div>
        </div>

        <div className="our-team">
          <div className="container">
            <div className="inner">
              <div className="holder">
                <h1>ACADEMIC TEAM</h1>
              </div>

              <div className="card-two card_two_nocaro">
                {platformPerson.map((item, index) => (
                  <div className="inner-card" key={index}>
                    <Team
                      images={`${item.thumbnail_base_url}/${item.thumbnail_path}`}
                      holder={item.title}
                      text={parse(`${item.body}`)}
                    />
                  </div>
                ))}
              </div>



              {/* /////////////////////////////////////// MOBILDA SLIDER ACTIV BOLADI */}
              <div className="card_two_carousel">
              <div className="card-two" >
              <OwlCarousel ref={slider2}  loop margin={10} nav {...settings2}>
                    {platformPerson.map((item, index) => (
                      <div className="inner-card" key={index}>
                        <Team
                          images={`${item.thumbnail_base_url}/${item.thumbnail_path}`}
                          holder={item.title}
                          text={parse(`${item.body}`)}
                        />
                      </div>
                    ))}
                </OwlCarousel>
              </div>
              <div className="inner_div_btn_block inner_div_btn_block_1">
                <button onClick={() => {
                slider2?.current?.prev();}}  className="inner_div_btn_block_bt inner_div_btn_block_bt_prev">
                    <img  src={LeftSwitch} alt="prev" className="inner_div_btn_block_icon inner_div_btn_block_icon_prev" />
                </button>
                <button onClick={() => {
                slider2?.current?.next();}}  className="inner_div_btn_block_bt inner_div_btn_block_bt_next">
                    <img  src={RightSwitch} alt="next" className="inner_div_btn_block_icon inner_div_btn_block_icon_next" />
                </button>
            </div>
            </div>

              {/* //////////////////////////////////////////////////// */}
            </div>
          </div>
        </div>

        <div className="banner-two four">
          <img src={Banner5} alt="" />
        </div>
        <div className="support-finding">
          <div className="container">
            <div className="inner">
              <div className="holder">
                <h1>FUNDING & SUPPORT</h1>
              </div>

              <div className="card-three">
                <OwlCarousel ref={slider1} className='owl-theme' loop margin={10} nav {...settings1}>
                  {fundingSupport.map((item, index) => (
                    <div className="card" key={index}>
                      <Council
                        image={`${item.thumbnail_base_url}/${item.thumbnail_path}`}
                        holder={item.title}
                        text={parse(`${item.body}`)}
                      />
                    </div>
                  ))}
                    
                
                </OwlCarousel>
              </div>
              <div className="inner_div_btn_block">
                <button onClick={() => {
                slider1?.current?.prev();}}  className="inner_div_btn_block_bt inner_div_btn_block_bt_prev">
                    <img  src={LeftSwitch} alt="prev" className="inner_div_btn_block_icon inner_div_btn_block_icon_prev" />
                </button>
                <button onClick={() => {
                slider1?.current?.next();}}  className="inner_div_btn_block_bt inner_div_btn_block_bt_next">
                    <img  src={RightSwitch} alt="next" className="inner_div_btn_block_icon inner_div_btn_block_icon_next" />
                </button>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Home;
