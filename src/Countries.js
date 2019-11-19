import React from 'react'
import CountryCard from './CountryCard.js'

class Countries extends React.Component {

  state = {

  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(countries => {
        this.setState({
          data: countries
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.data ? this.state.data.map(country => <CountryCard country={country}/>) : null}
      </div>
    )
  }
}

export default Countries
