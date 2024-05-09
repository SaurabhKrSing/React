// App.js
import './App.css';
import FoodItems from './components/FoodItems';
import 'bootstrap/dist/css/bootstrap.min.css';
import Errormassage from './components/Errormassage';

function App() {
  let foodItems = ["Apple", "Bananna", "Orange", "Pineapple", "Grapes"];

  return (
    <div>
      <h1 className='food-heading'>Healthy Foods</h1>
      <Errormassage items={foodItems}></Errormassage>
      <FoodItems items={foodItems}></FoodItems>
    </div>
  );
}

export default App;
