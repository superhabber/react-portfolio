import React, { Component } from 'react'
import $ from "jquery"

export default class Loader extends Component {

    componentDidMount() {
        $("#loader").delay(200).fadeOut();
        $("#loader-wrapper").delay(200).fadeOut("fast");
    }

    render() {
        return (
            <div id="loader-wrapper">
                <div id="loader">
                    <div className="cssload-wrap">
                        <div className="cssload-container">
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                            <span className="cssload-dots"></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
