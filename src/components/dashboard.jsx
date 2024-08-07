import Activity from "./activity";
import Feedback from "./feedback";
import Header from "./header";
import Overview from "./overview";
import RecentOrders from "./recentOrder";
import Sidebar from "./sidebar";

const Dashboard = () => {
    return ( 
        <div className="main-block">
            <Header />
            <div className="middle-block">
                {/* <div className="leftpart"> */}
                    <Sidebar />
                {/* </div> */}
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