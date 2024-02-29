const express = require('express');
const app = express();
const { getMean, getMedian, getMode, stringToNumArray } = require('./helpers');

app.get('/mean', (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError('Valid numbers are required', 400)
  }
  
  let nums = req.query.nums;
  const splitNums = stringToNumArray(nums.split(','));

  if (splitNums instanceof Error) {
    throw new ExpressError(splitNums.message);
  }

  let response = {
    operation: "mean",
    value: getMean(splitNums)
  }
  return res.send(response);
})


app.get('/median', (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError('Valid numbers are required', 400)
  }

  let nums = req.query.nums;
  const splitNums = stringToNumArray(nums.split(','));

  if (splitNums instanceof Error) {
    throw new ExpressError(splitNums.message);
  }

  let response = {
    operation: "median",
    value: getMedian(splitNums)
  }
  return res.send(response);
})


app.get('/mode', (req, res) => {
  if (!req.query.nums) {
    throw new ExpressError('Valid numbers are required', 400)
  }
  
  let nums = req.query.nums;
  const splitNums = stringToNumArray(nums.split(','));

  if (splitNums instanceof Error) {
    throw new ExpressError(splitNums.message);
  }

  let response = {
    operation: "mode",
    value: getMode(splitNums)
  }
  return res.send(response);
})

app.listen(3000, function() {
  console.log(`Server starting on port 3000`);
});