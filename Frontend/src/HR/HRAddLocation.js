import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HRAddLocation(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
          LocationName:"",
          Capacity:0,
          LocationType:"",
        }
      );
    
      const addLocation=(evt)=>{
        console.log( props.user)
        console.log( props.realToken)
        if(state.LocationName === ""){
            alert("Enter Location name");
            return;
        }
     
        if(!(state.Capacity > 0)){
            alert("Capacity should be greater than 0");
            return;
        }
   
        const LocationInfo = {
          locationName: state.LocationName,
          capacity: state.Capacity,
          locationType: state.LocationType
          
        }
      
        

        axios.post('http://localhost:8080/hr/addlocation' , LocationInfo,{params:{token:props.realToken}})
        .then((res) => {
          console.log(res.data);
          const token=res.data;
          
          history.push("/");
        }) 
        .catch((err)=>{
          console.log(" ERROR in login");
         
           console.log(err);
           const newstate={...state};
           if(!err || !err.res || !err.res.data){
            newstate.error='Access denied';
           }
           else{
              newstate.error=err.res.data;
           }
          setState(newstate);
        })
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
            <div>
<div className="hidden sm:block" aria-hidden="true">
<div className="py-5">
  <div className="border-t border-gray-200"></div>
</div>
</div>

<div className="mt-10 sm:mt-0">
<div className="md:grid md:grid-rows-1 md:gap-6" style = {{marginRight: 150, marginLeft: 150}}>
  <div className="md:col-span-1">
    <div className="px-4 sm:px-0">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Add Location</h3>
      <p className="mt-1 text-sm text-gray-600">
        Enter the Location information.
      </p>
    </div>
  </div>
  <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label for="first_name" className="block text-sm font-medium text-gray-700">Location Name</label>
              <input onChange={handleLocationName} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Capacity</label>
              <input onChange={handleCapacity} type="number" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
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
           

       
          </div>
        
        </div>

        


        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onClick={addLocation} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Save
          </button>
        </div>
      </div>
  </div>
</div>
</div>
</div>
        )
}

export default HRAddLocation;