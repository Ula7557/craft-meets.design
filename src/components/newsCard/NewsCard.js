import styled from "./newscard.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const NewsCard = ({ id, name, description, category, date, image,type }) => {
  const utilDate = new Date(date * 1000);
  const day = utilDate.toLocaleString("en-US", { day: "numeric" });
  const month = utilDate.toLocaleString("en-US", { month: "long" });
  const year = utilDate.toLocaleString("en-US", { year: "numeric" });
  const [open1, setOpen1] = useState(false)
//   let newDesc

//   if(typeof description !== "string"){
//      newDesc = description[1].props.children
//   }else{
//      newDesc = description
//   }
//   let numb = 0;
//   let satr = "";
  
//   if(typeof newDesc === "string"){
//   for (let i = 0; i < newDesc.length; i++) {
//     satr += newDesc[i];
//     if (newDesc[i] == " ") {
//       numb += 1;
//     }
//     if (numb == 50) {
//       break;
//     }
//   }
// }
  return (
    <div  className={styled.news_card}>
      <Link to={`/single/${type}/${id}`} className={styled.card_top}>
        <img src={image} alt="" />
      </Link>
      <div className={styled.news_content}>
        <h2 className={styled.card_name}>{name}</h2>
        <div className={styled.card_set}>
          <div className={styled.card_cate}>
            <span className={styled.Category}>Category: </span>
            <span>{category}</span>
          </div>
          <span>{`${day} ${month}, ${year}`}</span>
        </div>
        <div className={open1 ? styled.opened : styled.wrapper_p}> {description}</div>
        <button 
         onClick={() => setOpen1(!open1)}
        className={styled.threedots} > . . .</button>
      </div>
    </div>
  );
};

export default NewsCard;
