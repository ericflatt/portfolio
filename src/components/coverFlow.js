// // src/CoverFlowComponent.js
// import React from "react"
// import Coverflow from "react-coverflow"
// import "../styles/about.scss"


// const CoverFlow = () => {
//   const handleAction = () => {
//     /* do your action */
//   }

//   const coverflowContainerStyle = {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//   }

//   return (
//     <div style={coverflowContainerStyle}>
//       <Coverflow
//         width="960"
//         height="fit-content"
//         displayQuantityOfSide={2}
//         navigation={false}
//         enableHeading={false}
//         // displayQuantityOfSide={2}
//         // navigation={true}
//         enableScroll={false}
//         // enableHeading={true}
//         // clickable={true}
//         // active={0}
//         // infiniteScroll
//         // currentFigureScale={1.2}
//         // otherFigureScale={0.9}
//         // margin={10}
//         media={{
//           "@media (max-width: 900px)": {
//             width: "600px",
//             height: "300px",
//           },
//           "@media (min-width: 900px)": {
//             width: "960px",
//             height: "600px",
//           },
//         }}
//       >
//         <div
//           onClick={() => handleAction()}
//           onKeyDown={() => handleAction()}
//           role="menuitem"
//           tabIndex="0"
//         >
//           <img 
//             src="https://via.placeholder.com/300x300?text=Cover+1"
//             alt="Cover 1"
//             style={{
//               display: "block",
//               width: "100%",
//             }}
//           />
//         </div>
//         <img
//           src="https://via.placeholder.com/300x300?text=Cover+3"
//           alt="Cover 2"
//         />
//         <img 
//           src="https://via.placeholder.com/300x300?text=Cover+3"
//           alt="Cover 3"
//         />
//         <img 
//           src="https://via.placeholder.com/300x300?text=Cover+3"
//           alt="Cover 3"
//         />
//         <img 
//           src="https://via.placeholder.com/300x300?text=Cover+3"
//           alt="Cover 3"
//         />
//         <img 
//           src="https://via.placeholder.com/300x300?text=Cover+3"
//           alt="Cover 3"
//         />
//       </Coverflow>
//     </div>
//   )
// }

// export default CoverFlow
