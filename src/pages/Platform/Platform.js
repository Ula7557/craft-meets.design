import './platform.scss'
import Error from '../../components/error/Error'
import parse from 'html-react-parser'
import GetData from '../../hooks/getData'
import Loading from '../../components/loading/Loading'
import Banner1 from '../../assets/images/banner1-1.png'
import Banner2 from '../../assets/images/banner1-2.png'
import Banner3 from "../../assets/images/banner1-3.png";
import { Carouselcard, Youtube } from "../../components";
import BackToTop from "react-back-to-top-button";
import Back from "../../assets/icons/back.png";
import OwlCarousel from "react-owl-carousel";

const Platform = () => {
  const [loading, data, error] = GetData("/v1/platform");
  if (error) return <Error/>;
  if (loading) return <Loading />;
  const designerData = data.filter((el) => el.category.slug === "designer");
  const artisansData = data.filter((el) => el.category.slug === "artisans");
  const shoppersData = data.filter((el) => el.category.slug === "shoppers");
  const collaboratorData = data.filter(
    (el) => el.category.slug === "collaborator"
  );
  const culturalData = data.filter(
    (el) => el.category.slug === "cultural-tourist"
  );
  const shortUrl = designerData && designerData;
  const base_url = 'https://assets.craftmeets.design/source'
  return (
      <div className="platform-wrapper">
        <div className="banner-one" >
          <img src={Banner1} alt="" />
          <h1 className="banner-text">How to use Platform</h1>
        </div>
        <div className="page-changer">
          <div className="container">
            <div className="top-block">
              <ul className="change-buttons">
                <li>
                  <button className="block-btn">How to use the platform</button>
                </li>
              </ul>
            </div>
            <div className="bottom-block">
              <ul className="ul-wrapper">
                <li>
                  <a href='#designer'
                    className="category"
                  >
                    Designer
                  </a>
                </li>
                <li>
                  <a href="#artisan"
                    className="category"
                  >
                    Artisan
                  </a>
                </li>
                <li>
                  <a href="#shopper"
                    className="category"
                    
                  >
                    Shopper
                  </a>
                </li>
                <li>
                  <a href="#collaborator"
                    className="category"
                  >
                    Collaborator
                  </a>
                </li>
                <li>
                  <a href="#cultural"
                    className="category"
                  >
                    Cultural tourist
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-content-block">
          <div className="container">
            <div className="holder" id='designer'>
              <h1 className="text">Designer</h1>
            </div>
              <Carouselcard
                extra={shortUrl[0].title}
                description={parse(`${shortUrl[0].body}`)}
                image={
                  designerData &&
                  `${designerData[0].thumbnail_base_url}/${designerData[0].thumbnail_path}`
                }
              />
            <div className="content-block-two">
              <Youtube
                title={shortUrl[1].title}
                desc={parse(`${shortUrl[1].body}`)}
                url={`${base_url}/${shortUrl[1].articleAttachments[0].path}`}
              />
            </div>
            <div className="ban-text" id='artisan'>
              <h2>Artisans</h2>
            </div>
            <Carouselcard
              extra={artisansData && artisansData[0].title}
              image={
                artisansData &&
                `${base_url}/${artisansData[0].thumbnail_path}`
              }
              description={parse(`${artisansData[0].body}`)}
            />
            <div className="double-video">
              <div className="video-one">
                <Youtube
                  title={artisansData && artisansData[1].title}
                  desc={parse(`${artisansData && artisansData[1].body}`)}
                  url={`${
                    artisansData &&
                    base_url
                  }/${
                    artisansData && artisansData[1].articleAttachments[0].path
                  }`}
                />
              </div>
              <div className="video-one">
                <Youtube
                  title={artisansData && artisansData[2].title}
                  desc={parse(`${artisansData && artisansData[2].body}`)}
                  url={`${
                    artisansData &&
                    base_url
                  }/${
                    artisansData && artisansData[2].articleAttachments[0].path
                  }`}
                />
              </div>
            </div>
            <div className="mobile-video-container">
              <OwlCarousel items={1} className="owl-theme"  loop="true" margin={10} nav>
                <div className="item">
                  <div className="video-one">
                   <Youtube
                        title={artisansData && artisansData[1].title}
                        desc={parse(`${artisansData && artisansData[1].body}`)}
                        url={`${
                            artisansData &&
                            base_url
                        }/${
                            artisansData && artisansData[1].articleAttachments[0].path
                        }`}
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="video-one">
                    <Youtube
                    title={artisansData && artisansData[2].title}
                    desc={parse(`${artisansData && artisansData[2].body}`)}
                    url={`${
                        artisansData &&
                        base_url
                    }/${
                        artisansData && artisansData[2].articleAttachments[0].path
                    }`}
                    />
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="platform-banner-two">
            <img src={Banner2} alt="" />
          </div>
        </div>
        <div className="shoppers-block">
          <div className="container">
            <div className="holder" id='shopper'>
              <h2 className="text">Shoppers</h2>
            </div>
            <div className="slick-content">
              <Carouselcard
                extra={shoppersData && shoppersData[0].title}
                description={parse(`${shoppersData && shoppersData[0].body}`)}
                image={
                  shoppersData &&
                  `${base_url}/${shoppersData[0].thumbnail_path}`
                }
              />
            </div>
            <div className="video-content">
              <div className="video-item">
                <Youtube
                  title={shoppersData && shoppersData[1].title}
                  desc={parse(`${shoppersData && shoppersData[1].body}`)}
                  url={`${
                    shoppersData &&
                    base_url
                  }/${
                    shoppersData && shoppersData[1].articleAttachments[0].path
                  }`}
                />
              </div>
              <div className="video-item">
                <Youtube
                  title={shoppersData && shoppersData[2].title}
                  desc={parse(`${shoppersData && shoppersData[2].body}`)}
                  url={`${
                    shoppersData &&
                    base_url
                  }/${
                    shoppersData && shoppersData[2].articleAttachments[0].path
                  }`}
                />
              </div>
              <div className="video-item">
                <Youtube
                  title={shoppersData && shoppersData[3].title}
                  desc={parse(`${shoppersData && shoppersData[2].body}`)}
                  url={`${
                    shoppersData &&
                    base_url
                  }/${
                    shoppersData && shoppersData[3].articleAttachments[0].path
                  }`}
                />
              </div>

            </div>
            <div className='mobile-video-container' >
                    <OwlCarousel items={1} className="owl-theme" loop margin={10} nav>
                        <div className="item">
                            <div className="video-item">
                                <Youtube
                                title={shoppersData && shoppersData[1].title}
                                desc={parse(`${shoppersData && shoppersData[1].body}`)}
                                url={`${
                                    shoppersData &&
                                    base_url
                                }/${
                                    shoppersData && shoppersData[1].articleAttachments[0].path
                                }`}
                                />
                                
                            </div>
                        </div>
                        <div className="item">
                            <div className="video-item">
                                <Youtube
                                title={shoppersData && shoppersData[2].title}
                                desc={parse(`${shoppersData && shoppersData[2].body}`)}
                                url={`${
                                    shoppersData &&
                                    base_url
                                }/${
                                    shoppersData && shoppersData[2].articleAttachments[0].path
                                }`}
                                />
                            </div>
                        </div>
                        <div className="item">
                            <div className="video-item">
                                <Youtube
                                title={shoppersData && shoppersData[3].title}
                                desc={parse(`${shoppersData && shoppersData[2].body}`)}
                                url={`${
                                    shoppersData &&
                                    base_url
                                }/${
                                    shoppersData && shoppersData[3].articleAttachments[0].path
                                }`}
                                />
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
          </div>
        </div>
        <div className="platform-banner-two">
          <img src={Banner3} alt="" />
        </div>
        <div className="shoppers-block">
          <div className="container">
            <div className="holder" id='collaborator'>
              <h2 className="text">Collaborator</h2>
            </div>

            <div className="slick-content">
              {collaboratorData.map((el, index) => (
                <Carouselcard
                  image={`${base_url}/${el.thumbnail_path}`}
                  extra={el.title}
                  description={parse(`${el.body}`)}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="manufactura">
          <div className="container">
            <div className="holder" id='cultural'>
              <h2 className="text">cultural tourist</h2>
            </div>
            <div className="slick-content">
              {culturalData.map((el, index) => (
                <Carouselcard
                  image={`${base_url}/${el.thumbnail_path}`}
                  extra={el.title}
                  description={parse(`${el.body}`)}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="platform-banner-two">
          <img src={Banner3} alt="" />
        </div>
        <BackToTop
          showOnScrollUp
          showAt={100}
          speed={2500}
          easing="easeInOutQuint"
        >
          <div className="back-to-top">
            <img src={Back} alt="" />
          </div>
        </BackToTop>
      </div>
  );
};

export default Platform