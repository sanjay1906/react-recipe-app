import React, { Component } from 'react'
import "./App.css";
import Form from "./components/Form";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/css/materialize.css";
import Recipes from "./components/Recipes";
const API_KEY="20cb11b965f80cefda95fd65ce5e1f2f";



export default class App extends Component {
  state = {
    recipes :[]
  }
  getPubg = async (e) => {
    const gunsName = e.target.elements.gunsName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${gunsName}&count=20`);
    const data = await api_call.json();
    this.setState({ recipes:data.recipes});
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
     const json  = localStorage.getItem("recipes");
     const recipes = JSON.parse(json);
     this.setState({recipes });
  }

  componentDidUpdate = () =>   {
  const recipes = JSON.stringify(this.state.recipes);
  localStorage.setItem("recipes", recipes);
  }
  
  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Recipes</h1>
      </header>
      < Form getPubg={this.getPubg} />
      <Recipes recipes={this.state.recipes}/>
      
       </div>  
    )
  }
}
