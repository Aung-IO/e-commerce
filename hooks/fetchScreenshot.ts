import axios from "axios";

export function useScreenshot(projectUrl: string) {
  const fetchScreenshot = async () => {
    try {
      const response = await axios.post("/api/screenshot", { url: projectUrl });
      const data = response.data;
      const screenshot = data.screenshotUrl;
      return screenshot;
    } catch (error) {
      console.error("Error fetching screenshot:", error);
    }
  };
  fetchScreenshot();
}
