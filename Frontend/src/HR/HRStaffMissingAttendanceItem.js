import React, {useState} from 'react';

function HRStaffMissingAttendanceItem(props) {

     return (
                <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {props.name}
                    </div>
                    <div class="text-sm text-gray-500">
                      {props.mail}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{props.fac || "Unassigned"}</div>
                <div class="text-sm text-gray-500">{props.dep || "Unassigned"}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {props.MemberRank}
                </span>
              </td>
            </tr>
          
        )
}
export default HRStaffMissingAttendanceItem;

