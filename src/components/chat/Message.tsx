import { cn } from "@/lib/utils";
import { ExtendedMessage } from "@/types/message";
import { format } from "date-fns";
import { Bot, User, UserCircle2 } from "lucide-react";
import React, { forwardRef } from "react";
import ReactMarkdown from "react-markdown";
interface MessageProps {
  message: ExtendedMessage;
  isNextMessageSamePerson: boolean;
}

const Message = forwardRef<HTMLDivElement, MessageProps>(
  ({ message, isNextMessageSamePerson }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex text-gray-300 font-sans items-end", {
          "justify-end": message.isUserMessage,
        })}
      >
        <div
          className={cn(
            "relative flex mb-6 h-8 w-8 aspect-square  items-center justify-center",
            {
              "order-2": message.isUserMessage,
              "order-1  rounded-full": !message.isUserMessage,
              invisible: isNextMessageSamePerson,
            }
          )}
        >
          {message.isUserMessage ? (
            <User className=" bg-blue-600 rounded-full p-1  h-7 w-7" />
          ) : (
            <Bot className="bg-zinc-800 rounded-full p-1.5 h-8 w-8" />
          )}
        </div>

        <div
          className={cn("flex flex-col space-y-2 text-base max-w-md mx-2", {
            "order-1 items-end": message.isUserMessage,
            "order-2 items-start": !message.isUserMessage,
          })}
        >
          <div
            className={cn(
              "px-4 py-2 font-sans text-sm rounded-xl inline-block leading-5 break-words",
              {
                "bg-blue-600 text-gray-300": message.isUserMessage,
                "bg-zinc-800 text-gray-300": !message.isUserMessage,
              }
            )}
          >
            {typeof message.text === "string" ? (
              <ReactMarkdown
                className={cn("prose prose-slate prose-invert", {
                  "text-zinc-50": message.isUserMessage,
                })}
              >
                {message.text}
              </ReactMarkdown>
            ) : (
              message.text
            )}
          </div>
          {message.id !== "loading-message" ? (
            <div
              className={cn("text-xs select-none mt-2 w-full text-right ", {
                "text-gray-500 -ml-2": !message.isUserMessage,
                "text-gray-500 mr-2": message.isUserMessage,
              })}
            >
              {format(new Date(message.createdAt), "HH:mm")}
            </div>
          ) : null}
        </div>
      </div>
    );
  }
);

Message.displayName = "Message";

export default Message;
