import React,{Component} from "react"   
import axios from "axios"

class AcademicMemberReplacement extends Component {
  constructor(){
    super();
    this.state={dateYear: "", dateMonth:"" ,dateDay:"" ,reason:"" ,content:"" ,reciever:"" ,comment:"" ,slotId:"" ,slotCourse:""}
    // this.handleCourseNameChange = this.handleCourseNameChange.bind(this);
    // this.handleTimeChange = this.handleTimeChange.bind(this);
    // this.handleDayChange = this.handleDayChange.bind(this);
    // this.handleLocationChange = this.handleLocationChange.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);


}
  // dateYear,dateMonth,dateDay,reason,content,reciever,comment,slotId,slotCourse

  handleSubmit(){
    axios.post('http://localhost:8080/AnyAcademic/replacementReq',{dateYear: this.state.dateYear, dateMonth:this.state.dateMonth ,dateDay:this.state.dateDay ,reason:this.state.reason ,content:this.state.content ,reciever:this.state.reciever ,comment:this.state.comment ,slotId:this.state.slotId ,slotCourse:this.state.slotCourse })
    .then(res  => {
       
        console.log(res);
    } ) 
 }
 handleYear =(evt)=>{
     this.setState((prevState) =>{
     

      return{
        ...prevState,
        dateYear: evt.target.value
      }
   } )

 }

 handleMonth =(evt)=>{
  this.setState((prevState) =>{
  

   return{
     ...prevState,
     dateMonth: evt.target.value
   }
} )

}
handleDay =(evt)=>{
  this.setState((prevState) =>{
  

   return{
     ...prevState,
     dateDay: evt.target.value
   }
} )

}
handleReason =(evt)=>{
  this.setState((prevState) =>{
  

   return{
     ...prevState,
     reason: evt.target.value
   }
} )

}
handleContent =(evt)=>{
  this.setState((prevState) =>{
  

   return{
     ...prevState,
     content: evt.target.value
   }
} )

}
handleReciever =(evt)=>{
  this.setState((prevState) =>{
  

   return{
     ...prevState,
     reciever: evt.target.value
   }
} )

}
handleComment =(evt)=>{
  this.setState((prevState) =>{
  

   return{
     ...prevState,
     comment: evt.target.value
   }
} )

}
handleSlotId =(evt)=>{
  this.setState((prevState) =>{
  

   return{
     ...prevState,
     slotId: evt.target.value
   }
} )

}
handleCourseName =(evt)=>{
  this.setState((prevState) =>{
  

   return{
     ...prevState,
     slotCourse: evt.target.value
   }
} )

}

render(){


return(


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
      <h3 className="text-lg font-medium leading-6 text-gray-900">Replacement Request</h3>
      <p className="mt-1 text-sm text-gray-600">
        Enter request information.
      </p>
    </div>
    </div>
    <div className="mt-5 md:mt-0 md:col-span-2">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label for="first_name" className="block text-sm font-medium text-gray-700">Year</label>
              {/* onChange={handleFacultyName} */}
              <input  onChange={this.handleYear} type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Month</label>
              {/* onChange={handleDepartmentName} */}
              <input onChange={this.handleMonth} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Day</label>
              {/* onChange={handleDepartmentName} */}
              <input onChange={this.handleDay} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
                {/* onChange={handleCourseName} */}
            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Reciever</label>
              <input onChange={this.handleReciever} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Location</label>
              <input  type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>


            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Time</label>
              <input onChange={handleTime} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="last_name" className="block text-sm font-medium text-gray-700">Course Name</label>
              <input onChange={handleCourseName} type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>


                {/* onChange={handleCoordinatorName} */}
            <div className="col-span-6 sm:col-span-3">
              <label for="first_name" className="block text-sm font-medium text-gray-700">Reason</label>
              <input  type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="first_name" className="block text-sm font-medium text-gray-700">content</label>
              <input  type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label for="first_name" className="block text-sm font-medium text-gray-700">comment</label>
              <input  type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
            </div>
          
            
          </div>
        
          
        
        </div>
  
        
  
    {/* onClick={addCourse} */}
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button   onClick={this.handleSubmit} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
)
    }
}
export default AcademicMemberReplacement