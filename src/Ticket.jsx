import TicketNum from "./TicketNum";
export default function Ticket({ ticket }) {
  return (
    <div className="border border-pink-800 rounded-xl w-72 text-center">
      <p>Ticket</p>
      {ticket.map((num, idx) => (
        <TicketNum num={num} key={idx} />
      ))}
    </div>
  );
}
