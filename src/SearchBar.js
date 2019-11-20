import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder = 'Name of Country' onChange={(event) => this.props.startQuery(event)}/>
        </form>
      </div>
    )
  }
}

export default SearchBar
