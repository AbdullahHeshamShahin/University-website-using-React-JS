import React from "react";

function AcademicMemberReplacementCell(props){

    return (
        <div>
        <td className="px-20 py-4 whitespace-nowrap">
                <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                    </div>
                    <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                        {props.data?<p>{props.data}</p>:<p>------</p>}
                        </div>                     
                    </div>
                </div>
        </td>
        </div>
    )
}

export default AcademicMemberReplacementCell;