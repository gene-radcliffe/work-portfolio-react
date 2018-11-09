import request from 'superagent/superagent.js'
import dotenv from 'dotenv'
let userToken


const data = {
  
  getRepos: (state) => {
    return request.get(process.env.REACT_APP_GH_REPO_API)
    .set('Authorization', `Bearer ${process.env.REACT_APP_GH_TOKEN}`)
    .set('Accept', 'application/json')
    .then(res=>{
      let repos = res.body
      return (repos)
    })
  }
}
export default data
