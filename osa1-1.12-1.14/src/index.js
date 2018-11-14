import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0,
            muuttuiko: 0
        }

    }


    render() {
        const satunnainen = () => {
            const satunnainen2 = () => {
                this.setState({
                    selected: Math.floor(Math.random() * 6)
                })
            }
            return satunnainen2
        }

        const aanesta = (stringi, mappi) => {
            const aanesta2 = () => {
                let dummyLuku = 0
                let palautusStringi = ""
                mappi.set(stringi, mappi.get(stringi) + 1)
                this.setState({
                    muuttuiko: this.state.muuttuiko+1
                })
            }
            return aanesta2
        }
        const suurin = (mappi) => {
            let dummyLuku = 0
            let palautusStringi = ""
            for (let entry of mappi) {
                if (entry[1] > dummyLuku) {
                    dummyLuku = entry[1]
                    palautusStringi = entry[0]
                }
            }
            return (palautusStringi  )
        }
        return (
            <div>
                {this.props.anecdotes[this.state.selected]}
                <button onClick={aanesta(this.props.anecdotes[this.state.selected], this.props.mappi)}>vote</button>
                <button onClick={satunnainen()}>next anecdote</button >
                <h1>the anecdote with the most votes</h1>
                <div>{suurin(mappi)}</div>
                <div>has {mappi.get(suurin(mappi))} votes</div>
            </div >
        )
    }
}

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

var mappi = new Map()
anecdotes.forEach((stringi) => {
    mappi.set(stringi, 0)
})

ReactDOM.render(
    <App anecdotes={anecdotes} mappi={mappi} />,
    document.getElementById('root')
)
