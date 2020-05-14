import React, { Component } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import $ from "jquery"
import { Lightbox } from "react-modal-image";
require("isotope-layout/dist/isotope.pkgd")
require("imagesloaded/imagesloaded.pkgd")

export default class Works extends Component {

    state = {
        open: false
    }

    constructor(props) {
        super(props)
        axios.get(`https://yaroslav.decor-if.com.ua/api/works/all.json?limit=6`)
            .then(res => {
                var data = JSON.parse(JSON.stringify(res.data))

                this.setState({ works: data.works })
            })
    }

    componentDidUpdate() {
        var $grid = $('.masonry-wrap');

        $grid.imagesLoaded(function () {
            $grid.isotope({
                itemSelector: '.portfolio-item',
                percentPosition: true,
                transitionDuration: '0.7s',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: '.portfolio-item',
                }
            });
        });

        $('.portfolio-filter').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        // change is-checked class on buttons
        $('.portfolio-filter button').on('click', function () {
            $('.portfolio-filter button').removeClass('is-checked');
            $(this).addClass('is-checked');
            var selector = $(this).attr('data-filter');
            $grid.isotope({
                filter: selector
            });
            return false;
        });
    }

    openPopup = (e) => {
        this.setState({
            image_src: e.image_src,
            title: e.title,
            open: true
        })
    }

    closePopup = () => {
        this.setState({ open: false })
    }

    render() {
        return (
            <section id="portfolio-2" className="wide-100 portfolio-section division">
                <div className="container">

                    {
                        this.state.open && (
                            <Lightbox
                                medium={this.state.image_src}
                                alt={this.state.title}
                                onClose={this.closePopup}
                            />
                        )
                    }

                    <div className="row">
                        <div className="col-md-12 section-title">

                            <span className="section-id red-color">The latest from my portfolio</span>

                            <h3 className="h3-xl">Different apps i have created</h3>

                            <p>
                                There are not as many examples of my work as i would wish, but i guess i have chosen the best ones
                            </p>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 text-center">
                            <div className="portfolio-filter m-bottom-70">
                                <button data-filter="*" className="is-checked">All</button>
                                <button data-filter=".YII2">YII2</button>
                                <button data-filter=".fuelPHP">FuelPHP</button>
                                <button data-filter=".React">React</button>
                                <button data-filter=".SelfWrited">Self Writed</button>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 portfolio-items-list ind-5">
                            {this.state.works &&
                                <div className="masonry-wrap grid-loaded">
                                    {
                                        this.state.works.map((item, i) => {

                                            return <div className={"portfolio-item " + item.tags } key={i} >
                                                <div className="hover-overlay">
                                                    <img className="img-fluid" src={item.image_src} alt="" />
                                                    <div className="item-overlay"></div>
                                                    <div className="image-zoom">
                                                        <p style={{ color: "white", cursor: "pointer" }} onClick={() => this.openPopup(item)} id="w1" className="image-link">
                                                            <i className="fas fa-search-plus"></i>
                                                        </p>
                                                        <div style={{ display: "none" }}>
                                                            <div id="data-1" className="text-center"><img style={{ width: "70%", height: "70%" }} src="/images/works/1.png" alt="" /></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="project-data">
                                                    <h5 className="h5-sm">
                                                        <Link to={"/works/" + item.id} className="red-hover">{item.title}</Link>
                                                    </h5>

                                                    <p>{item.tags}</p>

                                                </div>

                                            </div>

                                        })
                                    }


                                </div>
                            }
                        </div>
                    </div>

                </div>


                <div className="row">
                    <div className="col-md-12 all-projects-btn">
                        <Link to="/works/all" className="btn btn-xl btn-arrow">
                            <span>View All Projects <i className="fas fa-angle-double-right"></i></span>
                        </Link>
                    </div>
                </div>
            </section >
        )
    }

}
