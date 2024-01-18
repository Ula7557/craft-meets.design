// import styles from "./singlecountry.module.scss";
// import "./slider.scss";

// import Image from "../../assets/images/person1.png";

// import { useEffect, useState } from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
// import Loading from "../../components/loading/Loading";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// const SingleCountry = ({ match }) => {
//   
  

  
//   const options1 = {
//     margin: 30,
//     responsiveClass: true,
//     nav: true,
//     dots: true,
//     navText: false,
//     smartSpeed: 1600,
//     autoplay: false,
//     mouseDrag: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       400: {
//         items: 1,
//       },
//       500: {
//         items: 1.5,
//       },
//       600: {
//         items: 1.5,
//       },
//       700: {
//         items: 1.5,
//       },
//       900: {
//         items: 2,
//       },
//       1024: {
//         items: 3,
//       },
//       1400: {
//         items: 3,
//       },
//       1500: {
//         items: 4,
//       },
//     },
//   };
//   const options2 = {
//     margin: 30,
//     responsiveClass: true,
//     nav: true,
//     dots: true,

//     navText: false,
//     smartSpeed: 2100,
//     autoplay: false,
//     mouseDrag: true,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       400: {
//         items: 1,
//       },
//       500: {
//         items: 1.5,
//       },
//       600: {
//         items: 1.5,
//       },
//       700: {
//         items: 1.5,
//       },
//       900: {
//         items: 2,
//       },
//       1024: {
//         items: 3,
//       },
//       1400: {
//         items: 3,
//       },
//       1500: {
//         items: 4,
//       },
//     },
//   };

//   const someArr = [1, 2, 3, 4];
//   const categoryButtons = [
//     {
//       name: "Ceramics",
//       icon: <Ceramics />,
//       id: 1,
//     },
//     {
//       name: "Textile",
//       icon: <Textle />,
//       id: 6,
//     },
//     {
//       name: "Jewellery",
//       icon: <Wood />,
//       id: 7,
//     },
//     {
//       name: "Embroidery",
//       icon: <Carpet />,
//       id: 2,
//     },
//     {
//       name: "Visual art",
//       icon: <VisualArt />,
//       id: 8,
//     },
//   ];

//   return (
//     <div className={styles.single_country_wrapper}>
//       <div className="container">
//         <div className={styles.place_name}>
//           {/* <h1 className={styles.name}>Crafts in Samarkand</h1> */}
          
//         </div>

//         <div className={styles.sliders_wrapper}>
//           <div className={styles.artisans}>
//             <h1>Artisans</h1>

//             <div className={styles.slider}>
//               
//             </div>
//           </div>
//           {/* <div className={styles.crafts}>
//             <h1>Crafts</h1>
//             <div className={styles.slider}>
//               <OwlCarousel
//                 className="owl-theme"
//                 loop
//                 margin={10}
//                 nav
//                 {...options1}
//               >
//                 {someArr.map((el) => (
//                   <div className={styles.craft_slide}>
//                     <div className={styles.card_top}>
//                       <img src={Image} alt="" />
//                     </div>
//                     <div className={styles.card_content}>
//                       <div className={styles.little_things}>
//                         <div>
//                           <span className={styles.like}>13k</span>
//                           <span className={styles.comment}>1023</span>
//                         </div>
//                         <span className={styles.view}>20k</span>
//                       </div>
//                       <h3>
//                         Lorem ipsum dolor sit amet consectetur adipiscing elit
//                       </h3>
//                       <div className={styles.card_person}>
//                         <p>
//                           Lorem ipsum dolor sit amet, consectetur adipiscing
//                           elit, sed do eiusmod tempor incididunt ut labore et
//                           dolore magna aliqua.
//                         </p>
//                         <img src={Image} alt="" />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </OwlCarousel>
//             </div>
//           </div>
//           <div className={`${styles.crafts} ${styles.active}`}>
//             <h1>Crafts tour</h1>
//             <div className={styles.slider}>
//               <OwlCarousel
//                 className="owl-theme"
//                 loop
//                 margin={10}
//                 nav
//                 {...options2}
//               >
//                 {someArr.map((el) => (
//                   <div>
//                     <div className={styles.craft_slide}>
//                       <div className={`${styles.card_top} ${styles.active}`}>
//                         <img src={Image} alt="" />
//                       </div>
//                       <div className={styles.card_content}>
//                         <div className={styles.little_things}>
//                           <span className={`${styles.view} ${styles.active}`}>
//                             5 days tour
//                           </span>
//                         </div>
//                         <h3>
//                           Lorem ipsum dolor sit amet consectetur adipiscing elit
//                         </h3>
//                         <div
//                           className={`${styles.card_person} ${styles.active}`}
//                         >
//                           <p>
//                             Lorem ipsum dolor sit amet, consectetur adipiscing
//                             elit, sed do eiusmod tempor incididunt ut labore et
//                             dolore magna aliqua.
//                           </p>
//                           <img src={Image} alt="" />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </OwlCarousel>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleCountry;
