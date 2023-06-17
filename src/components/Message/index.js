// Write your code here
import './index.css'

const Message = props => {
  const {a} = props
  if (a === false) {
    return <h1> Please Login </h1>
  } else {
    return <h1> Welcome User </h1>
  }
}

export default Message
