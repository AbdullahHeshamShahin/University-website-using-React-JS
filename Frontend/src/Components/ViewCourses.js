import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useHistory } from 'react-router-dom';

export default function ViewCourses(props) {
    const history = useHistory();
    if(!props.realToken){
      history.push('/login');
    }
    const [state, setState] = useState(
        []
      );
      const [texts, setText] = useState(
        []
      );
      const [error, setError] = useState(
        'Loading'
      );
      const handleChange=(evt,idx)=>{
        console.log(texts);
        texts[idx]=evt.target.value;
        setText(texts.map((item,index) =>{ 
        
        return idx === index 
        ? evt.target.value 
        : item }));
    }
      async function assignCoordinator(memberID,courseName){
        console.log(memberID);
      console.log(courseName);
      console.log(texts);
      setError('Loading');
        try {
          const res = await axios.put(`http://localhost:8080/instructorRoutes/courseCoordinator`  ,{courseName:courseName,memberID:memberID},{params:{token:props.realToken}});
          console.log('d7k');
          setError('Done Successfully');
      } catch (e) {
        if(e && e.response && e.response.data){
          setError(e.response.data);
        }
        else{
          setError('Access Denied');
        }
      }
        // console.log(state);
      }
    useEffect(async() => {
        try {
          // const method = async()=>{
            const res = await axios.get('http://localhost:8080/instructorRoutes/viewCoursesAssignments',{params:{token:props.realToken}});
            const arr=[];
            for(var i=0;i<res.data.length;i++){
              res.data[i].idx=i;
              arr.push(' ');
            }
            setText(arr);
            setState((prev)=>res.data);
            setError((prev)=>''); 
          // }
          // method();
            
          } catch (e) {
            setState([]);
            if(e && e.response && e.response.data){
              setError(e.response.data);
            }
            else{
              setError('Access Denied');
            }
            setText([]);
          }
      }, []);
    

    
      const columns = [
        {
          key: 'courseName',
          title: 'Course Name',
          dataKey: 'courseName',
          width: 300,
          align: Column.Alignment.CENTER
        },
        
        {
          key: 'action1',
          width: 370,
          align: Column.Alignment.CENTER,
          frozen: Column.FrozenDirection.RIGHT,
          cellRenderer: ({ rowData }) => (
            <button
              onClick={() => {
                history.push(`/CourseSchedule/${rowData.courseName}`);
              }}
              className="submit"
            >
              Slots
            </button>
          ),
        }
        ,
        {
            key: 'action2',
            width: 370,
            align: Column.Alignment.CENTER,
            frozen: Column.FrozenDirection.RIGHT,
            cellRenderer: ({ rowData }) => (
              <button
                onClick={() => {
                  history.push(`/CourseStaff/${rowData.courseName}`);
                }}
                className="submit"
              >
                Staff
              </button>
            ),
          },
        
          {
            title: 'Assign the Staff member to be the Coordinator of the Course',
            key: 'action',
            width: 400,
            cellRenderer: ({ rowData }) => (
              <button
                onClick={() => {
                  assignCoordinator(texts[rowData.idx],rowData.courseName );
                }}
                className="submit"
              >
                Assign
              </button>
              
            ),
          },
    
          {
            title: 'Type the TA ID',
            key: 'action5',
            width: 400,
            align: Column.Alignment.CENTER,
            frozen: Column.FrozenDirection.RIGHT,
            cellRenderer: ({ rowData }) => (
              
            <input type="text" data-test="course" placeholder="Course" onChange={(e)=>{handleChange(e,rowData.idx)}}/>
              
            ),
          }
    ]

    return (
      <div className="max-w-7xl mx-auto py-12 sm:px-4 lg:px-4">
      <div className="px-2 py-20 sm:px-0">
         
            <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
           
            <BaseTable data={state} width={900} height={600} columns={columns}>

            
            </BaseTable>
             </div></div>
    
    )
}
