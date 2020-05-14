import React, { Component } from 'react'

export default class WorkSingle extends Component {

    render() {
        return (
            <div className="masonry-wrap grid-loaded">
                {this.props.works.map((item, i) => {
                    return <div className="portfolio-item fuelPHP" key={i}>
                        <div className="hover-overlay">
                            <img className="img-fluid" src="/images/works/1.png" alt="project-image" />
                            <div className="item-overlay"></div>
                            <div className="image-zoom">
                                <p style={{ color: "white", cursor: "pointer" }} id="w1" href="#data-1" className="image-link" title=""><i className="fas fa-search-plus"></i></p>
                                <div style={{ display: "none" }}>
                                    <div id="data-1" className="text-center"><img style={{ width: "70%", height: "70%" }} src="/images/works/1.png" /></div>
                                </div>
                            </div>
                        </div>
                        <div className="project-data">
                            <h5 className="h5-sm"><a href="/works/1" className="red-hover">PortFolio</a></h5>
                            <p>fuelPHP</p>
                        </div>

                    </div>

                })
                }

            </div>
        )
    }

}
