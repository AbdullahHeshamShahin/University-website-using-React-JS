import React, {useEffect, useState} from 'react';
import HRStaffMissingAttendanceItem from "./HRStaffMissingAttendanceItem"
import axios from 'axios'
import {
  Redirect
} from "react-router-dom";

let realToken;

function HRStaffMissingAttendance(props) {
  const [state, setState] = useState(
    {
      counter:0,
      arr:[],
    }
  );

  const choseDate = async (evt)=>{
    const dateoz = new Date(evt.target.value);
    dateoz.setUTCHours(22)
    await axios.post('http://localhost:8080/hr/viewMembersMissingTime', {date:dateoz} ,{params:{token:props.realToken}})
    .then((res) => {
      
      const newstate={...state};
      newstate.arr=res.data;
      setState(newstate);
      console.log("res.data");
      console.log(res.data);
    }) 
    .catch((err)=>{
      console.log(" ERROR in login");
     
       console.log(err);
    })
  }
  
    return (
    !props.realToken?<Redirect to="/login"/>:
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div className="col-span-6 sm:col-span-3">
            <label for="first_name" className="block text-sm font-medium text-gray-700">Coordinator Name</label>
            <input onChange={choseDate} style={{height:25}} type="date" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Faculty / Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Job Title
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          
        {state.arr.map((item)=>{
          return <HRStaffMissingAttendanceItem
          id = {item.memberId}  
          name ={item.name} 
          mail={item.email} 
          fac={item.FacultyName} 
          dep = {item.departmentName} 
          salary = {item.salary}
          MemberRank = {item.MemberRank}/>
})}
        </tbody>
        </table>
      
      </div>
</div>

          
        )
}

export default HRStaffMissingAttendance;