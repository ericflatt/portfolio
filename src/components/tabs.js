import * as React from "react"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import "../styles/funko.scss"
import holiday from "../images/videos/holidaysite.mp4"
import holidayone from "../images/funko/holidaysite/onemobile.png"
import holidaytwo from "../images/funko/holidaysite/twomobile.png"
import holidaythree from "../images/funko/holidaysite/threemobile.png"
import freegift from "../images/videos/freegift.mp4"
import tracker from "../images/funko/sdcc-tracker.png"
import wishlist from "../images/funko/sdcc-wishlist.png"

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  // eslint-disable-line

  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <div style={{ marginTop: "120px" }} className="funko-container">
          <h1>Hello,</h1>
          <p>
            Most recently I was a UX/UI Designer on the digital experience team
            at Funko.
            <br></br>
            Select a project below to see what I worked on.
            <br></br>
            More content coming soon...
          </p>
        </div>
        <Tabs
          className="funko-container"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          // scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Employee Holiday Site" />
          <Tab label="Choose Your Own Gift" />
          <Tab label="Convention Tracker" />
          <Tab label="Pop! Yourself" />
          <Tab label="Item Five" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" />
        </Tabs>
      </Box>
      <div>
        <CustomTabPanel value={value} index={0}>
          <div className="funko-container">
            <h1 className="tab-title">Employee Holiday Site</h1>
            <div>
              <h2 style={{ marginBottom: "8px" }}>Overview</h2>
              <p>
                For the 2022 holiday season I designed a choose your gift
                experience for employees of the Funko family of brands. The gift
                selection experience was followed by the native shopify checkout
                flow.
              </p>
            </div>
            <div>
              <h2 style={{ marginBottom: "8px" }}>Design</h2>
              <p style={{ marginTop: "0" }}>
                Designed with a mobile first mindset so employees can take part
                from anywhere. On the live website, the background snow flakes
                were animated for a fun holday touch.
              </p>
              <div className="three-grid">
                <div>
                  <img alt="holiday site" src={holidaytwo} />
                </div>
                <div>
                  <img alt="holiday site" src={holidayone} />
                </div>
                <div>
                  <img alt="holiday site" src={holidaythree} />
                </div>
              </div>
            </div>
            <div>
              <h2>Prototype</h2>
              <video
                className="video-container"
                autoPlay
                muted
                loop
                controls
                src={holiday}
              />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="funko-container">
            <h1>Choose Your Own Gift</h1>
            <div>
              <h2>Prototype</h2>
              <video
                className="video-container"
                autoPlay
                muted
                loop
                controls
                src={freegift}
              />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="funko-container">
            <h1>Convention Tracker</h1>
            <div>
              <h2>Overview</h2>
              <p>
                For use in major conventions such as San Diego Comic Con and New York Comic Con, this convention tracker is for fans to see what will be available for sale ahead of time on their own device. The wishlist feature allows users to mark specific items to keep track of what they specifically want out of the larger list.
              </p>
            </div>
            <div className="two-grid">
              <div>
                <figure>
                  <img src={tracker} alt="tracker" />
                  <figcaption>Convention item list</figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img src={wishlist} alt="wishlist" />
                  <figcaption>Wishlist feature</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}></CustomTabPanel>

        {/* <footer className="funko-container funko-footer">
          <p>
            Please note: All projects during my employment at Funko are the sole
            property of Funko.
          </p>
        </footer> */}
      </div>
    </Box>
  )
}
