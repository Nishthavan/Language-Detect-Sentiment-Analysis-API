import express from "express"
import SentimentPrediction from "../Utils/SentimentAnalysis.js"
const router = express.Router()

// Sentiment Analysis Route
router.post("/", async (req, res) => {
  try {
    const TweetTexts = req.body
    let results = TweetTexts
    for (let i = 0; i < TweetTexts.length; i++) {
      // Using Axios for making a request to API for Sentiment Analysis and updating the results
      const { data } = await SentimentPrediction.post(
        "",
        TweetTexts[i].tweet_text
      )
      console.log(data[0][0].score)
      results[i].sentiment_score = {}
      results[i].sentiment_score.negative = data[0][0].score
      results[i].sentiment_score.neutral = data[0][1].score
      results[i].sentiment_score.positive = data[0][2].score
      if (
        data[0][0].score > data[0][1].score &&
        data[0][0].score > data[0][2].score
      ) {
        results[i].detected_mood = "NEGATIVE"
      } else if (
        data[0][1].score > data[0][0].score &&
        data[0][1].score > data[0][2].score
      ) {
        results[i].detected_mood = "NEUTRAL"
      } else {
        results[i].detected_mood = "POSITIVE"
      }
    }
    console.log("Sentiment Analysis Called !!")
    res.status(200).send(results)
  } catch (error) {
    res.send({
      Error: "API BUSY | FREE TIER ACCOUNT | TRY AGAIN IN A FEW SECONDS",
    })
    console.log(error)
  }
})
export default router
