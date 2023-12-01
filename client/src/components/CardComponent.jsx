/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import employeeService from '../services/employeeService';

const CardComponent = (props) => {
    // const [avgSalary] = useState(0);
    const [totalEmployees, setTotalEmployees] = useState({
        result: {}
    })
    // const [avgAge] = useState(0);

    useEffect(()=> {
        const getData = async () => {
            const total = await employeeService.cardEmployeeInfo()
            // console.log(total)
            const {data} = total
            setTotalEmployees(()=> data)
        }
        getData()
    },[])

    return (
        <>
            <Grid container sx={{ m: props.margin, width: '80%' }}>
                <Grid container item xs={props.breakpoint} sx={{ backgroundImage: 'linear-gradient(#ba52fa, #8807d9);', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1)', borderRadius:'8px' }}>
                    <Grid container>
                        <Grid item xs={5} sx={{ m: props.spacing, display: 'flex', justifyContent: 'right' }}>
                            <Box component='div' sx={{display:'flex', flexDirection:'column', justifyContent:'center', gap:3, color:'white' }}>
                                <Typography variant='h5'>
                                    Average salary: {totalEmployees.result.averageSalary}
                                </Typography>
                                <Typography variant='h5'>
                                    Total Employee: {totalEmployees.result.totalEmployee}
                                </Typography>
                                <Typography variant='h5'>
                                    Average Age: {totalEmployees.result.averageAge}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default CardComponent;