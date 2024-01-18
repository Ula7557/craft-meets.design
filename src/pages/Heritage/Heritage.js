import "./heritage.scss";
import { useState } from "react";
import BackToTop from "react-back-to-top-button";
import GetData from "../../hooks/getData";
import Loading from "../../components/loading/Loading";
import Error from "../../components/error/Error";
import parse from "html-react-parser";
import Banner1 from "../../assets/images/banner.png";
import Back from "../../assets/icons/back.png";
const Heritage = () => {
  const [hover, setHover] = useState("one");
  const [change, setChange] = useState("one");
  const [loading, data, error] = GetData("/v1/news/heritage");
  const [loadingTwo, dataTwoo, errorTwo] = GetData("/v1/news/economy");
  if (loading && loadingTwo) return <Loading />;
  if (error && errorTwo) return <Error />;
  const bannerImages = data.filter((el) => el.slug === "banner");
  const dataOne = data.filter((el) => el.id === 54);
  const dataTwo = data.filter((el) => el.id === 55);
  const dataThree = data.filter((el) => el.id === 62);
  const bannerImagesEco = dataTwoo.filter((el) => el.slug === "banner-2");
  const dataOneEco = dataTwoo.filter((el) => el.id === 56);
  const base_url = "https://assets.craftmeets.design/source";
  const pathOne = bannerImages[0] && bannerImages[0].articleAttachments[0].path;
  const pathTwo = bannerImages[0] && bannerImages[0].articleAttachments[1].path;
  const pathThree = bannerImages[0] && bannerImages[0].articleAttachments[2].path;
  const pathOneEco = bannerImagesEco[0] && bannerImagesEco[0].articleAttachments[0].path;
  const pathTwoEco = bannerImagesEco[0] && bannerImagesEco[0].articleAttachments[1].path;
  const pathThreeEco = bannerImagesEco[0] && bannerImagesEco[0].articleAttachments[2].path;
  return (
    <div
      className="heritage-wrapper"
    >
      <div className="page-hero" >
        <div className="top-place">
          <div
            className="page-holder-banner"
            style={{ backgroundImage: `url(${Banner1})` }}
          >
            <h1>Craft as heritage</h1>
          </div>
          <div className="changer-wrapper container">
            <ul>
              <button
                className={`changer-btn ${change === "one" ? "active" : ""}`}
                onClick={() => setChange("one")}
              >
                Craft as Heritage
              </button>
              <button
                className={`changer-btn ${change === "two" ? "active" : ""}`}
                onClick={() => setChange("two")}
              >
                Craft and the Economy
              </button>
            </ul>
          </div>
        </div>
      </div>

      {change === "one" ? (
        <>
          <div className={`bottom-place ${change === "three" ? "active" : ""}`}>
            <div className="animation-images">
              <div
                className={`card-image ${hover === "one" ? "active" : ""}`}
                onMouseEnter={() => setHover("one")}
              >
                <img src={`${base_url}/${pathOne}`} alt="" />
              </div>
              <div
                className={`card-image ${hover === "two" ? "active" : ""}`}
                onMouseEnter={() => setHover("two")}
              >
                <img src={`${base_url}/${pathTwo}`} alt="" />
              </div>
              <div
                className={`card-image ${hover === "thre" ? "active" : ""}`}
                onMouseEnter={() => setHover("thre")}
              >
                <img src={`${base_url}/${pathThree}`} alt="" />
              </div>
            </div>
          </div>
          <div className="changed-block container">
            <div className="holder">
              <h1 className="text">CRAFT AS HERITAGE</h1>
            </div>
            <div className="main-content">
              <div className="block-first">
                <div
                  className="left-place"
                 
                >
                  {dataOne &&
                    dataOne.map((el, index) => <h2 key={index}>{el.title}</h2>)}

                  {dataOne &&
                    dataOne.map((el, index) => (
                      <div key={index}>{parse(`${el.body}`)}</div>
                    ))}
                </div>
                <div
                  className="right-place"
                  
                >
                  {dataOne &&
                    dataOne.map((el, index) => (
                      <img
                        key={index}
                        className="active"
                        src={`${base_url}/${el.thumbnail_path}`}
                        alt=""
                      />
                    ))}
                </div>
              </div>
              <div
                className="middle-block"
              >
                {dataTwo &&
                  dataTwo.map((el, index) => <h2 key={index}>{el.title}</h2>)}

                {dataTwo &&
                  dataTwo.map((el, index) => (
                    <div key={index}>{parse(`${el.body}`)}</div>
                  ))}
              </div>
              <div className="block-first second">
                <div
                  className="left-place"
                >
                  {dataThree &&
                    dataThree.map((el, index) => (
                      <div key={index}>{parse(`${el.body}`)}</div>
                    ))}
                </div>
                <div
                  className="right-place"
                >
                  {dataThree &&
                    dataThree.map((el, index) => (
                      <img
                        key={index}
                        className="active"
                        src={`${base_url}/${el.thumbnail_path}`}
                        alt=""
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : change === "two" ? (
        <>
          <div className={`bottom-place ${change === "three" ? "active" : ""}`}>
            <div className="animation-images">
              <div
                className={`card-image ${hover === "one" ? "active" : ""}`}
                onMouseEnter={() => setHover("one")}
              >
                <img src={`${base_url}/${pathOneEco}`} alt="" />
              </div>
              <div
                className={`card-image ${hover === "two" ? "active" : ""}`}
                onMouseEnter={() => setHover("two")}
              >
                <img src={`${base_url}/${pathTwoEco}`} alt="" />
              </div>
              <div
                className={`card-image ${hover === "thre" ? "active" : ""}`}
                onMouseEnter={() => setHover("thre")}
              >
                <img src={`${base_url}/${pathThreeEco}`} alt="" />
              </div>
            </div>
          </div>
          <div className="changed-block container">
            <div className="holder">
              <h1 className="text">CRAFT AS ECONOMY</h1>
            </div>
            <div className="main-content">
              <div className="block-first">
                <div
                  className="left-place"
                >
                  {
                    // dataOneEco && dataOneEco.map((el, index) => (<h2 key={index}>{el.title}</h2>))
                    <h2>
                      Craft is the second-largest employer in developing
                      countries, after agriculture
                    </h2>
                  }

                  {
                    // dataOneEco && dataOneEco.map((el, index) => (<div key={index}>{parse(`${el.body}`)}</div>))
                    <p>
                      Craft as an economy is continually being developed to rely
                      on more sustainable business practices. Craft Meets Design
                      encourages and facilitates the development of sustainable
                      business models, alongside sustainability in product
                      creation and marketing communication. We work to promote
                      and nurture "glocalised business models", which ensure
                      long-term economic sustainability for artisans and craft
                      makers and it will determine models for design and
                      innovation practices to reduce exploitation of natural and
                      human resources, whilst increasing product lifespans by
                      driving innovation based on quality, local traditions, and
                      sustainable values. Slow design driven innovation
                      celebrates local resources’ values and aspires to be an
                      alternative model of consumption to confront the current
                      paradigm of "more and cheaper is better", and is an
                      emerging movement of ethical practice. The term is used to
                      describe craft products made using handcrafted materials
                      from artisans. The platform will also focus on sustainable
                      business models for tourism development and aims to create
                      opportunities for a networked system which integrates
                      sustainable development of tourism and craft.
                    </p>
                  }
                </div>
                <div
                  className="right-place"
                >
                  {dataOneEco &&
                    dataOneEco.map((el, index) => (
                      <img
                        key={index}
                        className="active"
                        src={`${base_url}/${el.thumbnail_path}`}
                        alt=""
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
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

export default Heritage;
