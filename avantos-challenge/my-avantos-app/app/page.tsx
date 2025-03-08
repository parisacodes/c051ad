"use client";
import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const sendApplication = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
      });

      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error) {
      setResponse("Error submitting application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Avantos Application</h1>
      <button onClick={sendApplication} disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </button>
      {response && (
        <pre style={{ marginTop: "20px", textAlign: "left", whiteSpace: "pre-wrap" }}>
          {response}
        </pre>
      )}
    </div>
  );
}
