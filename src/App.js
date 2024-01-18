import { Home, Platform, Heritage, News, SinglePage, Resource, CaseSingle, Artisans, ArtisansSingle, CraftStory, Events, TermsConditions, Profile, Wishlist, ShopCart, StoriesSingle } from "./pages";
import Contact from "./pages/Contact";
import { ShopMain, ShopSingle, Checkout } from "./pages/shopPages";
import GuestOrders from "./pages/shopPages/guestOrders/GuestOrders";
import BackToTop from "react-back-to-top-button";
import Back from './assets/icons/back.png'
import { useSelector } from "react-redux";
import { Footer, Header,
HeaderTwo } from "./container";
import './assets/styles/main.scss'
import 'antd/dist/antd.css'
import { Uzbekistan } from "./countryPages";
import { useLocation } from "react-router-dom";
import CraftTour from "./pages/craftur/CraftTour";
import Error from "./components/error/Error";

import {
  Switch,
  Route,
} from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const location = useLocation()
  const locations = window.location.pathname
  const url  = useSelector(state => state.data.url)
  const {pathname} = useLocation()
  const [active, setActive] = useState(false)
  const unique_key = localStorage.getItem('unique_key')
  useEffect(()=>{
    window.scrollTo(0,0)

    if(unique_key){
      return null
    }else{
      window.localStorage.setItem('unique_key', window.btoa(window.clientInformation.appVersion))
    }
  },[pathname])

  const openActive = ()=>{
    setActive(true)
  }
  const closeActive = ()=>{
    setActive(false)
  }
  return (
    <div className={`App ${active ? 'active' : ''}`}>
      {
        locations.includes('/country') ? (
            <HeaderTwo click={openActive} close={closeActive}/>
        ):(
            <Header click={openActive} close={closeActive}/>
        )
      }
        <Switch>
            <Switch location={location} key={location.pathname}>
              <Route exact path="/" component={Home} />
              <Route path="/platform" component={Platform} />
              <Route path="/country/shopMain" component={ShopMain}/>
              <Route path="/heritage" component={Heritage} />
              <Route path="/news" component={News} />
              <Route path="/single/:type/:id" component={SinglePage}/>
              <Route path="/resources" component={Resource}/>
              <Route path="/caseSingle/:id" component={CaseSingle}/>
              <Route path={`${url}/storySingle/:id`} component={StoriesSingle}/>
              <Route path={`${url}/artisans`} component={Artisans}/>
              <Route path="/country/story" component={CraftStory}/>
              <Route path={`${url}/artisansSingle/:id`} component={ArtisansSingle}/>
              <Route path="/country/events" component={Events}/>
              <Route exact path={`${url}`} component={Uzbekistan}/>
              <Route path="/country/shopSingle/:id" component={ShopSingle}/>
              <Route path="/termsandcondition" component={TermsConditions}/>
              <Route path="/country/profile" component={Profile}/>
              <Route path="/country/guest" component={GuestOrders}/>
              <Route path="/country/wishlist" component={Wishlist}/>
              <Route path="/country/shopcart" component={ShopCart}/>
              <Route path="/country/shop/checkout" component={Checkout}/>
              <Route path="/tour" component={CraftTour}/>
              <Route path="/contact" component={Contact}/>
              <Route path={"*"} component={ErrorComp}/>
            </Switch>
        </Switch>
        <Footer />

        <BackToTop
                showOnScrollUp
                showAt={100}
                speed={2500}
                easing="easeInOutQuint"
            >
                <div className="back-to-top" style={{borderRadius: '10px'}}><img src={Back} alt="" /></div>
            </BackToTop>
    </div>
  );
}
const ErrorComp = () => {
  return (<Error/>)
}
export default App;
