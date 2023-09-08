# ahpjs

The Analytic Hierarchy Process (AHP) is a method for organizing and analyzing complex decisions, using math and psychology. It was developed by Thomas L. Saaty in the 1970s and has been refined since then. It contains three parts: the ultimate goal or problem you’re trying to solve, all of the possible solutions, called alternatives, and the criteria you will judge the alternatives on. AHP provides a rational framework for a needed decision by quantifying its criteria and alternative options, and for relating those elements to the overall goal.

Stakeholders compare the importance of criteria, two at a time, through pair-wise comparisons. Example, do you care about job benefits or having a short commute more, and by how much more? AHP converts these evaluations into numbers, which can be compared to all of the possible criteria. This quantifying capability distinguishes the AHP from other decision making techniques.

In the final step of the process, numerical priorities are calculated for each of the alternative options. These numbers represent the most desired solutions, based on all users’ values. 

Use of libraries:

## 1. Dependency installation
`npm i ahpjs`

## 2. importing the library
`import getHierarchyAnalysisResult from "ahpjs"`

## 3. Calling the function
`const result = getHierarchyAnalysisResult({
    items,
    params,
    weights,
  }); // output: [0.5, 0.3, 0.2]`

## Example:
`const items = [
  {
    'adv_post_reach_12h': 45866,
    'adv_post_reach_24h': 58456,
    'adv_post_reach_48h': 70164,
    'avg_post_reach': 214008,
    'ci_index': 1067.48,
    'daily_reach': 363693,
    'err_percent': 64.1,
    'forwards_count': 8666,
    'id': 321,
    'mentioning_channels_count': 4807,
    'mentions_count': 9275,
    'participants_count': 334073,
  },
  {
    'adv_post_reach_12h': 466242,
    'adv_post_reach_24h': 566097,
    'adv_post_reach_48h': 732951,
    'avg_post_reach': 1833126,
    'ci_index': 4327.92,
    'daily_reach': 1165193,
    'err_percent': 171.7,
    'forwards_count': 41088,
    'id': 11031599,
    'mentioning_channels_count': 8832,
    'mentions_count': 30002,
    'participants_count': 1067476,
  },
  {
    'adv_post_reach_12h': 368692,
    'adv_post_reach_24h': 464078,
    'adv_post_reach_48h': 524071,
    'avg_post_reach': 606667,
    'ci_index': 1153.42,
    'daily_reach': 5759403,
    'err_percent': 54.7,
    'forwards_count': 22049,
    'id': 249927,
    'mentioning_channels_count': 3241,
    'mentions_count': 23141,
    'participants_count': 1109125,
  },
];`

`const params = ['avg_post_reach', 'ci_index', 'daily_reach', 'adv_post_reach_12h'];`

`const weights = [
  [1, 2, 4, 5],
  [1 / 2, 1, 2, 4],
  [1 / 4, 1 / 2, 1, 2],
  [1 / 5, 1 / 4, 1 / 2, 1],
];`


  `const result = getHierarchyAnalysisResult({
    items: channels,
    params: params,
    weights: weights,
  }); // output: [0.076, 0.564, 0.361]`
