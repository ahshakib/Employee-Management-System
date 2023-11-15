/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Item = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.secondary.main}`,
}));

const CardComponent = (props) => {
    const [percentage] = useState(0);
    const [avgSalary] = useState(0);
    const [totalEmployees] = useState(0);
    const [avgAge] = useState(0);
    return (
        <>
            <Grid container sx={{ m: props.margin }}>
                <Grid container item xs={props.breakpoint} sx={{ bgcolor: 'white.main', boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.1)' }}>
                    <Grid container>
                        <Grid item xs={4} sx={{ m: props.spacing }}>
                            <Item>
                                <CircularProgressbar value={percentage} text={`${percentage}%`}></CircularProgressbar>
                            </Item>
                        </Grid>
                        <Grid item xs={7} sx={{ m: props.spacing, display: 'flex', justifyContent: 'right' }}>
                            <Box component='div' sx={{display:'flex', flexDirection:'column', alignItems:'end', gap:3 }}>
                                <Typography variant='h5'>
                                    Average salary: {avgSalary}
                                </Typography>
                                <Typography variant='h5'>
                                    Total Employee: {totalEmployees}
                                </Typography>
                                <Typography variant='h5'>
                                    Average Age: {avgAge}
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