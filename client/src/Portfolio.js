import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import 'spectre.css/dist/spectre.css';
const Span = styled.span`
    color:white;
    font-family: 'Rajdhani', sans-serif;
    display: block;
   
`
const Hero = styled.div`
    width: 25%;
    margin: 0 auto;
    display:block;
    position: relative;
    top: 25%;
    background: rgba(8,3,42,0.09);
`
class Portfolio extends Component{

    render(){

        return(
            <Hero className="">
              <Span className="h1">gene radcliffe</Span>
              <Span >software developer</Span> 
            </Hero>
        )
    }

}
export default Portfolio;