import React, {} from "react";
import axios from 'axios'
import { useRef, useState } from "react";
import { message } from "antd";
import './contact.scss'
export default function Contact() {

    const [contactData, setContactData] = useState({
        name:"",
        number: "",
        message: "",
    })

    const nameRef = useRef();
    const numberRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        nameRef.current.classList.remove("require");
        numberRef.current.classList.remove("require");
        messageRef.current.classList.remove("require");
        if (nameRef.current.value.length === 0) {
            return nameRef.current.classList.add("require");
        }
        if (numberRef.current.value.length === 0) {
            return numberRef.current.classList.add("require");
        }
        if (messageRef.current.value.length === 0) {
            return messageRef.current.classList.add("require");
        }
        

        const bodyFormData = new FormData();

        bodyFormData.append("name", contactData.name);
        bodyFormData.append("number", contactData.number);
        bodyFormData.append("message", contactData.message);


        

        let myHeaders = new Headers();
        myHeaders.append(
            "Authorization",
            "Bearer xFoEHJl9L27vW7V3gmKgFuKQ5JLp2qwbwxV3lb5e"
        );

        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: bodyFormData,
            redirect: "follow",
        };

        fetch("https://api.craftmeets.design/v1/resources/send-contact-message", requestOptions)
            .then((response) => response.text())
            .then((result) => console.log(result))
            .catch((error) => console.log("error", error));

            setContactData({
                name:'',
                number:'',
                message:'',
            })
        message.success('Successfuly send your feedback !')
    }

    return(
        <div className="contact_page container" >
            <div className="contact_page_left" >
                <div className="item_contact" >
                    <h2 className="title_contact" >Phone number</h2>
                    <a href="tel: +998 (93) 505 06 63" className="text_contact">+998 (93) 505 06 63</a>
                </div>
                <div className="item_contact" >
                    <h2 className="title_contact" >Email address</h2>
                    <a href="mail: info-cmd@dacoreit.com" className="text_contact">info-cmd@dacoreit.com</a>
                </div>
                <div className="item_contact" >
                    <h2 className="title_contact" >Address</h2>
                    <a href="#" className="text_contact">60 Katartal, Chilanzar district, Tashkent, Uzbekistan</a>
                </div>
            </div>
            <form onSubmit={(e) => handleSubmit(e)} className="contact_page_right">
                <h2 className="contact_page_right_item">CONTACT US</h2>
                <label>
                    Full Name
                    <input
                     placeholder="Full Name"
                        type="text"
                        name="name"
                        ref={nameRef}
                        value={contactData.name}
                        onChange={(e) =>
                            setContactData({ ...contactData, [e.target.name]: e.target.value })
                        }
                          />
                </label>
                <label>
                     Phone number
                    <input
                     placeholder="Phone number"
                      type='number'
                        name="number"
                        ref={numberRef}
                        value={contactData.number}
                        onChange={(e) =>
                            setContactData({ ...contactData, [e.target.name]: e.target.value })
                        }  />
                </label>
                <label>
                    Message
                    <textarea
                     placeholder="Message"
                      type='text'
                        name="message"
                        ref={messageRef}
                        value={contactData.message}
                        onChange={(e) =>
                            setContactData({ ...contactData, [e.target.name]: e.target.value })
                            }  />
                </label>
                <button className="send_btn" >Send messages</button>
            </form>
        </div>
    )
}