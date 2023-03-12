import { exit } from "./exit/exit";
import { showMenu } from "./menu/menu";
import { browsePosts } from "./menu/options/browse_posts/browse_posts";
import { sendMessage } from "./menu/options/send_message/send_message";
import { showAllPosts } from "./menu/options/show_all_posts/show_all_posts";
import { showAllUsers } from "./menu/options/show_all_users/show_all_users";
import { State } from "./states/state";
import { states } from "./states/states";
import { clear, print, printNewLine, prompt } from "./ui/console";

async function begin() {
	clear(true);
	print("👋 Welcome to our cool blog browser!");
	await prompt("⌨️ Press [ENTER] to continue! 🕶️");
	main();
}

async function main() {
	let state = new State();

	while (true) {
		switch (state.get()) {
			case "MENU":
				const newMenuOption = await showMenu();
				state.set(newMenuOption);
				break;
			case "SEND_MESSAGE":
				const nextState = await sendMessage();
				state.set(nextState);
				break;
			case "SHOW_POSTS":
				clear(true);
				const posts = await showAllPosts();
				state.set(states.MENU);
				break;
			case "SHOW_USERS":
				clear(true);
				const users = await showAllUsers();
				state.set(states.MENU);
				break;
			case "BROWSE_POSTS":
				clear(true);
				const post = await browsePosts();
				state.set(states.MENU);
				break;
			case "ADD_USER":
				clear(true);
				print("🏗️  This functionality has not been implemented!");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state.set(states.MENU);
				break;
			case "UNKNOWN":
				clear(true);
				print("😵 We have entered an unknown state.");
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state.set(states.MENU);
				break;
			case "CABBAGE":
				clear(true);
				print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
				print("🥬      CABBAGE MODE UNLOCKED     🥬", false);
				print("🥬     Why did you want this?     🥬", false);
				print("🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬🥬", false);
				await prompt("⌨️ Press [ENTER] to return to the main menu! 🕶️");
				state.set(states.MENU);
				break;
			default:
				clear(true);
				print(`🌋 😱 Uh-oh, we've entered an invalid state: "${state.get()}"`);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				print("💥 Crashing the program now...  💥", false);
				print("💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥", false);
				printNewLine();
				exit(99);
				break;
		}
	}
}

begin();
