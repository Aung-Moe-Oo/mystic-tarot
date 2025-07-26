import { useState } from "react";
import { cn } from "@/lib/utils";
import { TarotCard as TarotCardType } from "@/ultitiles/data";
import Image from "next/image";

interface TarotCardProps {
  card: TarotCardType;
  isFlipped: boolean;
  onSelect: (card: TarotCardType) => void;
  index: number;
}

export const TarotCard = ({
  card,
  isFlipped,
  onSelect,
  index,
}: TarotCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "relative w-24 h-36 cursor-pointer transition-all duration-500 transform-gpu perspective-1000",
        isHovered && !isFlipped && "scale-110 -translate-y-2",
        "animate-fade-in"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onSelect(card)}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          isFlipped && "rotate-y-180"
        )}
      >
        {/* Card Back */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full rounded-lg backface-hidden",
            "bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800",
            "border-2 border-purple-300/30 shadow-lg",
            "flex items-center justify-center"
          )}
        >
          <div className="w-16 h-24 bg-gradient-to-br from-gold-300 to-gold-500 rounded opacity-80 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-purple-800 rounded-full bg-purple-900/20" />
          </div>
        </div>

        {/* Card Front */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full rounded-lg backface-hidden rotate-y-180",
            "bg-gradient-to-br from-background via-card to-background",
            "border border-black/10 shadow-lg",
            "p-2 flex flex-col items-center justify-between text-center"
          )}
        >
          <Image src={card.img} alt={card.name} width={100} height={150} />
        </div>
      </div>
    </div>
  );
};
