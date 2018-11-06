import React, { Component } from 'react';
import styled from 'styled-components';
import 'spectre.css/dist/spectre.css';
import ReactDom from 'react-dom'
import Slides from './Slide.js'
class Carousel extends Component{

    constructor(props){
        super(props)
        this.state ={
            children: null,
        }
        
    }
    componentDidMount(){
        this.setState({children: this.props.children})
    }
    renderNextSlide(){
        var slides = document.getElementsByClassName("Slide")
        slides.slideNumber= 1;
    }
    render(){
        return(
            <React.Fragment>
                <Slides  slides={this.props.children} slideNumber={0}/>
                <button className="btn" onClick={this.renderNextSlide}>Next</button>
            </React.Fragment>
        )
    }
}
export default Carousel;