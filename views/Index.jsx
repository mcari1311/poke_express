const React = require('react')
 


const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1 style={myStyle}>Pokemon Index Page</h1>
                <ul>
                <a href="/pokemo/0" ><p>Bulbasaur</p></a>             
                <a href="/pokemo/1"> <p>Ivysaur</p></a>
                <a href="/pokemo/2"><p>Venusaur</p></a>             
                <a href="/pokemo/3"><p>Charmander</p></a>
                <a href="/pokemo/4"> <p>Squirtle</p></a>
                <a href="/pokemo/5"><p>Wartortle</p></a>
                </ul> 
            </div>
        )
        
    }
}

module.exports = Index