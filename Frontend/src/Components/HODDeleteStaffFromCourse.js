import React, {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HODDeleteStaffFromCourse(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
            CourseArray:[],
            courseName:"",
            InstructorsArray:[],
            Instructors:""
        }
      );
    
    
   
    
      const handleCourseName=(evt)=> {
        const newstate={...state};
        newstate.courseName=evt.target.value
        setState(newstate);
        console.log(newstate)
        }
        const handleDelete=(()=>{
            if(state.Instructors==="Choo"|| !state.Instructors ){return alert("You Should Choose an Instructor")}
          if(state.courseName==="Choose here" || !state.courseName ){return alert("You should Choose a Course")}
            const body = {memberId:state.Instructors , courseName:state.courseName}
            axios.delete(`http://localhost:8080/hod/AssignCourseInstructor`,{params:{token:props.realToken},data:body}).then(res=>{
                alert("Deleted Successfully")
            }).catch(err=>{console.log(err);alert("Could not delete this Staff from Course ")})


        })
        const handeleInstructorid=(evt)=>
        {
            const newstate={...state};
            newstate.Instructors=evt.target.value.substring(4,evt.target.value.indexOf(",")-1);;
            setState(newstate);
            console.log(newstate)  
        }

        useEffect(()=>{
            axios.get('http://localhost:8080/hod/viewallCourse' , {params:{token:props.realToken}}).then(res=>{
            const newstate={...state};
            newstate.CourseArray = res.data;
            axios.get('http://localhost:8080/hod/viewallMemberids', {params:{token:props.realToken}}).then(res=>{
                newstate.InstructorsArray = res.data.filter(members=>{
                    return members.MemberRank=="instructor"
                });
                setState(newstate);
                console.log(newstate)
            })
            })
           

            },[])

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
      <h3 className="text-lg font-medium leading-6 text-gray-900">Delete Instructor From Course</h3>
      <p className="mt-1 text-sm text-gray-600">
        Enter the Course and Instructor information.
      </p>
    </div>
  </div>
  <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            

            <div className="col-span-6 sm:col-span-3">
              <label for="country" className="block text-sm font-medium text-gray-700">Instructor ID</label>
              <select onChange={handeleInstructorid} id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg">
              <option selected= "disabled">Choose here</option>

              { state.InstructorsArray.map((element)=>{return <option>ID: {element.id}  ,  Name: {element.name}</option>})}

              </select>
            </div>


            <div className="col-span-6 sm:col-span-3">
              <label for="country" className="block text-sm font-medium text-gray-700">Course Name</label>
              <select onChange={handleCourseName} id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg">
              <option selected= "disabled">Choose here</option>

              { state.CourseArray.map((element)=>{return <option >{element.courseName}</option>})}

              </select>
            </div>
          </div>
        
            <br></br>
          
        
        </div>

        


        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onClick={handleDelete} type="Assign" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Delete
          </button>
        </div>
      </div>
  </div>
</div>
</div>
</div>
        )
}

export default HODDeleteStaffFromCourse;