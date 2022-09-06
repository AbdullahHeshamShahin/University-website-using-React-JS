import React, { useState, Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import HRAddMember from '../HR/HRAddMember';
//import  './Navbar.css';
function Navbar(props) {
  console.log("user")
  console.log(props.user)
  const history = useHistory();
  const [state, setState] = useState(
    {
      checked: false
    }
  );
    // this.state = {checked:false}
    // this.handlecheckboxChange = this.handlecheckboxChange.bind(this);  
  
    const handlecheckboxChange=(evt)=>{
      const newstate={...state};
      newstate.checked=!state.checked;
      setState(newstate);
  }

  const handlelogout=()=>{
   
      props.logOut();
      history.push("/login");
  
  }

  const handleatt=()=>{
    history.push("/AnyAtt");

}

  const handleNavClick=(evt)=>{
    const txt = evt.target.text;
    console.log(txt);
    let path = "";
    switch(txt){
      case"Add Entity":path = "/addEntity";break;
      case"Members":path = "/viewMembers";break;
      case"Faculties":path = "/viewFaculties";break;
      case"Departments":path = "/viewDepartments";break;
      case"Locations":path = "/viewLocations";break;
      case"Courses":path = "/viewAllCourses";break;
      case"Staff Missing Attendance":path= "/viewStaffMissingAttendance";break;
      case "Accept/Reject Requests":path="/Requeststoview";break;
      case "View Staff Info":path="/viewstaffinfo";break; 
      case "My Profile" : path="/profile";break; 
      case "Recieved Linking Requests" : path="/coordinator/requests";break; 
      case "View Entity Info":path="/viewentityinfo";break; 
      case "Assign/Delete Staff":path="/manipulatestaff";break
      case "Replacement Requests":path="/AcademicMemberReplacement";break
      case "Change Day off":path="/AnyAcademicDayOffRequest";break
      case "Leave Request":path="/AnyAcademicLeaveRequest";break
      case "Requests":path="/AcademicMemberReqContainer";break
      case "Manage Courses":path="/coordinator/courseManagement";break;
      
      case "Send Linking Request":path="/AnyAcademicSlotLinkingRequest";break;

{/* AcademicMemberReqContainer */}
      default: path = "/";
    }
    history.push(path);
  }

      let NBclassClicked = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
      let NBclassNotClicked = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" 
        return ( 
          <div className="navbar">
            <nav className="bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8" src={"https://lh6.ggpht.com/gNy40q6S_519oQZ_AE9sGypZ-Z94zDy2Xpm5Tg5mYf8yVOSLAxAhEatKLn0vJDyFErE=w300"} />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link style = {{cursor:'pointer'}} class={NBclassClicked} to="/">Dashboard</Link>
              
              {/* <a  class={NBclassClicked}>Dashboard</a> */}

              <a style={(props.user.MemberRank=="hr")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Add Entity</a>
              <a style={(props.user.MemberRank=="hr")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Members</a>
              <a style={(props.user.MemberRank=="hr")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Faculties</a>
              <a style={(props.user.MemberRank=="hr")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Departments</a>
              <a style={(props.user.MemberRank=="hr")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Locations</a>
              <a style={(props.user.MemberRank=="hr")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Courses</a>
              <a style={(props.user.MemberRank=="coordinator"||props.user.MemberRank=="instructor"||props.user.MemberRank=="hod")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} text ="Replacement Requests" onClick={handleNavClick}>Replacement Requests</a>
              <a style={(props.user.MemberRank=="coordinator"||props.user.MemberRank=="instructor"||props.user.MemberRank=="hod")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} text ="Change Day off" onClick={handleNavClick}>Change Day off</a>
              <a style={(props.user.MemberRank=="coordinator"||props.user.MemberRank=="instructor"||props.user.MemberRank=="hod")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} text ="Leave Request" onClick={handleNavClick}>Leave Request</a>
              <a style={(props.user.MemberRank=="coordinator"||props.user.MemberRank=="instructor"||props.user.MemberRank=="hod")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} text ="Send Linking Request" onClick={handleNavClick}>Send Linking Request</a>

              <a style={(props.user.MemberRank=="coordinator"||props.user.MemberRank=="instructor")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} text ="Requests" onClick={handleNavClick}>Requests</a>
              <a style={(props.user.MemberRank=="coordinator")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} text ="Manage Courses" onClick={handleNavClick}>Manage Courses</a>

              {/* coordinator  carentials  */}
              <a style={(props.user.MemberRank=="coordinator")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} text ="Recieved Linking Requests" onClick={handleNavClick}>Recieved Linking Requests</a>

              <a style={(props.user.MemberRank=="hr")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Staff Missing Attendance</a>



              <a style={(props.user.MemberRank=="hod")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Accept/Reject Requests</a>

              <a style={(props.user.MemberRank=="hod")?{display: 'block', cursor:'pointer'}:{display: 'none'}} className={NBclassNotClicked} onClick={handleNavClick}>Assign/Delete Staff</a>

              <a style={(props.user.MemberRank=="hod")?{display: 'block', cursor:'pointer'}:{display: 'none'}}   onClick={handleNavClick} className={NBclassNotClicked}>View Entity Info</a>


              <Link style={(props.user.MemberRank=="instructor" || props.user.MemberRank=="hod")?{display: 'block'}:{display: 'none'}} className={NBclassNotClicked} to="/MyCourses">Courses</Link>
              
              




              {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a> */}

              
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            {/* <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>

              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button> */}

            <div className="ml-3 relative">
              <input id="check01"   type="checkbox" style={{display: "none"}} name="menu" onChange={handlecheckboxChange} checked={state.checked}/>
              <label id ="label01" for="check01" className="text-gray-300">
                Menu
              </label>
              {state.checked&&<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 submenu" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <a   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" text ="My Profile"onClick={handleNavClick}>My Profile</a>

                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={handleatt}>My Attendance</button>

                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={handlelogout}>Log out</button>
              </div>}
            </div> 
        </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">Open main menu</span>
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

        <div className="hidden md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

        <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}/>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">Tom Cook</div>
            <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
          </div>
          <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
      
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div className="mt-3 px-2 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</a>

          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</a>
        </div>
      </div>
    </div>
  </nav>
  </div>
         )
}
 
export default Navbar;