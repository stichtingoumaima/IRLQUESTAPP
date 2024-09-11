import { authOptions } from "@/auth";
import ChatMessages from "@/components/chat/ChatMessages";
import { chatMembersRef } from "@/lib/converters/ChatMembers";
import { sortedMessagesRef } from "@/lib/converters/Message";
import { getDocs } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { DrawerTrigger, DrawerContent, Drawer } from "@/components/ui/drawer";

type Props = {
  params: {
    chatId: string;
  };
};

async function ChatPage({ params: { chatId } }: Props) {
  const session = await getServerSession(authOptions);
  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) => doc.data()
  );

  const hasAccess = (await getDocs(chatMembersRef(chatId))).docs
    .map((doc) => doc.id)
    .includes(session?.user.id!);

  if (!hasAccess) redirect("/chat?error=permission");

  return (
    <div className="flex mt-20">
      {/* Chat List is commented out but can be included as needed */}
      {/* <ChatList></ChatList> */}
      <Drawer>
        <DrawerTrigger>
          Report Tasks To System
        </DrawerTrigger>
        <DrawerContent className="flex flex-col bottom-0 w-screen">
          <ChatMessages
            chatId={chatId}
            session={session}
            initialMessages={initialMessages}
          />
        </DrawerContent>
      </Drawer>

    </div>
  );
}

export default ChatPage;
