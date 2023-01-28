import express from "express"
import DetectLanguage from "../Utils/LanguageDetection.js"
const router = express.Router()

// Language Detection Route
router.post("/", async (req, res) => {
  try {
    const TweetTexts = req.body
    let results = TweetTexts
    for (let i = 0; i < TweetTexts.length; i++) {
      // Using Axios for making a request to API for language detection and updating the results
      const { data } = await DetectLanguage.post("", TweetTexts[i].tweet_text)
      if (data[0][0].label == "en") {
        results[i].is_english = true
      } else {
        results[i].is_english = false
      }
      results[i].detected_language = data[0][0].label
    }
    console.log("Language Detection Called !!")
    res.status(200).send(results)
  } catch (error) {
    res.send({
      Error: "API BUSY | FREE TIER ACCOUNT | TRY AGAIN IN A FEW SECONDS",
    })
    console.log(error)
  }
})
export default router
