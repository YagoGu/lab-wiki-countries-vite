import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CountryDetails() {

    const {countryId} = useParams();

    const [country, setCountry] = useState({})

    const urlApi = `https://ih-countries-api.herokuapp.com/countries/${countryId}`

    useEffect(() => {

        fetch(urlApi)
        .then((response) => {
            return response.json()
        })

        .then((data) => {
            return setCountry(data)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [urlApi])

    // if(country.length < 0) {
    //     return (<p>Loading</p>)
    // }

    return (
        <div className="container">
            <p style={{fontSize: "24px", fontWeight: "bold"}}>Country Details</p>

            <h1>{country.name ? country.name.common : "Loading..."}</h1>

            <table className="table">
                <thead></thead>
                <tbody>
                <tr>
                    <td style={{width: "30%"}}>Capital</td>
                    <td>{country.capital}</td>
                </tr>
                <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  { 
                    country.borders ? (
                    country.borders.map((border) => {
                        return (
                            <li key={border}>
                                <Link to={`/${border}`}>{border}</Link>
                            </li>
                        )})
                    ) : (<li>No border</li>)
                  }
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}

export default CountryDetails;
