import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useHistory,useParams } from 'react-router-dom';

export default function CourseStaff(props) {
  const history = useHistory();
    if(!props.realToken){
      history.push('/login');
    }
    let { courseName } = useParams();
    const [state, setState] = useState(
        {
          instructors:[],TAs:[]
          
        }
      );
    const [error, setError] = useState('Loading');
    const [rerender,setRe]=useState(true);

      async function removeStaff(memberID){
        setError('Loading');
        try {
          const res = await axios.delete(`http://localhost:8080/instructorRoutes/courseAcadMember/${courseName}/${memberID}`  ,{params:{token:props.realToken}});
          setError('Done Successfully');
          setRe((prev)=>!prev);
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
            const res = await axios.get(`http://localhost:8080/instructorRoutes/viewCourseStaff/${courseName}`,{params:{token:props.realToken}});
            setState(res.data);
            setError(''); 
          } catch (e) {
            setState([]);
          if(e && e.response && e.response.data){
            setError(e.response.data);
          }
          else{
            setError('Access Denied');
          }
          }
      }, [rerender]);
    
      const columns2 = [
        {
          key: 'id',
          title: 'ID',
          dataKey: 'id',
          width: 150,
          align: Column.Alignment.CENTER
        },
        {
            key: 'name',
            title: 'Name',
            dataKey: 'name',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
            key: 'mail',
            title: 'Mail',
            dataKey: 'mail',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
              key: 'office',
              title: 'Office',
              dataKey: 'office',
              width: 150,
              align: Column.Alignment.CENTER
            }
    ]
    
      const columns = [
        {
          key: 'id',
          title: 'ID',
          dataKey: 'id',
          width: 150,
          align: Column.Alignment.CENTER
        },
        {
            key: 'name',
            title: 'Name',
            dataKey: 'name',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
            key: 'mail',
            title: 'Mail',
            dataKey: 'mail',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
              key: 'office',
              title: 'Office',
              dataKey: 'office',
              width: 150,
              align: Column.Alignment.CENTER
            },
        
            {
              key: 'action',
              width: 200,
              align: Column.Alignment.CENTER,
              frozen: Column.FrozenDirection.RIGHT,
              cellRenderer: ({ rowData }) => (
                <button
                  onClick={() => {
                    removeStaff(rowData.id);
                  }}
                  className="submit"
                >
                  Remove
                </button>
              ),
            }
    ]

    return (
      <div className="max-w-7xl mx-auto py-12">
      <div className="py-20 sm:px-0">
        <div>
        <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
        <div style={{width:1020}}>
        <div style={{width:500},{float:"left"}}>
        <pass>
            Instructors in the course
        </pass>
        <BaseTable data={state.instructors} width={500} height={600} columns={columns2}>

                    
        </BaseTable>
        </div>
        
        <div style={{width:500},{float:"right"}}>
        <pass>
            TAs in the course
        </pass>
        <BaseTable data={state.TAs} width={500} height={600} columns={columns}>

                        
            </BaseTable>

        </div>
        </div>
        <div style={{clear: "both"}}></div>
        </div>
            </div>
            </div>
    )
}
