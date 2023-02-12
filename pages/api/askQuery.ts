import type { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";
import query from "../../utils/queryApi";
import { adminDb } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, session } = req.body;
  if (!prompt) {
    res.status(400).json({ answer: "Please provide a prompt" });
    return;
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chatId" });
    return;
  }

  const response = await query(prompt);

  const message: Message = {
    text:
      response ||
      "ChatGPT not working at the moment. Please try gain after sometime!",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://openai.com/content/images/2022/05/openai-avatar.png",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);
  res.status(200).json({ answer: message.text });
}
