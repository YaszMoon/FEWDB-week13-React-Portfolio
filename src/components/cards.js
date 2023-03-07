import React from "react";

function Cards(props) {
return (
    <div className="card" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt={props.name}/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.description}</p>
    <a href={props.repo} className="btn btn-primary">To the Repository</a>
  </div>
</div>
)
}

export default Cards
