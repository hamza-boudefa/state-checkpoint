import React from "react";
class App extends React.Component {
    state = {
      seconds: 1
    };
  
    componentDidMount() {
      this.timer = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    }
  
    componentWillUnmount () {
      clearInterval(this.timer);
    }
  
    render() {
      return (
        <div className="App">
          <h1 >The component has been rendered for {this.state.seconds}seconds</h1>
        </div>
      );
    }
  }
  
  export default App;
  