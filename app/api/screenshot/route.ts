import microlink from "@microlink/mql";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json({ error: "URL is required" }, { status: 400 });
    }

    // Use Microlink to capture the screenshot of the provided URL
    const { status, data } = await microlink(url, {
      screenshot: true,
      
    });

    if (status === "success") {
      return NextResponse.json(
        { screenshotUrl: data.screenshot?.url },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: "Failed to capture screenshot" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred", details: error },
      { status: 500 }
    );
  }
}
