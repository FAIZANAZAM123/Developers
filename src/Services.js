import React from 'react';
import Card from './Card';
import data from './data';

function Services() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center text-center mx-auto my-auto  align-items-center">
        {data.map((value) => (
          <div className="col-sm-6 col-md-5 col-lg-3 mx-3 my-4">
            <Card title={value.title} detail={value.detail} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
