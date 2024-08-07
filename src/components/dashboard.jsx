import Activity from "./activity";
import Feedback from "./feedback";
import Header from "./header";
import Overview from "./overview";
import RecentOrders from "./recentOrder";
import Sidebar from "./sidebar";

const Dashboard = () => {
    return ( 
        <div className="body">
            <Header />
            <div className="middle-block">
                <Sidebar />
                <div className="right-part">
                    <h2 className="text-white text-center">Dashboard</h2>
                        <Overview />
                        <Activity />
                        <div className="last-block">
                            <RecentOrders />
                            <Feedback />
                        </div>
                </div>

            </div>
        </div>
     );
}
 
export default Dashboard;