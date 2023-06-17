// Write your code here
import './index.css'

const Btn = props => {
  const {a} = props
  if (a) {
    return (
      <button type="button" onClick={this.updatestate}>
        {' '}
        Logout{' '}
      </button>
    )
  } else {
    return null
  }
}

export default Btn
