
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	// Code to run on the loading screen.
	// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
// 	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(score)
{
	// Code to run every tick
	console.log("run post message", score);
	window.parent.postMessage(score, "*")
}



const scriptsInEvents = {

	async EventGameplay_Event32_Act2(runtime, localVars)
	{
		Tick(runtime.globalVars.var_score)
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

