import React from 'react'
import ReactDOM from 'react-dom'
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hyva: 0,
            neutraali: 0,
            huono: 0,
            kaikki: [],

        }
    }
    render() {
        const keskiarvo = () => {
            if (this.state.kaikki.length > 0) {

                let valinumero = 0;
                this.state.kaikki.forEach(arvo => {
                    valinumero = valinumero + arvo
                })
                return Math.round(valinumero / this.state.kaikki.length, -2)
            } else {
                return 0
            }
        }
        const positiivisia = () => {
            if (this.state.kaikki.length > 0) {
                return Math.round(this.state.hyva / this.state.kaikki.length * 100, -2) + "%"
            } else {
                return 0
            }
        }

        this.state.keskiarvo = keskiarvo()
        this.state.positiivisia = positiivisia()

        const Button2 = (what, numero) => {
            const buttonHandler2 = () => {
                this.setState({
                    [what]: this.state[what] + 1,
                    kaikki: this.state.kaikki.concat(numero)
                })
            }
            return buttonHandler2
        }
        const statistic = (what, teksti) => {
            return (
                <tr>
                    <td> {teksti} </td>
                    <td>{this.state[what]}</td>
                </tr>
            )
        }
        const statistics = () => {
            if (this.state.kaikki.length === 0) {
                return (
                    <div>
                        <h1>statistiikka</h1>
                        <p> ei yhtään palautetta annettu</p>
                    </div>
                )
            } else {
                /*
                var lista = ['hyva', 'neutraali', 'huono', 'keskiarvo', 'positiivisia']
                for (var i = 0; i < lista.length; i++) {
                    console.log(this.state[lista[i]])
                }
                */
                return (
                    <div>
                        <h1>statistiikka</h1>
                        <table>
                            <tbody>
                                {statistic('hyva', 'Hyvä')}
                                {statistic('neutraali', 'Neutraali')}
                                {statistic('huono', 'Huono')}
                                {statistic('keskiarvo', 'Keskiarvo')}
                                {statistic('positiivisia', 'Positiivisia')}
                            </tbody>
                        </table>
                    </div>
                )
            }
        }

        return (
            <div>
                <div>
                    <h1>anna palautetta</h1>
                    <button onClick={Button2('hyva', 1)} >hyvä</button>
                    <button onClick={Button2('neutraali', 0)} >neutraali</button>
                    <button onClick={Button2('huono', -1)}>huono</button>

                    {statistics()}
                </div>
            </div>

        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)


