import React from "react"

const Hotspot = ({ left, top, width, height }) => {
  const stylePosition = {
    width: width,
    height: height,
    top: top,
    left: left,
    position: "absolute",
    backgroundColor: "rgba(255,0,0,0.2)",
  }

  return <div className="hotspot" style={stylePosition} />
}

export default Hotspot
