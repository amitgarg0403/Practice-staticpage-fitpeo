import React from 'react';
import './activity.css'

const Activity = () => {
  return (
    <div className="activity-block">
      <div className="activity-graph">
          <h5 className="text-white ms-3 text-start">Activity</h5>
          <img className='activity-image' src="https://img.freepik.com/premium-vector/icon-bar-chart-single-icon-simple-graphic-designs-growing-bars-icon-isolated-dark-background_549897-2204.jpg" alt="" />
      </div>
      <div className="other-indicators">
        <div className="other-indi">
          <span className='other-indi-icon'>
            <i className='fa fa-crosshairs text-danger'></i>
          </span>
          <p>Goals</p>
        </div>
        <div className="other-indi">
          <span className='other-indi-icon'>
            <i className='fa fa-burger text-success'></i>
          </span>
          <p>Dishes</p>
        </div>
        <div className="other-indi">
          <span className='other-indi-icon'>
            <i className='fa fa-utensils text-warning'></i>
          </span>
          <p>Menus</p>
        </div>
      </div>
      </div>
  );
};

export default Activity;
