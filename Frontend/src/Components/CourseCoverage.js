import axios from 'axios';
import React, { useState, useEffect } from 'react';
import "./style.css";
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
import { useHistory} from 'react-router-dom';

export default function CourseCoverage(props) {
  const history = useHistory();
    if(!props.realToken){
      history.push('/login');
    }
    const [state, setState] = useState([]);
    const [error, setError] = useState('Loading');
    useEffect(async() => {
        try {
            const res = await axios.get('http://localhost:8080/instructorRoutes/viewCoverages',{params:{token:props.realToken}});
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
        
    }, []);

    
      const columns = [
        {
          key: 'CourseName',
          title: 'Course Name',
          dataKey: 'CourseName',
          width: 250
        },
        {
          key: 'Coverage',
          title: 'Coverage',
          dataKey: 'Coverage',
          width: 150,
          align: Column.Alignment.CENTER
        }]
    return (
      <div className="max-w-7xl mx-auto py-12 sm:px-4 lg:px-4">
      <div className="px-2 py-20 sm:px-0">
             <p className="a" align="center" style={(error)?{display: 'block'}:{display: 'none'}}>{error}</p>
             <div align="center">
           <BaseTable data={state} width={400} height={600} columns={columns}>
            
            
            </BaseTable>
            </div>
             </div>
             </div>
    
    )
}
