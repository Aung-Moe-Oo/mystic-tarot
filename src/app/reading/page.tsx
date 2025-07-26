"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  // CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { ChatMessage } from "@/components/template/chat-message";
import Image from "next/image";
import { TarotCard } from "@/ultitiles/data";
import { tarotCards as cards } from "@/ultitiles/data";
import { fetchData } from "@/ultitiles/fetchApi";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

function ReadingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);

  const callGeminiAPI = async (question: string, card: TarotCard) => {
    setIsLoading(true);
    try {
      const prompt = `As a wise tarot reader, please provide a detailed reading for this question: "${question}"

      The card drawn is: ${card.name}

      Please provide a thoughtful, insightful tarot reading that connects the card's energy and symbolism to the question asked. Include:
      1. The card's relevance to the question
      2. Key insights and guidance
      3. What this card suggests about the current situation
      4. Advice for moving forward

      Speak as a knowledgeable but warm tarot reader would, offering wisdom and guidance.`;

      const type = process.env.NEXT_PUBLIC_AI_TYPE;

      const response = await fetchData(prompt, type);

      if (response) {
        const reading = response;

        const readingMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: reading,
          isUser: false,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, readingMessage]);

        setIsLoading(false);
      } else {
        setIsLoading(false);
        toast.error("Unexpected response format from Gemini API", {
          action: {
            label: "X",
            onClick: () => toast.dismiss(),
          },
        });
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
      toast.error("Something went wrong", {
        action: {
          label: "X",
          onClick: () => toast.dismiss(),
        },
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const cardId = searchParams.get("cardId");
    const questionParam = searchParams.get("question");
    if (cardId && questionParam) {
      // Find the card in the deck
      const card = cards.find((c) => c.name_short === cardId);
      if (card) {
        setSelectedCard(card);

        // Add the user's question as a message
        const userMessage: Message = {
          id: Date.now().toString(),
          text: questionParam,
          isUser: true,
          timestamp: new Date(),
        };

        setMessages([userMessage]);

        callGeminiAPI(questionParam, card);
      }
    } else {
      router.push("/");
    }
  }, [searchParams, router]);

  const startNewReading = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col h-screen overflow-y-scroll text-foreground">
      {/* Header */}
      <div className="border-none bg-card">
        <div className="pb-2 md:p-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-blue-900">
            <h1 className="text-2xl md:text-md font-bold text-foreground mb-2 sm:mb-0">
              🔮 Mystic Tarot Reader
            </h1>
            <Button onClick={startNewReading} variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              New Reading
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <ScrollArea className="h-full bg-chat-background">
        <div className="p-6 space-y-6">
          {selectedCard && (
            <Card className="mx-auto max-w-[400px] bg-[url(../../public/tarot/bg.png)] bg-cover bg-center">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-white">
                  {selectedCard.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Image
                  src={selectedCard.img}
                  alt={selectedCard.name}
                  width="150"
                  height="170"
                  className="mx-auto mb-4 "
                />
                {/* <CardDescription>{selectedCard.meaning}</CardDescription> */}
              </CardContent>
            </Card>
          )}

          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message.text}
              isUser={message.isUser}
              timestamp={message.timestamp}
            />
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-chat-assistant rounded-2xl px-4 py-3 max-w-[80%]  bg-blue-100 text-blue-900 border border-blue-200">
                <div className="flex justify-start">
                  <span className="text-sm text-muted-foreground">
                    Please wait a moment...
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ReadingPage />
    </Suspense>
  );
}
