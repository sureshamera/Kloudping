import React from 'react'
import "./css/bootstrap.css"
import "./css/style.css"
import "./css/responsive.css"
import "./css/faq.css"

import Header from "./components/common/header/header"
import { HashRouter ,Switch,  Route } from "react-router-dom"



import Footer from "./components/common/footer/footer"
import Home from "./components/home/home"
import About from "./components/about/about"
import Contact from "./components/contact/contact"
import News from "./components/blog-grid/bloggrid"
import BlogNews from "./components/blog-grid/blogfullwidth"
import BlogFullPost from "./components/blog-grid/blogsingle"
import Casestudies from "./components/about/casestudies"
import ProjectDetails from "./components/case-studies/casesingle"
import FAQ from "./components/about/FAQ"

import Services from "./components/IT-Services/service"

import Datainfrastructure from "./components/IT-Services/Datainfrastructure"
import Cloudintegration from "./components/IT-Services/cloudintegration"
import Itstartup from "./components/IT-Services/Itstartup"
import Productengineering from "./components/IT-Services/productengineering"
import BusinessSecurity from "./components/IT-Services/BusinessSecurity"


const App = () => (
 

        <div className="page-wrapper">
         
          <HashRouter>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact } />
              <Route exact path='/News' component={News} />
              <Route exact path='/BlogNews' component={BlogNews} />
              <Route exact path='/BlogFullPost' component={BlogFullPost} />
              <Route exact path='/Casestudies' component={Casestudies} />
              <Route exact path='/ProjectDetails' component={ProjectDetails} />
              <Route exact path='/FAQ' component={FAQ} />
              <Route exact path='/Services' component={Services} />
              <Route exact path='/Datainfrastructure' component={Datainfrastructure} />
              <Route exact path='/Cloudintegration' component={Cloudintegration} />
              <Route exact path='/Itstartup' component={Itstartup } />
              <Route exact path='/Productengineering' component={Productengineering } />
              <Route exact path='/BusinessSecurity' component={BusinessSecurity } />
             
              </Switch>
            <Footer />
          </HashRouter>
        </div>
     
      )

      export default App
