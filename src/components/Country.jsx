import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Country1() {
  let params = useParams();
  return (
    <Country name={params.name1} />
  )
}


class Country extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


  componentDidMount() {
    if(this.props.name.length===3){
      const url = `https://restcountries.com/v3.1/alpha/${this.props.name.trim()}`;
    axios.get(url)
      .then((response) => {
        console.log(response.data);
        this.setState({ data: [...response.data] });
        console.log("fguhfgndfng");
      })
      .catch((error) => {
        console.log(error);
      })
    }else{
    axios.get(`https://restcountries.com/v3.1/name/${this.props.name}?fullText=true`)
      .then((response) => {
        // console.log(response.data);
        this.setState({ data: [...response.data] });
      })
      .catch((error) => {
        console.log(error);
      });
    }

  }

  render() {
    return (
      <div className="co">
        {this.state.data.map((item,index) => {
          return (
            <div key={index} className="co-item">
              <div className="image">
                <img src={item.flags.png} alt="flags" />
              </div>
              <div className="name">
                <h1>{item.name.common}</h1>
                <p>{item.translations.ara.common}</p>
                <p>{item.tld}</p>
                <p>{item.population}</p>
                <p>{Object.values(item.currencies)[0].name}</p>
                <p>{item.region}</p>
                <p>{Object.values(item.languages)[0]}</p>
                <p>{item.subregion}</p>
                <p>{item.capital}</p>
              </div>
              <div className="description">
                <span>
                  <h1>Border Countries:</h1>
                  {item.borders ? item.borders.map((border,index) => {
                    return (
                      <a key={index} href ={`/country/${border}`}>
                      <button> {border}</button></a>
                    )
                  }) : "no borders"}
                </span>
              </div>
            </div>
          );
        })
        }
      </div >
    )
  }
}