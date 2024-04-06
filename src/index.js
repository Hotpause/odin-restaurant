import { initialpageload } from "./pageload.js";
import { menutab } from "./menu.js";
import { abouttab } from "./about.js";




console.log("hello world1");


document.getElementById("homeButton").addEventListener("click", initialpageload);

document.getElementById("menuButton").addEventListener("click", menutab);

document.getElementById("aboutButton").addEventListener("click", abouttab);

// Load the initial page content (Home) when the page loads
initialpageload();

