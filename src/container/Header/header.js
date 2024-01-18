import './header.scss'
import './headerRes.scss'
import { Link, useHistory } from 'react-router-dom'
import Logo  from '../../assets/icons/logo.png'
import { Select } from 'antd';
import { useState } from 'react';
import { set_url } from "../../redux/action";
import { useDispatch } from 'react-redux';
import { countries } from '../../api/countries';
import Humburger from './more.png'
import Close from './close.png'
const Header = ({click, close}) => {
    const { Option } = Select;
    const [active, setActive] = useState(true)
    const [icons, setoIcons]=useState(false)
    const history = useHistory();
    const dispatch = useDispatch()
    return (
        <div className={`header-wrapper ${icons ? 'active' : ''}`}>
            <div className="container">
                <div className="inner">
                    <div className="logo">
                        <Link to="/"><img src={Logo}  alt="" /></Link>
                    </div>
                    <div className={`openActive ${icons ? 'active' : ''}`}>
                    <div className={`contact-page-links ${icons ? 'active' : ''}`}>
                    <img onClick={()=>{
              close();
              setoIcons(false)
            }} className="close_img" src={Close} alt="" />
                    <div className="navbar">
                        <ul className='navbar-ul'>
                            <li>
                                <a onClick={close} href='/#about' className='navbar-links' >ABOUT THE PROJECT</a>
                            </li>
                            <li>
                                <a onClick={close} href='/#platform' className='navbar-links'>HOW TO USE THE PLATFORM</a>
                            </li>
                            <li>
                                <a onClick={close} href='/#heritage' className='navbar-links' >CRAFT AS HERITAGE</a>
                            </li>
                            <li>
                                <a onClick={close} href='/#partners' className='navbar-links'>FOUNDERS & PARTNERS</a>
                            </li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <ul className="contact-items">
                            <li>
                                <Link onClick={close} className='contact-link' to="/contact">contact</Link>
                            </li>
                            <li>
                                <Link onClick={close} className='contact-link' to="/news">news</Link>
                            </li>
                            <li>
                                <Link onClick={close} className='contact-link' to="/resources">resources</Link>
                            </li>
                            <li>
                                <Link onClick={close} className='contact-link' to="/tour">craft tour</Link>
                            </li>
                        </ul>
                        <div className='search-country'>
                            {
                                active ? <h3 className={`country-holder ${active ? 'active' : ''}`} onClick={() => setActive(false)}>Search by country</h3> : <div className={`search-selector ${active ? '' : 'active'}`}>
                                <Select
                                    showSearch
                                    style={{ width: '100%', height: '100%' }}
                                    placeholder="Search to Country"
                                    optionFilterProp="children"
                                    onChange={(e) => {
                                        history.push(e);
                                        dispatch(set_url(e))
                                        close()
                                    }}
                                    autoFocus={true}
                                    defaultOpen={true}
                                    // filterOption={(input, option) =>
                                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    // }
                                    // filterSort={(optionA, optionB) =>
                                    //     optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    // }
                                >
                                   {
                                       countries.slice(0, 1).map((el, index) => (
                                            <Option key={index} value={`${'/country/'}${el.id}/${el.name}`}>{el.name}</Option>
                                       ))
                                   }
                                    
                                </Select>
                                <img src={Close} alt="" onClick={() => setActive(true)}/>
                            </div>
                            }
                        </div>
                    </div>
                    </div>
                    </div>

                    <div className='search-country-two'>
                            {
                                active ? <h3 className={`country-holder ${active ? 'active' : ''}`} onClick={() => setActive(false)}>Search by country</h3> : <div className={`search-selector ${active ? '' : 'active'}`}>
                                <Select
                                    showSearch
                                    style={{ width: '100%', height: '100%' }}
                                    placeholder="Search to Country"
                                    optionFilterProp="children"
                                    onChange={(e) => {
                                        history.push(e);
                                        dispatch(set_url(e))
                                        close()
                                    }}
                                    autoFocus={true}
                                    // filterOption={(input, option) =>
                                    //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    // }
                                    // filterSort={(optionA, optionB) =>
                                    //     optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    // }
                                >
                                   {
                                       countries.slice(0, 1).map((el, index) => (
                                            <Option key={index} value={`${'/country/'}${el.id}/${el.name}`}>{el.name}</Option>
                                       ))
                                   }
                                    
                                </Select>
                                <img src={Close} alt="" onClick={() => setActive(true)}/>
                            </div>
                            }
                        </div>
                    <div onClick={()=> {
                        setoIcons(true)
                        click()
                    }} className='icon_mobile'>
                        <img src={Humburger} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header