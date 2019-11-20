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
    query: null,
    language: null
  }

  startQuery = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  languageQuery = (event) => {
    this.setState({
      language: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar startQuery={this.startQuery} languageQuery={this.languageQuery}/>
        <Countries query={this.state.query} language={this.state.language} data={this.state.data}/>
      </div>
    )
  }
}

export default App;
