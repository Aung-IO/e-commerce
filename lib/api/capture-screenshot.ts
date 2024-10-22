

export async function captureScreenshotFromAPI(url : string) {
    const response = await fetch("/api/screenshot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
        next: { revalidate: 86400 }, // 1 day
    });

    const data = await response.json();
    return {data, ok: response.ok} 
}