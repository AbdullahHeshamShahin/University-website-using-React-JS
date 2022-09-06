import React, { Fragment } from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
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
function InstructorDash() {
    const history = useHistory();
    return (
        <div>
            <Button onClick={()=>{history.push("/ViewCourses")}}>View Courses</Button>
            <Button onClick={()=>{history.push("/courseCoverage")}}>Course Coverage</Button>
            <Button onClick={()=>{history.push("/StaffDep")}}>Staff in your Department</Button>
     
        </div>
    )
}

export default InstructorDash;