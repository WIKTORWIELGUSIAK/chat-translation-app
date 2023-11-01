import { db } from "@/firebase";
import { LanguagesSupported } from "@/store/store";
import {
  DocumentData,
  FirestoreDataConverter,
  QueryDocumentSnapshot,
  SnapshotOptions,
  collection,
  collectionGroup,
  doc,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";

export interface User {
  id: string;
  email: string;
  name: string;
  image: string;
}
export interface Message {
  id?: string;
  input: string;
  timestamp: Date;
  user: User;
  translated?: { [K in LanguagesSupported]?: string };
}

const messageConverter: FirestoreDataConverter<Message> = {
  toFirestore: function (message: Message): DocumentData {
    return {
      input: message.input,
      timestamp: message.timestamp,
      user: message.user,
      //  ... other fields
    };
  },
  fromFirestore: function (
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Message {
    const data = snapshot.data(options);
    return {
      id: snapshot.id,
      input: data.input,
      timestamp: data.timestamp?.toDate(),
      translated: data.translated,
      user: data.user,
    };
  },
};

export const messageRef = (chatId: string) =>
  collection(db, "chats", chatId, "members").withConverter(messageConverter);

export const limitedMessagesRef = (chatId: string) =>
  query(messageRef(chatId), limit(25));

export const sortedMessagesRef = (chatId: string) =>
  query(messageRef(chatId), orderBy("timestamp", "asc"));

export const limitedSortedMessagesRef = (chatId: string) =>
  query(query(messageRef(chatId), limit(1)), orderBy("timestamp", "desc"));
