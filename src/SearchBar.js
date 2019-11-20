import React from 'react'

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input placeholder = 'Name of Country' onChange={(event) => this.props.startQuery(event)}/>
          <input placeholder = 'Name of Language' onChange={(event) => this.props.languageQuery(event)}/>
        </form>
      </div>
    )
  }
}

export default SearchBar
