import React, { Component } from 'react'

export default class Contact extends Component {

    render() {
        return (
            <div>
                <div id="contacts-map" className="division" style={{marginTop:"123px"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <iframe title="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21095.47575336013!2d24.56170939072883!3d48.630236036592784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4737328891413d4d%3A0x65ef1dbd8d1edfe8!2z0J3QsNC00LLQvtGA0L3QsNGPLCDQmNCy0LDQvdC-LdCk0YDQsNC90LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDc4NDAw!5e0!3m2!1sru!2sua!4v1577292688670!5m2!1sru!2sua" width="100%" height="450" frameBorder="0" style={{ border: "0" }} allowFullScreen=""></iframe>
                        </div>
                    </div>
                </div>
                <section id="contacts-4" className="bg-lightgrey wide-80 contacts-section division">
                    <div className="container" id="hero-7">
                        <div className="row">
                            <div className="col-md-12 section-title">
                                <span className="section-id red-color">Get in touch with us</span>
                                <h3 className="h3-xl">Let's Make Something Great</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="contact-box">
                                            <h5 className="h5-sm">My current Location</h5>
                                            <p className="grey-color">Nadvirna city, <br /> Mazepy 37</p>
                                        </div>
                                        <div className="contact-box">
                                            <h5 className="h5-sm">Contact Phones</h5>
                                            <p className="grey-color">Phone : +38 097 812 7350</p>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="form-holder">
                                            <form name="contactform" className="row contact-form">
                                                <div id="input-name" className="col-lg-6">
                                                    <input type="text" name="name" className="form-control name" placeholder="Your Name" />
                                                </div>
                                                <div id="input-email" className="col-lg-6">
                                                    <input type="text" name="email" className="form-control email" placeholder="Email Address" />
                                                </div>
                                                <div id="input-subject" className="col-lg-12">
                                                    <input type="text" name="subject" className="form-control subject" placeholder="What's this about?" />
                                                </div>
                                                <div id="input-message" className="col-lg-12 input-message">
                                                    <textarea className="form-control message" name="message" rows="6" placeholder="Your Message ..."></textarea>
                                                </div>
                                                <div className="col-lg-12 m-top-10 form-btn">
                                                    <button type="submit" className="btn btn-md btn-red submit btn-arrow">
                                                        <span>Send Message <i className="fas fa-angle-double-right"></i></span>
                                                    </button>
                                                </div>
                                                <div className="col-lg-12 contact-form-msg">
                                                    <span className="loading"></span>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>
            </div>

        )
    }

}