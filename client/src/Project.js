import React, {Component} from "react"
import styled from "styled-components"
import 'spectre.css/dist/spectre.css';
import Slides from "./Slides.js"

const Projects = styled.h2`
color:black;
font-family: 'Rajdhani', sans-serif;
`
const slidesStyle = {
    buttons: false,
    carousel: false,
}
class Project extends Component{


    render(){

        return(
            <div>
                <Projects>Projects</Projects>
                <Slides config={slidesStyle}>
                    <div >
                        Box 1
                    </div>
                    <div >
                        Box 2
                    </div>

                </Slides>

            </div>
        )
    }

}


export default Project;