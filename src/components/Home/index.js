// Write your code here
import {
    Component
} from "react"
import "./index.css"
import Message from "./components/Message"
import Btn from "./components/Login"
import Btn2 from "./components/Logout"


class Home extends Component {
    state = {a: false}

    updatestate = () => {
        this.setState((b) => ({a: !b.a}))
    }

    render() {
        const {a} = this.state
        return ( <div className = "home">
            <div className = "content-div" >
            <Message statetype = {a}/>
             <Btn statetype = {a}/> 
            <Btn2 statetype = {a}/> 
            </div>

            </div>
   }
}


export default Home