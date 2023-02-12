import openai from "./chatgpt";

const query = async (prompt: string) => {
  const response = await openai
    .createCompletion({
      prompt,
      model: "text-davinci-003",
      max_tokens: 100,
      temperature: 0.9,
      top_p: 1,
      best_of: 10,
      frequency_penalty: 0.8,
      presence_penalty: 0,
    })
    .then((response) => response.data.choices[0].text)
    .catch((error) => "ChatGPT has a network issues, Error : " + error.message);

  return response;
};

export default query;
