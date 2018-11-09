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
function Projects(props){
    const repos = props.repos
   return 
}
class Project extends Component{

    constructor(props){
        super(props)
        this.state ={
            repos: [],
            isLoading: true,
        } 
        this.loadGitHubRepos()
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
        if(isLoading == true){
            return <div><p className="loading loading-lg h1 ">Loading Github Repos</p></div>
        }
        
       
        return(
            <div>
                <Header>Projects</Header>
                <Slides config={slidesStyle}>
                    <div className="card">
                        <div className="card-header"><span className="card-title h5">GloveBox </span></div>
                        <div className="card-body">GloveBox is  </div>
                    </div>
                    <div>box2</div>
                    
                </Slides>

            </div>
        )
    }

}


export default Project;