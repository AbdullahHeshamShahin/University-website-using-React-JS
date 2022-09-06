import React,{Component} from "react"  

import AcademicMemberReqItem from '../AnyAcademic/AcademicMemberReqItem';
import axios  from "axios"
class AcademicMemberReqContainer extends Component {
    constructor(){
        super();
        this.state={requests:[]}
    }
    componentDidMount(){
        console.log("AcademicMemberReqContainer Did mount");
        axios.get('http://localhost:8080/anyAcademic/sentRequests', {params:{token:this.props.realToken}})
        .then(res  => {
          console.log(res.data);
          console.log("in view requests in academic member")
          this.setState(
                {requests:res.data}
          );
            
        }) 
    }

render(){  
        let requests = this.state.requests.map(req => {
             return (
                < AcademicMemberReqItem
                  reqId={req._id}                  
                  type={req.type}
                  reciever = {req.reciever}
                  reason = {req.reason}
                  content = {req.content}
                  comment = {req.comment}
                  slotDate = {req.date}
                  slotCourse = {req.slotCourse}
                  leavingDate = {req.leavingDate}
                  newDayOff= {req.newDayOff}
                  slotTime = {req.slotTime}
                  status={req.status}
                />
             )
        })
    // Type - Recieving Entity - Reason - Content - Comment - Slot Date - Course Name -  Leaving Date
    // New Dayoff - status - slotTime
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
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Recieving Entity
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
                Slot Date
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Leaving Date
              </th>

              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                New Dayoff
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
       {requests} 
       {/* < AcademicMemberReqItem
                  reqId={2} 
                  sender="abdallah"
                  slotDate = "2021/5/8"
                  reason = "acml"
                  content = "acml"
                  comment = "saba7 el d7k"
                  slotCourse = "microprocessors"
                  slotTime = "3"
                  status="pending"
       /> */}
      </div>
    </div>
  </div>
</div>
          
        )

    }
}
export default AcademicMemberReqContainer