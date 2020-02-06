import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline" id="blogsection">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">recent entry</span>
                <h2 className="colorlib-heading animate-box">PhotoBlog</h2>
              </div>
            </div>
			
            <div className="row">
			  <div className="col-md-12">
				<div className="photoblog" id="bantayan1000px">
					<img src={"./images/bantayan1000px.jpg"} />
					  <p><small>
						Canon 350D | 24mm | f/8 | 1/80sec | ISO 100
					  </small></p>
					  <p>
						Fantastic overlooking scenery near Ogtong Cave Resort. Situated 100kms north of Cebu City in the town of Sta. Fe, Bantayan Island. <br/>
						I used a circular polarizer filter on this shot which resulted to an awesome blue color gradient of the sky as well as suppressing glare from the surface of the sea.
					  </p>
				</div>
			  </div>
			  <div className="col-md-12">
				<div className="photoblog" id="Fireworks1000px">
					<img src={"./images/Fireworks1000px.jpg"} />
					  <p><small>
						Canon 350D | 17mm | f/10 | 4sec | ISO 100
					  </small></p>
					  <p>
						This was my winning photo entry to the Brandon Sun 2012 Summer Fair Photo Contest - "Best Night Life" category.
					  </p>
				</div>
			  </div>
			  <div className="col-md-12">
				<div className="photoblog" id="fatherNdaughter1000px">
					<img src={"./images/fatherNdaughter1000px.jpg"} />
					<p><small>
						Canon 350D | 50mm | f/2.8 | 1/200sec | ISO 100
					  </small></p>
					  <p>
						Father and daughter. Canon nifty-fity lens was used for this shot. Flash fired taming the harsh midday sun at the back.
					  </p>
				</div>
			  </div>
            </div>
			
          </div>
        </section>
      </div>
    )
  }
}
