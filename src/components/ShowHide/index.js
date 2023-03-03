import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameHide: false, isLastNameHide: false}

  firstName = () => {
    this.setState(prevState => ({isFirstNameHide: !prevState.isFirstNameHide}))
  }

  lastName = () => {
    this.setState(prevState => ({isLastNameHide: !prevState.isLastNameHide}))
  }

  render() {
    const {isFirstNameHide, isLastNameHide} = this.state
    return (
      <div className="bg-container ">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="first-container">
            <button type="button" className="button" onClick={this.firstName}>
              Show/Hide Firstname
            </button>
            {isFirstNameHide ? (
              <div className="firstname-container">
                <p className="card-heading">Joe</p>
              </div>
            ) : null}
          </div>

          <div className="first-container">
            <button type="button" className="button" onClick={this.lastName}>
              Show/Hide Lastname
            </button>
            {isLastNameHide ? (
              <div className="firstname-container">
                <p className="card-heading">Jonas</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
