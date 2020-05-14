import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import jQuery from 'jquery'

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        }
        jQuery('.navbar-toggler').addClass('collapsed')
        jQuery('#navbarSupportedContent').removeClass('show')
    }

    render() {
        return this.props.children
    }
}
export default withRouter(ScrollToTop)