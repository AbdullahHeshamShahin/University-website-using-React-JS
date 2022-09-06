import React, { useState, useEffect } from 'react';
import "./style.css";
import Table, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import axios from 'axios';
import { useHistory} from 'react-router-dom';

export default function StaffDep(props) {
  const history = useHistory();
    if(!props.realToken){
      history.push('/login');
    }
    const test=false;
    const [state, setState] = useState([]);
    const [texts, setText] = useState([]);
    const [error, setError] = useState('Loading');
    
    async function handleChange(evt,idx){
      texts[idx]=evt.target.value;
      setText(texts.map((item,index) =>{ 
        
        return idx === index 
        ? evt.target.value 
        : item }));
    }
    async function add(memberID,courseName){
      setError('Loading');
      try {
        const res = await axios.post('http://localhost:8080/instructorRoutes/courseAcadMember'  ,{courseName:courseName,memberID:memberID},{params:{token:props.realToken}});
        console.log('d7k');
        setError('Done Successfully');
      } catch (e) {
        console.log("eh");
        if(e && e.response && e.response.data){
          setError(e.response.data);
        }
        else{
          setError('Access Denied');
        }
      }
      // console.log(state);
    }
      
    useEffect(async () => {
        try {
            // const method = async()=>{
            const res=await axios.get('http://localhost:8080/instructorRoutes/viewDepartmentStaff',{params:{token:props.realToken}});
            const arr=[];
            for(var i=0;i<res.data.length;i++){
              res.data[i].idx=i;
              arr.push(' ');
            }
            setText(arr);
            setState(res.data);
            setError(''); 
          // }
          // method();
          
          } catch (e) {
            console.log('mo4kla');
            console.log(e.response.data);
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
                key: 'dayoff',
                title: 'Day off',
                dataKey: 'dayoff',
                width: 150,
                align: Column.Alignment.CENTER
              },
        
              {
                title: 'Add the Staff member to the Course',
                key: 'action',
                width: 400,
                cellRenderer: ({ rowData }) => (
                  <button
                    onClick={() => {
                      add(rowData.id,texts[rowData.idx]);
                    }}
                    className="submit"
                  >
                    Add
                  </button>
                  
                )
              },
        
              {
                title: 'Type the Course Name',
                key: 'action2',
                width: 400,
                cellRenderer: ({ rowData }) => (
                  
                <input type="text" data-test="course" placeholder="Course" onChange={(e)=>{handleChange(e,rowData.idx)}}/>
                  
                )
              }
    ]
                 
    return (
      <div className="max-w-7xl mx-auto py-12 sm:px-4 lg:px-4">
      <div className="px-2 py-20 sm:px-0">
        <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
            <Table data={state} width={800} height={600} columns={columns}/>

             </div>
             </div>
    
    )
}
