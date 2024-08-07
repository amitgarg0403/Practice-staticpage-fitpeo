import React from 'react';
import './feedback.css'

const Feedback = () => {
  return (
    <div className="feedback-main">
        <div className="feedback-block">
          <h5 className="text-light">Customer's Feedback</h5>
          <div className="card-body">
            <div className="feedback">
              <div className="feedback-item-title">
                <h6>Jenny Wilson</h6>
                <small>⭐⭐⭐⭐⭐</small>
              </div>
              <small>The food was excellent and so was the service...</small>
              <hr />
            </div>
            <div className="feedback">
              <div className="feedback-item-title">
                <h6>Dianne Russell</h6>
                <small>⭐⭐⭐⭐⭐</small>
              </div>
              <small>We enjoyed the Eggs Benedict served on homemade focaccia...</small>
              <hr />
            </div>
            <div className="feedback">
              <div className="feedback-item-title">
                <h6>Devon Lane</h6>
                <small>⭐⭐⭐⭐⭐</small>
              </div>
              <small>Normally wines are wines, but theirs are lean meaty and tender...</small>
              <hr />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Feedback;
