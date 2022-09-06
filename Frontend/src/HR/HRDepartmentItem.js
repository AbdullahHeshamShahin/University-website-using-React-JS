import React, {useState} from 'react';
import {
  Redirect
} from "react-router-dom";
function HRDepartmentItem(props) {
    const [state, setState] = useState(
        {
          DepartmentName:"",
          HeadName:"",
          HeadId:"",
          editShown:false
        }
      )
      const updateMe = ()=>{
        let updateObj = {};
        updateObj.facultyName = props.facultyName
        updateObj.departmentNameOld = props.departmentName
        if(state.DepartmentName != ""){
          updateObj.departmentNameNew = state.DepartmentName
        }
        if(state.HeadName != ""){
          updateObj.headName = state.HeadName
        }
        if(state.HeadId != ""){
          updateObj.headID = state.HeadId
        }
        console.log(updateObj);

        props.updateMe(updateObj);
      }

      const handleHeadName=(evt)=> {
        const newstate={...state};
        newstate.HeadName=evt.target.value;
        setState(newstate);
        console.log(newstate)
      }
      const handleHeadID=(evt)=> {
        const newstate={...state};
        newstate.HeadId=evt.target.value;
        setState(newstate);
        console.log(newstate)

      }
      const handleDepartmentName=(evt)=> {
        const newstate={...state};
        newstate.DepartmentName=evt.target.value;
        setState(newstate);
        console.log(newstate)
      }

      const showMyEdit = ()=>{
        const newstate = {...state};
        newstate.editShown = !state.editShown;
        setState(newstate);
      }

     return (
                <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-md font-medium text-gray-900">
                    {props.departmentName}
                    </div>
                    <div class="text-sm text-gray-500">
                      {props.facultyName}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="ml-4">
                  <div class="text-md font-medium text-gray-900">
                      {props.headID}
                    </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
              <div class="ml-4">
                  <div class="text-md font-medium text-gray-900">
                      {props.headName}
                    </div>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a 
                style={{cursor:'pointer'}} 
                class="text-indigo-600 hover:text-indigo-900"
                onClick={showMyEdit}>Edit</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a 
              style={{color: "red", cursor:'pointer'}} 
              class="text-indigo-600 hover:text-indigo-900" 
              onClick={()=>{props.deleteMe(props.facultyName, props.departmentName)}}>Delete</a>
              </td>

              {state.editShown&&
                      <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Department name</label>
                          <input onChange={handleDepartmentName} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="first_name" className="block text-sm font-medium text-gray-700">Head Name</label>
                          <input onChange={handleHeadName} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Head ID</label>
                          <input onChange={handleHeadID} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>

                          <button onClick={updateMe} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Save
                          </button>
                      </div>
                    </div>
            }

            </tr>
          
        )
}

export default HRDepartmentItem;