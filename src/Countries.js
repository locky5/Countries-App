import React from 'react'
import CountryCard from './CountryCard.js'

class Countries extends React.Component {

  state = {

  }

  countryHaveLanguage = (country) => {
    let list = country.languages.map(language => language.name.toLowerCase())
    for (let i = 0; i < list.length; i++) {
      if (list[i].includes(this.props.language.toLowerCase())) {
        return true
      } else {
        return false
      }
    }
  }

  filter = () => {
    if (this.props.data && !this.props.query && !this.props.language) {
      return this.props.data.map(country => <CountryCard country={country}/>)
    } else if (this.props.data && this.props.query && !this.props.language) {
      return this.props.data.filter(country => country.name.toLowerCase().includes(this.props.query.toLowerCase())).map(country => <CountryCard country={country}/>)
    } else if (this.props.data && !this.props.query && this.props.language) {
      return this.props.data.filter(country => this.countryHaveLanguage(country)).map(country => <CountryCard country={country}/>)
    }
  }

  render() {
    return (
      <div className="row">
        {this.props.data ? this.filter() : null}
      </div>
    )
  }
}

export default Countries
