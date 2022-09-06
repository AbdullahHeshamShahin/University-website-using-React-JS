import axios from 'axios';
import React from 'react';
//props.idx
function HRMemberAttendanceDetail(props) {
    const handleKeyDownIn = (evt)=>{
        if(evt.key === 'Enter'){
            const dateObj = new Date(evt.target.value);
            let month = dateObj.getUTCMonth() ; //months from 1-12
            let day = dateObj.getUTCDate()+1;
            let year = dateObj.getUTCFullYear();
            let hour = dateObj.getUTCHours();
            let minutes = dateObj.getUTCMinutes();
            let seconds = dateObj.getUTCSeconds();
            let ms = dateObj.getUTCMilliseconds();

            let dateoz = new Date(year,month,day, hour, minutes, seconds, ms);
            const updateObj = {memberId:props.memberId, date: props.date, signIn:dateoz, sessionId: props.idx};
            props.addSign(updateObj);
        }
    }
    const handleKeyDownOut = (evt)=>{
        if(evt.key === 'Enter'){
            // Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
            const dateObj = new Date(evt.target.value);
            let month = dateObj.getUTCMonth() ; //months from 1-12
            let day = dateObj.getUTCDate()+1;
            let year = dateObj.getUTCFullYear();
            let hour = dateObj.getUTCHours();
            let minutes = dateObj.getUTCMinutes();
            let seconds = dateObj.getUTCSeconds();
            let ms = dateObj.getUTCMilliseconds();

            let dateoz = new Date(year,month,day, hour, minutes, seconds, ms);
            const updateObj = {memberId:props.memberId, date: props.date, signOut:dateoz, sessionId: props.idx};
            props.addSign(updateObj);
        }
    } 
    return (
        <div>
            <div className="px-4 py-5 bg-white sm:p-2">
                <div className="grid grid-cols-6 gap-6">
                    <span className="col-span-6 sm:col-span-3">{props.timein||
                        <div className="col-span-6 sm:col-span-3">
                            <label for="first_name" className="block text-sm font-medium text-gray-700">Add In</label>
                            <input onKeyDown={handleKeyDownIn}  type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>}
                    </span> 
                    <span className="col-span-6 sm:col-span-3">{props.timeout||
                        <div className="col-span-6 sm:col-span-3">
                            <label for="first_name" className="block text-sm font-medium text-gray-700">Add Out</label>
                            <input onKeyDown={handleKeyDownOut}  type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
                        </div>}
                    </span>
                </div>
            </div>
            <hr/>
        </div>
        )
}
export default HRMemberAttendanceDetail;

