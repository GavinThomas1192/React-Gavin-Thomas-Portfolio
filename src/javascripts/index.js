import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ReactGA from 'react-ga'

import Nav from './components/Nav'
import Footer from './components/Footer'

import NewHome from './pages/newHome'
import MyWork from './pages/myWork'
import SingleBlogCard from './components/singleBlogCard'
import Contact from './pages/Contact'
import Blog from './pages/blog'
import PageNotFound from './pages/PageNotFound'
import PrivacyPolicy from './pages/PrivacyPolicy'



ReactGA.initialize('UA-112795120-1')

createBrowserHistory()



const ScrollToTop = () => {
  window.scrollTo(0, 0)
  return null
}
// ReactGA.pageview(window.location)

const Root = () =>
  <Router history={history}>
    <div >

      <Nav />
      <Route component={ScrollToTop} />
      <Switch>
        <Route exact path="/" component={NewHome} />
        <Route path="/work" component={MyWork} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={SingleBlogCard} />
        <Route path="/privacy" component={PrivacyPolicy} />
        {/* <Route path="/work/:slug" component={Client} /> */}
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </Router >

render(<Root />, document.getElementById('app'))
