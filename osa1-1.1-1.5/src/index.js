import React from 'react'
import ReactDOM from 'react-dom'
const App = () => {
    const kurssi = {
        nimi: 'Half Stack -sovelluskehitys',
        osat: [
            {
                nimi: 'Reactin perusteet',
                tehtavia: 10
            },
            {
                nimi: 'Tiedonvälitys propseilla',
                tehtavia: 7
            },
            {
                nimi: 'Komponenttien tila',
                tehtavia: 14
            }]
    }

    return (
        <div>
            <Otsikko kurssi={kurssi.nimi} />
            <Sisalto osat={kurssi.osat} />
            <Yhteensa osat={kurssi.osat} />
        </div>
    )
}

const Otsikko = (props) => {
    return (
        <div>
            <h1>{props.kurssi}</h1>
        </div>
    )
}
const Sisalto = (props) => {
    let x = "";

    return (
        <div>
            <p>{props.osat[0].nimi}</p>
            <p>{props.osat[0].tehtavia}</p>
            <p>{props.osat[1].nimi}</p>
            <p>{props.osat[1].tehtavia}</p>
            <p>{props.osat[2].nimi}</p>
            <p>{props.osat[2].tehtavia}</p>
        </div>
    )
}
const Osa = (props) => {
    return (
        <div>
            <p>{props.nimi}</p>
            <p>{props.tehtavia}</p>
        </div>
    )
}
const Yhteensa = (props) => {
    let x = 0;
    props.osat.forEach(osa => {

        x = x + osa.tehtavia;

    })
    return (
        <p> Yhteensä {x} tehtävää</p>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root')
)