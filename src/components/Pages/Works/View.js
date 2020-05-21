import React, { PureComponent } from "react";
import axios from 'axios'
import Loader from '../../Loader'
import { Lightbox } from "react-modal-image";

export default class View extends PureComponent {

    state = {
        open: false
    }

    setPopup = (value) => {
        this.setState({ open: value });
    }

    componentDidMount = async () => {
        await axios.get(`https://yaroslav.decor-if.com.ua/api/works/specific?id=` + this.props.match.params.id)
            .then(res => {
                this.setState({ work: res.data[0] })
            })
    }
    render() {
        return (
            <div>

                <Loader />

                {
                    this.state.open && (
                        <Lightbox
                            medium={this.state.work.image_src}
                            alt={this.state.work.title}
                            onClose={() => this.setPopup(false)}
                        />
                    )
                }

                {this.state.work &&
                    <section id="hero-7" className="wide-60 single-project division">
                        <div className="container">
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="project-txt-description m-bottom-40">

                                        <div className="project-title">
                                            <p>{this.state.work.tags}</p>
                                            <h3 className="h3-lg">{this.state.work.title}</h3>
                                        </div>

                                        <div className="project-text">

                                            <p className="" dangerouslySetInnerHTML={{ __html: this.state.work.description }}>

                                            </p>

                                        </div>

                                        <div className="project-info">

                                            <h5 className="h5-xs">Project Info:</h5>

                                            <p>Date: <span>{this.state.work.created_at}</span></p>
                                            <p>Tags: <span>{this.state.work.tags}</span></p>
                                            <p>Launch Website:
                                                <span>
                                                    <a href={this.state.work.link} target="_blank" className="red-color" rel="noopener noreferrer">
                                                        {this.state.work.link.replace('https://', '')}
                                                    </a>
                                                </span>
                                            </p>

                                        </div>

                                        <div className="project-share">

                                            <h5 className="h5-xs">Share:</h5>

                                            <ul className="project-share-links text-center clearfix">

                                                <li><a href="https://www.facebook.com/profile.php?id=100012981391514" className="ico-facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="https://github.com/superhabber" className="ico-github"><i className="fab fa-github"></i></a></li>
                                                <li><a href="https://gitlab.com/superhabber" className="ico-gitlab"><i className="fab fa-gitlab"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/yaroslav-palamarchuk-07b2a0194/" className="ico-linkedin"><i className="fab fa-linkedin-in"></i></a></li>

                                            </ul>
                                        </div>

                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="project-preview m-bottom-40">

                                        <div className="project-image">
                                            <div className="hover-overlay">

                                                <img className="img-fluid" src={this.state.work.image_src} alt="" />
                                                <div className="item-overlay"></div>

                                                <div className="image-zoom">
                                                    <p style={{ color: "white", cursor: "pointer" }} id="single_image" onClick={() => this.setPopup(true)} className="image-link" >
                                                        <i className="fas fa-search-plus"></i>
                                                    </p>
                                                    <div style={{ display: "none" }}>
                                                        <div id="image" className="text-center">
                                                            <img style={{ width: "70%", height: "70%" }} alt="" src={this.state.work.image_src} />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                }
            </div>
        )
    }

}
