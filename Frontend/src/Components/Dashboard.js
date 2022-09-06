import React from 'react';
import Schedule from "../AnyAcademic/Schedule"
import {
  Redirect
} from "react-router-dom";
class Dashboard extends React.Component {
    render() { 
        return ( 
          !this.props.realToken?<Redirect to="/login"/>:
            <div>
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight text-gray-900">
        Welcome, {this.props.name}
      </h1>
    </div>
  </header>
  <main>
  

          
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
        {this.props.token.MemberRank!=='hr'&&<Schedule user={this.props.token} realToken={this.props.realToken}/>}

          

        </div>
      </div>
    </div>
  </main>
</div>
        );
    }
}
 



export default Dashboard;