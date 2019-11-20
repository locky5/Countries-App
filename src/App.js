import React from 'react';
import logo from './logo.svg';
import './App.css';
import Countries from './Countries.js'
import SearchBar from './SearchBar.js'

class App extends React.Component {

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(countries => {
        this.setState({
          data: countries
        })
      })
  }

  state = {
    query: null
  }

  startQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar startQuery={this.startQuery}/>
        <Countries query={this.state.query} data={this.state.data}/>
      </div>
    )
  }
}

export default App;
