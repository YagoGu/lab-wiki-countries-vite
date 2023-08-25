import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function HomePage() {
    
    const [countries, setCountries] = useState([])

    const urlApi = "https://ih-countries-api.herokuapp.com/countries"

    useEffect(() => {

        fetch(urlApi)
        .then((response) => {
            return response.json()
        })

        .then((data) => {
            return setCountries(data)
        })
        .catch((err) => {
            console.log(err)
        })

    }, [urlApi])

    if (countries.length === 0) {
        return <h3 style={{fontSize: "24px", textAlign: "center"}}>Loading...</h3>
    }

    return (
        <div className="container" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <h1 style={{fontSize: "24px"}}>WikiCountries: Your Guide to the World</h1>
            <div className="list-group">
                {
                    countries.map((country) => {
                        const {name, alpha3Code, _id} = country
                        return (
                            <Link to={`/${alpha3Code}`} key={_id} className="list-group-item list-group-item-action">{name.common}</Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HomePage;
