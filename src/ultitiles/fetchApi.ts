import { toast } from "sonner";

export const fetchData = async (prompt: string, type?: string) => {
  let response = null;

  if (type === "openrouter") {
    response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
        //   "HTTP-Referer": "<YOUR_SITE_URL>",
        //   "X-Title": "<YOUR_SITE_NAME>",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "tngtech/deepseek-r1t2-chimera:free",
        messages: [
          {
            role: "user",
            content: prompt,
            max_tokens: 2048,
          },
        ],
      }),
    });

    if (!response.ok) {
      toast.error("Unexpected response format from Gemini API", {
        action: {
          label: "X",
          onClick: () => toast.dismiss(),
        },
      });
    }

    const data = await response.json();

    if (data.choices && data.choices[0] && data.choices[0].message) {
      return data.choices[0].message.content;
    }
    return "";
  }

  response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        },
      }),
    }
  );

  if (!response.ok) {
    toast.error("Unexpected response from Gemini API", {
      action: {
        label: "X",
        onClick: () => toast.dismiss(),
      },
    });
  }

  const data = await response.json();

  if (data.candidates && data.candidates[0] && data.candidates[0].content) {
    return data.candidates[0].content.parts[0].text;
  }
  return "";
};
