import React, { useState } from "react"
import Coverflow from "react-coverflow"
import "../styles/about.scss"

const CoverFlow = () => {
  const [activeIndex, setActiveIndex] = useState(3) // Starting at the middle image

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % 6) // Assuming you have 6 images
  }

  const handlePrev = () => {
    setActiveIndex(prevIndex => {
      if (prevIndex === 0) {
        return 5 // Wrap around to the last image index (assuming 6 images, 0-indexed)
      } else {
        return prevIndex - 1
      }
    })
  }

  //   const handlePrev = () => {
  //     setActiveIndex((prevIndex) => {
  //       const newIndex = (prevIndex - 1) % 6; // Assuming you have 6 images
  //       return newIndex;
  //     });
  //   };

  const coverflowContainerStyle = {
    position: "relative",
    width: "fit-content", // Adjust width based on the content size
    height: "fit-content", // Adjust height based on the content size
    margin: "auto", // Center the container horizontally
  }

  const buttonStyle = {
    cursor: "pointer",
    fontSize: "16px",
  }

  const buttons = {
    display: "flex",
    position: "absolute",
    bottom: "10px",
    width: "100%",
    justifyContent: "center", // Center the buttons horizontally
    gap: "16px", // Space between buttons
    zIndex: "99999",
  }

  return (
    <div style={coverflowContainerStyle}>
      <div style={buttons}>
        <button
          className="buttonStyle"
          style={buttonStyle}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="buttonStyle"
          style={buttonStyle}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      <Coverflow
        displayQuantityOfSide={2}
        navigation={false}
        active={activeIndex}
        enableScroll={false}
        enableHeading={true}
        media={{
          "@media (max-width: 900px)": {
            width: "300px",
            height: "350px",
            fontSize:"6px",
            userSelect:"none"
          },
          "@media (min-width: 900px)": {
            width: "960px",
            height: "500px",
            userSelect:"none"
          },
        }}
      >
        <img
          src="https://i.scdn.co/image/ab67616d00001e0298890ab31b06f44bcc40db75"
          alt="Modern Baseball - You're Gonna Miss It All"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e027b6e8e01a00f177dc80e5d37"
          alt="Glitterer - Life Is Not A Lesson"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02ab6c683264ddc16e2b1bf47b"
          alt="Touché Amoré - Is Survived By"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e0290fb18e06e115f5baa7ea27f"
          alt="Hesitation Wounds - Awake For Everything"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e021e0f1079538af43dcd994022"
          alt="Modern Life Is War - Witness"
        />
        <img
          src="https://i.scdn.co/image/ab67616d00001e02b15ba51b8751b5cf5a03eafd"
          alt="Alexisonfire - Crisis"
        />
      </Coverflow>
    </div>
  )
}

export default CoverFlow
