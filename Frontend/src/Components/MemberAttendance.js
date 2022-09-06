import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import  MemberItem from "./MemberItem"
import axios from 'axios'
import MemberAttendanceItem from './MemberAttendanceItem';

let realToken;

function MemberAttendance(props) {
    const [state, setState] = useState(
      {
        counter:0,
        arr:[],
      }
    );
    const history = useHistory();
    useEffect(() => {
      async function fetchData() {
        realToken = props.realToken;
        await axios.post('http://localhost:8080/hr/viewStaffAttendance', {memberId:props.id} ,{params:{token:props.realToken}})
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
      if(state.counter %2== 0){
        console.log("test")
        fetchData();
      }
    });
  
      return (
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attended
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
            return <MemberAttendanceItem name = {item}/>
  })}
          </tbody>
          </table>
        
        </div>     
    </div>      
          )
  }
  
  export default MemberAttendance;