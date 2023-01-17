import axios from "axios";
// import SearchIcon from '@mui/icons-material/Search';
import React from "react";
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('https://restcountries.com/v3.1/all')
      .then((response) => {
        // console.log(response);
        this.setState({
          data: [...response.data]
        })
      })
      .catch((error) => { console.log(error) })
  }
  SearchCountry(name) {
    console.log(name);
    if (name || !name === "") {
      axios.get(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => {
          // console.log(response);
          this.setState({
            data: [...response.data]
          })
        })
        .catch((error) => { console.log(error) })
    } else {
      axios.get('https://restcountries.com/v3.1/all')
        .then((response) => {
          // console.log(response);
          this.setState({
            data: [...response.data]
          })
        })
        .catch((error) => { console.log(error) })
    }

  }
  SearchRegion(value) {
    console.log(value);
    if (value !== "Filter") {
      axios.get(`https://restcountries.com/v3.1/region/${value}`)
        .then((response) => {
          console.log(response);
          this.setState({
            data: [...response.data]
          })
        })
        .catch((error) => { console.log(error) })

    } else {
      axios.get('https://restcountries.com/v3.1/all')
        .then((response) => {
          // console.log(response);
          this.setState({
            data: [...response.data]
          })
        })
        .catch((error) => { console.log(error) })
    }
  }


  render() {
    return (
      <div className="search">
        <div className="search-container">
          <input type="search" name="country" onChange={
            ((event) => { this.SearchCountry(event.target.value) })
          } placeholder="Search for a country" />
          <select name="Region" id="Region" onChange={(event) => { this.SearchRegion(event.target.value) }}>
            <option value="Filter">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
            <option value="Antarctic">Antarctic</option>
          </select>
        </div>
        <div className="countries">
          {this.state.data.map((counrty, index) => {
            // console.log(counrty);
            return (
              <a key={index} href={`/country/${counrty.name.common}`}>
                <div className="country">

                  <img className="image" src={counrty.flags.png} alt="" />
                  <h1>{counrty.name.common}</h1>
                  <p>Population:{counrty.population}</p>
                  <p>Region:{counrty.region}</p>
                  <p>Capital:{counrty.capital}</p>

                </div>
              </a>
            )
          })}
        </div>
      </div>
    );
  }
}