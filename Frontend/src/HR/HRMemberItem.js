import React, {useState} from 'react';

function HRMemberItem(props) {
    const [state, setState] = useState(
        {
          FacultyName:"",
          DepartmentName:"",
          salary:props.salary,
          editShown:false
        }
      )

      const updateMe = ()=>{
        let updateObj = {};

        if(state.FacultyName != ""){
          updateObj.facultyName = state.FacultyName
        }
        if(state.DepartmentName != ""){
          updateObj.departmentName = state.DepartmentName
        }
        updateObj.salary = state.Salary
        
        console.log(updateObj);

        props.updateMe(updateObj);
      }

      const handleFacultyName=(evt)=> {
        const newstate={...state};
        newstate.FacultyName=evt.target.value;
        setState(newstate);
        console.log(newstate)
      }
      const handleDepartmentName=(evt)=> {
        const newstate={...state};
        newstate.DepartmentName=evt.target.value;
        setState(newstate);
        console.log(newstate)
      }
      const handleSalary=(evt)=> {
        const newstate={...state};
        newstate.Salary=evt.target.value;
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
                class="text-indigo-600 hover:text-indigo-900"
                onClick={showMyEdit}>Edit</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a 
              style={{color: "red", cursor:'pointer'}} 
              class="text-indigo-600 hover:text-indigo-900" 
              onClick={()=>{props.deleteMe(props.id)}}>Delete</a>
              </td>

              {state.editShown&&
                      <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Faculty name</label>
                          <input onChange={handleFacultyName} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="first_name" className="block text-sm font-medium text-gray-700">Department Name</label>
                          <input onChange={handleDepartmentName} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Salary</label>
                          <input onChange={handleSalary} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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
export default HRMemberItem;

