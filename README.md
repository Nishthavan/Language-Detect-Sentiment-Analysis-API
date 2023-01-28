## USC MOLA LAB CHALLENGE API CODE - Language Detection & Sentiment Analysi API
### At first request the API can be a bit slow (Free Tier) to respond but subsequent request will be fast.

## API Endpoints: 
#### Sentiment Score - http://34.217.11.13:8080/api/sentiment-score
#### Language Detection - http://34.217.11.13:8080/api/language-detection

## Code & Response Examples:

### *Sentiment Score*

```javascript
var axios = require('axios');
var data = JSON.stringify([{"tweet_text":"I am very happy today, to be honest this is the best day of my life"},{"tweet_text":"I am a bit confused and really sad"}]);

var config = {
  method: 'post',
  url: 'http://34.217.11.13:8080/api/sentiment-score',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```
### Response
```json
[
    {
        "tweet_text": "I am very happy today, to be honest this is the best day of my life",
        "sentiment_score": {
            "negative": 0.0020457005593925714,
            "neutral": 0.005948134697973728,
            "positive": 0.9920061230659485
        },
        "detected_mood": "POSITIVE"
    },
    {
        "tweet_text": "I am a bit confused and really sad",
        "sentiment_score": {
            "negative": 0.941369354724884,
            "neutral": 0.053877945989370346,
            "positive": 0.0047527034766972065
        },
        "detected_mood": "NEGATIVE"
    }
]
```

### *Language Detection*
```javascript
var axios = require('axios');
var data = JSON.stringify([{"tweet_text":"I am very happy today, to be honest this is the best day of my life"},{"tweet_text":"I am a bit confused and really sad"}]);

var config = {
  method: 'post',
  url: 'http://34.217.11.13:8080/api/language-detection',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

```
### Response
```json
[
    {
        "tweet_text": "I am very happy today, to be honest this is the best day of my life",
        "is_english": true,
        "detected_language": "en"
    },
    {
        "tweet_text": "I am a bit confused and really sad",
        "is_english": true,
        "detected_language": "en"
    }
]
```
