import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({ n = 3, winCondition }) {
  let [ticket, setTicket] = useState([]);

  let isWinning = winCondition(ticket);

  let buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div className="flex flex-col space-y-5 bg-gray-700 p-5 rounded-lg justify-cente items-center">
      <h1 className="text-5xl font-bold">Lottery Game</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>By New Ticket</button>
      <h3 className="font-bold">{isWinning ? "Congratulations, you won !" : ""}</h3>
    </div>
  );
}
