import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'
import {
  Redirect
} from "react-router-dom";
function HRAddMember(props) {
  const history = useHistory();

    const [state, setState] = useState(
        {
          firstName:"",
          lastName:"",
          mail:"",
          MemberRank:"instructor",
          gender: "",
          office:"",
          salary:0
        }
      );
    
    const addMember=(evt)=>{
        console.log("user" + props.user)
        console.log("token" + props.realToken)
        if(state.firstName === ""){
            alert("Enter first name");
            return;
        }
        if(state.lastName === ""){
            alert("Enter last name");
            return;
        }
        var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)+(?:.[a-zA-Z0-9-]+)$/;
    if(state.mail.match(mailformat)){
       // alert("cor")
    }
    else{
        alert("wrong")
        return;
    }
        if(state.gender === ""){
            alert("Enter gender");
            return;
        }
        const combine = `${state.firstName} ${state.lastName}`
        const memberInfo = {
          
            MemberRank:state.MemberRank,
            name: combine,
            gender: state.gender,
            email: state.mail,
            office: state.office,
            salary:state.salary
        }
      

        axios.post('http://localhost:8080/hr/addMember' , memberInfo, {params:{token:props.realToken}})
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
    }
    const handleFirstName=(evt)=> {
        const newstate={...state};
        newstate.firstName=evt.target.value;
        setState(newstate);
        console.log(newstate)
     }
     const handleLastName=(evt)=> {
       const newstate={...state};
       newstate.lastName=evt.target.value;
       setState(newstate);
       console.log(newstate)
      }
      const handleEmailAddress=(evt)=> {
       const newstate={...state};
       newstate.mail=evt.target.value;
       setState(newstate);
       console.log(newstate)
      }
      const handleMemberRank=(evt)=> {
       const newstate={...state};
       newstate.MemberRank=evt.target.value.toLowerCase();
       setState(newstate);
       console.log(newstate)

      }
      const handleGender=(evt)=> {
        const newstate={...state};
        newstate.gender=evt.target.id;
        setState(newstate);
        console.log(newstate)

       }
      const handleOffice=(evt)=> {
        const newstate={...state};
        newstate.office=evt.target.value;
        setState(newstate);
        console.log(newstate)
     }
     const handleSalary=(evt)=> {
      const newstate={...state};
      newstate.salary=evt.target.value;
      setState(newstate);
      console.log(newstate)
   }

    return (
      !props.realToken?<Redirect to="/login"/>:
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
      <h3 className="text-lg font-medium leading-6 text-gray-900">Add Member</h3>
      <p className="mt-1 text-sm text-gray-600">
        Enter the member's personal information.
      </p>
    </div>
  </div>
  <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label for="first_name" className="block text-sm font-medium text-gray-700">First name</label>
              <input onChange={handleFirstName} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
              <input onChange={handleLastName} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label for="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
              <input onChange={handleEmailAddress} type="text" name="email_address" id="email_address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label for="office_loc" className="block text-sm font-medium text-gray-700">Office location</label>
              <input onChange={handleOffice} type="text" name="office_loc" id="office_loc" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label for="email_address" className="block text-sm font-medium text-gray-700">Salary</label>
              <input onChange={handleSalary} type="number" name="email_address" id="email_address" autocomplete="email" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="country" className="block text-sm font-medium text-gray-700">Member Rank</label>
              <select onChange={handleMemberRank} id="country" name="country" autocomplete="country" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option>Instructor</option>
                <option>TA</option>
                <option>HR</option>
              </select>
            </div>
          </div>
        
            <br></br>
          <fieldset>
            <div>
              <legend className="text-base font-medium text-gray-900">Gender</legend>
            </div>
            <div className="mt-4 space-y-4" onChange={handleGender}>
              <div className="flex items-center">
                <input id="M" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                <label for="M" className="ml-3 block text-sm font-medium text-gray-700">
                  Male
                </label>
              </div>
              <div className="flex items-center">
                <input id="F" name="push_notifications" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                <label for="F" className="ml-3 block text-sm font-medium text-gray-700">
                  Female
                </label>
              </div>
            </div>
          </fieldset>
        
        </div>

        


        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button onClick={addMember} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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

export default HRAddMember;