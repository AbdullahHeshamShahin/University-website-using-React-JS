import React,{useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';   
import axios from "axios";




function Schedule(props) {
    const history = useHistory();

    const [state, setState] = useState(
        {
            schedule:[]
        }
      );
    
    
    // component did mount
    useEffect(()=>{
        console.log("schedule did mount");
        axios.get("http://localhost:8080/anyAcademic/schedule", {params:{token:props.realToken}})
        .then((res)=>{
            console.log(res.data);
            setState({schedule:res.data})
        })
    },[])

    const daysOfWeek = {sat:0,sun:1,mon:2,tue:3,wed:4,thu:5,fri:6};
    
    
    const schedule =
    [ 
        ["empty","empty","empty","empty","empty","empty","empty"],
        ["empty","empty","empty","empty","empty","empty","empty"],
        ["empty","empty","empty","empty","empty","empty","empty"],
        ["empty","empty","empty","empty","empty","empty","empty"],
        ["empty","empty","empty","empty","empty","empty","empty"]
    ]
    state.schedule.forEach((courseSlot)=>{
        let day = courseSlot.day;
        day = day.substring(0,3);
        day = day.toLowerCase();
        let time = courseSlot.time;
        let loc = courseSlot.location;
        let courseName = courseSlot.courseName;
           
        schedule[time-1][daysOfWeek[day]] = `Course name: ${courseName}\nLocation: ${loc}`;
    })
     



    return(
    <div>

    <table>
    <tr className=" bg-gray-800 px-6 py-3 text-left text-xs font-medium text-gray-50 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">slot\day</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">Saturday </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">Sunday </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Monday</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Tuesday</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Wednesday</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">Thursday </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider"> Friday</th>

    </tr>
    <hr></hr>

    <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">First</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[0][0]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[0][1]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[0][2]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[0][3]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[0][4]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[0][5]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[0][6]}</th>

    </tr>

    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">second</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[1][0]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[1][1]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[1][2]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[1][3]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[1][4]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[1][5]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[1][6]}</th>

    </tr>

    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">third</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
    <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[2][0]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[2][1]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[2][2]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[2][3]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[2][4]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[2][5]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[2][6]}</th>

    </tr>

    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">fourth</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[3][0]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[3][1]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[3][2]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[3][3]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[3][4]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[3][5]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[3][6]}</th>

    </tr>

    <tr className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-2000 uppercase tracking-wider">fifth</th>
        <div className="py-5 black">
    {/* <div className="border-t border-gray-200"></div> */}
    </div>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[4][0]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[4][1]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[4][2]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[4][3]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[4][4]}</th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider">{schedule[4][5]} </th>
        <th className="px-6 py-3 text-left text-xs font-small text-gray-2000  tracking-wider"> {schedule[4][6]}</th>

    </tr>

    </table>

    </div>
    )
                
}
export default Schedule 