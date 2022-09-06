







import React, {useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function HODRequestItem(props) {

    const history = useHistory();
    var clickablebutton = true;
    const [state, setState] = useState(
        {
          comment:"",
          memberinfo:{}

        }
      )
 const showstatuscolor = (()=>
 {
    const Status = props.status;
    console.log(Status=="accepted")
    
    if(Status=="rejected"){
            clickablebutton=false;
          return (  <td className="px-6 py-4 whitespace-nowrap">
             <span className="px-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-red-100 text-red-800 "   >
             rejected
             </span>
             </td>)
            }
               
        
    if(Status=="pending"){
        
         return (   <td className="px-6 py-4 whitespace-nowrap">
        <span className="px-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-gray-100 text-gray-800 "   >
        pending
        </span>
         </td>)}
    
    if(Status=="accepted"){
        clickablebutton=false;

        return ( <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-800 "   >
            accepted
            </span>
            </td>)
        }           
   
 })

 const handleacceptance=(evt)=> {

    const acceptbody={id:props.id,statusType:"accepted",comment:state.comment,department:props.department, leavingDate:props.leavingDate}
    axios.post('http://localhost:8080/hod/Requests',acceptbody,{params:{token:props.realToken}}).then((res)=>{
        history.push("/")
        history.push("/myRequests")
       // console.log(res)

    }).catch(err=>{
    console.log(err)})

   
 }


 const handlerejectance=(evt)=> {


    const acceptbody={id:props.id,statusType:"rejected",comment:state.comment,department:props.department}
    axios.post('http://localhost:8080/hod/Requests',acceptbody,{params:{token:props.realToken}}).then((res)=>{
        history.push("/")
        history.push("/myRequests")
       // console.log(res)

    }).catch(err=>{
    console.log(err)})

   
 }


 const commenthandlder=(evt)=> {
    const newstate={...state};
    newstate.comment=evt.target.value;
    setState(newstate);
    console.log(newstate)
 }

 useEffect(()=>{
    axios.get(`http://localhost:8080/hod/viewAllMembers/${props.name}`,{params:{token:props.realToken}})

    .then (res=>{
        const newstate={...state};
    newstate.memberinfo=res.data;
    setState(newstate);
    console.log(newstate)

      }).catch((err)=>{console.log(err)})
 },[])


     return (
                <tr>

                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xl text-gray-800">{props.date.substring(0,props.date.indexOf("T"))}
                        </div>
                    </td>
                    <td className="   py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-xl font-medium text-gray-900">
                                {state.memberinfo.name}
                                </div>
                                <div className="text-xl text-gray-500">
                                {state.memberinfo.email}
                                </div>
                            </div>
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        {props.type}

                        </span>
                    </td>
                {props.newDayoff && <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        {props.newDayoff}
                        
                        </span>
                    </td>}

                    {!(props.newDayoff) && <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        _______
                        </span>
                    </td>}   
                 {props.leavingDate &&    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        {props.leavingDate.substring(0,props.leavingDate.indexOf("T"))}

                        </span>
                    </td>}
                 {!props.leavingDate &&    <td className="px-14 py-4 whitespace-nowrap">
                        <span className="text-xl text-gray-800"   >
                        _______

                        </span>
                    </td>}   
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xl text-gray-800">{props.reason}</div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800">
                        Admin
                    </td>
                  
                    
                
            {showstatuscolor()}

        {props.comment&&
             <td className="px-6 py-4 whitespace-nowrap text-xl text-gray-800">
             {props.comment}
             </td>
        }
        {
            !(props.comment) &&


            <td className="  px-6 py-4 whitespace-nowrap text-xl text-gray-800  ">   
                        <input  onChange={commenthandlder} type="text"  id="last_name" autocomplete="family-name" className=" text-gray-50 bg-gray-500 mt-1 focus:ring-indigo-800 focus:border-indigo-800 block w-2/5 shadow-xl xl:text-xl border-gray-300 rounded-md"/>
                        </td>
        }
                   

            {clickablebutton &&        <td className="px-6 py-4 whitespace-nowrap">
                    <div className="ml-4">
                                <div>
                                <a  onClick={handleacceptance}style={{cursor:'pointer'}}  className="px-2 inline-flex text-2xl leading-5 font-semibold rounded-full bg-green-100 text-green-800">Accept</a>

                                </div>
                                <div>
                                <a onClick={handlerejectance} style={{cursor:'pointer'}}  className="px-2 inline-flex text-2xl leading-5 font-semibold rounded-full bg-red-100 text-red-800">Reject</a>
                                </div>
                            </div>

                    </td>
            } 

            {!clickablebutton &&        <td className="px-6 py-4 whitespace-nowrap">
                                <div className="ml-4">
                                            <div>
                                            <a style={{cursor:'pointer'}}  className="px-2 inline-flex text-2xl leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Accept</a>

                                            </div>
                                            <div>
                                            <a  style={{cursor:'pointer'}}  className="px-2 inline-flex text-2xl leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">Reject</a>
                                            </div>
                                        </div>

                                </td>
            } 

                </tr>
    
          
        )
}





export default HODRequestItem;

