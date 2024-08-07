import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './overview.css'

const Overview = () => {
  return (
      <div className="overview-block">
        <div className="overview-indicators">
          <div className="overview-indi-block">
            <div className="overview-indi">
                <p className="card-title">Total Orders</p>
                  <i className='fa fa-basket-shopping overview-icon text-primary'></i>
                <h4 className="card-text">75</h4>
            </div>
            <div className="overview-indi">
                <p className="card-title">Total Delivered</p>
                  <i className='fa fa-bag-shopping overview-icon text-success'></i>
                <h4 className="card-text">70</h4>
            </div>
            
          </div>

          <div className="overview-indi-block">
            <div className="overview-indi">
                <p className="card-title">Total Cancelled</p>
                  <i className='fa fa-sack-xmark overview-icon text-danger'></i>
                <h4 className="card-text">05</h4>
            </div>
            <div className="overview-indi">
                <p className="card-title">Total Revenue</p>
                  <i className='fa fa-sack-dollar overview-icon text-info'></i>
                <h4 className="card-text">$12k</h4>
            </div>
          </div>
        </div>

        <div className="overview-profit">
          <div className="overview-pro1">
            <p className="">Net Profit</p>
            <h4 className="card-text">$6759.25</h4>
          </div>
          <div className="overview-pro2">
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={70}
                text={`${70}%`}
                styles={buildStyles({
                  textColor: 'white',
                  pathColor: 'skyblue',
                  trailColor: 'rgba(255, 255, 255, 0.2)',
                })}
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Overview;
