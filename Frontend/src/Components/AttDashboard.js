import React, { useState,Fragment } from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import axios from 'axios';
const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

export default function AttDashboard(props) {
  const history = useHistory();
  const [showmissing, setMissing] = useState(false);
  const [state, setState] = useState(0);
  const [error, setError] = useState('');
    if(!props.realToken){
      history.push('/login');
    }
    async function update(){
        if(showmissing){
            setMissing(false);
            return;
        }
         
        setError('Loading');
        try {
          const res=await axios.post('http://localhost:8080/memberRoutes/viewMembersMissingHoursAndExtraHours'  ,{},{params:{token:props.realToken}});
          
          setState(res.data);
          setError('Done Successfully');
        } catch (e) {
          if(e && e.response && e.response.data){
            setError(e.response.data);
          }
          else{
            setError('Access Denied');
          }
        }
        setMissing(true);
        // console.log(state);
      }
    return (
          <div>
           <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
           
                  <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                
                <div>
                    <Button onClick={()=>{history.push("/viewAnyMemAtt")}}>View Attendance</Button>
                    <Button onClick={()=>{history.push("/AnyMissingDays")}}>View missing days</Button>
                    <Button onClick={()=>{update();}}>{showmissing?`Don't `:``}View missing/extra hours</Button>
                </div>
      
              </div>
            </div>
          </div>
          <div style={showmissing?{display: 'block'}:{display: 'none'}}>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                
                <div>
                    <pass>
                        {state==0?'There is no extra/missing hours':
                        state>0?`You have ${state} missing hours`:
                        `You have ${-state} extra hours`
                        }

                    </pass>
                </div>
      
              </div>
            </div>
          </div>
          </div>
          </div>
    )
}
