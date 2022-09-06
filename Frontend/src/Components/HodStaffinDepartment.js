import React, {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HodStaffinDepartment(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
          CourseName:"Null" ,
          isViewed:false ,
          Instructors:[],
          TAs:[],
          staffArray:[],
          CourseArray:[]
        }
      );
    
    const handleviewstaff=(evt)=>{
          
        if(state.CourseName=="Null")
        {   const newstate={...state};
        newstate.isViewed=true;
                axios.get('http://localhost:8080/hod/viewallstaffInMyDepartment' , {params:{token:props.realToken}}).then(res=>{
                  newstate.staffArray=res.data;
                  newstate.TAs=[];
                  newstate.Instructors=[];
                  setState(newstate);
                  console.log(newstate)       

                }).catch((err)=>{console.log(err);})
        }
        else
        {
          const newstate={...state};
        newstate.isViewed=true;
        console.log("hello")
          axios.get(`http://localhost:8080/hod/viewallstaffforThisCourse/${state.CourseName}` , {params:{token:props.realToken}}).then(res=>{
            console.log(res.data.Instructors);
            console.log(res.data.TAs)
            newstate.Instructors=res.data.Instructors;
            newstate.TAs=res.data.TAs;
            newstate.staffArray=[];
            setState(newstate);
            console.log(newstate)     
           }).catch((err)=>{console.log(err);})
          }   

  
    }

    
 
    const handleCourseName=(evt)=> {
        const newstate={...state};
        newstate.CourseName=evt.target.value;
        setState(newstate);
        console.log(newstate)
     }
     useEffect(()=>{
      axios.get('http://localhost:8080/hod/viewallCourse' , {params:{token:props.realToken}}).then(res=>{
      const newstate={...state};
      newstate.CourseArray = res.data;
      setState(newstate);
      console.log(newstate)
      })
      },[])

      const checkcourseNameInput= (()=>{
        console.log("dfssdsd")
        if(state.staffArray.length>0 && state.TAs.length==0 && state.Instructors.length==0)
        {
          return ( <table className=" min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-800">

          <tr>
            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                 Staff information
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                mail
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                office
              </th>
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

          {state.staffArray.map(element=>{
          return(  <tr>
            <td className="   py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-xl font-medium text-gray-900">
                                  id:{element.id}
                                </div>
                                <div className="text-xl text-gray-500">
                               Name: {element.name}
                                </div>
                                
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        {element.mail}

                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                          {element.office}
                        </span>
                    </td>
            </tr>
          )
          })}
                    </tbody>

          </table>)
        }

        if((state.TAs.length>0 || state.Instructors.length>0)&& state.staffArray.length==0)
        { return(
          <table className=" min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-800">

          <tr>
            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                 Staff information
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                mail
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                office
              </th>
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

          {state.Instructors.map(element=>{ return(

            <tr>
            <td className="   py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-xl font-medium text-gray-900">
                                  id:{element.id}
                                </div>
                                <div className="text-xl text-gray-500">
                               Name: {element.name}
                                </div>
                                
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        {element.mail}

                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                          {element.office}
                        </span>
                    </td>
            </tr>
          )
          })}
          
          {state.TAs.map(element=>{ return(
           <tr>
            <td className="   py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-xl font-medium text-gray-900">
                                  id:{element.id}
                                </div>
                                <div className="text-xl text-gray-500">
                               Name: {element.name}
                                </div>
                                
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        {element.mail}

                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                          {element.office}
                        </span>
                    </td>
            </tr>
          )
          })}
                    </tbody>

          </table>
      )
        }

      else{
        if(state.isViewed)
        return(
          
          <table className=" min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-800">

          <tr>
            <th scope="col" className="  px-6 py-3 text-center text-lg font-medium text-gray-50 uppercase tracking-wider">
                 NO Staff 
              </th>
          </tr>    
        </thead> 
        </table>   
            
        
      )  }

      })
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
      <h3 className="text-3xl font-medium leading-6 text-gray-900">view staff Member</h3>
      <p className="px-10 py-2 mt-1 text-xl text-gray-600">
        Enter the Course Name if you want to view staff in this course .
      </p>
      <p className="px-10 py-2 mt-1 text-lg text-gray-600">
        if Null Display all Staff in your Department
      </p>
    </div>
  </div>
  <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            
          <div className="col-span-6 sm:col-span-3">
              <label for="country" className="block text-lg font-medium text-gray-700">Course Name</label>
              <select  onChange={handleCourseName} id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg">
                <option>Null</option>
              { state.CourseArray.map((element)=>{return <option>{element.courseName}</option>})}

              </select>
            </div>



         
           
          </div>
        
          <div className="py-4">
          {checkcourseNameInput()}

        </div>

           
        </div>


        


        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onClick ={handleviewstaff}type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            view
          </button>
        </div>
      </div>
  </div>
</div>
</div>
</div>
        )
}

export default HodStaffinDepartment;