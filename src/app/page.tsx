"use client";

import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TarotCard } from "@/ultitiles/data";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { SuggestionChips } from "@/components/template/suggestion-chips";
import { ChatInput } from "@/components/template/chat-input";
import { TarotDeck } from "@/components/template/tarot-decks";
import { useRouter } from "next/navigation";

type AppState = "input" | "card-selection" | "reading";

export default function Home() {
  const [appState, setAppState] = useState<AppState>("input");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [selectedCard, setSelectedCard] = useState<TarotCard | null>(null);
  const router = useRouter();

  const handleQuestionSubmit = (question: string) => {
    setCurrentQuestion(question);
    setAppState("card-selection");
  };

  useEffect(() => {
    if (appState === "reading" && selectedCard !== null) {
      router.push(
        `/reading?cardId=${
          selectedCard.name_short
        }&question=${encodeURIComponent(currentQuestion)}`
      );
    }
  }, [appState, router, selectedCard, currentQuestion]);

  const handleCardSelect = async (card: TarotCard) => {
    setSelectedCard(card);
    setAppState("reading");
  };

  const startNewReading = () => {
    setAppState("input");
    setCurrentQuestion("");
    setSelectedCard(null);
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleQuestionSubmit(suggestion);
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
            {appState !== "input" && (
              <Button onClick={startNewReading} variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                New Reading
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {appState === "input" && (
          <div className="flex flex-col h-full">
            <div className="flex-1 flex items-center justify-center text-white bg-[url(../../public/tarot/bg.png)] bg-cover bg-center">
              <div className="max-w-2xl mx-auto px-6">
                <div className="mb-2 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    Welcome to Your Tarot Reading
                  </h2>
                  <p className="text-lg">
                    Ask the universe a question and let the cards guide you to
                    wisdom and clarity.
                  </p>
                </div>
              </div>
            </div>

            <SuggestionChips
              onSuggestionClick={handleSuggestionClick}
              isVisible={true}
            />

            <ChatInput onSendMessage={handleQuestionSubmit} isLoading={false} />
          </div>
        )}

        {appState === "card-selection" && (
          <ScrollArea className="p-0 h-full bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-950/20 dark:via-blue-950/20 dark:to-indigo-950/20">
            <TarotDeck
              onCardSelect={handleCardSelect}
              question={currentQuestion}
            />
          </ScrollArea>
        )}

        {/* {appState === "reading" && (
          <ScrollArea className="h-full bg-chat-background">
            <div className="p-6 space-y-6">
              {selectedCard && (
                <Card className="mx-auto max-w-md  bg-blue-100 text-blue-900 border border-blue-200">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl">
                      {selectedCard.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Image
                      src={selectedCard.img}
                      alt={selectedCard.name}
                      width={100}
                      height={100}
                      className="mx-auto mb-4"
                    />
                    <CardDescription>{selectedCard.meaning}</CardDescription>
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
                  <div className="bg-chat-assistant  border border-black/10 rounded-2xl px-4 py-3 max-w-[80%]">
                    <div className="flex items-center space-x-2">
                      <div className="animate-pulse flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Reading the cards...
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>
        )} */}
      </div>
    </div>
  );
}
