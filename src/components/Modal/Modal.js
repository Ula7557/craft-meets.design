import styles from './modal.module.scss'

import React from 'react'
import  ReactDOM  from 'react-dom'
import xbutton from "../../assets/xbutton.png"

function Modal({children, open, onClose}) {
    if (!open) return null
  return ReactDOM.createPortal(
    <>
        <div  onClick={onClose} className={styles.overlay}>
          <button className={styles.xbutton} onClick={onClose}>
            <img src={xbutton} alt=""/>
          </button>
        </div>
        <div className={styles.modal_wrapper}>
            {children}
        </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal