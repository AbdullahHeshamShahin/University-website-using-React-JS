import React, { useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import HODRequestItem from "./HODRequestItem"
import axios from 'axios'

function HODRequestContainer(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
          FacultyName:"",
          DeanId:"",

          array1:[]
        }
      )
    

    const addFaculty=(evt)=>{
        console.log("user" + props.user)
        console.log("token" + props.realToken)
        if(state.FacultyName == ""){
            alert("Enter Faculty name");
            return;
    }
     
        var DeanFormat = /^[ac]+(?:-[0-9]+)$/;
    if(state.DeanId.match(DeanFormat)){
       alert("cor")
    }
    else{
       alert("wrong")
    }
     
        const FacultyInfo = {
          
            facultyName:state.FacultyName,
            deanID: state.DeanId,
           
          
        }
  }
       

        // axios.post('http://localhost:8080/hr/addfaculty' , {email:"kimo",password:123456})
        // .then((res) => {
        //   console.log(res.data);
        //   const token=res.data;
          
        //   history.push("/");
        // }) 
        // .catch((err)=>{
        //   console.log(" ERROR in login");
         
        //    console.log(err);
        //    const newstate={...state};
        //    if(!err || !err.res || !err.res.data){
        //     newstate.error='Access denied';
        //    }
        //    else{
        //       newstate.error=err.res.data;
        //    }
        //   setState(newstate);
        // })

        // axios.post('http://localhost:8080/hr/addMember' , {ahmed:"hla"})
        // .then((res) => {
        //   console.log(res.data);        
        //   history.push("/addEntity");
        // }) 
        // .catch((err)=>{
        //   console.log(" ERROR in login");
         
        //    console.log(err);
        //    const newstate={...state};
        //    if(!err || !err.res || !err.res.data){
        //     newstate.error='Access denied';
        //    }
        //    else{
        //       newstate.error=err.res.data;
        //    }
        //   setState(newstate);
        // })

        useEffect(()=>{
          axios.get('http://localhost:8080/hod/Requests',{params:{token:props.realToken}})
          .then (res=>{
            console.log(res.data)
              const newstate={...state};
              newstate.array1=res.data;
              
              setState(newstate);
              
            console.log(state.array1);

          }).catch((err)=>{console.log(err)})
          
        },[]);

    
  
     

    return (
     
    <div className=" py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className=" shadow overflow-hidden border-b border-gray-2  00 sm:rounded-lg">
        <table className=" min-w-full divide-y divide-gray-100">
          <thead className="bg-gray-800">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                Request Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                Request Type
              </th>

              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                newDayOff
              </th>

              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                Leaving Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                reason
              </th>
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                ROLE
              </th>
             
              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                STATUS
              </th>

              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                Comment
              </th>

              <th scope="col" className="px-6 py-3 text-left text-lg font-medium text-gray-50 uppercase tracking-wider">
                ACCEPT/REJECT
              </th>
            </tr>
          </thead>
        

          <tbody className="bg-white divide-y divide-gray-200">
          {state.array1.map((item)=>{return <HODRequestItem 
          leavingDate= {item.leavingDate}
          date= {item.date}
          newDayoff ={item.newDayOff}
          realToken={props.realToken}
          department={item.reciever}
          id={item._id}
          name ={item.sender} 
          type={item.type} item
          reason = {item.reason} 
          status = {item.status}
          comment = {item.comment}/>
          })}
        </tbody>
        </table>
     

      </div>
    </div>
  
          
        )
}





export default HODRequestContainer;





