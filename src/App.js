import './App.css';
import { Component } from 'react';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    }
  }

  componentDidMount() {
    fetch("https://v2.jokeapi.dev/joke/Dark?type=twopart")
      .then(response => {
         return response.json();
        })
      .then(
        (Dark) => {
          this.setState({
            isLoaded: true,
            items: Dark
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    const{error, isLoaded, items} = this.state;
    if(error){
      return <div>Error: {error.message}</div>
    }
    else if(!isLoaded){
      return(
        <div>
         <div className="bg2">
         <center>
           <h1 className="header">Happy New Year, folks.</h1>
         </center>
         </div>
         <div className="bg1">
          <h1 className="loading">Loading Jokes</h1>
         </div>
         <div className="footer">
          <center>
            <p className=""><strong>Keep refreshing the page for more jokes</strong>. So long. </p>
            <p> - with best wishes, Neellohit</p>
          </center>
          </div>
        </div>)
       
    }
    else{
      return(
        <div>
          <div className="bg2">
          <center>
            <h1 className="header">Happy New Year, folks.</h1>
          </center>
          </div>
          <div className="bg1"><center>
            <p className="trivia" key={items.id}>
              {items.setup}
            </p>
            <p className="trivia2" key={items.id}>
              {items.delivery}
            </p></center>
          </div>
          <div className="footer">
          <center>
            <p className=""><strong>Keep refreshing the page for more jokes</strong>. So long. </p>
            <p> - with best wishes, Neellohit</p>
          </center>
          </div>
        </div>
      )
    }
  }
}

export default App;
