import { Button } from "@/components/ui/button";

interface SuggestionChipsProps {
  onSuggestionClick: (suggestion: string) => void;
  isVisible: boolean;
}

const suggestions = [
  "What does the future hold for my career?",
  "Will I find love soon?",
  "What should I focus on for personal growth?",
  "How can I overcome my current challenges?",
  "What guidance do I need right now?",
  "What is blocking my path to success?",
];

export const SuggestionChips = ({
  onSuggestionClick,
  isVisible,
}: SuggestionChipsProps) => {
  if (!isVisible) return null;

  return (
    <div className="overflow-y-scroll py-2 md:p-4 bg-background">
      <p className="text-sm text-left text-muted-foreground mb-3 font-medium">
        Suggestions:
      </p>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            onClick={() => onSuggestionClick(suggestion)}
            className="text-xs bg-background hover:bg-muted border-border hover:border-primary/50 transition-all duration-200"
          >
            {suggestion}
          </Button>
        ))}
      </div>
    </div>
  );
};
