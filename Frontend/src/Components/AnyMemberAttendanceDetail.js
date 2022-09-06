
import React from 'react';
//props.idx
function HRMemberAttendanceDetail(props) {
    
    return (
        <div>
            <div className="px-4 py-5 bg-white sm:p-2">
                <div className="grid grid-cols-6 gap-6">
                    <span className="col-span-6 sm:col-span-3">{props.timein||
                        <div className="col-span-6 sm:col-span-3">
                            <label for="first_name" className="block text-sm font-medium text-gray-700">Missing Sign in</label>
                        </div>}
                    </span> 
                    <span className="col-span-6 sm:col-span-3">{props.timeout||
                        <div className="col-span-6 sm:col-span-3">
                            <label for="first_name" className="block text-sm font-medium text-gray-700">Missing Sign Out</label>
                        </div>}
                    </span>
                </div>
            </div>
            <hr/>
        </div>
        )
}
export default HRMemberAttendanceDetail;

