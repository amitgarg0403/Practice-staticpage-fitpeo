import Activity from "./activity";
import Feedback from "./feedback";
import Header from "./header";
import Overview from "./overview";
import RecentOrders from "./recentOrder";

const Dashboard = () => {
    return ( 
        <div className="container-fluid">
            <Header />
            <div className="row">
                <Overview />
            </div>
            <div className="row">
                <Activity />
            </div>
            <div className="row">
                <RecentOrders />
                <Feedback />
            </div>
        </div>
     );
}
 
export default Dashboard;