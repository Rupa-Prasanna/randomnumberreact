import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  generate = () => {
    this.setState({randomNumber: Math.floor(Math.random() * (100 - 1) + 1)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading"> Random Number </h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" onClick={this.generate}>
            Generate
          </button>
          <p className="heading"> {randomNumber} </p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
