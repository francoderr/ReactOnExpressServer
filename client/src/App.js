//import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI().then(res => this.setState({
      data: res.express
    })).catch(err => console.log(err));
  }

  //now to fetch GET route from the express server
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div>
        <header>
          <h1>This is React speaking</h1>
        </header>
        <p>{this.state.data}</p>
      </div>
    )
  }


}

export default App;
