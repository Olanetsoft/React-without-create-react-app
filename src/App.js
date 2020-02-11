import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    render() {
        return (
            <h1>This is a React application created without using create-react app :)</h1>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));