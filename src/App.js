import './App.css';
import { Chart as ChartJS,ArcElement,Tooltip,Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement,Tooltip,Legend)

function App() {

  const data={
    labels:['Yes','No'],
    datasets:[{
      label:'poll',
      data:[3,6],
      backgroundColor:['black','red'],
      borderColor:['black','red']
    }]
  }

  return (
    <div className="App">
      <h1>Doughnut Chart</h1>
      <div style={{height:"250px", width:"250px"}}>
      <Doughnut data={data}></Doughnut>
      </div>
    </div>
  );
}

export default App;
