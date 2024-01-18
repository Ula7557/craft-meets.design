import React, { useState, useEffect } from "react";
import "./aaa.scss";
import { StrictMode } from "react";
import Modal from "../../../components/Modal/Modal";
import CheckoutPay from "../../../components/checkoutpages/checkoutPay";
import { Select } from "antd";
import axios from "axios";
import Loading from "../../../components/loading/Loading";
import { shippingCountries } from "../../../api/shipment";
import { Input } from "antd";
function Checkout() {
  const {TextArea} = Input
  const [showOPen, setShowOpen] = useState(false);
  const [productsShipment, setProductsShipment] = useState({
    isFetched: false,
    data: [],
    error: null,
  });
  const [productData, setProductData] = useState({
    firstName: '',
    lastName: "",
    phoneNumber: "",
    countryId: "",
    zipCode: "",
    comment: "",
    email: "",
    city: "",
    address: "",
  });
  const unique_id = localStorage.getItem('unique_key')

  const [totalPrice, setTotalPrice] = useState(0)
  const { Option } = Select;
  const [someArr, setSomearr] = useState(0);
  const [weightP, setWeightP] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);
  const dbData = JSON.parse(localStorage.getItem('token'))
  const token = dbData && dbData.token
  const tokenHas = dbData && dbData.token !== '' ? true : false;


  useEffect(() => {
    var FormData = require("form-data");
    var data = new FormData();
    if (tokenHas) {
      data.append("user_token", "0XWB9jTPsp9HWyKN7GzKhZBoQLmL04cH");
    } else {
      data.append("guest_unique_id", unique_id);
    }
    let url = tokenHas
      ? `https://api.craftmeets.design/v1/shop/get-cart-items?user_token=${token}`
      : `https://api.craftmeets.design/v1/shop/get-cart-items?guest_unique_id=${unique_id}`;
    var config = {
      method: "get",
      url: url,
      headers: {
        Authorization: "Bearer NMky9_eySwUYM1MyRLXpu37iqBkCuTC-1pFXs9bx",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        setProductsShipment({
          isFetched: true,
          data: response,
          error: false,
        });
      })
      .catch(function (error) {
        setProductsShipment({
          isFetched: false,
          data: [],
          error: error,
        });
      });
    if (someArr > 0) {
      setSomearr(0);
    }
    if (weightP > 0) {
      setWeightP(0);
    }

    
    let total = 0
    if (productsShipment.isFetched) {
      let salary =
        productsShipment &&
        productsShipment.data.data.cart

        for(let i=0; i<salary.length; i++){
          total = total + salary[i].quantity * salary[i].product.price
        }
        setTotalPrice(total)
        window.localStorage.setItem('totalPriceProduct', total)
    }
    let totalWeight = 0
    if (productsShipment.isFetched) {
      let count =
        productsShipment &&
        productsShipment.data.data.cart
      for (let i = 0; i < count.length; i++) {
        totalWeight = totalWeight + count[i].quantity * count[i].product.weight
      }
      setWeightP(totalWeight)
    }


  }, [productsShipment.isFetched]);
  const onSubmit = (e) => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer xFoEHJl9L27vW7V3gmKgFuKQ5JLp2qwbwxV3lb5e"
    );
    myHeaders.append(
      "Cookie",
      "PHPSESSID=ef037053223beaf1455443765cfe28c5; _csrf=x65Hp8HiUrHrKgLYyCq_GMgw7tB6kwpm"
    );

    const formdata = new FormData();
    formdata.append("weight", weightP);
    formdata.append("shipper_id", "1");
    formdata.append("country_id", e);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "https://api.craftmeets.design/v1/shipping/get-shipment",
      requestOptions
    )
      .then((res) => res.text())
      .then((result) => {
        setShippingPrice(JSON.parse(result))
        window.localStorage.setItem('shipping_price', result)
      })
      .catch((error) => console.log("error", error));
  };

  const orderSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer NMky9_eySwUYM1MyRLXpu37iqBkCuTC-1pFXs9bx"
    );
    myHeaders.append("Cookie", "PHPSESSID=7bb2ee1b720fdae86a6383f2d6182c0c");

    var formdata = new FormData();

    if (tokenHas) {
      formdata.append("user_token", `${token}`);
      formdata.append("shipper_id", "1");
      formdata.append("weight", weightP);
      formdata.append("shipping_price", shippingPrice.price);
    } else {
      formdata.append("guest_unique_id", unique_id);
      formdata.append("first_name", productData.firstName);
      formdata.append("last_name", productData.lastName);
      formdata.append("phone", productData.phoneNumber);
      formdata.append("email", productData.email);
      formdata.append("country", productData.countryId);
      formdata.append("city", productData.city);
      formdata.append("zip_code", productData.zipCode);
      formdata.append("address", productData.address);
      formdata.append("comments", productData.comment);
      formdata.append("shipper_id", '1');
      formdata.append("weight", weightP);
      formdata.append("shipping_price", shippingPrice.price);
    }
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("https://api.craftmeets.design/v1/shop/save-order", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        window.localStorage.setItem('order_info', result)
      })
      .catch((error) => console.log("error", error));

      setShowOpen(true)
  };
  return (
    <div className="form_block_checkout">
      <div className="container">
        <div className="bread">
          <p>
            Home <span className="black_txt">/ Shop / Checkout</span>
          </p>
        </div>
        <form action="" onSubmit={(e) => orderSubmit(e)}>
          <div className="block">
            <div className="block8">
              <div className="block4">
                <div className="block1">
                  <p className="text1">First name</p>
                  <Input
                    name="firstName"
                    placeholder="First name"
                    required={true}
                    value={productData.firstName}
                    size="large"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <p className="text1">Phone</p>
                   <Input
                    name="phoneNumber"
                    placeholder="Phone number"
                    required={true}
                    value={productData.phoneNumber}
                    size="large"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                  <p className="text1">Country</p>
                   <div className="antd_selector">
                   <Select
                      showSearch
                      style={{ width: "100%", height: "100%" }}
                      placeholder="Search to Country"
                      optionFilterProp="children"
                      onChange={(e) => {
                        onSubmit(e)
                        setProductData({...productData, countryId: e })
                      }}
                      autoFocus={true}
                      size="large"
                      required={true}
                    >
                      {shippingCountries.map((el, index) => (
                        <Option key={index} value={`${el.id}`}>
                          {el.name}
                        </Option>
                      ))}
                    </Select>
                   </div>

                  <p className="text1">ZIP Code</p>
                  <Input
                    name="zipCode"
                    placeholder="Zip code"
                    required={true}
                    value={productData.zipCode}
                    size="large"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        [e.target.name]: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="block2">
                  <p className="text1">Last name</p>
                  <Input
                  required={true}
                  size="large"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    value={productData.lastName}
                    name="lastName"
                    type="text"
                    className="input1"
                    placeholder="Last name"
                  />
                  <p className="text1">Email</p>
                  <Input
                  size="large"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    value={productData.email}
                    name="email"
                    type="text"
                    className="input1"
                    placeholder="Email"
                    required={true}
                  />

                  <p className="text1">City</p>
                  <Input
                  required={true}
                  size="large"
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    value={productData.city}
                    name="city"
                    type="text"
                    className="input1"
                    placeholder="City"
                  />

                  <p className="text1">Street name , house number</p>
                  <Input
                  size="large"
                  required={true}
                    onChange={(e) =>
                      setProductData({
                        ...productData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    value={productData.address}
                    name="address"
                    type="text"
                    className="input1"
                    placeholder="Address"
                  />
                </div>
              </div>

              <div className="block9">
                <p className="text1">Comment</p>
                <TextArea
                  onChange={(e) =>
                    setProductData({
                      ...productData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  value={productData.comment}
                  name="comment"
                  className="textarea1"
                  placeholder="Comment"
                />
              </div>
            </div>
            <div className="block3">
              <p className="text2">Cart total</p>
              {productsShipment.isFetched ? (
                productsShipment &&
                productsShipment.data.data.cart.map((el, index) => (
                  <div className="block5" key={index}>
                    <p className="text3">{el.product.name}</p>
                    <p className="text4">x{el.quantity}</p>
                    <p className="text5">$ {el.product.price}</p>
                    <p className="text5" style={{width: 'auto'}}>$ {parseInt(el.quantity) * parseInt(el.product.price)}</p>
                  </div>
                ))
              ) : (
                <Loading/>
              )}
              <div className="block_total">
                <div className="first_total">
                  <span>Subtotal</span>
                  <span>$ {totalPrice}</span>
                </div>
                <div className="first_total">
                  <span>Delivery</span>
                  <span>$ {shippingPrice && shippingPrice.price}</span>
                </div>
                <div className="first_total">
                  <span>Total</span>
                  <span>
                   $ {parseInt(totalPrice) +
                      parseInt(shippingPrice && shippingPrice.price)}
                  </span>
                </div>
                <div className="first_total">
                  <span>Weight</span>
                  <span>{weightP.toFixed(2)} kg</span>
                </div>
              </div>
              <button className="btn1">Order</button>
              <StrictMode>
                <Modal open={showOPen} onClose={() => setShowOpen(false)}>
                  <CheckoutPay />
                </Modal>
              </StrictMode>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;