import React,{Component} from "react"   
import axios from "axios"

class CoorRequestItem extends Component {

   constructor(){
       super();
       this.handleAccept = this.handleAccept.bind(this);
       this.handleReject = this.handleReject.bind(this);


   }
 handleAccept(){
    axios.post('http://localhost:8080/cooRoutes/acceptSlotLinking', {reqID:this.props.id}, {params:{token:this.props.realToken}})
    .then(res  => {
       
        console.log(res);
    } ) 
 }
 handleReject(){
    axios.post('http://localhost:8080/cooRoutes/rejectSlotLinking', {reqID:this.props.id}, {params:{token:this.props.realToken}})
    .then(res  => {
       
        console.log(res);
    } ) 
 }
render(){

    return (
        <div >
            <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                    <td className="px-20 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                {this.props.sender}
                                </div>
                              
                            </div>
                        </div>
                    </td>
                    <td className="px-20 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                {this.props.date}
                                </div>
                              
                            </div>
                        </div>
                    </td>

                    <td className="px-20 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                {this.props.courseName}
                                </div>
                              
                            </div>
                        </div>
                    </td>



                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                            <button className="submit" onClick={this.handleAccept}>Accept</button>
                              
                            </div>
                        </div>
                    </td>
                    {/* accept button */}
                   
                    {/* reject button */}
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                            </div>
                            <div className="ml-4">
                            <button className="submit" onClick={this.handleReject} >Reject</button>
                              
                            </div>
                        </div>
                    </td>



                </tr>

        </tbody>
    </div>
          
        )

    }
}
export default CoorRequestItem