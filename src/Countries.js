import React from 'react'
import CountryCard from './CountryCard.js'

class Countries extends React.Component {

  state = {

  }

  filter = () => {
    if (this.props.data && !this.props.query) {
      return this.props.data.map(country => <CountryCard country={country}/>)
    } else if (this.props.data && this.props.query) {
      return this.props.data.filter(country => country.name.toLowerCase().includes(this.props.query.toLowerCase())).map(country => <CountryCard country={country}/>)
    }
  }

  render() {
    return (
      <div>
        {this.props.data ? this.filter() : null}
      </div>
    )
  }
}

export default Countries
