import React, {useState} from 'react';

function HRLocationItem(props) {
    const [state, setState] = useState(
        {
          LocationName:"",
          LocationType:"Lab",
          Capacity:props.capacity
        }
      )

      const updateMe = ()=>{
        let updateObj = {};
        updateObj.locationNameOld = props.locationName
        if(state.LocationName != ""){
          updateObj.locationNameNew = state.LocationName
        }
        if(state.LocationType != ""){
          updateObj.locationType = state.LocationType
        }
        updateObj.capacity = state.Capacity
        console.log(updateObj);
        props.updateMe(updateObj);
      }

      const showMyEdit = ()=>{
        const newstate = {...state};
        newstate.editShown = !state.editShown;
        setState(newstate);
      }

      const handleLocationName=(evt)=> {
        const newstate={...state};
        newstate.LocationName=evt.target.value;
        setState(newstate);
        console.log(newstate)
     }
     const handleCapacity=(evt)=> {
       const newstate={...state};
       newstate.Capacity=parseInt(evt.target.value);
       setState(newstate);
       console.log(newstate)
      }
      const handleLocationType=(evt)=> {
        const newstate={...state};
        newstate.LocationType=evt.target.value;
        setState(newstate);
        console.log(newstate)
 
      }

     return (
                <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                {props.locationName}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {props.locationType}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  {props.capacity}
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
              onClick={()=>{props.deleteMe(props.locationName)}}>Delete</a>
              </td>

              {state.editShown&&
                      <div className="px-4 py-5 bg-white sm:p-6">
                      <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Location name</label>
                          <input onChange={handleLocationName} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>
            
                        <div className="col-span-6 sm:col-span-3">
                          <label for="country" className="block text-sm font-medium text-gray-700">Location Type</label>
                          <select onChange={handleLocationType} id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option>Lab</option>
                            <option>Tutorial</option>
                            <option>Office</option>
                            <option> Lecture Hall</option>
                            <option>Exam Hall</option>
                          </select>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                          <label for="last_name" className="block text-sm font-medium text-gray-700">Capacity</label>
                          <input onChange={handleCapacity} type="number" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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

export default HRLocationItem;