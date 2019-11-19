import React from 'react'

class CountryCard extends React.Component {
  render() {
    return (
      <div>
        {this.props.country.name}
        <br/>
        <img src={this.props.country.flag} style={{width: '200px'}}/>
      </div>
    )
  }
}

export default CountryCard
