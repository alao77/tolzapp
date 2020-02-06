import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Holds a bachelors degree in Computer Engineering (University of Cebu batch 2003). Coder by profession. Family man.</p>
                    <p>Certified PC gamer. I love to shoot nature and people (through my camera lens =D ). I run and road bike... </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">G-A-L-L-E-R-Y</span>
                <h2 className="colorlib-heading">Here are some of my best photos</h2>
            </div>
            </div>
			
			<div className="row row-pt-md">
				<div className="col-md-4 text-center animate-box">	
					<a href="#bantayan1000px"><img src={"./images/bantayan.jpg"} alt="bantayan" /></a>
				</div>
				<div className="col-md-4 text-center animate-box">	
					<a href="#Fireworks1000px"><img src={"./images/Fireworks400px.jpg"} alt="Fireworks" /></a>
				</div>
				<div className="col-md-4 text-center animate-box">	
					<a href="#fatherNdaughter1000px"><img src={"./images/fatherNdaughter.jpg"} alt="fatherNdaughter" /></a>
				</div>
				
			</div>
			
        </div>
        </section>
      </div>
    )
  }
}
