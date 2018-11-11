import React, {Component} from "react"
import styled from "styled-components"
import 'spectre.css/dist/spectre.css';
import Slides from "./Slides.js"
import data from './data'

const Header = styled.h2`
color:black;
font-family: 'Rajdhani', sans-serif;
`
const slidesStyle = {
    buttons: false,
    carousel: false,
}
const allowedRepos = ['GloveBox','Analog-Clock', 'MicrobloggingAPI', 'RadImageResizerApp', 'RubyBlackJack', "work-portfolio-react"]

function Card(props){
    return(
        <div key={props.repo.key}>{props.repo.name}</div>
    )
}

class Project extends Component{

    constructor(props){
        super(props)
        this.state ={
            repos: [],
            isLoading: true,
        } 
        
    }
    componentDidMount(){
        
        
        
    }
    componentDidUpdate(){
      
    }

    loadGitHubRepos(){
        console.log("hi")
        data.getRepos()
        .then(repos => this.setState({repos: repos, isLoading:false}))
    }
    
    getAllowedRepos(repos){
        let allowed = repos.filter(repo=>{
            let rep =allowedRepos.map(ar =>{
                if(repo.name == ar){                   
                    rep = repo
                }
            })
            
            return rep
        })
    }

    render(){
        const{repos, isLoading}= this.state;
        if(isLoading == false){
            return <div><p className="loading loading-lg h1 ">Loading Github Repos</p></div>
        }
        
       
        return(
            <React.Fragment>
                <Header>Projects</Header>
                <Slides config={slidesStyle}>
                    < div className="card project-card">
                        
                        <div className="class-header project-card_header">
                            <div className="card-title h5">GloveBox</div>
                            <div className="card-subtitle text-gray"></div>
                        </div>

                        <div className="card-image project-card_image"><img src="https://s3.amazonaws.com/generadcliffe/images/glovebox.png" /></div>
                        <div className="card-body">Glovebox provides users with a practical and efficient way of keeping track of vehicle maintenance. Declutter your glovebox and still keep the records that can increase your car's resale value!</div>

                        <div className="card-footer project-card_footer">
                            <a className="btn btn-primary">Live Code</a>
                             <a className="btn btn-primary">Github</a>
                        </div>
                    </div>
                    
                </Slides>

            </React.Fragment>
        )
    }

}


export default Project;