import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../Loader'
import axios from 'axios'
import $ from 'jquery'
import { Lightbox } from "react-modal-image";

require("isotope-layout/dist/isotope.pkgd")

export default class All extends PureComponent {

    state = {
        open: false
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

    componentDidMount = async () => {
        await axios.get(`https://diplom-porto-shop.000webhostapp.com/works/all.json?limit=99`)
            .then(res => {
                var data = JSON.parse(JSON.stringify(res.data))

                this.setState({ works: data.works })
            })
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
            <div className="WorksAll">

                <Loader />

                <section id="hero-7" className="hero-section division">
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
                            <div className="col-md-12 section-title mt-4">
                                <h3 className="h3-xl">Different apps i have created</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-12 portfolio-items-list ind-5">
                                {this.state.works &&
                                    <div className="masonry-wrap grid-loaded">
                                        {
                                            this.state.works.map((item, i) => {

                                                return <div className={"portfolio-item " + item.tags} key={i} >
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
                </section>
            </div>
        )
    }

}