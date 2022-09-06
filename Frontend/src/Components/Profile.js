import React,{Component} from "react"   
import axios from "axios"
import Navbar from './Navbar';
class Profile extends Component {

  constructor(){
    super();
    
    this.state = {
      name:"",
      memberId:"",
      facultyName:"",
      departmentName:"",
      bio:"",
      email:"",
      salary:"",
      memeberRank:"",
      newBio: "",
      passwordOld:"",
      passwordNew:"",
      passwordMessage:""
    }

    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleChangeBio = this.handleChangeBio.bind(this);
    this.handleUpdateBio = this.handleUpdateBio.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this);

}

  componentDidMount(){
      console.log("profile did mount");
      axios.get('http://localhost:8080/memberRoutes/viewProfile' , {params:{token:this.props.realToken}})
      .then(res =>{
        console.log(res.data)
        this.setState({
          name:res.data.name,
          memberId:res.data.memberId,
          facultyName:res.data.FacultyName,
          departmentName:res.data.departmentName,
          bio:res.data.bio,
          email:res.data.email,
          salary:res.data.salary,
          memeberRank:res.data.MemberRank,
          newBio:""
        })
      })
  }

  handleSignIn(){
    axios.post('http://localhost:8080/memberRoutes/signIn' , {} ,{params:{token:this.props.realToken}})
    .then(res  => {
      alert("Done Successfully")
        console.log(res.data);
    } ) 
 }
 handleSignOut(){
  axios.post('http://localhost:8080/memberRoutes/signOut' , {} ,{params:{token:this.props.realToken}})
  .then(res  => {
    alert("Done Successfully")

      console.log(res.data);
  } ).catch(err=>{console.log(err);alert("Updating Failed ")}) 
}
handleChangeBio(evt){
  this.setState({newBio:evt.target.value})
}

handleUpdateBio(){
  this.setState((preState)=>{
    return {
      ...preState,
      bio:preState.newBio
    }
  })
  axios.post('http://localhost:8080/memberRoutes/updateProfile' , {bio:this.state.newBio} ,{params:{token:this.props.realToken}})
  .then(res  => {
    alert("Done Successfully")

      console.log(res.data.bio);
  } )     .catch(err=>{console.log(err);alert("Updating Failed ")}) 

}


handleChangePassword(evt){
    const {name, value } = evt.target;
    this.setState({
      [name]: value
    })      
}

handleUpdatePassword(){
  console.log(this.state.passwordOld)
  console.log(this.state.passwordNew)

  axios.put('http://localhost:8080/memberRoutes/updatePassword' , {passwordOld:this.state.passwordOld, passwordNew: this.state.passwordNew} ,{params:{token:this.props.realToken}})
  .then(res  => {
    alert("Done Successfully")

      console.log(res.data);
      this.setState((preState)=>{
        return {
          ...preState,
          passwordMessage:'Password changed'}
   })
  }).catch((err)=>{
    console.log(" ERROR in change password");
     if(!err || !err.response || !err.response.data){
        this.setState((preState)=>{
             return {
               ...preState,
               passwordMessage:'incorrect password'}
        })
     }
     else{
        this.setState((preState)=>{
          return {
            ...preState,
            passwordMessage:err.response.data}
        })
     }
  })
}


render(){

return(
<div>
<div className="bg-white shadow overflow-hidden sm:rounded-lg">
  <div class="px-4 py-5 sm:px-6">
    <h3 className="text-3xl font-bold leading-tight text-gray-900 ">
      Profile
    </h3>
  
  </div>
  <div className="border-t border-gray-200">
    <dl>

      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Full name
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.name}
        </dd>
      </div>

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Member ID
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.memberId}
        </dd>
      </div>

      {
        this.props.token.MemberRank !== 'hr' &&
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Faculty
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.facultyName}
        </dd>
      </div>
      }

      {
        this.props.token.MemberRank !== 'hr' &&
      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Department
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.departmentName}
        </dd>
      </div>
      }
      
      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Bio
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.bio}
        </dd>

      </div>

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Email address
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.email}
        </dd>
      </div>

      <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Salary 
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.salary}
        </dd>
      </div>

      <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
        <dt className="text-sm font-medium text-gray-500">
          Member Rank
        </dt>
        <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
          {this.state.memeberRank}
        </dd>
      </div>


    </dl>
  </div>
</div>
<div className="py-5 black">
{/* <div className="border-t border-gray-200"></div> */}
</div>
{/* sin in & out */}
<div>
  <button className="submit" onClick={this.handleSignIn}>
    Sign In 
  </button>
  <button className="submit" onClick={this.handleSignOut}>
    Sign Out 
  </button>
</div>
<br></br>
{/* Bio updating */}
<div>
  <div className="col-span-6 sm:col-span-3">
  <label for="bio" className="block text-sm font-medium text-gray-700">New Bio</label>
  <input onChange={this.handleChangeBio}  type="text" name="bio" id="bio" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
  </div>
  <button className="submit" onClick={this.handleUpdateBio}>
    Update Bio 
  </button>
</div>
<br></br>
{/* update password */}


<div>
{/* <div class="px-4 py-5 sm:px-6">
    <h3 className="text-3xl font-bold leading-tight text-gray-900 ">
      Profile
    </h3>
  
  </div> */}

  <div className="col-span-6 sm:col-span-3">
  <label for="passwordOld" className="block text-sm font-medium text-gray-700">old password</label>
  <input onChange={this.handleChangePassword}  type="text" name="passwordOld" id="passwordOld" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
  </div>
  <br></br>
  <div className="col-span-6 sm:col-span-3">
  <label for="passwordNew" className="block text-sm font-medium text-gray-700">new password</label>
  <input onChange={this.handleChangePassword}  type="text" name="passwordNew" id="passwordNew" autocomplete="given-name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
  </div>
  <br></br>
  <button className="submit" onClick={this.handleUpdatePassword}>
    Change Password 
  </button>
  <a align="center" style={(this.state.passwordMessage)?{display: 'block'}:{display: 'none'}}>{this.state.passwordMessage}</a>
</div>



</div>
)
    }
}
export default Profile