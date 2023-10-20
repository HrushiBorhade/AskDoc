import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import Image from "next/image";
import { useContext, useRef } from "react";
import { ChatContext } from "./ChatContext";
// import { ChatContext } from "./ChatContext";

interface ChatInputProps {
  isDisabled?: boolean;
}

const ChatInput = ({ isDisabled }: ChatInputProps) => {
  const { addMessage, handleInputChange, isLoading, message } =
    useContext(ChatContext);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="absolute  bottom-4 left-2.5 w-[96%]">
      <div className=" flex items-center justify-center w-full overflow-hidden outline-none bg-zinc-900  rounded-3xl">
        <div className="flex w-screen  px-2">
          <Textarea
            rows={1}
            ref={textareaRef}
            maxRows={4}
            autoFocus
            onChange={handleInputChange}
            value={message}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                addMessage();

                textareaRef.current?.focus();
              }
            }}
            placeholder="Write a message..."
            className="block w-full p-2 text-xs leading-snug tracking-tight text-justify bg-transparent border-none outline-none resize-none md:text-sm scrollText peer disabled:opacity-50 pr-14 focus:border-none sm:leading-6 py-3"
          />

          <button
            disabled={isLoading || isDisabled}
            className=""
            aria-label="send message"
            onClick={() => {
              addMessage();
              textareaRef.current?.focus();
            }}
          >
            <Image
              src="/sendArrow.svg"
              alt="send arrow"
              width={26}
              height={26}
              priority={true}
              className="self-end mb-0.5 md:mb-1 transition duration-300 ease-in-out transform cursor-pointer hover:scale-125 glow z-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
