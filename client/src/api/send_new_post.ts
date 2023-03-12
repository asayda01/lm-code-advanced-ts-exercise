import { baseUrl } from "./base_url";

export interface interfacePost{

    authorID: string;
	title: string;
	text: string;

}

export async function sendNewPost(post: interfacePost) {

	try {
		const result = await fetch(baseUrl + "/api/posts/add", {
			headers: { "Content-Type": "application/json" },
			method: "POST",
      body: JSON.stringify( post ),
		});

		const json = await result.json();
		const { success } = json;

		return success;
	} catch (e) {
		console.error(e);
		return false;
	}
}