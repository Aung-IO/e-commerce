"use client";
import { captureScreenshotFromAPI } from "@/lib/api/capture-screenshot";
import { useState } from "react";

export default function CaptureScreenshot() {
  const [url, setUrl] = useState(""); // URL input state
  const [screenshotUrl, setScreenshotUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to make the API request
  async function handleCaptureScreenshot(e: React.FormEvent) {
    e.preventDefault(); // Prevent form submission from reloading the page

    if (!url) {
      setError("Please provide a valid URL");
      return;
    }

    try {
      const {data, ok} = await captureScreenshotFromAPI(url);

      if (ok) {
        setScreenshotUrl(data.screenshotUrl); // Display screenshot URL if successful
        setError(null);
      } else {
        setError(data.error); // Handle the error
        setScreenshotUrl(null);
      }
    } catch (err) {
      setError("An error occurred while capturing the screenshot.");
      setScreenshotUrl(null);
    }
  }

  return (
    <div>
      <h1>Capture Website Screenshot</h1>

      {/* Form to input URL */}
      <form onSubmit={handleCaptureScreenshot}>
        <input
          type="url"
          placeholder="Enter website URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
          style={{ marginRight: "10px", padding: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Capture Screenshot
        </button>
      </form>

      {/* Display Screenshot */}
      {screenshotUrl && (
        <div style={{ marginTop: "20px" }}>
          <h2>Screenshot Captured:</h2>
          <img src={screenshotUrl} alt="Website Screenshot" width="500" />
        </div>
      )}

      {/* Display Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
