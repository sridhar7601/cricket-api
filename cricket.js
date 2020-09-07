const cricLive = require('cric-live');
  
cricLive.getRecentMatches().then(currentMatches => {
    console.log(currentMatches);
});    