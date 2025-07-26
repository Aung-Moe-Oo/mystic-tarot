import { useEffect, useState } from "react";
import { TarotCard } from "./tarot-cards";
import { TarotCard as TarotCardType, tarotCards } from "@/ultitiles/data";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { cn } from "@/lib/utils";

interface TarotDeckProps {
  onCardSelect: (card: TarotCardType) => void;
  question: string;
}

export const TarotDeck = ({ onCardSelect, question }: TarotDeckProps) => {
  const [shuffledCards, setShuffledCards] =
    useState<TarotCardType[]>(tarotCards);
  const [selectedCard, setSelectedCard] = useState<TarotCardType | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const shuffleCards = () => {
    setIsShuffling(true);
    const shuffled = [...tarotCards].sort(() => Math.random() - 0.5);

    setTimeout(() => {
      setShuffledCards(shuffled);
      setIsShuffling(false);
    }, 1000);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const handleCardSelect = (card: TarotCardType) => {
    if (selectedCard || isShuffling) return;

    setSelectedCard(card);
    setTimeout(() => {
      onCardSelect(card);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Choose Your Card</h2>
        <p className="text-muted-foreground max-w-md">
          Focus on your question: &quot;
          <span className="italic text-foreground">{question}</span>&quot;
        </p>
        <p className="text-sm text-muted-foreground">
          Let your intuition guide you to select a card
        </p>
      </div>

      <Button
        onClick={shuffleCards}
        disabled={isShuffling || !!selectedCard}
        variant="outline"
        className="mb-4"
      >
        <Shuffle className="w-4 h-4 mr-2" />
        {isShuffling ? "Shuffling..." : "Shuffle Cards"}
      </Button>

      <div
        className={cn(
          "grid grid-cols-6 md:grid-cols-8 lg:grid-cols-11 gap-3 transition-all duration-1000",
          isShuffling && "scale-95 opacity-50"
        )}
      >
        {shuffledCards.map((card, index) => (
          <TarotCard
            key={card.name_short}
            card={card}
            isFlipped={selectedCard?.name_short === card.name_short}
            onSelect={handleCardSelect}
            index={index}
          />
        ))}
      </div>

      {selectedCard && (
        <div className="text-center text-muted-foreground animate-fade-in">
          <p>
            You selected:{" "}
            <span className="font-semibold text-foreground">
              {selectedCard.name}
            </span>
          </p>
          <p className="text-sm">Preparing your reading...</p>
        </div>
      )}
    </div>
  );
};
