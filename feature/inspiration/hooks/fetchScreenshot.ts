"use client"
import axios from "axios";
import { useEffect, useState } from "react";


export function useScreenshot(projectUrl: string) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  useEffect(() => {
    const fetchScreenshot = async () => {
      try {
        const response = await axios.post("/api/screenshot", {
          url: projectUrl,
        });
        const data = response.data;
        const screenshot = data.screenshotUrl;
        setScreenshot(screenshot);
        
      } catch (error) {
        console.error("Error fetching screenshot:", error);
      }
    };

    if(projectUrl){
      fetchScreenshot()
    }
  }, [projectUrl]);

  return screenshot
}
