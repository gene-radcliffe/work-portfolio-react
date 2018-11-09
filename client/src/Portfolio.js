import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import 'spectre.css/dist/spectre.css';
import Project from  './Project.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope }  from '@fortawesome/free-solid-svg-icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faEnvelope)

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
    
    render(){
        let size = 'lg'
        let screen = window.matchMedia("(max-width: 360px)")
        if(screen.matches){
            console.log("matching")
             size = "lg"
        }else{
            console.log("nonmatching")
             size= "2x"
        }
        return(
            <React.Fragment>
            
           <div className="hero">
            
            <Hero className="hero-box col-12">
              <Span className="h1 hero-box_text text-center">gene radcliffe</Span>
              <Span className="hero-box_text text-center" style={hero_sd_font}>software developer</Span> 
              <div className="hero-social col-4"  >
                <SocialLinks  size={size}/>
              </div>
            </Hero>
           </div> 

            </React.Fragment>

        );
    }

}
export default Portfolio;