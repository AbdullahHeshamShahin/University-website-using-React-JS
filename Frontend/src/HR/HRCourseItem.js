import React, {useState} from 'react';

function HRCourseItem(props) {
    const [state, setState] = useState(
        {
          CourseName:"",
          CoordinatorName:"",
          CoordinatorId:"",
          editShown:false
        }
      )
      const updateMe = ()=>{
        let updateObj = {};
        updateObj.facultyName = props.facultyName
        updateObj.departmentName = props.departmentName
        updateObj.courseNameOld = props.courseName
        if(state.CourseName != ""){
          updateObj.courseNameNew = state.CourseName
        }
        if(state.CoordinatorName != ""){
          updateObj.coordinatorName = state.CoordinatorName
        }
        if(state.CoordinatorId != ""){
          updateObj.coordiantorID = state.CoordinatorId
        }
        console.log(updateObj);
        props.updateMe(updateObj);
      }
      const showMyEdit = ()=>{
        const newstate = {...state};
        newstate.editShown = !state.editShown;
        setState(newstate);
      }
      const handleCoordinatorName=(evt)=> {
        const newstate={...state};
        newstate.CoordinatorName=evt.target.value;
        setState(newstate);
        console.log(newstate)
      }
      const handleCoordinatorID=(evt)=> {
        const newstate={...state};
        newstate.CoordinatorId=evt.target.value;
        setState(newstate);
        console.log(newstate)

      }
      const handleCourseName=(evt)=> {
        const newstate={...state};
        newstate.CourseName=evt.target.value;
        setState(newstate);
        console.log(newstate)
      }
     return (
            <tr>  
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="ml-4">
                  <div class="text-md font-medium text-gray-900">
                      {props.courseName}
                    </div>
                </div>
              </td>

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
                      {props.assignedCount}
                    </div>
                </div>
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a
                style={{cursor:'pointer'}} 
                class="text-indigo-600 hover:text-indigo-900" 
                onClick={()=>{showMyEdit()}}>Edit</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a 
              style={{color: "red", cursor:'pointer'}} 
              class="text-indigo-600 hover:text-indigo-900" 
              onClick={()=>{props.deleteMe(props.facultyName, props.departmentName, props.courseName)}}>Delete</a>
              </td>

              {state.editShown&&
                      <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Course name</label>
                          <input onChange={handleCourseName} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="first_name" className="block text-sm font-medium text-gray-700">Coordinator Name</label>
                          <input onChange={handleCoordinatorName} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Coordinator ID</label>
                          <input onChange={handleCoordinatorID} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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
export default HRCourseItem;