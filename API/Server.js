import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import LanguageDetectionRoute from "./Routes/LanguageDetectionRoute.js"
import SentimentAnalysisRoute from "./Routes/SentimentAnalysisRoute.js"

// .env file to keep the API Call keys secure
dotenv.config()
const app = express()
app.use(express.json())

// API Routes
app.use("/api/language-detection", LanguageDetectionRoute)
app.use("/api/sentiment-score", SentimentAnalysisRoute)

// Sever Listening on Port 5000
const PORT = 8080
app.listen(PORT, () => {
  console.log(`Server Running mode on PORT ${PORT}`.blue.inverse)
})
