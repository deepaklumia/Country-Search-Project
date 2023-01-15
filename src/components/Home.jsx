import axios from "axios";

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


  render() {
    return (
      <div className="search">
        <input type="text" name="country" onChange={
          ((event) => { this.SearchCountry(event.target.value) })
        } />
        <div className="countries">
          {this.state.data.map((counrty,index) => {
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