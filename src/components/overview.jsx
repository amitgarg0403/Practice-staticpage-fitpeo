import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Overview = () => {
  return (
    <>
      <div className="col-md-3 mb-3">
        <div className="card text-white bg-primary h-100">
          <div className="card-body">
            <h5 className="card-title">Total Orders</h5>
            <p className="card-text">75</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card text-white bg-success h-100">
          <div className="card-body">
            <h5 className="card-title">Total Delivered</h5>
            <p className="card-text">70</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card text-white bg-danger h-100">
          <div className="card-body">
            <h5 className="card-title">Total Cancelled</h5>
            <p className="card-text">5</p>
          </div>
        </div>
      </div>
      <div className="col-md-3 mb-3">
        <div className="card text-white bg-info h-100">
          <div className="card-body">
            <h5 className="card-title">Net Profit</h5>
            <p className="card-text">$6759.25</p>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={70}
                text={`${70}%`}
                styles={buildStyles({
                  textColor: 'white',
                  pathColor: 'white',
                  trailColor: 'rgba(255, 255, 255, 0.2)',
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
