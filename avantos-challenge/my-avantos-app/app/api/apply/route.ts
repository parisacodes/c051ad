import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const response = await fetch("https://apply-to-avantos.dev-sandbox.workload.avantos-ai.net", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36"
            },
            body: JSON.stringify({ email: "parisa.s.abbasi.gh@gmail.com"}),
        });

        const data = await response.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Error: ", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}