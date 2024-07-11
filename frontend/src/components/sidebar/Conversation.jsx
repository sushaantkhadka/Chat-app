import useConversation from "../../store/useConversation";
import { styles } from "../../styles";
import { useSocketContext } from "../../context/SocketContext";

export default function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex gap-2 item-center hover:bg-sky-500 rounded p-2 py-1 curser-pointer
        ${isSelected ? `${styles.insetShadow} rounded-[0px]` : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className="relative inline-block">
          <img
            className="w-12 rounded-full border-2 border-white"
            src={conversation.profilePic}
          />
          {isOnline? <span className="w-4 h-4 rounded-full bg-green-500 border-2 border-white absolute bottom-0.5 right-0.5"></span> : ""}
        </div>
        <div className="Flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-600">{conversation.fullName}</p>
            <span className="text-xl">📞</span>
          </div>
        </div>
      </div>

      {!lastIdx && <hr className="my-1 h-0.5 border-t-0.5 border-grey-100" />}
    </>
  );
}
