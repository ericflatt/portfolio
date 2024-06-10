import React from "react"
import styled from "styled-components"
// import tw from "tailwind.macro"
import oboLogo from "../images/obo/oboLogo.svg"
import downArrow from "../images/obo/arrow-down.svg"
import targetAudience from "../images/obo/targetAudience.png"
import competitors from "../images/obo/competitors.png"
import affinitizing from "../images/obo/affinityOne.png"
import stepOne from "../images/obo/stepOne.png"
import stepTwo from "../images/obo/stepTwo.png"
import stepThree from "../images/obo/stepThree.png"
import stepFour from "../images/obo/stepFour.png"
import wireframes from "../images/obo/wireframes.png"
import routineOne from "../images/obo/routineOne.png"
import routineTwo from "../images/obo/routineTwo.png"
import oboHub from "../images/obo/oboHub.png"
import dailyChallenges from "../images/obo/dailyChallenges.png"
import games from "../images/obo/games.png"
import onBoarding from "../images/obo/onboarding.png"
import homeScreen from "../images/obo/homeScreen.png"
import routinesScreen from "../images/obo/routineScreen.png"
import digitalBalance from "../images/obo/digitalBalance.png"
import indigo from "../images/obo/indigo.png"
import Seo from "../components/seo"
import Cursor from "../components/cursor"
import PageNav from "../components/PageNav"

import "../styles/obo.scss"
import MobileNav from "../components/mobilenav"

const ProjectsWrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`
const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`


const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 2,
      margin: 50,
      border: "none",
      marginTop: 100,
    }}
  />
)

class Obo extends React.Component {
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div>
          <Seo title="Obo" />
          <PageNav />
          <MobileNav />
          <Cursor />
          <div className="App">
      <header className="App-header">


        <img src={oboLogo} className="oboLogo" alt="logo" />
        <p>
          build to connect
          <br></br>
          <div style={{ fontSize: 14, marginTop: 50 }}>
            <a href="https://www.indigoawards.com/winners/2347" target="blank">
              <span className="indigoText">Indigo Design Award winner </span>
            </a>
            <br></br>
            Silver in Interactive Design 2020, Non-pro <br></br>
            Silver in UX, Interface & Navigation 2020, Non-pro <br></br>
            Bronze in Apps 2020, Non-pro
          </div>
        </p>
        <a href="https://www.indigoawards.com/winners/2347" target="blank">
          <img src={indigo} className="indigo" alt="indigo award" />
        </a>
        <img src={downArrow} className="downArrow bounce" alt="scroll down" />
      </header>

      <div className="textPadding sectionTop">
        <h1>The problem</h1>
        <h3 className="paragraphWidth oboParagraph">
          It is crucial to form genuine connections in order to develop healthy
          social skills, but physical, mental and emotional diabilities can make
          it extremely difficult.
        </h3>
        <h2 style={{ fontWeight: "900", marginTop: "115px" }}>
          Understanding our target audience
        </h2>
        <img
          src={targetAudience}
          className="targetAudience"
          alt="target  audience"
        />
      </div>

      <div className="textPadding sectionTop">
        <h1>Our Challenge</h1>
        <h2 style={{ fontWeight: "700" }} className="paragraphWidth">
          How Might We:
          <br />
        </h2>
        <h3 className="oboParagraph paragraphWidth">
          Make interaction between kids more natural? Reduce the uncomfortable
          experiences within a conversation? Make sincere social situations with
          or without human interaction?
        </h3>
      </div>

      <div className="textPadding sectionTop">
        <h1>Design Goal</h1>
        <h3 className="oboParagraph paragraphWidth">
          With the increasing discussion surrounding mental health, especially
          in children, it is important to make sure that children have
          appropriate opportunities to socialize.
        </h3>
      </div>

      <ColoredLine color="#c0c0c0" />

      <div className="textPadding sectionTop">
        <h1>Research Phase</h1>
        <h2 style={{ fontWeight: "700" }} className="paragraphWidth">
          Competitor Analysis
          <br />
        </h2>
        <img src={competitors} className="competitors" alt="target  audience" />
      </div>
      <ProjectsWrapper className="textPadding">
        <div className=" sectionTop">
          <h3 className="likes">What we love:</h3>
          <p className="oboParagraph">
            The privacy of customized usernames and avatars
            <br />
            Very friendly. Everyone can use it just by talking to it
            <br />
            Considering the parent when designing for children
            <br />
            Makes education fun and kids feel comfortable
            <br />
          </p>
        </div>

        <div className=" sectionTop">
          <h3 className="likes">What we don't:</h3>
          <p className="oboParagraph">
            Doesn't provide a private way for meaningful conversation
            <br />
            It's hard to communicate sometimes
            <br />
            Doesn't make the meeting process less intense for the children
            <br />
            Encourages kids to be comfortable talking to a robot - not to others
            <br />
          </p>
        </div>
      </ProjectsWrapper>

      <div className="textPadding sectionTop">
        <h1>Interviews</h1>
        <h3 className="oboParagraph paragraphWidth">
          <strong>Challenge:</strong> My team had a hard time trying to reach
          out to kids to conduct interview, especially those who are diagnosed
          with social anxiety. Therefore, we got in touch with professionals who
          work closely with children.
          <br />
          <br />
          <strong>Interviewees:</strong> Special Education Teacher • Speech
          Teacher • Parents
          <br /> <br /> <br /> <br />
          <h2>Insights:</h2>
        </h3>
      </div>

      <ThreeColumns style={{ lineHeight: "1.4" }} className="textPadding">
        <div>
          <h3>Parents' Perspective</h3>
          <p>
            It is important to include the parents in the design because they
            are an essential part of children’s development.
          </p>
        </div>

        <div>
          <h3>Genuine and Personalized</h3>
          <p>
            Human interaction in our product needs to feel genuine and
            personalized for each specific child who interacts with the product.
          </p>
        </div>

        <div>
          <h3>Real Connections</h3>
          <p>
            It is important to encourage kids to push themselves out of their
            comfort zone and confidently form real connection with others.
          </p>
        </div>
      </ThreeColumns>

      <ColoredLine color="#c0c0c0" />

      <div className="textPadding sectionTop">
        <h1>Ideation</h1>
        <h2>Affinitizing</h2>
        <p className="oboParagraph paragraphWidth">
          This helped the team come up with as many ideas as possible so we can
          later narrow them down into categories that will address our problem.
        </p>
        <img src={affinitizing} className="affinity" alt="affinitizing" />
        <p style={{ marginTop: "50px" }}>
          We narrowed it down to three ideas that could potentially solve our
          problem.
        </p>
        <h2 style={{ textAlign: "left", lineHeight: "2.4" }}>
          • Wearable product that would help kids to connect with other kids
          through a "tap"
          <br />
          • Social Robot that would help kids to practice communication and
          social skills
          <br />• An app that would help educate kids about social cues, and
          tips on how to approach new people
        </h2>

        <h1 style={{ marginTop: "75px" }}>
          What if the kids only play with the robot?
        </h1>
        <p className="oboParagraph paragraphWidth">
          The product would be able to guide our users through these four steps
          to reach the goal of the product - "Genuine Interaction"
        </p>

        <h3 className="steps">
          Step One{" "}
          <img
            style={{ width: "50%", margin: "auto" }}
            src={stepOne}
            className="steps"
            alt="step one"
          />
        </h3>

        <h3 className="steps">
          Step Two{" "}
          <img
            style={{ width: "50%", margin: "auto" }}
            src={stepTwo}
            className="steps"
            alt="step one"
          />
        </h3>

        <h3 className="steps">
          Step Three{" "}
          <img
            style={{ width: "50%", margin: "auto" }}
            src={stepThree}
            className="steps"
            alt="step one"
          />
        </h3>

        <h3 className="steps">
          Step Four{" "}
          <img
            style={{ width: "25%", margin: "auto" }}
            src={stepFour}
            className="steps"
            alt="step one"
          />
        </h3>
      </div>

      <div style={{ marginTop: "75px" }} className="sectionTop textPadding">
        <h1>Wireframing</h1>
        <h3>On boarding • Low-fi</h3>
        <img
          style={{ width: "100%", margin: "auto" }}
          src={wireframes}
          className="wireframes"
          alt="wireframes"
        />
        <h3>Routines • Mid-fi</h3>
        <img
          style={{ width: "50%" }}
          src={routineOne}
          className="routine-mid"
          alt="routine"
        />
        <img
          style={{ width: "50%" }}
          src={routineTwo}
          className="routine-mid"
          alt="routine"
        />

        <h3 style={{ marginTop: "50px" }}>Obo Hub</h3>
        <img
          style={{ width: "100%", margin: "auto" }}
          src={oboHub}
          className="oboHub"
          alt="obo hub"
        />
      </div>

      <div style={{ marginTop: "75px" }} className="textPadding sectionTop">
        <h1>User testing</h1>
        <h2 style={{ fontWeight: "900", marginTop: "35px" }}>Parent App</h2>
      </div>
      <ProjectsWrapper className="textPadding">
        <div>
          <h3 className="likes">Likes:</h3>
          <p className="oboParagraph">
            Buttons were obviously clickable
            <br />
            Instructional pages on side features were helpful
            <br />
            Really enjoyed the overall idea
          </p>
        </div>
        <div>
          <h3 className="likes">Dislikes:</h3>
          <p className="oboParagraph">
            There was confusion within the flow of the UI
            <br />
            Too much information on the main screen
            <br />
            Instructions in words were not being read
          </p>
        </div>
      </ProjectsWrapper>

      <div className="textPadding">
        <h2 style={{ marginTop: "75px", fontWeight: "900" }}>Obo Hub</h2>
      </div>

      <ProjectsWrapper className="textPadding">
        <div>
          <h3 className="likes">Likes:</h3>
          <p className="oboParagraph">
            ”Daily challenges” created small goal from kids to complete
            <br />
            Kids were excited about multi-players games
            <br />
            Kids liked the visual of the profile icons
          </p>
        </div>

        <div>
          <h3 className="likes">Dislikes:</h3>
          <p className="oboParagraph">
            Some of the “daily challenges” were a little too hard
            <br />
            The games don’t indicate 2 or more players game
            <br />
            Kids couldn’t understand what “friends” feature does
          </p>
        </div>
      </ProjectsWrapper>

      <ColoredLine color="#c0c0c0" />

      <div className="textPadding sectionTop">
        <h1>Final Product</h1>
        <img
          style={{ width: "25%" }}
          src={oboLogo}
          className="oboTwo"
          alt="obo"
        />

        <h1 style={{ marginTop: "150px" }}>What is Obo?</h1>
        <p className="oboParagraph paragraphWidth">
          A social robot that fosters a fun learning environment and creates
          many opportunities for kids to practice their social skills and
          confidently connect with people. While the parents can manage the
          robot and look after their children without hovering over them.
        </p>
      </div>

      <ProjectsWrapper className="textPadding">
        <div>
          <h3 className="dailyChallenges">Daily Challenges</h3>
          <p className="oboParagraph">
            Obo gives several “Daily Challenges” everyday to help children
            practice a variety of social skills.
          </p>
        </div>

        <div>
          <img
            style={{ width: "100%" }}
            src={dailyChallenges}
            className="dailyChallenges"
            alt="daily challenges"
          />
        </div>
      </ProjectsWrapper>

      <ProjectsWrapper className="textPadding">
        <div>
          <img
            style={{ width: "100%" }}
            src={games}
            className="games"
            alt="games"
          />
        </div>

        <div>
          <h3 className="games">Multi-Player games</h3>
          <p className="oboParagraph">
            Collaborative games are accessible to children to encourage them to
            connect with others and form real connection.
          </p>
        </div>
      </ProjectsWrapper>

      <div className="textPadding sectionTop">
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Without Obo:
        </h2>
        <h3 style={{ lineHeight: "2.0", textAlign: "center" }}>
          Kids don't know how to start a conversation
          <br />
          Kids don't feel calm talking to others
          <br />
          They have to play alone
        </h3>
      </div>

      <ColoredLine color="#c0c0c0" />

      <div style={{ marginTop: "100px" }} className="textPadding sectionTop">
        <h1>Parent App</h1>
        <h3>On boarding</h3>
        <img
          style={{ width: "100%" }}
          src={onBoarding}
          className="onBoarding"
          alt="on boarding"
        />
      </div>

      <ThreeColumns style={{ lineHeight: "1.4" }} className="textPadding">
        <div>
          <img
            style={{ width: "100%" }}
            src={homeScreen}
            className="homeScreen"
            alt="home screen"
          />
          <p>
            Parents are able to see an overview of their children’s activities
            and their mood throughout the day through their conversations.
          </p>
        </div>

        <div>
          <img
            style={{ width: "100%" }}
            src={routinesScreen}
            className="homeScreen"
            alt="home screen"
          />
          <p>
            Create a set of actions that would help children to be able to
            activate obo with one simple command through their voice.
          </p>
        </div>

        <div>
          <img
            style={{ width: "100%" }}
            src={digitalBalance}
            className="homeScreen"
            alt="home screen"
          />
          <p>
            Parents can set a limit on how much their kids should use obo on
            school day and weekend.
          </p>
        </div>
      </ThreeColumns>

      <div className="textPadding sectionTop">
        <h2 style={{ textAlign: "center", marginTop: "100px" }}>
          Without Obo:
        </h2>
        <h3 style={{ lineHeight: "2.0", textAlign: "center" }}>
          Parents won't be able to look after their child without hovering
          <br />
          Parents don't know how their child is feeling
          <br />
          Parents won't be able to fully help their child
        </h3>
      </div>

      <div style={{ textAlign: "center", marginTop: "150px" }}>
        <h1>– Thank you</h1>
      </div>

      {/*   Made with <a style={{color:"red"}}>&#9829;</a>{' '}
                         , React and other stuff<br/> */}

      {/* <Footer>
        Check out my other projects:{" "}
        <a className="footerObo" href="/bond">
          {" "}
          Bond{" "}
        </a>
        <a className="footerLine" href="/floatie">
          |
        </a>
        <a className="footerObo" href="/floatie">
          {" "}
          floatie
        </a>
        <br />
      </Footer> */}
    </div>
        </div>
      )
    }
  }
  
  export default Obo

