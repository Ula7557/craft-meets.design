import React from "react";
import classes from "./Tracking.module.scss";
import trackingprofile from "../../assets/images/trackingprofile.png"
const Tracking = () => {
  return (
    <div className={classes.tracking_wrapper}>
      <ul className={classes.left_side_list}>
        <li className={classes.left_list_title}>Order info</li>
        <div className={classes.profile_wrapper}>
            <img src={trackingprofile} alt=""/>
            <div>
        <li>
          <span className={classes.grey_text}></span>Marshal Rock
        </li>
        <li>
          <span className={classes.grey_text}></span>rockmarshal@gmail.com
        </li>
        </div>
        </div>
      </ul>
      <div className={classes.rightside_container}>
        <p className={classes.destination}>
          Destination country{" "}
          <span className={classes.grey_text}>
            - Cache time 2022 06 30 22:00
          </span>
        </p>
        <div className={classes.stepper_wrapper}>
          <div>
            <span>4</span>
            <p>Lorem ipsum dolor sit amet, 2022 06 29 18:00</p>
          </div>

           <div>
            <span>3</span>
            <p>Lorem ipsum dolor sit amet, 2022 06 29 18:00</p>
          </div>

           <div>
            <span>2</span>
            <p>Lorem ipsum dolor sit amet, 2022 06 29 18:00</p>
          </div>

           <div className={classes.last_stepper}>
            <span>1</span>
            <p>Lorem ipsum dolor sit amet, 2022 06 29 18:00</p>
          </div>
        </div>
        <p className={classes.destination2}>
          Origin country{" "}
          <span className={classes.grey_text}>
            - Cache time 2022 06 12 12:00
          </span>
        </p>
      </div>
    </div>
  );
};

export default Tracking;
