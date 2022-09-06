import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function  MemberAttendanceItem(props) {
    const [state, setState] = useState(
        {

        }
      )
     return (
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-sm text-gray-500">
                      {props.name}
                    </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-sm text-gray-500">
                      {props.date}
                    </div>
                </div>
              </td>

              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {props.name}
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
export default   MemberAttendanceItem;

