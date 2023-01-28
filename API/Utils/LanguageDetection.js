import axios from "axios"
const DetectLanguage = axios.create({
  baseURL:
    "https://api-inference.huggingface.co/models/papluca/xlm-roberta-base-language-detection",
  headers: {
    Authorization: `Bearer <Hugging_Face_TOKEN>`,
  },
  wait_for_model: true,
  use_gpu: false,
  contentType: "application/json",
})

export default DetectLanguage
