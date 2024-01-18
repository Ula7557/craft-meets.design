import React from 'react'
import classes from "./Contact.module.scss" 

const Contact = () => {
  return (
    <div className={classes.contact_wrapper}>
        <h1 className={classes.contact_title}>
           CONTACT
        </h1>
       <form>
           <div className={classes.input_wrapper}>
            <label>
              Name 
              <span className={classes.required}>*</span> 
           </label>
           <input placeholder="Text" type="text"/>
           </div>

           <div className={classes.input_wrapper}>
            <label>
              Last name  
              <span className={classes.required}>*</span> 
           </label>
           <input placeholder="Text" type="text"/>
           </div>

           <div className={classes.input_wrapper}>
            <label>
              Email  
              <span className={classes.required}>*</span> 
           </label>
           <input placeholder="Text" type="text"/>
           </div>

           <div className={classes.input_wrapper}>
            <label>
              Subject
              <span className={classes.required}>*</span> 
           </label>
           <input placeholder="Text" type="text"/>
           </div>
           
       </form> 
       <button>
           Send
       </button>  
    </div>
  )
}

export default Contact