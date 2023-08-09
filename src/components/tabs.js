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
import geico from "../images/funko/geico.png"
import geicomobile from "../images/funko/geicomobile.png"
import giftflow from "../images/funko/giftflow.png"
import giftmodal from "../images/funko/giftmodal.png"
import giftbanner from "../images/funko/giftbanner.png"
import giftplp from "../images/funko/giftplp.png"
import cart from "../images/funko/cart.png"
import geicoflow from "../images/funko/geicoflow.png"

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

// function a11yProps(index) { // eslint-disable-line

//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   }
// }

export default function BasicTabs() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <div style={{ marginTop: "120px" }} className="funko-container top-part">
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
          className="funko-container navigation"
          value={value}
          onChange={handleChange}
          variant="scrollable"
          // scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          <Tab label="Employee Holiday Site" />
          <Tab label="Choose Your Own Gift" />
          <Tab label="Geico x Funko" />
          <Tab label="Convention Tracker" />
          {/* <Tab label="Pop! Yourself" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" /> */}
        </Tabs>
      </Box>
      <div>
        {/* Holiday Site */}
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
        {/* Choose your own gift */}
        <CustomTabPanel value={value} index={1}>
          <div className="funko-container">
            <h1>Choose Your Own Gift</h1>
            <div>
              <h2 style={{ marginBottom: "8px" }}>Overview</h2>
              <p>
                The 'Choose your own gift' feature was a promotional offer that
                provided customers with the option to select a free gift when
                their cart's total value exceeded a certain threshold. As shown
                in the prototype below, if a user were to choose 'No Thanks,'
                they would not lose the opportunity. Instead of selecting a gift
                at that moment, they would be given another opportunity when
                they proceed to their cart.
              </p>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h2>User Flow</h2>
              <p>
                Creating a user flow in Lucidchart was crucial to ensure a
                successful developer handoff and feature launch. The complexity
                of this feature escalates when a user's cart hovers around the
                cart value threshold, but as you will see below that has been
                accounted for in the designs. A customer will never lose the
                opportunity for the free gift as long as the value of their cart
                meets the threshold.
              </p>
              <img
                width={"75%"}
                style={{ paddingTop: "40px", display: "block", margin: "auto" }}
                src={giftflow}
                alt="choose your own gift user flow"
              />
            </div>
            <h2 style={{ marginTop: "80px" }}>Design</h2>
            <div className="gift-grid">
              <figure>
                <img
                  width={"50%"}
                  src={giftmodal}
                  alt="choose your own gift modal"
                />
                <figcaption>Choose your own gift modal</figcaption>
              </figure>
              <figure style={{ display: "block", margin: "auto" }}>
                <img
                  width={"100%"}
                  src={giftbanner}
                  alt="choose your own gift cart banner"
                />
                <figcaption>Cart banner</figcaption>
              </figure>
              <figure>
                <img
                  width={"100%"}
                  src={giftplp}
                  alt="choose your own gift modal"
                />
                <figcaption>Product List Page with modal popup</figcaption>
              </figure>
              <figure>
                <img
                  width={"100%"}
                  src={cart}
                  alt="choose your own gift modal"
                />
                <figcaption>Banner in cart when no gift is selected</figcaption>
              </figure>
            </div>
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
        {/* Geico */}
        <CustomTabPanel value={value} index={2}>
          <div className="funko-container">
            <h1>Geico x Funko Giveaway</h1>
            <div>
              <h2>Overview</h2>
              <p>description here</p>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h2>User Flow</h2>
              <p>
                Below is the user flow for a Geico x Funko giveaway winner. A
                winning customer, who wishes to claim their prize, follows the
                instructions emailed to them and then proceeds to the Funko
                redemption site.
              </p>
              <img
                width={"40%"}
                style={{ paddingTop: "40px", display: "block", margin: "auto" }}
                src={geicoflow}
                alt="choose your own gift user flow"
              />
            </div>
            <div>
              <h2>Design</h2>
              <figure>
                <img
                  className="geico-img"
                  src={geico}
                  alt="geico redemption site"
                />
                <figcaption>Geico x Funko winner redemption site</figcaption>
              </figure>
              <figure>
                <img
                  className="geico-mobile"
                  src={geicomobile}
                  alt="geico redemption site mobiel view"
                />
                <figcaption>
                  Mobile view of Geico x Funko <br></br>winner redemption site
                </figcaption>
              </figure>
            </div>
          </div>
        </CustomTabPanel>
        {/* Convention Tracker */}
        <CustomTabPanel value={value} index={3}>
          <div className="funko-container">
            <h1>Convention Tracker</h1>
            <div>
              <h2>Overview</h2>
              <p>
                For use in major conventions such as San Diego Comic Con and New
                York Comic Con, this convention tracker is for fans to see what
                will be available for sale ahead of time on their own device.
                The wishlist feature allows users to mark specific items to keep
                track of what they specifically want out of the larger list.
              </p>
            </div>
            <div style={{ marginTop: "40px" }} className="two-grid">
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
      </div>
    </Box>
  )
}
