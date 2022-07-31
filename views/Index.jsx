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
                <p>Bulbasaur</p>              <p>Ivysaur</p> 
                <p>Venusaur</p>              
                <p>Charmander</p> 
                <p>Squirtle</p> 
                <p>Wartortle</p>
                </ul> 
            </div>
        )
        
    }
}

module.exports = Index