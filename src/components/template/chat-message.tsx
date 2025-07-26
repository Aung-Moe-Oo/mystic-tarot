import { cn } from "@/lib/utils";
interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatMessage = ({
  message,
  isUser,
  timestamp,
}: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-in fade-in-0 slide-in-from-bottom-2 duration-300",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "rounded-2xl px-4 py-3 shadow-sm",
          isUser
            ? "max-w-[90%] bg-chat-user text-chat-user-foreground ml-auto bg-green-100 text-green-900 border border-green-200"
            : "max-w-[100%] md:max-w-[90%] bg-chat-assistant text-chat-assistant-foreground bg-blue-100 text-blue-900 border border-blue-200"
        )}
      >
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message}</p>
        <p
          className={cn(
            "text-xs mt-2 opacity-70 text-right",
            isUser ? "text-chat-user-foreground" : "text-muted-foreground"
          )}
        >
          {timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>
    </div>
  );
};
