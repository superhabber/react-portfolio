import React, { Component } from 'react'
import $ from "jquery"
window.jQuery = $;
require('@fancyapps/fancybox/dist/jquery.fancybox');

export default class Footer extends Component {

    render() {
        return (
            <footer id="footer-3" className="footer division">
            <div className="container">

                <div className="footer-3-content">
                    <div className="row">

                        <div className="col-lg-3 col-xl-4">
                            <div className="footer-box">
                                <h5 className="h5-xs">Let's Talk</h5>
                                <p className="foo-email">Email: <a href="mailto:superhabber@gmail.com">superhabber@gmail.com</a></p>
                                <p>Phone: +38 097 812 7350</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-xl-3 offset-lg-1 offset-xl-1">
                            <div className="footer-socials-links">

                                <h5 className="h5-xs">Follow on:</h5>

                                <p><a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/profile.php?id=100012981391514" className="link-facebook">Facebook</a></p>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://instagram.com/dripthugger" className="link-instagram">Instagram</a></p>
                                <p><a rel="noopener noreferrer" target="_blank" href="https://github.com/superhabber" className="link-youtube">GitHub</a></p>

                            </div>
                        </div>

                        <div className="col-md-9 col-lg-5 col-xl-4">
                            <div className="footer-form">

                                <h5 className="h5-xs">Subscribe Us:</h5>

                                <form className="newsletter-form m-top-25">

                                    <div className="input-group">
                                        <input type="email" className="form-control" placeholder="Email Address" required id="lay-s-email" />
                                        {/* <script>
                                            function checkNewsLetterLay() {
                                                $.ajax({
                                                    url: '/news-letter/check',
                                                    data: {email: $('#lay-s-email').val() },
                                                    method: 'GET',
                                                    success: function(data){
                                                        $('#lay-data').html(data);
                                                        $('#lay-s-email').val('');
                                                    }
                                                })
                                            }
                                        </script> */}
                                        <span className="input-group-btn">
                                            <div style={{display:"none"}}>
                                                <div id="lay-data">

                                                </div>
                                            </div>
											<button type="submit"  href="#lay-data" id="lay-news" className="btn btn-black">
												<i className="far fa-envelope"></i>
											</button>
                                            <script>
                                                $(document).ready(function() {
                                                    $("#lay-news").fancybox()
                                                });
                                            </script>
										</span>
                                    </div>
                                    <label htmlFor="s-email" className="form-notification"></label>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="row bottom-footer">
                    <div className="col-md-12">
                        <div className="footer-copyright">
                            <p className="m-bottom-0">&copy; {new Date().getFullYear()} <span>Yaroslav Palamarchuk.</span> All Rights Reserved</p>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
        )
    }
}
