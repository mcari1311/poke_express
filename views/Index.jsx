const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
  };

class Index extends React.Component {
    render() {
        return (<h1 style={myStyle}>Pokemon Index Page</h1>)
        
    }
}

module.exports = Index