import React, { Component } from 'react';
import styled from 'styled-components';
import 'spectre.css/dist/spectre.css';
import ReactDom from 'react-dom'
// function Slides2(props){

//     const children2 = React.Children.map(props.children, child =>{
//         return React.cloneElement(child, {
//             className:"h5"}) 
//     })
    
//     return(
//         children2
//     );
// }
const default_style={
    display: 'block',
}

class Slides extends Component{
    constructor(props){
        super(props)
        this.state = {
            style_props: null,
            children: null,
            current_slide:0,
        }
        console.log("Initialize")
    }

    componentDidMount(){
        console.log("Mount")
        const cloned_children = React.Children.map(this.props.children, child =>{
            return React.cloneElement(child, {
                style: default_style,
                className: "Slide"
            })
        })
        
        this.setState({children: cloned_children})
       
    }
    
    renderSlide(){
        var index = this.state.current_slide
        const slide = React.Children.map(this.state.children, (child, child_index) =>{
            if(index == child_index){
                return child;
            }
        })

        return slide
    }

    nextSlide(){
        
        this.setState({current_slide: 1})
        
    }
    render(){
        
        return(
            <React.Fragment>
                <div id="slides-container">
                   <div id="slides">{this.renderSlide()}</div>  
                   <button className="btn" onClick={this.nextSlide}>Next </button>   
                </div>   
           </React.Fragment>
        )
    }
}

export default Slides