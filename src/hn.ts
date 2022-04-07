const hnFetch = async (path: string) => {
	const url = `https://hacker-news.firebaseio.com/v0/${path}`;

	const response = await fetch(url);
	return await response.json();
};

export type Item = {
	id: number;
	deleted: boolean;
	type: "job" | "story" | "comment" | "poll" | "pollopt";
	by: string;
	time: number;
	dead: boolean;
	kids?: number[];
	parent: number;
	text: string;
	title: string;
};

export const getItem = async (id: number) =>
	(await hnFetch(`item/${id}.json`)) as Item;
export const getTopStories = async () =>
	(await hnFetch("topstories.json")) as number[];
