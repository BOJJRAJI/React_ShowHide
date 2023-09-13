import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {showFirstname: false, showLastname: false}

  render() {
    const {showFirstname, showLastname} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="names-container">
          <div>
            <button
              className="button"
              type="button"
              onClick={() => {
                this.setState(prevState => ({
                  showFirstname: !prevState.showFirstname,
                }))
              }}
            >
              Show/Hide Firstname
            </button>
            {showFirstname && <p className="container">Joe</p>}
          </div>
          <div>
            <button
              className="button"
              type="button"
              onClick={() => {
                this.setState(prevState => ({
                  showLastname: !prevState.showLastname,
                }))
              }}
            >
              Show/Hide Lastname
            </button>
            {showLastname && <p className="container">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
