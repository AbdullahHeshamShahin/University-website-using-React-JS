import React,{Component} from "react"  

import AcademicMemberReplacementItem from './AcademicMemberReplacementItem';
import axios  from "axios"
class AcademicMemberReplacementContainer extends Component {
    constructor(){
        super();
        this.state={requests:[]}
    }
    componentDidMount(){
        console.log("AcademicMemberReplacementContainer Did mount");
        axios.get('http://localhost:8080/anyAcademic/recievedReplacementReq', {params:{token:this.props.realToken}})
        .then(res  => {
          console.log(res.data);
          console.log("in view replacement in academic member")
          this.setState(
                {requests:res.data}
          );
            
        }) 
    }

render(){  
        let requests = this.state.requests.map(req => {
             return (
                < AcademicMemberReplacementItem
                  repId={req._id}
                  sender={req.sender}
                  slotDate = {req.date}
                  reason = {req.reason}
                  content = {req.content}
                  comment = {req.comment}
                  slotCourse = {req.slotCourse}
                  slotTime = {req.slotTime}
                  status={req.status}
                />
             )
        })
    return (
        <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sender
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Slot Date
              </th>
             
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reason
              </th>


              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Content
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Comment
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Slot Time
              </th>
              
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>

            </tr>
          </thead>
        
        </table>
       {requests }
       {/* < AcademicMemberReplacementItem
                  repId="1"
                  sender="req.sender"
                  slotDate = "req.date"
                  reason = "req.reason"
                  content = "req.content"
                  comment = "req.comment"
                  slotCourse = "req.slotCourse"
                  slotTime = "req.slotTime"
                  status="req.status"
                  realToken={this.props.realToken}
        /> */}
      </div>
    </div>
  </div>
</div>
          
        )

    }
}
export default AcademicMemberReplacementContainer