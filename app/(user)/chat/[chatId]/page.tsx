import { authOptions } from "@/auth";
import ChatInput from "@/components/ChatInput";
import { getServerSession } from "next-auth";

type Props = {
  params: { chatId: string };
};

async function ChatPage({ params: { chatId } }: Props) {
  return (
    <>
      {/* Admin Controls */}
      {/* ChatMembersBadge */}

      {/* ChatMessages */}

      <ChatInput chatId={chatId} />
    </>
  );
}

export default ChatPage;
