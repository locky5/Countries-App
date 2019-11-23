import React from 'react'

class CountryCard extends React.Component {

  state = {
    more: false
  }

  moreInfo = (event) => {
    this.setState({
      more: !this.state.more
    })
  }

  releaseInfo = () => {
    return <div>
      Capital: {this.props.country.capital}
      <br/>
      Languages: {this.props.country.languages.map(language => <div>{language.name}</div>)}
    </div>
  }

  render() {
    return (
      <div className="column">
        {this.props.country.name}
        <br/>
        <img src={this.props.country.flag} style={{width: '200px'}} onClick={event => this.moreInfo(event)}/>
        {this.state.more ? this.releaseInfo() : null}
        {console.log(this.props.country)}
      </div>
    )
  }
}

export default CountryCard
