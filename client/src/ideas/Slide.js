import React, { Component } from 'react';
import styled from 'styled-components';
import 'spectre.css/dist/spectre.css';
import ReactDom from 'react-dom'
import PropTypes from 'prop-types';

const default_style={
    display: 'block',
}   

class Slide extends Component{
    
    constructor(props){
        super(props)
        this.state={
            children: null,
        }
       console.log("prop" + this.props.slideNumber)
    }

    componentDidMount(){
        console.log("mount slide")
        const cloned_children = React.Children.map(this.props.slides, child =>{
            return React.cloneElement(child, {
                style: default_style,
                className: "Slide"
            })
        })
        console.log("cloned " + cloned_children)
        this.setState({children: cloned_children})
       
    }
    componentDidUpdate(){
        console.log("Update")
    }
    
    renderSlide(){
        var index = this.props.slideNumber
        console.log("index" + index)
        const slide = React.Children.map(this.state.children, (child, child_index) =>{
            if(index == child_index){
                return child;
            }
        })
        return slide;
    }
    render(){
        return(
            <React.Fragment>
                {this.renderSlide()}
            </React.Fragment>)
    }
}
Slide.propTypes ={
    slideNumber: PropTypes.number
}
export default Slide;