// Write your code here
import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: '', destinationsList: this.props}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput, destinationsList} = this.state

    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div className="container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            type="search"
            value={searchInput}
            onChange={this.onSearchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search-icon"
            className="image"
          />
        </div>
        <ul className="sub-container">
          {searchResults.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
