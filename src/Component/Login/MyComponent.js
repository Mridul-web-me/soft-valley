import { Button, Grid, Item, Table } from '@mui/material';
import React, { useEffect, useState } from 'react'
import DataTable from '../DataTable/DataTable';
import Assignes from '../Modal/Assignes';
import ContactedDate from '../Modal/ContactedDate';
import Sources from '../Modal/Sources';
import Statuses from '../Modal/Statuses';


const MyComponent = () => {
    const [data, setData] = useState();

    const token = localStorage.getItem('idToken');
  
    const fetchUserData = () => {
      fetch(`http://crm.softvalley.sveducrm.com/api/admin/base/source`, {
        headers: {
            'authorization': `Bearer ${(token)}`
        }
      })
        .then(response => response.json())
        .then(data => {
          setData(data);
          console.log(data)
        });
    }





  return (
   
    <div>
      <Grid container spacing={2}>
            <Grid item xs={2.5}>
            <Statuses></Statuses>
            </Grid>
            <Grid item xs={2.5}>
              <Sources></Sources>
            </Grid>
            <Grid item xs={2.5}>
                <Assignes/>
            </Grid>
            <Grid item xs={2.5}>
                {/* <ContactedDate/> */}
            </Grid>
            <Grid item xs={2}>
                <Button style={{background: '#020258', color: '#fff', margin: '0 5px'}}>Filter</Button>
                <Button style={{border: '1px solid #696969', color: '#393939'}}>Reset Filter</Button>
            </Grid>
        </Grid>
        <DataTable></DataTable>
    </div>
  )
}

export default MyComponent