import React from 'react'
import { Link } from "react-router-dom";
 const Recipes = props =>(

  <div className="row">
{props.recipes.map((recipe)=>{
  return <div key={recipe.recipe_id} className="col s12 m3">
   <div className="card">
    <div className="card-image">
      <img src= {recipe.image_url} alt={recipe.title} />
      <button className="btn-floating  halfway-fab waves-effect waves-light blue">
      <Link to={{ pathname: `/recipe/${recipe.recipe_id}`,
                            state : {recipe: recipe.title}
                      }}>
      <i className="material-icons">visibility</i>
      </Link>
      </button>
  </div>
  <div className="card-content">
  <span className="card-title red-text">{recipe.title.lenght < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 15)}...`}</span>
      <p>Publisher : {recipe.publisher}</p>
        </div>
</div>
</div>
})}
</div>
   
 );
  
export default Recipes;



// <div>
   
//    {props.recipes.map((recipe)=>{
//     return <div  key={recipe.recipe_id}> 
//       <img src= {recipe.image_url} alt={recipe.title} />
//     <p> {recipe.title} </p>
//     </div>
//   })}
   
//    </div>