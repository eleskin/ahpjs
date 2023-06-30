import getHierarchyAnalysisResult from '../ahp';

const channels = [
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
];

const params = ['avg_post_reach', 'ci_index', 'daily_reach', 'adv_post_reach_12h'];

const weights = [
	[1, 2, 4, 5],
	[1 / 2, 1, 2, 4],
	[1 / 4, 1 / 2, 1, 2],
	[1 / 5, 1 / 4, 1 / 2, 1],
];

const result = getHierarchyAnalysisResult({
	items: channels,
	params: params,
	weights: weights,
});

console.log(result);