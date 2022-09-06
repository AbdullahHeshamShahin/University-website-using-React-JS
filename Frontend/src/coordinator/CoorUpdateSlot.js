import React,{Component} from "react"   


class CoorUpdateSlot extends Component {
render(){

    return (
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
  <h3 className="text-lg font-medium leading-6 text-gray-900">Update Slot</h3>
  <p className="mt-1 text-sm text-gray-600">
    Enter the slot information.
  </p>
</div>
</div>
<div className="mt-5 md:mt-0 md:col-span-2">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="px-4 py-5 bg-white sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label for="first_name" className="block text-sm font-medium text-gray-700">Course name</label>
          {/* onChange={handleFacultyName} */}
          <input  type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label for="last_name" className="block text-sm font-medium text-gray-700">Slot ID</label>
          {/* onChange={handleDepartmentName} */}
          <input  type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
            
  
        
      </div>
    
      
    
    </div>

    


  </div>
</div>
</div>



{/* add course */}



<div className="py-5">
{/* <div className="border-t border-gray-200"></div> */}
</div>
</div>

<div className="mt-10 sm:mt-0">
<div className="md:grid md:grid-rows-1 md:gap-6" style = {{marginRight: 150, marginLeft: 150}}>
<div className="md:col-span-1">
<div className="px-4 sm:px-0">

  <p className="mt-1 text-sm text-gray-600">
    Enter the Updated information.
  </p>
</div>
</div>
<div className="mt-5 md:mt-0 md:col-span-2">
  <div className="shadow overflow-hidden sm:rounded-md">
    <div className="px-4 py-5 bg-white sm:p-6">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label for="first_name" className="block text-sm font-medium text-gray-700">Course name</label>
          {/* onChange={handleFacultyName} */}
          <input  type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label for="last_name" className="block text-sm font-medium text-gray-700">Day</label>
          {/* onChange={handleDepartmentName} */}
          <input  type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
            {/* onChange={handleCourseName} */}
        <div className="col-span-6 sm:col-span-3">
          <label for="last_name" className="block text-sm font-medium text-gray-700">Time</label>
          <input  type="text" name="last_name" id="last_name" autocomplete="family-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
            {/* onChange={handleCoordinatorName} */}
        <div className="col-span-6 sm:col-span-3">
          <label for="first_name" className="block text-sm font-medium text-gray-700">Location</label>
          <input  type="text" name="first_name" id="first_name" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
        </div>
       
        
      </div>
    
      
    
    </div>

    

{/* onClick={addCourse} */}
    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
      <button  type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Update
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
export default CoorUpdateSlot