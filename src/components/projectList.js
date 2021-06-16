import React, { useState } from "react"
import { Link } from "gatsby"
import $ from "jquery"
import "../styles/main.scss"
import testimage from "../images/test.png"


class List extends React.Component {
  componentDidMount() {
    $('.imagehover').mousemove(function(e){
      $(this).find('img').addClass('visible');
      $(this).find('img').css({
          left:e.pageX, top:e.pageY
        });
    }).mouseleave(function(){
      $(this).find('img').removeClass('visible');
    });
  }

  render() {
    return (
      <div className="">
        <div className="work">
          <div className="work-item">
            <div className="work-title work-item-inner">
              <div className="work-sub-title">
                <p>Senior Capstone</p>
              </div>
              <Link className="imagehover" to="/page-2">Holo-cloud
              <img className="project-image" src={testimage} />
              </Link>
            </div>
          </div>

          <div className="work-item">
            <div className="work-title work-item-inner">
              <div className="work-sub-title">
                <p>Human-Computer Interaction</p>
              </div>
              <Link to="/page-2">Obo</Link>
            </div>
          </div>

          <div className="work-item">
            <div className="work-title work-item-inner">
              <div className="work-sub-title">
                <p>Prototyping Electronics</p>
              </div>
              <Link to="/page-2">Sway</Link>
            </div>
          </div>

          <div className="work-item">
            <div className="work-title work-item-inner">
              <div className="work-sub-title">
                <p>Human Factors</p>
              </div>
              <Link to="/page-2">Bond</Link>
            </div>
          </div>

          <div className="work-item">
            <div className="work-title work-item-inner">
              <Link to="/page-2">Floatie</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default List
