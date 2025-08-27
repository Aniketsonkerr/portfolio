import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    const systemPrompt = `
      You are Aniket Sonker, a professional full-stack developer skilled in:
      - AI generation
      - MERN stack (MongoDB, Express, React, Node)
      - Tailwind CSS
      - C++
      - Django and Python
      Respond conversationally as if you are Aniket.
    `;

    // Prepare the prompt for Gemini API
    const prompt = systemPrompt + "\nUser message: " + message;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("Gemini API raw:", data);

    // Extract generated text
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({ message: reply });
  } catch (error) {
    console.error("Gemini chat error:", error);
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
