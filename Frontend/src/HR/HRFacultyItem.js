import React, {useState} from 'react';


function HRFacultyItem(props) {
    const [state, setState] = useState(
        {
          FacultyName:"",
          DeanName:"",
          DeanId:"",
          editShown:false
        }
    )
    const updateMe = ()=>{
      let updateObj = {};
      updateObj.facultyNameOld = props.facultyName
      if(state.FacultyName != ""){
        updateObj.facultyNameNew = state.FacultyName
      }
      if(state.DeanName != ""){
        updateObj.deanName = state.DeanName
      }
      if(state.DeanId != ""){
        updateObj.deanID = state.DeanId
      }
      console.log(updateObj);
      props.updateMe(updateObj);
    }

    const handleDeanName=(evt)=> {
      const newstate={...state};
      newstate.DeanName=evt.target.value;
      setState(newstate);
      console.log(newstate)
    }
    const handleDeanID=(evt)=> {
      const newstate={...state};
      newstate.DeanId=evt.target.value;
      setState(newstate);
      console.log(newstate)

    }
    const handleFacultyName=(evt)=> {
      const newstate={...state};
      newstate.FacultyName=evt.target.value;
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
                {props.facultyName}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {props.deanID}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  {props.deanName}
              </td>
              
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a 
                style={{cursor:'pointer'}} 
                class="text-indigo-600 hover:text-indigo-900"
                onClick={showMyEdit}>Edit</a>
              </td>

              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <a style={{color: "red", cursor:'pointer'}} class="text-indigo-600 hover:text-indigo-900" onClick={()=>{props.deleteMe(props.facultyName)}}>Delete</a>
              </td>

              {state.editShown&&
                      <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Faculty name</label>
                          <input onChange={handleFacultyName} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="first_name" className="block text-sm font-medium text-gray-700">Dean Name</label>
                          <input onChange={handleDeanName} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Dean ID</label>
                          <input onChange={handleDeanID} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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

export default HRFacultyItem;