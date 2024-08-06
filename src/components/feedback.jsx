import React from 'react';

const Feedback = () => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Customer's Feedback</h5>
          <div className="feedback">
            <h6>Jenny Wilson</h6>
            <p>⭐⭐⭐⭐⭐</p>
            <p>The food was excellent and so was the service...</p>
          </div>
          <div className="feedback">
            <h6>Dianne Russell</h6>
            <p>⭐⭐⭐⭐⭐</p>
            <p>We enjoyed the Eggs Benedict served on homemade focaccia...</p>
          </div>
          <div className="feedback">
            <h6>Devon Lane</h6>
            <p>⭐⭐⭐⭐⭐</p>
            <p>Normally wines are wines, but theirs are lean meaty and tender...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
