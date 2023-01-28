import axios from "axios"
const SentimentPrediction = axios.create({
  baseURL:
    "https://api-inference.huggingface.co/models/cardiffnlp/twitter-roberta-base-sentiment",
  headers: {
    Authorization: `Bearer <Hugging_Face_TOKEN>`,
  },
  wait_for_model: true,
  use_gpu: false,
  contentType: "application/json",
})

export default SentimentPrediction
