import ChatList from "@/components/ChatList";
import React from "react";

type Props = {
  params: {};
  searchParams: {
    error: string;
  };
};

function ChatsPage({ searchParams: { error } }: Props) {
  return (
    <div>
      ChatsPage
      {/* Chat Permission chat */}
      <ChatList />
    </div>
  );
}

export default ChatsPage;
