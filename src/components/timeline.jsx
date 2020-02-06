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
				</div>
			  </div>
			  <div className="col-md-12">
				<div className="photoblog" id="Fireworks1000px">
					<img src={"./images/Fireworks1000px.jpg"} />
				</div>
			  </div>
			  <div className="col-md-12">
				<div className="photoblog" id="fatherNdaughter1000px">
					<img src={"./images/fatherNdaughter1000px.jpg"} />
				</div>
			  </div>
            </div>
			
          </div>
        </section>
      </div>
    )
  }
}
