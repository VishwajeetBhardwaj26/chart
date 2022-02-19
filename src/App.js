
import { DoughnutChart } from './Charts/Dougnut';
import Card from './Card/Card';
import Cardbar from './Card/Cardbar'
import { PieChart } from './Charts/PieChart';
import { BarChart } from './Charts/BarChart';
import './App.css';

function App() {
  return (
    <div  >
    <div className='container'>
    <Card>
    <DoughnutChart/>
    </Card>
    <Card>
      <PieChart/>
    </Card>
    <Card>
      <PieChart/>
    </Card>
    <Card>
      <PieChart/>
    </Card>
    </div>
    <div className='row'>
    <Cardbar>
        <BarChart>
        </BarChart>
      </Cardbar>
      </div>
    </div>
  );
}

export default App;
