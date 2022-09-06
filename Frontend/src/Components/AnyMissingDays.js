import React, { useState, useEffect } from 'react';
import "./style.css";
import Table, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import axios from 'axios';
import { useHistory} from 'react-router-dom';

export default function AnyMissingDays(props) {
  const history = useHistory();
    if(!props.realToken){
      history.push('/login');
    }
    const test=false;
    const [state, setState] = useState([]);
    const [filteredstate, setFilterState] = useState([]);
    const [error, setError] = useState('Loading');
    
    async function handleChange(evt,idx){
      
    }
      
    useEffect(async () => {
        try {
            // const method = async()=>{
            const res=await axios.post('http://localhost:8080/memberRoutes/viewMissingDays'  ,{},{params:{token:props.realToken}});
            const arr=[];
            for(var i=0;i<res.data.length;i++){
              const cur={};
              
             let dateObj = new Date(res.data[i].date);
              cur.month = dateObj.getUTCMonth()+1 ; //months from 1-12
              cur.day = dateObj.getUTCDate()+1;
              cur.year = dateObj.getUTCFullYear();
              cur.num = i+1;
              arr.push(cur);
            }
            setState(arr);
            setError(''); 
          // }
          // method();
          
          } catch (e) {
            console.log('mo4kla');
            console.log(e);
            setState([]);
            if(e && e.response && e.response.data){
              setError(e.response.data);
            }
            else{
              setError('Access Denied');
            }
          }
      }, []);
    
      
    
      const columns = [
        {
          key: 'num',
          title: 'Count',
          dataKey: 'num',
          width: 150,
          align: Column.Alignment.CENTER
        },
        {
          key: 'day',
          title: 'Day',
          dataKey: 'day',
          width: 150,
          align: Column.Alignment.CENTER
        },
        {
            key: 'month',
            title: 'Month',
            dataKey: 'month',
            width: 150,
            align: Column.Alignment.CENTER
          },
          {
            key: 'year',
            title: 'Year',
            dataKey: 'year',
            width: 150,
            align: Column.Alignment.CENTER
          }
    ]
                 
    return (
      <div>
      

      <div className="max-w-7xl mx-auto py-12 sm:px-4 lg:px-4">
      <div className="px-2 py-20 sm:px-0">
        <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
        <br></br>
        <br></br>
         <Table data={state} width={600} height={600} columns={columns}/>

             </div>
             </div>
    </div>
    )
}
