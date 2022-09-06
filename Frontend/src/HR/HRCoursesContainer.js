import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import HRCourseItem from "./HRCourseItem"
import axios from 'axios'

import {
  Redirect
} from "react-router-dom";
let realToken;

function HRCourseContainer(props) {
  const [state, setState] = useState(
    {
      counter:0,
      arr:[]
    }
  );
  const deleteMe = (mFacultyName, mDepartmentName, mCourseName)=>{
    console.log("fac " +mFacultyName)
    console.log("dep "+ mDepartmentName)
    console.log("course "+ mCourseName)
    axios.post('http://localhost:8080/hr/deleteCourse', 
    {facultyName:mFacultyName, departmentName: mDepartmentName, courseName: mCourseName} ,{params:{token:realToken}})
    
    const newstate={...state};
    newstate.arr= newstate.arr.filter((item)=>{
      return (item.facultyName != mFacultyName || item.departmentName != mDepartmentName || item.courseName != mCourseName);    
    })
    setState(newstate);
  }

  const updateMe = async (updateObj)=>{

    await axios.post('http://localhost:8080/hr/updateCourse', updateObj ,{params:{token:realToken}})
    
    const newstate={...state};
    newstate.counter= state.counter+1;
    setState(newstate);
  }

  const history = useHistory();
  useEffect(() => {
    async function fetchData() {
      realToken = props.realToken;
      await axios.post('http://localhost:8080/hr/viewAllCourses', {} ,{params:{token:props.realToken}})
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
      <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Faculty / Department
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Assinged Staff
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
          return <HRCourseItem
          courseName = {item.courseName}  
          facultyName ={item.facultyName} 
          departmentName={item.departmentName} 
          assignedCount={item.assignedCount}
          updateMe = {updateMe}
          deleteMe = {deleteMe}/>
})}
        </tbody>
        </table>
      
      </div>
</div>

          
        )
}

export default HRCourseContainer;