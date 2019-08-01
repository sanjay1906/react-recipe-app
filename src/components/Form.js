import React from 'react'

 const Form = props => (
    <div className="row">
    <form className="col s12" onSubmit={props.getPubg}>
      <div className="row">
        <div className="col s12">
          <div className="input-field inline">
            <input type="text" name="gunsName"/>
            <button className="btn-floating waves-effect waves-light blue prefix"><i className="material-icons">search</i></button>
          </div>
        </div>
      </div>
    </form>
  </div>
           
        );
export default Form;

// <form onSubmit={props.getPubg} style ={{ marginBottom:"2rem"}}>
// <input type="text" name="gunsName" />
// <button>Search</button>
// </form>  