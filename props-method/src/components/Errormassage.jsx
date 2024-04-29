
const Errormassage = ({ items }) => {
  // let foodItems = ["Apple", "Bananna", "Orange", "Pineapple", "Grapes"];

  return (

    <div>
      {items.length === 0 && <h3>Still I am Hungry</h3>}
    </div>
  )
}

export default Errormassage
