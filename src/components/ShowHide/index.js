import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isShowFirstName: false, isShowLastName: false}

  showFirstName = () => {
    this.setState(prevState => ({isShowFirstName: !prevState.isShowFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({isShowLastName: !prevState.isShowLastName}))
  }

  render() {
    const {isShowFirstName, isShowLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="details-container">
          <div className="firstname-container">
            <button
              type="button"
              className="button"
              onClick={this.showFirstName}
            >
              Show/Hide Firstname
            </button>
            {isShowFirstName ? <p className="para">Joe</p> : null}
          </div>
          <div className="lastname-container">
            <button
              type="button"
              className="button"
              onClick={this.showLastName}
            >
              Show/Hide Lastname
            </button>
            {isShowLastName ? <p className="para">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
