import React,{Component} from "react"   
import axios from "axios";

class AnyAcademicDayOffRequest extends Component {

  constructor(){
    super()
    this.state={
      reason:"",
      content:"",
      comment:"",
      newDayOff:""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    const {name, value} = evt.target;
    this.setState({
      [name]:value
    })
  }

  handleSubmit(){
    const reqBody = {reason: this.state.reason,
       content:this.state.content ,comment:this.state.comment,
       newDayOff:this.state.newDayOff
       };
    axios.post('http://localhost:8080/AnyAcademic/changeDayOffReq', reqBody , {params:{token:this.props.realToken}})
    .then(res  => {   
      alert("Done Successfully")
    } ).catch(err=>{console.log(err);alert("Updating Failed Enter Correct Data ")}) 
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
          <h3 className="text-lg font-medium leading-6 text-gray-900">Day off change Request</h3>
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
                <label for="reason" className="block text-sm font-medium text-gray-700">Reason</label>
                  {/* onChange={handleFacultyName} */}
                  <input onChange={this.handleChange}  type="text" name="reason" id="reason" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label for="content" className="block text-sm font-medium text-gray-700">Content</label>
                  {/* onChange={handleDepartmentName} */}
                  <input onChange={this.handleChange} type="text" name="content" id="content" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                <div className="col-span-6 sm:col-span-3">
                <label for="comment" className="block text-sm font-medium text-gray-700">Comment</label>
                  {/* onChange={handleDepartmentName} */}
                  <input onChange={this.handleChange} type="text" name="comment" id="comment" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                    {/* onChange={handleCourseName} */}
                
                <div className="col-span-6 sm:col-span-3">
                  <label for="newDayOff" className="block text-sm font-medium text-gray-700">New Dayoff</label>
                  <input onChange={this.handleChange} type="text" name="newDayOff" id="newDayOff" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                </div>
                </div>
            
            </div>
      
            
      
        {/* onClick={addCourse} */}
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button onClick={this.handleSubmit} type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Send
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
export default AnyAcademicDayOffRequest
