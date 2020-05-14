import React, { Component } from 'react'
import Works from './Works'
import Loader from '../../Loader'
import $ from "jquery"
require('@fancyapps/fancybox/dist/jquery.fancybox');
require('jquery.easing/jquery.easing');

export default class Index extends Component {

    componentDidMount = () => {
        var delay = 500;
        
		$(".progress-bar").each(function(i){
		    $(this).delay( delay*i ).animate( { width: $(this).attr('aria-valuenow') + '%' }, delay );

		    $(this).prop('Counter',0).animate({}, {
		        duration: delay,
		        easing: 'swing',
		        step: function (now) {
		            $(this).text(Math.ceil(now)+'%');
		        }
		    });
		});
    }

    render() {
        return (
            <div className="Index">

            <Loader />

                <section id="hero-7" className="hero-section division">
                    <div className="container">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-4">
                                <div className="hero-img">
                                    <img className="img-fluid img-responsive" alt="" src="https://superhabber.github.io/images/daddy.jpg" />
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="hero-txt">

                                    <h2 className="red-color">Yaroslav Palamarchuk</h2>

                                    <h4 className="h4-xs">Web PHP developer</h4>

                                    <p className="p-md">Hi, i am Yaroslav Palamarchuk. I'm from a small town. I've been interested in programming since I was a kid. My last projects were specially for portfolio and you can see them below</p>

                                    <div className="hero-7-socials m-top-40 text-right">
                                        <p> Follow Me: </p>
                                        <ul className="he-links text-center clearfix">

                                            <li><a href="https://www.facebook.com/profile.php?id=100012981391514" className="ico-facebook"><i className="fab fa-facebook-square"></i></a></li>
                                            <li><a href="https://github.com/superhabber" className="ico-github"><i className="fab fa-github"></i></a></li>
                                            <li><a href="https://gitlab.com/superhabber" className="ico-gitlab"><i className="fab fa-gitlab"></i></a></li>
                                            <li><a href="https://www.linkedin.com/in/yaroslav-palamarchuk-07b2a0194/" className="ico-linkedin"><i className="fab fa-linkedin"></i></a></li>

                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="about-4" className="bg-lightgrey wide-60 about-section division">
                    <div className="container">
                        <div className="row d-flex align-items-center">

                            <div className="col-md-7 col-xl-6">
                                <div className="about-txt m-bottom-40">

                                    <h3 className="h3-xs">I have a good knowledge of WEB tools and mechanics</h3>


                                    <p className="p-md">
                                        I had an experience of creating my own PHP FrameWork, so i learned how to use MVC in the modern sites developing
                                    </p>

                                </div>
                            </div>

                            <div className="col-md-5 col-xl-5 offset-xl-1">
                                <div className="skills black-progress m-bottom-40">

                                    <div className="barWrapper">
                                        <p>Knowledge of PHP</p>
                                        <span className="skill-percent">80%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div className="barWrapper">
                                        <p>PHP MVC</p>
                                        <span className="skill-percent">75%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div className="barWrapper">
                                        <p>YII2 - PHP Framework</p>
                                        <span className="skill-percent">70%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                    <div className="barWrapper">
                                        <p>Self-Writed PHP Framework</p>
                                        <span className="skill-percent">80%</span>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <Works />

                <div id="brands-1" className="bg-lightgrey wide-70 brands-section division">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-12 section-title">

                                <span className="section-id red-color">Some information about me</span>

                                <p>
                                    I am a young IT specialist. My main focus is PHP site programming, working with popular frameworks, creating my own site creation tools. I want to start my career as a junior PHP programmer.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>

                <section id="cta-2" className="bg-scroll bg-dark wide-100 cta-section division">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-10 offset-xl-1">
                                <div className="cta-txt text-center">

                                    <span className="section-id grey-color">Let's make something great</span>

                                    <h3 className="h3-lg">I'm always ready to create something new and special.</h3>
                                    <h3 className="h3-lg">Let's discuss your next project</h3>

                                    <a href="mailto:superhabber@mail.com" className="btn btn-xl btn-tra-grey m-top-40 white-hover btn-arrow">
                                        <span>Request Free Quote <i className="fas fa-angle-double-right"></i></span>
                                    </a>

                                    <p className="p-lg">Or call me : <span>+38 097 812 7350</span></p>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </div>
        )
    }

}
