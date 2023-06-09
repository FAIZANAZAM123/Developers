import React from 'react';

function Card(props) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={`https://source.unsplash.com/500x500/?${props.title}`} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.detail}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}

export default Card;
