import React from 'react'
import { useState } from 'react'
import styles from './settings.module.scss'



export default function Settings() {
  const dbToken = JSON.parse(localStorage.getItem('token'))
  const token = dbToken && dbToken.token

  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  })
  const onSubmit = ()=>{
    let formdata = new FormData()
    let myheaders = new Headers()
    formdata.append('firstname', form.firstname)
    formdata.append('lastname', form.lastname)
    formdata.append('email', form.email)
    formdata.append('phone', form.phone)
    myheaders.append('Authorization', `Bearer ${token}`)
    let requestOptions = {
      method: "POST",
      headers: myheaders,
      body: formdata,
      redirect: 'follow'
    }
    fetch('https://api.craftmeets.design/v1/profile/update-user-info', requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log(error))
    setTimeout(() => {
      window.location.reload()
    }, 1000);
  }
  return (
    <div className={styles.settings_wrapper}>
      <h1>Settings</h1>
      <div className={styles.form_holder}>
          <div className={styles.nimadir}>
            <label htmlFor="name">First name *</label>
            <input type="text" name="firstname" id="name" placeholder='Text' value={form.firstname}
              onChange={(e) => setForm({...form, [e.target.name] : e.target.value})}
            />
          </div>
          <div className={styles.nimadir}>
            <label htmlFor="Last">Last name *</label>
            <input type="text" name="lastname" id="Last" placeholder='Text' value={form.lastname}
               onChange={(e) => setForm({...form, [e.target.name] : e.target.value})}
            />
          </div>
          <div className={styles.nimadir}>
            <label htmlFor="Email">Email *</label>
            <input type="text" name="email" id="Email" placeholder='Text' value={form.email}
               onChange={(e) => setForm({...form, [e.target.name] : e.target.value})}
            />
          </div>
          <div className={styles.nimadir}>
            <label htmlFor="Phone">Phone *</label>
            <input type="text" name="phone" id="Phone" placeholder='Text' value={form.phone}
               onChange={(e) => setForm({...form, [e.target.name] : e.target.value})}
            />
          </div>
      </div>

      <h1 className={styles.holder}>SHIPPING INFO</h1>
      <div className={`${styles.form_holder} ${styles.active}`}>
          <div className={styles.nimadir}>
            <label htmlFor="name">Country *</label>
            <input type="text" name="" id="name" placeholder='Text'/>
          </div>
          <div className={styles.nimadir}>
            <label htmlFor="Last">Region *</label>
            <input type="text" name="" id="Last" placeholder='Text'/>
          </div>
          <div className={styles.nimadir}>
            <label htmlFor="Email">City *</label>
            <input type="text" name="" id="Email" placeholder='Text'v/>
          </div>
          <div className={styles.nimadir}>
            <label htmlFor="Phone">Street *</label>
            <input type="text" name="" id="Phone" placeholder='Text'/>
          </div>
          <div className={styles.nimadir}>
            <label htmlFor="Phone">Adress *</label>
            <input type="text" name="" id="Phone" placeholder='Text'/>
          </div>
          <div className={styles.nimadir}>
            <label htmlFor="Phone">ZIP code *</label>
            <input type="text" name="" id="Phone" placeholder='Text'/>
          </div>
      </div>
      <button type='submit' onClick={(e)=> onSubmit(e)}>Save</button>
    </div>
  )
}
