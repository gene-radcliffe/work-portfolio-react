import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import 'spectre.css/dist/spectre.css';
import Project from  './Project.js';

const Span = styled.span`
    color:white;
    font-family: 'Rajdhani', sans-serif;
    display: block;
`
const Hero = styled.div`
    
    background: rgba(8,3,42,0.09);
`
class Portfolio extends Component{

    render(){

        return(
            <React.Fragment>
           <div className="hero">
            <Hero className="hero-box">
              <Span className="h1 hero-box_text">gene radcliffe</Span>
              <Span className="hero-box_text">software developer</Span> 
            </Hero>
           </div> 
            
            <div>
                <Project />
            </div>
            </React.Fragment>

        );
    }

}
export default Portfolio;