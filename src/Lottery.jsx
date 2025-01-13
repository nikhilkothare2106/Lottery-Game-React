import { useState } from "react";
import { genTicket, sum } from "./helper";
export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));

  let isWinning = sum(ticket) === 10;

  let buyTicket = () => {
    setTicket(genTicket(3));
  };
  return (
    <div className="flex flex-col space-y-5 bg-gray-700 p-5 rounded-lg">
      <h1 className="text-5xl font-bold">Lottery Game</h1>
      <div className="ticket border border-pink-800 rounded-xl">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <button onClick={buyTicket}>By New Ticket</button>
      <h3 className="font-bold">{isWinning ? "Congratulations, you won !" : "You lose !"}</h3>
    </div>
  );
}
