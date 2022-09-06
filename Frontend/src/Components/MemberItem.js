import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function  MemberItem(props) {
    const [state, setState] = useState(
        {
          FacultyName:"",
          DeanId:"",
        }
      )
     return (
                <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {props.name}
                    </div>
                    <div class="text-sm text-gray-500">
                      {props.mail}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{props.fac || "Unassigned"}</div>
                <div class="text-sm text-gray-500">{props.dep || "Unassigned"}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {props.MemberRank}
                </span>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a 
                style = {{cursor:'pointer'}} 
                class="text-indigo-600 hover:text-indigo-900" 
                onClick={()=>{props.showMyAttendance(props.id)}}>Attendance</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a 
                style = {{cursor:'pointer'}} 
                class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a 
              style={{color: "red", cursor:'pointer'}} 
              class="text-indigo-600 hover:text-indigo-900" 
              onClick={()=>{props.deleteMe(props.id)}}>Delete</a>
              </td>
            </tr>
          
        )
}
export default  MemberItem;

