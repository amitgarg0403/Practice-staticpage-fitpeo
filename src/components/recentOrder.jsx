import React from 'react';
import './recentOrder.css'

const RecentOrders = () => {
  return (
        <div className="recent-order">
          <div className="recent-order-block">
            <h5 className="ms-3">Recent Orders</h5>
            <table className="table table-dark mt-3 text-center">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Order No.</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wade Warren</td>
                  <td>15478256</td>
                  <td>$124.00</td>
                  <td><span className='p-1 bg-success rounded-3'>Delivered</span></td>
                </tr>
                <tr>
                  <td>Jane Cooper</td>
                  <td>48865786</td>
                  <td>$305.02</td>
                  <td><span className='p-1 bg-success rounded-3'>Delivered</span></td>
                </tr>
                <tr>
                  <td>Guy Hawkins</td>
                  <td>78892513</td>
                  <td>$45.88</td>
                  <td><span className='p-1 bg-danger rounded-3'>Cancelled</span></td>
                </tr>
                <tr>
                  <td>Kristin Watson</td>
                  <td>20095732</td>
                  <td>$65.00</td>
                  <td><span className='p-1 bg-warning rounded-3'>Pending</span></td>
                </tr>
                <tr>
                  <td>Cody Fisher</td>
                  <td>95715620</td>
                  <td>$545.00</td>
                  <td><span className='p-1 bg-success rounded-3'>Delivered</span></td>
                </tr>
                <tr>
                  <td>Savannah Nguyen</td>
                  <td>78514568</td>
                  <td>$128.20</td>
                  <td><span className='p-1 bg-success rounded-3'>Delivered</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  );
};

export default RecentOrders;
