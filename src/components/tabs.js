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
import popyourself from "../images/funko/popyourself.png"
import sidenav from "../images/funko/sidenav.png"
import popmobile from "../images/funko/popmobile.png"
import testresults from "../images/funko/usertest.png"
import protector from "../images/funko/protector.png"
import mobileprotector from "../images/funko/mobileprotector.png"
import builder from "../images/funko/builder.png"
import logo from "../images/funko/funkologo.svg"
import icons from "../images/funko/icons.png"
import grids from "../images/funko/grids.png"
import searchbreakdown from "../images/funko/searchbreakdown.png"
import Collection from "../images/funko/CollectionButton.png"
import CollectionActive from "../images/funko/CollectionActive.png"
import ShareButton from "../images/funko/ShareButton.png"
import ShopNow from "../images/funko/ShopNow.png"
import searchbar from "../images/funko/searchbar.png"
import activesearch from "../images/funko/activesearch.png"
import productcard from "../images/funko/productcard.png"
import cardbar from "../images/funko/cardbar.png"
import header from "../images/funko/header.png"
import footer from "../images/funko/footer.png"
import rec from "../images/funko/rec.png"
import plp from "../images/funko/plp.png"
import homescreen from "../images/funko/homescreen.png"
import pdp from "../images/funko/pdp.png"
import lists from "../images/funko/lists.png"
import wishlistribbon from "../images/funko/wishlist.png"
import oldjess from "../images/funko/oldjess.png"
import ebayjess from "../images/funko/jess.png"
import ebaylist from "../images/funko/ebaylist.png"
import ebaydata from "../images/funko/ebaydata.png"
import ebaycollection from "../images/funko/ebaycollection.png"
import condition from "../images/funko/condition.png"
import listonebay from "../images/funko/listonebay.png"
import ebaybrowser from "../images/funko/ebaybrowser.png"
import sold from "../images/funko/sold.png"
import start from "../images/funko/start.png"
import middle from "../images/funko/middle.png"
import end from "../images/funko/end.png"
import modal from "../images/funko/modal.png"

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
        <div
          style={{ paddingTop: "120px" }}
          className="funko-container top-part"
        >
          {/* <h1>Hello,</h1> */}
          <img className="funko-logo" src={logo} alt="funko logo" />
          <br></br>
          <span style={{ textDecoration: "none", fontSize: "18px" }}>
            Most recently I was a UX/UI Designer on the digital experience team
            at Funko.
            <br></br>
            Select a project from the tabs below to see what I worked on.
          </span>
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
          <Tab label="eBay in the Mobile App" />
          <Tab label="Mobile App Design System" />
          <Tab label="Pop! Yourself" />
          <Tab label="Choose Your Own Gift" />
          <Tab label="Geico x Funko" />
          <Tab label="Employee Holiday Site" />
          <Tab label="Convention Tracker" />
          {/* <Tab label="Pop! Yourself" />
          <Tab label="Item Six" />
          <Tab label="Item Seven" /> */}
        </Tabs>
      </Box>
      <div>
        <CustomTabPanel value={value} index={0}>
          <div className="funko-container ebay-page">
            <h1>eBay Integration in the Mobile App</h1>
            <div>
              <h2>Overview</h2>
              <p>
                {" "}
                The Funko mobile app will now get its data from eBay instead of
                poppriceguide (PPG), the most impactful data point being the
                trending value of a pop. Along with this partnership also comes
                a new feature “Sell on eBay”, users can now list their pops for
                sale directly through the Funko app.
              </p>
            </div>
            <div>
              <h2>Problem</h2>
              <p>
                Users were used to and trusted PPG to get the value of their
                pops. With this data now coming from eBay, how might we gain
                their trust and provide accurate data? Within the community eBay
                has been known for having fake sales to bump up the value of
                pops.
              </p>
              <div className="jess-img">
                <figure>
                  <img src={oldjess} alt="old version of app" />
                  <figcaption>
                    An old version of the Funko app using data from PPG
                  </figcaption>
                </figure>
                <figure>
                  <img src={ebayjess} alt="new version of app" />
                  <figcaption>
                    New version of the Funko app using data from eBay
                  </figcaption>
                </figure>
              </div>
            </div>
            <div>
              <h2>Goal</h2>
              <p>
                Our goal is to provide the best experience to the user while
                still keeping the Funko app as the best tool for collectors.
              </p>
            </div>

            <div>
              <h2>Target Audience - End User</h2>
              <p>
                It is important to keep our power users, those who use the app
                as a collection tool happy with these new features. At the same
                time the room for growth is large with a new demographic of
                users, i.e. those who sell on eBay. The Funko app can provide
                those sellers an all in one tool to keep track of their
                inventory whether that be a custom list or using the default
                collection. As well as now within the same app the ability to
                list and track their product on eBay.{" "}
              </p>
            </div>

            <div>
              <h2>Role</h2>
              <p>
                My role on the team was Hi-Fidelity design, prototyping, and
                assisting with any user research or testing we performed. With
                our findings from user testing I then went back and iterated
                upon the designs using the insights gathered from research and
                testing.
              </p>
            </div>

            <div>
              <h2>Scope and Constraints</h2>
              <p>
                Working with a short timeframe, V1 of adding eBay into the app
                had to only include updating the trending value and adding the
                “Sell on eBay” feature. Keeping V1 to these two features allowed
                for proper testing and development.
              </p>
            </div>

            <div className="ebay-data">
              <h2>Solution</h2>
              <div>
                <h3>eBay trending value</h3>
                <p>
                  The trending value of pops now comes from eBay instead of PPG.
                  This allows for more accurate data due to the eBay API
                  refreshing at a much faster rate than relying on the old data
                  from poppriceguide where the data was entered manually and
                  inaccurately.
                </p>
                <img
                  style={{ boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.15)" }}
                  src={ebaydata}
                  alt="ebay trending value"
                />
                <hr></hr>
              </div>
              <div>
                <h3>eBay data shown in Product List Pages</h3>
                <p>
                  Shown below is how the new eBay data looks in product list
                  pages such as a users collection page. Depending on how
                  frequent a pop is selling, the data may change between "Last
                  Sold" and "Trending Value".
                </p>
                <img src={ebaycollection} alt="users collection" />
              </div>
              <hr></hr>
              <div>
                <h3>List on eBay</h3>
                <p>
                  Users can start their listing by clicking the CTA on the
                  specific products page. They are then brought to eBay through
                  a browser window within the Funko app using native OS
                  features.
                </p>
                <div className="jess-img ebay-browser">
                  <figure>
                    <img src={listonebay} alt="cta for list on ebay" />
                  </figure>
                  <figure>
                    <img src={ebaybrowser} alt="browser for ebay" />
                  </figure>
                </div>
              </div>
              <hr></hr>
              <div>
                <h3>My eBay List in Funko app</h3>
                <p>
                  With the new "Sell on eBay" feature comes the "My eBay List",
                  it is automatically created for users after they list their
                  first item on eBay through the app.{" "}
                </p>
                <img className="ebay-list" src={ebaylist} alt="my ebay list" />
              </div>
              <hr></hr>
              <div>
                <h3>Mark item as sold</h3>
                <p>
                  Another new feature within the "My ebay List" is the ability
                  to mark your items as sold. This allows users to keep track of
                  their total amount sold via ebay through the Funko app
                </p>
                <img src={sold} alt="marked as sold" />
              </div>
              <hr></hr>
              <div>
                <h3>Item Condition</h3>
                <p>
                  Within the "My eBay List" is now the ability to add an items
                  condition. This helps users when they have multiple of the
                  same product listed to help differentiate and keep track of
                  their inventory.
                </p>
                <img
                  style={{
                    boxShadow: "0px 4px 6px 0px rgba(0, 0, 0, 0.15)",
                    borderRadius: "8px",
                  }}
                  src={condition}
                  alt="item condition"
                />
              </div>
              <hr></hr>
              <div>
                <h3>eBay onboarding prototype</h3>
                <p>
                  As an effort to get users familiar and using these new
                  features I put together an onboarding experience. This
                  experience included the use of explanatory text along with
                  gifs to show users all the different new features included
                  with the eBay integration. A user will first see this
                  onboarding experience on first launch of the Funko app after
                  it has been made available.{" "}
                </p>
                <div className="jess-img">
                  <figure>
                    <img src={start} alt="ebay proto" />
                  </figure>
                  <figure>
                    <img src={middle} alt="ebay proto" />
                  </figure>
                  <figure>
                    <img src={end} alt="ebay proto" />
                  </figure>
                </div>
                <h3>Interactive prototype</h3>
                <p>
                  Fullscreen available and press "R" to restart. Press "ESC" to
                  exit fullscreen.
                </p>
                <p>
                  Prototype flow:
                  <br></br>
                  The Funko app loads and users are immediately dropped into the
                  onboarding experience.
                  <br></br>
                  Users can then navigate through the onboarding using the CTA's
                  or exit out immediately to the app home page.
                  <br></br>
                  The option to reference back to the onboarding is provided via
                  the "How does it work" cta on product pages.
                </p>
                <iframe
                  title="figma proto"
                  className="figma-proto"
                  style={{
                    border: "1px solid rgba(0 , 0, 0, .1)",
                    marginTop: "40px",
                  }}
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fc7vnTCBzOUAa5AAZEQfxhC%2FeBay-Onboarding-proto%3Fpage-id%3D0%253A1%26type%3Ddesign%26node-id%3D16-419%26viewport%3D-412%252C447%252C0.52%26t%3Dp1dS75FSMINVnSyd-1%26scaling%3Dscale-down%26starting-point-node-id%3D16%253A335%26mode%3Ddesign"
                  allowfullscreen="true"
                ></iframe>
              </div>
            </div>
            {/* <h3 style={{marginTop:"80px", textAlign:"center"}}>Thank You</h3> */}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="funko-container mobile-ds">
            <h1>Mobile App Design System</h1>
            <h2>Overview</h2>
            <h3 className="template-copy">
              The Funko mobile app utilizes Atomic Design methodology for its
              design system. This method allows the mobile app to have a
              scalable design system using all five stages of the atomic design
              method to breakdown the design elements into small, reusable
              components.
            </h3>
            <h2>Atoms</h2>
            <h3>
              Atoms are the base level of any design system, components broken
              down as far as they can be without ceasing functionality.
            </h3>
            <div style={{ paddingTop: "8px" }}>
              <h4>Icons used thoughout the mobile app</h4>
              <img className="icon-grid" src={icons} alt="app icons" />
            </div>
            <hr></hr>
            <div>
              <h4>Grid for mobile phones and tablets</h4>
              <img src={grids} alt="grid" />
            </div>
            <hr></hr>
            <div>
              <h4>
                Breakdown of search bar molecule into its individual atoms.
              </h4>
              <img src={searchbreakdown} alt="search" />
            </div>
            <hr></hr>
            <div>
              <h4>
                Breakdown of product card bar molecule into its individual
                atoms.
              </h4>
              <img src={cardbar} alt="product card bar" />
            </div>
            <hr></hr>
            <div>
              <h4>List library ribbon</h4>
              <img src={wishlistribbon} alt="wishlist ribbon" />
            </div>
            <hr></hr>
            <div>
              <h4>Buttons</h4>
              <div className="collection-ctas">
                <figure>
                  <img src={Collection} alt="add to collection button" />
                  <figcaption>Default Collection CTA State</figcaption>
                </figure>
                <figure>
                  <img src={CollectionActive} alt="add to collection button" />
                  <figcaption>Active Collection CTA State</figcaption>
                </figure>
              </div>
              <div style={{ paddingTop: "24px" }} className="collection-ctas">
                <figure>
                  <img src={ShopNow} alt="add to collection button" />
                  <figcaption>CTA for a Purchasable Item</figcaption>
                </figure>
                <figure>
                  <img src={ShareButton} alt="add to collection button" />
                  <figcaption>
                    Share Button Using Native OS Share Activity
                  </figcaption>
                </figure>
              </div>
            </div>
            <h2>Molecules</h2>
            <h3>
              The molecules are groups of atoms put together to create UI
              elements.
            </h3>
            <div style={{ paddingTop: "8px" }}>
              <h4>
                Search form molecule composed of label, input and button atoms
              </h4>
              <img src={searchbar} alt="search form" />
              <figure style={{ paddingTop: "24px" }}>
                <img src={activesearch} alt="active search bar" />
                <figcaption>Active Search Bar</figcaption>
              </figure>
              <hr></hr>
              <figure style={{ paddingTop: "40px" }}>
                <img src={productcard} alt="mobile app product card" />
                <figcaption>
                  Product cards used on Product List Pages
                </figcaption>
              </figure>
            </div>
            <h2>Organisms</h2>
            <h3>
              Organisms are more complex UI components made up of molecules and
              atoms.
            </h3>
            <div>
              <h4>Funko mobile app header and footer components</h4>
              <div style={{ paddingTop: "24px" }}>
                <img src={header} alt="mobile app header" />
              </div>
              <div>
                <img src={footer} alt="mobile app footer" />
              </div>
            </div>
            <hr></hr>
            <div>
              <h4>Recommended products carousel</h4>
              <img src={rec} alt="recommended products" />
            </div>
            <hr></hr>
            <div>
              <h4>PLP Product card grid in use</h4>
              <img src={plp} alt="product cards" />
            </div>
            <h2>Templates/Pages</h2>
            <h3 className="template-copy">
              Combining all the design system components creating templates to
              work off of. These templates allow for easy iteration and creating
              new features.
            </h3>
            <div>
              <h4>Funko mobile app home screen</h4>
              <img src={homescreen} alt="mobile app home screen" />
            </div>
            <hr></hr>
            <div>
              <h4>Product Display Page</h4>
              <img src={pdp} alt="mobile app pdp" />
            </div>
            <hr></hr>
            <div>
              <h4>Product List Page</h4>
              <img src={plp} alt="mobile app plp" />
            </div>
            <hr></hr>
            <div>
              <h4>Modal</h4>
              <p>
                This is an example of the basic structure of modals in the funko
                app. It can be used as a template to adapt to different needs.
              </p>
              <img src={modal} alt="modal example" />
            </div>
            <hr></hr>
            <div>
              <h4>Mobile App List Library</h4>
              <img src={lists} alt="list library" />
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <div className="funko-container">
            <h1>Pop! Yourself</h1>
            <div>
              <h2>Overview</h2>
              <span>
                Pop! Yourself online allows Funko fans to literally Pop-ify
                themselves. Until now this was available only at Funko's
                flagship stores in Everett, WA and Hollywood, CA.
                <br></br>
                <br></br>
                My role on this project was to design and prototype the builder
                experience.
              </span>
            </div>
            <h2>Design</h2>
            <div style={{ marginTop: "40px" }} className="">
              <div>
                <figure style={{ marginBottom: "40px" }}>
                  <img
                    width={"100%"}
                    src={builder}
                    alt="pop yourself looks good screen"
                  />
                  <figcaption>
                    Pop! Yourself builder "Tops & Outfits" screen. Within the
                    builder screens the user can see what option they have
                    selected from the yellow outline among the options.{" "}
                  </figcaption>
                </figure>
                <figure>
                  <img
                    width={"100%"}
                    src={popyourself}
                    alt="pop yourself looks good screen"
                  />
                  <figcaption>
                    Overview of Pop! Yourself "Looks Good" screen. Here the user
                    can choose to either buy the Pop!, save it as their avatar,
                    or choose to share and download an image of their Pop!.
                  </figcaption>
                </figure>
              </div>
              <div className="two-grid side-nav" style={{ marginTop: "40px" }}>
                <figure>
                  <img
                    className="side-nav-img"
                    src={popmobile}
                    alt="pop yourself looks good screen"
                  />
                  <figcaption>
                    Mobile View of Pop! Yourself "Looks Good" screen
                  </figcaption>
                </figure>
                <figure>
                  <img
                    src={sidenav}
                    className="side-nav-img"
                    alt="pop yourself side nav"
                  />
                  <figcaption>
                    The Pop! Yourself side navigation shows users both what
                    section of the builder experience they are currently in, as
                    well as a thumbnail image of the selection they made.
                  </figcaption>
                </figure>
              </div>
              <h2>Pop Protector Upsell</h2>
              <span>
                At the end of the builder experience users are presented with
                the option to purchase a protective case for their Pop!. To
                determine the best experience we conducted user testing with a
                small group to see which design was preferred. Below are the
                results of the user testing that played a vital role in our
                design decisions.
              </span>
              <div>
                <img width={"75%"} src={testresults} alt="user test results" />
              </div>
              <div>
                <h2>Pop Protector Upsell Design</h2>
                <div>
                  <figure>
                    <img
                      className="protector"
                      src={protector}
                      alt="pop protector upsell"
                    />
                    <figcaption>
                      Desktop view of the Pop Protector Upsell
                    </figcaption>
                  </figure>
                </div>
                <div>
                  <figure style={{ marginTop: "40px" }}>
                    <img
                      className="mobile-protector"
                      src={mobileprotector}
                      alt="pop protector upsell"
                    />
                    <figcaption>
                      Mobile view of the Pop Protector Upsell
                    </figcaption>
                  </figure>
                </div>
              </div>
              <h2>Builder Experience</h2>
              <span>
                Click this{" "}
                <a
                  rel="noreferrer"
                  className="about-link"
                  target="_blank"
                  href="https://funko.com/pop-yourself/"
                >
                  Link
                </a>{" "}
                to experience the Pop! Yourself builder.
              </span>
            </div>
          </div>
        </CustomTabPanel>
        
        {/* Choose your own gift */}
        <CustomTabPanel value={value} index={3}>
          <div className="funko-container">
            <h1>Choose Your Own Gift</h1>
            <div>
              <h2 style={{ marginBottom: "8px" }}>Overview</h2>
              <span>
                The 'Choose your own gift' feature was a promotional offer that
                provided customers with the option to select a free gift when
                their cart's total value exceeded a certain threshold. As shown
                in the prototype below, if a user were to choose 'No Thanks,'
                they would not lose the opportunity. Instead of selecting a gift
                at that moment, they would be given another opportunity when
                they proceed to their cart.
              </span>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h2>User Flow</h2>
              <span>
                Creating a user flow in Lucidchart was crucial to ensure a
                successful developer handoff and feature launch. The complexity
                of this feature escalates when a user's cart hovers around the
                cart value threshold, but as you will see below that has been
                accounted for in the designs. A customer will never lose the
                opportunity for the free gift as long as the value of their cart
                meets the threshold.
              </span>
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
        <CustomTabPanel value={value} index={4}>
          <div className="funko-container">
            <h1>Geico x Funko Giveaway</h1>
            <div>
              <h2>Overview</h2>
              <span>
                Around Halloween time in 2022, Geico and Funko partnered up to
                bring fans 'Geicoween,' a giveaway contest where fans could
                enter for a chance to win one of four limited edition Geico
                Gecko Funko Pops!
              </span>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h2>User Flow</h2>
              <span>
                Below is the user flow for a Geico x Funko giveaway winner. A
                winning customer, who wishes to claim their prize, follows the
                instructions emailed to them and then proceeds to the Funko
                redemption site.
              </span>
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
        {/* Holiday Site */}
        <CustomTabPanel value={value} index={5}>
          <div className="funko-container">
            <h1 className="tab-title">Employee Holiday Site</h1>
            <div>
              <h2 style={{ marginBottom: "8px" }}>Overview</h2>
              <span>
                For the 2022 holiday season I designed a choose your gift
                experience for employees of the Funko family of brands. The gift
                selection experience was followed by the native shopify checkout
                flow.
              </span>
            </div>
            <div>
              <h2 style={{ marginBottom: "8px" }}>Design</h2>
              <span style={{ marginTop: "0" }}>
                Designed with a mobile first mindset so employees can take part
                from anywhere. On the live website, the background snow flakes
                were animated for a fun holday touch.
              </span>
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
        {/* Convention Tracker */}
        <CustomTabPanel value={value} index={6}>
          <div className="funko-container">
            <h1>Convention Tracker</h1>
            <div>
              <h2>Overview</h2>
              <span>
                For use in major conventions such as San Diego Comic Con and New
                York Comic Con, this convention tracker is for fans to see what
                will be available for sale ahead of time on their own device.
                The wishlist feature allows users to mark specific items to keep
                track of what they specifically want out of the larger list.
              </span>
            </div>
            <div style={{ marginTop: "40px" }} className="two-grid">
              <div>
                <figure>
                  <img className="tracker-img" src={tracker} alt="tracker" />
                  <figcaption>Convention item list</figcaption>
                </figure>
              </div>
              <div>
                <figure>
                  <img className="tracker-img" src={wishlist} alt="wishlist" />
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
