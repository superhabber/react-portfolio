import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/segments/Header'
import Footer from './components/segments/Footer'
import Index from './components/Pages/Index/Index'
import All from './components/Pages/Works/All'
import View from './components/Pages/Works/View'
import Contact from './components/Pages/Contact'
import ScrollToTop from './ScrollToTop'

export default class App extends Component {

  render() {
    return (
      <div className="page" id="page">
        <Router>
          <ScrollToTop>
            <Header />

            <Route exact path="/">
              <Index />
            </Route>

            <Route exact path="/works/all" component={All} />
            <Route exact path="/contact" component={Contact} />

            <Route exact path="/works/:id(\d+)" component={View} />

            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    )
  }
}
