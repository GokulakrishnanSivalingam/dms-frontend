import { useState } from "react";
import "./Sms.css"; 

const SendBulkSMS = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendBulkMessage = async () => {
    if (!message) {
      alert("Enter a message to send.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/send-alert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      alert(data.success ? "Messages Sent Successfully!" : `Error: ${data.error}`);
    } catch (error) {
      alert("Failed to send messages. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h2>Disaster Alert System</h2>
      <p>Send emergency messages to all registered users.</p>

      <label>Message:</label>
      <textarea
        rows="4"
        placeholder="Enter your alert message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button onClick={sendBulkMessage} disabled={loading}>
        {loading ? "Sending..." : "Send Alert to All"}
      </button>
    </div>
  );
};

export default SendBulkSMS;
