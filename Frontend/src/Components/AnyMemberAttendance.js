import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import AnyMemberAttendanceItem from './AnyMemberAttendanceItem';

let realToken;

function HRMemberAttendance(props) {
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
        await axios.get('http://localhost:8080/memberRoutes/viewAttendance',{params:{token:props.realToken}})
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
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" >
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" style = {{marginRight: 150, marginLeft: 150}}>
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Attended
                </th>

                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sign in / out
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            
          {state.arr.map((item)=>{
            return <AnyMemberAttendanceItem 
            memberId = {item.memberId} 
            date = {item.date}
            missedDay ={item.missedDay?"Absent":"Attended"}
            sessions = {item.sessions}/>
  })}
          </tbody>
          </table>
        
        </div>     
    </div>      
          )
  }
  
  export default HRMemberAttendance;