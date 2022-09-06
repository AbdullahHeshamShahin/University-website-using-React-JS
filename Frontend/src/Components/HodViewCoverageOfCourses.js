import React, {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HodViewCoverageOfCourses(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
          MemberID:"Null" ,
          isViewed:false ,
          allcoursescoverage:[]
          
        }
      );
    
    const handleviewCourseCoverage=(evt)=>{
          
       
          const newstate={...state};
        newstate.isViewed=true;
                axios.get('http://localhost:8080/hod/viewcoverageofcourses' , {params:{token:props.realToken}}).then(res=>{
                  newstate.allcoursescoverage=res.data;
                 
                  setState(newstate);
                  console.log(newstate)       

                }).catch((err)=>{console.log(err);})
      
  
    }

    
 
    
  

      const checkMemberIDInput= (()=>{
        if(state.allcoursescoverage.length>0)
        {
          return ( <table className=" min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-800">

          <tr>
            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                Coverage
              </th>
              
              
              
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">

          {state.allcoursescoverage.map(element=>{
          return(  <tr>
            <td className="   py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-xl font-medium text-gray-900">
                                  {element.CourseName}
                                </div>
                                
                                
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        {element.Coverage}

                        </span>
                    </td>
                    
            </tr>
          )
          })}
                    </tbody>

          </table>)
        }

      else{
        if(state.isViewed)
        return(
          
          <table className=" min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-800">

          <tr>
            <th scope="col" className="  px-6 py-3 text-center text-lg font-medium text-gray-50 uppercase tracking-wider">
                 NO COURSES
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
      <h3 className="text-3xl font-medium leading-6 text-gray-900">view Course Coverage</h3>
     
    </div>
  </div>
  <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            
         



         
           
          </div>
        
          <div className="py-4">
          {checkMemberIDInput()}

        </div>

           
        </div>


        


        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onClick ={handleviewCourseCoverage}type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

export default HodViewCoverageOfCourses;