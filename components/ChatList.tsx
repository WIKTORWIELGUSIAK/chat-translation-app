import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import React from "react";

async function ChatList() {
  const session = await getServerSession(authOptions);

  return <div>ChatList</div>;
}

export default ChatList;
