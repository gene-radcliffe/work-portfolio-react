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
import { faEnvelope, faChevronDown }  from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faEnvelope, faChevronDown)

const StyledLink = styled(Link)`
    margin: 0.2rem;
    
    &:link, &:visited{
    
        color: white;
        text-decoration: none;
        background-color: rgba(47, 97, 162,0.7);
        padding: 0.5rem;
    }
    &:hover{
        text-decoration: none;

        background-color: rgba(47, 97, 162,1);
        
        
        color: white;
    }
`
function Home(){
   const links_style={
       textDecoration: 'none',
        backgroundColor: 'rgb(8,3,42)',
        color:'white',
   }
    function gotoProjects(){
        let project = document.getElementById("project")
        let top = project.offsetTop;
        window.scrollBy({ 
            top: top, 
            left: 0, 
            behavior: 'smooth' 
          });
    }
    return(
        
    <div className="home-index">
        <div className="hero-header">
            
            <Hero className="hero-box col-12">
                <Span className=" hero-box_name text-center">gene radcliffe</Span>
                <Span className="hero-box_text text-center" style={hero_sd_font}>software developer</Span> 
                <div className="hero-social col-2"  >
                    <SocialLinks  size="lg"/>
                </div>
                <div className="site-links text-center col-4">
                <StyledLink to="/resume">Resume</StyledLink>
                <StyledLink onClick={gotoProjects} to="/">Projects</StyledLink>
                </div>
            </Hero>
            <div className="arrow"> <FontAwesomeIcon onClick={gotoProjects} size="lg" icon="chevron-down"/></div>
        </div> 
        
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