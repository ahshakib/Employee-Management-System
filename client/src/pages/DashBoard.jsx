import { Box, Typography, Grid } from '@mui/material';
import CardComponent from '../components/CardComponent';
import PieChartComponent from '../components/PieChartComponent';

const DashBoard = () => {
    return (
        <>
            <Typography variant='h3' gutterBottom sx={{margin:'25px', color:'purple'}} >
                Dashboard
            </Typography>
            <Box width='100%'>
                <Grid container width='100%' gap={10}>
                    <Grid width='100%' xs={5.5}>
                        <CardComponent margin={2} spacing={2} />
                    </Grid>
                    <Grid width='100%' xs={5.5}>
                        <PieChartComponent />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default DashBoard;