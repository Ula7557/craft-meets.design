import "./../Header/header.scss";
import "./../Header/headerRes.scss";
import { Link, useHistory } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import { Select } from "antd";
import { useState } from "react";
import { set_url } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../../api/countries";
import Humburger from './more.png'
import Close from './close.png'
import ShopCart from './shopping-cart.png'

const HeaderTwo = ({click, close}) => {
  const url = useSelector((state) => state.data.url);
  const { Option } = Select;
  const [active, setActive] = useState(true);
  const [icons, setoIcons]=useState(false)
  const history = useHistory();
  const dispatch = useDispatch();
  const dbToken = JSON.parse(localStorage.getItem("token"));
  const tokenHas = dbToken && dbToken.token !== '' ? true : false

  

  return (
    <div className={`header-wrapper ${icons ? 'active' : ''}`}>
      <div className="container">
        <div className="inner">
          <div className="logo">
            <Link to="/">
              <img src={Logo} alt="" />
            </Link>
          </div>
          <div className={`contact-page-links ${icons ? 'active' : ''}`}>
            <img onClick={()=>{
              close();
              setoIcons(false)
            }} className="close_img" src={Close} alt="" />
          <div className="navbar">
            <ul className="navbar-ul">
              <li>
                <Link onClick={close} className="navbar-links" to={`${url}`}>
                  CRAFT IN UZBEKISTAN
                </Link>
              </li>
              <li>
                <Link onClick={close} className="navbar-links" to={`${url}/artisans`}>
                  ARTISANS
                </Link>
              </li>
              <li>
                <Link onClick={close} className="navbar-links" to="/country/story">
                  CRAFT STORIES
                </Link>
              </li>
              <li>
                <Link onClick={close} className="navbar-links" to="/country/events">
                  EVENTS
                </Link>
              </li>
              <li>
                <Link onClick={close} className="navbar-links" to="/country/shopMain">
                  SHOP
                </Link>
              </li>
            </ul>
          </div>
          <div className="contacts">
            <ul className="contact-items">
              <li></li>
                <li>
                  <Link onClick={close} className="contact-link" to="/country/profile">
                    profile
                  </Link>
                </li>
               {
                tokenHas ? (
                  null
                ): (
                  <li>
                  <Link onClick={close} className="contact-link" to="/country/guest">
                    guest orders
                  </Link>
                </li>
                )
               }
              <li>
                <Link onClick={close} className="contact-link" to="/news">
                  news
                </Link>
              </li>
              <li>
                <Link onClick={close} className="contact-link" to="/country/shopcart">
                  <img src={ShopCart} alt="" />
                </Link>
              </li>
            </ul>

            <div className="search-country">
              {active ? (
                <h3
                  className={`country-holder ${active ? "active" : ""}`}
                  onClick={() => setActive(false)}
                >
                  Search by country
                </h3>
              ) : (
                <div className={`search-selector ${active ? "" : "active"}`}>
                  <Select
                    showSearch
                    autoFocus={true}
                    defaultOpen={true}
                    style={{ width: "100%", height: "100%" }}
                    placeholder="Search to Country"
                    optionFilterProp="children"
                    onChange={(e) => {
                      history.push(e);
                      dispatch(set_url(e));
                      close()
                    }}
                  >
                    {countries.slice(0, 1).map((el, index) => (
                      <Option
                        key={index}
                        value={`${"/country/"}${el.id}/${el.name}`}
                      >
                        {el.name}
                      </Option>
                    ))}
                  </Select>
                  <img src={Close} alt="" onClick={() => setActive(true)} />
                </div>
              )}
            </div>
          </div>
          </div>
          <div className="search-country-two">
              {active ? (
                <h3
                  className={`country-holder ${active ? "active" : ""}`}
                  onClick={() => setActive(false)}
                >
                  Search by country
                </h3>
              ) : (
                <div className={`search-selector ${active ? "" : "active"}`}>
                  <Select
                    showSearch
                    autoFocus={true}
                    style={{ width: "100%", height: "100%" }}
                    placeholder="Search to Country"
                    optionFilterProp="children"
                    onChange={(e) => {
                      history.push(e);
                      dispatch(set_url(e));
                      close()
                    }}
                  >
                    {countries.slice(0, 1).map((el, index) => (
                      <Option
                        key={index}
                        value={`${"/country/"}${el.id}/${el.name}`}
                      >
                        {el.name}
                      </Option>
                    ))}
                  </Select>
                  <img src={Close} alt="" onClick={() => setActive(true)} />
                </div>
              )}
          </div>
          <div className='icon_mobile'>
            <img onClick={()=> {
              setoIcons(true)
              click()
            }} src={Humburger} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTwo;
