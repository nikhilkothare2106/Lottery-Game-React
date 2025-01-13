import { sum } from "./helper";
import Lottery from "./Lottery";

function App() {
  //you can use your own winning condition
  let winCondtion = (ticket) => {
    // return sum(ticket) === 10;
    return ticket.every((num) => num === ticket[0]);
  };
  return (
    <>
      <Lottery n={3} winCondition={winCondtion} />
    </>
  );
}

export default App;
