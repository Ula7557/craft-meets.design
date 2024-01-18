import styles from "./login.module.scss";
import React from "react";
import { useState } from "react";
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import './antd-config.scss'
import { message } from 'antd';

export default function Login() {
  const [changer, setChanger] = useState("two");
  const [infoData, setInfoData] = useState({
    username: '',
    password: '',
    email: '',
    firstname: '',
    lastname: ''
  })

  const [signIn, setSignIn] = useState({
    identity: '',
    password: ''
  })

  const [alert, setAlert] = useState()

  const signUpClick = (e) => {
    e.preventDefault()
    let myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer xFoEHJl9L27vW7V3gmKgFuKQ5JLp2qwbwxV3lb5e"
    );
  let formdata = new FormData();
    formdata.append("username", infoData.username);
    formdata.append("password", infoData.password);
    formdata.append("email", infoData.email);
    formdata.append("firstname", infoData.firstname);
    formdata.append("lastname", infoData.lastname);

    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch("https://api.craftmeets.design/v1/auth/signup", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        setAlert(JSON.parse(`${result}`))
        if(JSON.parse(result).success) {
          setChanger('one')
        }else{
          message.warning(JSON.parse(result).messsage)
        }
      })
      .catch((error) => console.log("error", error));
  };


  

  const signInClick = (e)=>{
    e.preventDefault()
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer NMky9_eySwUYM1MyRLXpu37iqBkCuTC-1pFXs9bx");

    var formdata = new FormData();
    formdata.append("identity", signIn.identity);
    formdata.append("password", signIn.password);

    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://api.craftmeets.design/v1/auth/login", requestOptions)
      .then(response => response.text())
      .then(result => {
        if(JSON.parse(result).success){
          window.localStorage.setItem('token', result)
          window.location.reload()
        }else{
          message.warning('Incorrect username or password')
        }
      })
      .catch(error => console.log('error', error));
  }

 

  return (
    <div className={styles.login_wrapper}>
      {changer === "one" ? (
        <div className={styles.sign_in}>
          <h1>Sign in</h1>
          <form action="" onSubmit={(e) => signInClick(e)}>
          <label htmlFor="email">Username</label>
          <Input value={signIn.identity} name="identity" required={true} placeholder="Username"
            onChange={(e) => setSignIn({...signIn, [e.target.name]: e.target.value})}
          />
          <label htmlFor="pass">Password</label>
          <Input.Password
            placeholder="Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            value={signIn.password}
            name="password"
            onChange={(e)=> setSignIn({...signIn, [e.target.name] : e.target.value})}/>

          <div className={styles.rem}>
            <input type="checkbox" name="" id="rem" placeholder="Text" />
            <label htmlFor="rem">Remember me</label>
          </div>

          <div className={styles.rem}>
            <button
              onClick={() => setChanger("three")}
              className={styles.forget}
            >
              Forget password
            </button>
          </div>

          <button type="submit">Sign in</button>
          </form>

          <div className={styles.some_text}>
            <h4>
              Don’t have an account ?{" "}
              <span onClick={() => setChanger("two")}>Sign up now</span>
            </h4>
          </div>
        </div>
      ) : changer === "two" ? (
        <div className={styles.sign_in}>
          <h1>Sign up</h1>
        <form action="" onSubmit={(e) => signUpClick(e)}>
          <label htmlFor="passs">User name *</label>
          <Input size="large" placeholder="Username" prefix={<UserOutlined />} 
            onChange={(e)=> setInfoData({...infoData, [e.target.name] : e.target.value})}
            value={infoData.username}
            name='username'
            required={true}
          />

          <label htmlFor="name" className="l1">Name *</label>
          <Input size="large" placeholder="Name" prefix={<UserOutlined />} 
            onChange={(e)=> setInfoData({...infoData, [e.target.name] : e.target.value})}
            value={infoData.firstname}
            name="firstname"
            required={true}
          />

          <label htmlFor="last" className="l1">Last name *</label>
          <Input size="large" placeholder="Last name" prefix={<UserOutlined />} 
            value={infoData.lastname}
            name="lastname"
            onChange={(e) => setInfoData({...infoData, [e.target.name] : e.target.value})}
          />


          <label htmlFor="mail" className="l1">Email *</label>
          <Input size="large" placeholder="Email" 
            value={infoData.email}
            name="email"
            onChange={(e)=> setInfoData({...infoData, [e.target.name] : e.target.value})}
          />

          <label htmlFor="pass" className="l1">Password *</label>
          <Input.Password
            placeholder="Password"
            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            value={infoData.password}
            name="password"
            onChange={(e)=> setInfoData({...infoData, [e.target.name] : e.target.value})}
    />


          <button  className={styles.button} type="submit">Sign up</button>
        </form>

          <div className={styles.some_text}>
            <h4>
              Have an account?{" "}
              <span onClick={() => setChanger("one")}>Sign in</span>
            </h4>
          </div>
        </div>
      ) : changer === "three" ? (
        <div className={styles.sign_in}>
          <h1>Forgot password</h1>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input type="mail" name="" id="email" placeholder="Text" />

          <button className={styles.margin}>Sign in</button>

          <div className={styles.some_text}>
            <h4>
              Have an account ?{" "}
              <span onClick={() => setChanger("one")}>Sign in</span>
            </h4>
          </div>
        </div>
      ) : null}
    </div>
  );
}
