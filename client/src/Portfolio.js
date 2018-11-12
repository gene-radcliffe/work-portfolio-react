import React, { Component } from 'react';
import {HashRouter as Router, Route, Link} from "react-router-dom"
import logo from './logo.svg';
import resume from './Resume.pdf'
import './App.css';
import styled from 'styled-components';
import 'spectre.css/dist/spectre.css';
import Project from  './Project.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope }  from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faEnvelope)

function Home(){
   
    function alpha(){
        let element = document.getElementById("project")
        element.scrollIntoView()
    }
    return(
        
        <div className="home-index">
        <div className="hero-header">
            
        <Hero className="hero-box col-12">
        <Span className="h1 hero-box_text text-center">gene radcliffe</Span>
        <Span className="hero-box_text text-center" style={hero_sd_font}>software developer</Span> 
        <div className="hero-social col-4"  >
            <SocialLinks  size="lg"/>
        </div>
        <Link to="/resume">Resume</Link>
            <a onClick={alpha}>Projects</a>
        </Hero>
        
    </div> 
    <div className="arrow-div"><i className="arrow down">&#10097;</i></div>
    <div id="project" className="projects">
            <Project  />
        </div>
    </div>
    
    )
}
const Span = styled.span`
    color:white;
    font-family: 'Rajdhani', sans-serif;
    display: block;
`
const Hero = styled.div`
    
    background: rgba(8,3,42,0.09);
`
const hero_sd_font={
    fontSize:'24px'
}

const SocialLinks = props =>{
    let size = props.size
    return(
        <React.Fragment>
            <a className="icons col-4" href="https://github.com/gene-radcliffe"><FontAwesomeIcon className="social-icons" size={size} icon={['fab', 'github']} /></a>
            <a className="icons col-4" href="https://www.linkedin.com/in/gene-radcliffe-50203b13/"> <FontAwesomeIcon className="social-icons"  size={size} icon={['fab', 'linkedin']}/></a>
            <a className="icons col-4" href="mailto:g_radcliffe82@hotmail.com" target="_top"> <FontAwesomeIcon className="social-icons" size={size} icon={['fa', 'envelope']}/></a>
        </React.Fragment>
    )   
}

class Portfolio extends Component{
    constructor(props){
        super(props)

        this.scrollToProject = this.scrollToProject.bind(this)
    }
    scrollToProject(){
       console.log("hi")
    }

    
    render(){
        
        return(
        
            <Router>
                <div id="index">
                
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/resume" component={this.renderResume}></Route>
                </div>
            </Router>

        

        );
    }
    
    renderResume(){
        let width = window.innerWidth
        let height = window.innerHeight

        return(
            <embed src={resume} width={width} height={height} />

        )
    }  
    
}

export default Portfolio;