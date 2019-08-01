import React, { Component } from 'react'

import {Link} from "react-router-dom";

const API_KEY="20cb11b965f80cefda95fd65ce5e1f2f";


export default class Recipe extends Component {
    state = {
        activeRecipe: []
    }
    componentDidMount = async () =>{
    const title = this.props.location.state.recipe;
    const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);
    const res = await req.json();
    this.setState({ activeRecipe:res.recipes[0]});
    console.log(this.state.activeRecipe);
    } 

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="row center" key={recipe.recipe_id}>
            {this.state.activeRecipe.length !== 0 &&
            <div className="col s12 m4">
              <div className="card center">
                <div className="card-image">
                  <img src={recipe.image_url} />
                  <span className="card-title"> {recipe.title} </span>
                </div>
                <div className="card-content">
                    <h5>Publisher :{recipe.publisher} </h5>
                    <h5>Rank :{recipe.social_rank} </h5>
                    <h5>ID :{recipe.recipe_id} </h5>
                    <button className=""> <Link to="/">Go home</Link> </button>
                </div>
                <div className="card-action">
                  <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
                </div>
              </div>
            </div>
            }
          </div>
        )
    }
}
