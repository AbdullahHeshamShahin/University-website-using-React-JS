import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HRAddCourse(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
          FacultyName:"",
          DepartmentName:"",
          CourseName:"",
          CoordinatorId:"",
          CoordinatorName:""
        }
      );
    
    const addCourse=(evt)=>{
        if(state.FacultyName === ""){
            alert("Enter Faculty name");
            return;
        }
        if(state.DepartmentName === ""){
            alert("Enter Department name");
            return;
        }
        if(state.CourseName === ""){
          alert("Enter Coordinator Name");
          return;
        }
        if(state.CoordinatorName === ""){
            alert("Enter Coordinator Name");
            return;
        }
        var CoordinatorIDFormat = /^[ac]+(?:-[0-9]+)$/;
    if(state.CoordinatorId.match(CoordinatorIDFormat)){
        
    }
    else{
        alert("ID should be in format of ac-IDnumber")
    }
      
        const courseinfo = {
          
            facultyName:state.FacultyName,
            departmentName: state.DepartmentName,
            courseName: state.CourseName,
            coordinatorID: state.CoordinatorId ,
            coordinatorName:state.CoordinatorName
        }
      
        

        axios.post('http://localhost:8080/hr/addCourse' , courseinfo, {params:{token:props.realToken}})
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
      <h3 className="text-lg font-medium leading-6 text-gray-900">Add Course</h3>
      <p className="mt-1 text-sm text-gray-600">
        Enter the Course information.
      </p>
    </div>
  </div>
  <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label for="first_name" className="block text-sm font-medium text-gray-700">Faculty name</label>
              <input onChange={handleFacultyName} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Department name</label>
              <input onChange={handleDepartmentName} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

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
            
          </div>
        
        
        </div>

        


        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onClick={addCourse} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

export default HRAddCourse;