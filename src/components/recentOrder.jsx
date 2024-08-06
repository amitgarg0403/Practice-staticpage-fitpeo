import React from 'react';

const RecentOrders = () => {
  return (
    <div className="col-md-6 mb-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Recent Orders</h5>
          <table className="table">
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
                <td>Delivered</td>
              </tr>
              <tr>
                <td>Jane Cooper</td>
                <td>48865786</td>
                <td>$305.02</td>
                <td>Delivered</td>
              </tr>
              <tr>
                <td>Guy Hawkins</td>
                <td>78892513</td>
                <td>$45.88</td>
                <td>Cancelled</td>
              </tr>
              <tr>
                <td>Kristin Watson</td>
                <td>20095732</td>
                <td>$65.00</td>
                <td>Pending</td>
              </tr>
              <tr>
                <td>Cody Fisher</td>
                <td>95715620</td>
                <td>$545.00</td>
                <td>Delivered</td>
              </tr>
              <tr>
                <td>Savannah Nguyen</td>
                <td>78514568</td>
                <td>$128.20</td>
                <td>Delivered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;
