import React, { Component } from 'react';
import styled from 'styled-components';
import 'spectre.css/dist/spectre.css';
import 'spectre.css/dist/spectre-icons.css'
import ReactDom from 'react-dom'

const default_style={
    display: 'block',
}

class Slides extends Component{
    constructor(props){
        super(props)
        this.state = {
            style_props: null,
            children: null,
            current_slide:null,
            slide_count:null,
        }
        this.moveToNextSlide = this.moveToNextSlide.bind(this);
        this.moveToPreviousSlide= this.moveToPreviousSlide.bind(this);

    }
    componentDidUpdate(){
        
    }
    componentDidMount(){
        
        const cloned_children = React.Children.map(this.props.children, child =>{
            return React.cloneElement(child, {
                style: default_style,
                className: "Slide"
            })
        })
        
        this.setState({children: cloned_children,
                      current_slide: 0,
                      slide_count: React.Children.count(cloned_children)
        })
        
    }
    moveToPreviousSlide(){
        if(this.state.current_slide == 0){
            console.log("return")
            return
        }
       
        if(this.state.current_slide >= 1){
            console.log("setting")
            this.setState(state =>{
                return{current_slide: state.current_slide -1 }
            }) 
        }
        
    }
    moveToNextSlide(){
       
        if(this.state.current_slide == this.state.slide_count-1){
           
            return
        }else{
           
            this.setState( (state)=>{
                return {current_slide: (state.current_slide + 1)}
            })
        }
        
        
       
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

    renderNavigatorNextButton(){
       
        return <button className="btn" onClick={this.moveToNextSlide}><i className="icon icon-arrow-right"></i></button>  
        
    }
    renderNavigatorPreviousButton(){
        return <button className="btn" onClick={this.moveToPreviousSlide}><i className="icon icon-arrow-left"></i></button> 

    }
    
    
    renderRegular(){
        return this.state.children
    }
    
    render(){
        if(this.props.config.buttons == true){
            return(
                <React.Fragment>
                    <div id="slides-container">
                    <div>{this.renderNavigatorPreviousButton()}</div>
                    <div>{this.renderSlide()}</div>
                    <div>{this.renderNavigatorNextButton()}</div>
                    </div>   
                </React.Fragment>
            )
        }
        if(this.props.config.carousel == false){
            return(
                <React.Fragment>
                    <div id="slides-container">
                    {this.renderRegular()}
                    </div>   
                </React.Fragment>
            )
        }
    }
}

export default Slides