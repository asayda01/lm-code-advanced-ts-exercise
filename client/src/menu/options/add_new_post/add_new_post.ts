import { states } from "../../../states/states";
import { clear, print, printNewLine, prompt } from "../../../ui/console";

import { sendNewPost } from "../../../api/send_new_post";


export async function addNewPost() {

	clear();

	const authorID = await prompt("Please specify author id of the blog post? ");
	const title = await prompt("What is title of the blog post? ");
	const text = await prompt("What is text for the blog post? ");

	printNewLine();
	print(`➕📨 Creating new blog posting "${title}"...`);

	const success = await sendNewPost({authorID, title, text});

	if (success === true) print("🥳 Blog successfully posted!");
	else print("😵 Blog post could NOT be created.");

	await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");

	return states.MENU;
}