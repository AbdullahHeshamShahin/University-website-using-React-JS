import React, {useEffect, useState} from 'react';
import HRMemberItem from "./HRMemberItem"
import HRMemberAttendance from "./HRMemberAttendance"
import axios from 'axios'
import {
  Redirect
} from "react-router-dom";

let realToken;

function HRMembersContainer(props) {
  const [state, setState] = useState(
    {
      counter:0,
      arr:[],
      viewingList:true,
      viewedId:""
    }
  );
  const deleteMe = (id)=>{
    console.log(id)
    axios.post('http://localhost:8080/hr/deleteMemberDepartment', {memberId:id} ,{params:{token:realToken}})
    
    const newstate={...state};
    newstate.arr= newstate.arr.filter((item)=>{
      return item.memberId !== id;
    })
    setState(newstate);
  }

  const updateMe = async (updateObj)=>{
    if(updateObj.facultyName && updateObj.departmentName){
      await axios.post('http://localhost:8080/hr/updateMemberDepartment', 
    {memberId:updateObj.id, facultyName:updateObj.facultyName, departmentName:updateObj.departmentName},
    {params:{token:realToken}})
    }

    console.log("Before salary")
    console.log(realToken)
    await axios.post('http://localhost:8080/hr/updateMemberSalary', 
    {memberId: updateObj.memberId, salary:updateObj.salary}, {params:{token:realToken}})
    
    const newstate={...state};
    newstate.counter= state.counter+1;
    setState(newstate);
  }

  const showMyAttendance = async (id)=>{
    const newstate = {...state};
    newstate.viewedId = id;
    newstate.viewingList = false;
    setState(newstate);
    // const myAtt = await axios.post('http://localhost:8080/hr/viewStaffAttendance', {memberId:id} ,{params:{token:realToken}})
    // .then((res) => {
    //   console.log(res.data);
    // }) 
    // .catch((err)=>{
    //   console.log(" ERROR in view Attendance");
     
    //    console.log(err);
    // })
  }
  const setFalse = ()=>{
    console.log("Ente");
    const newstate = {...state};
    newstate.viewingList = true;
    setState(newstate);
  }
  useEffect(() => {
    async function fetchData() {
      realToken = props.realToken;
      await axios.post('http://localhost:8080/hr/viewAllMembers', {} ,{params:{token:props.realToken}})
    .then((res) => {
      const newstate={...state};
      newstate.arr=res.data;
      newstate.counter = state.counter+1;
      setState(newstate);
      console.log("res.data");
      console.log(res.data);
    }) 
    .catch((err)=>{
      console.log(" ERROR in login");
     
       console.log(err);
    })
    console.log("after res")
    }
    if(state.counter %2=== 0){
      console.log("test")
      fetchData();
    }
  });

    return (
    !props.realToken?<Redirect to="/login"/>:
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      {state.viewingList?
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
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delete
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
          
        {state.arr.map((item)=>{
          return <HRMemberItem
          id = {item.memberId}  
          name ={item.name} 
          mail={item.email} 
          fac={item.FacultyName} 
          dep = {item.departmentName} 
          salary = {item.salary}
          MemberRank = {item.MemberRank}
          showMyAttendance={showMyAttendance}
          updateMe = {updateMe}
          deleteMe = {deleteMe}/>
})}
        </tbody>
        </table>
      
      </div>
      :<HRMemberAttendance id={state.viewedId} realToken={props.realToken} setFalse = {setFalse}/>
      }
</div>

          
        )
}

export default HRMembersContainer;