// Write your code here
import './index.css'

const Btn2 = props => {
  const {a} = props
  if (a === false) {
    return (
      <button type="button" onClick={this.updatestate}>
        Login
      </button>
    )
  } else {
    return null
  }
}

export default Btn2
