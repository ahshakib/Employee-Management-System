import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import employeeService from '../services/employeeService';

export default function PieChartComponent() {

  const [pieData, setData] = React.useState({
    result:[]
  })

  React.useEffect(()=> {
    const fetchData = async () => {
      const chartData = await employeeService.pieChartData()
      console.log(chartData)
      const pieChartData = chartData.data
      setData(()=> pieChartData)
    }
    fetchData()
  }, [])

  return (
    <PieChart
      series={[
        {
          data: pieData.result.map((item, idx) => ({
            id: idx,
            value: item.employeeNumber,
            label: item._id,
          }))
        },
      ]}
      width={400}
      height={200}
    />
  );
}
