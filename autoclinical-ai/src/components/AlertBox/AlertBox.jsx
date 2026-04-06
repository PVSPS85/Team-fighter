import "./AlertBox.css";

export default function AlertBox({ message, type = "info" }) {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
}
