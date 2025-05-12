import { TweenService, StarterGui } from "@rbxts/services";

function evadetransition() {
	// Disable the CoreGui
	StarterGui.SetCoreGuiEnabled(Enum.CoreGuiType.All, false);

	// Reference the transition frame from the PlayerGui
	const player = game.GetService("Players").LocalPlayer!;
	const guiFrame = player.WaitForChild("PlayerGui").WaitForChild("transition").WaitForChild("Frame") as Frame;

	// Set initial position
	guiFrame.Position = new UDim2(0.875, 0, -2.004, 0);

	// Create TweenInfo
	const tweenInfo = new TweenInfo(0.7, Enum.EasingStyle.Linear);

	// Goal state
	const goal1 = {
		Position: new UDim2(-1.926, 0, 0.463, 0),
	};

	// Create the tween
	const tween1 = TweenService.Create(guiFrame, tweenInfo, goal1);

	// Handle tween completion
	tween1.Completed.Connect(() => {
		guiFrame.Position = new UDim2(0.875, 0, -2.004, 0);
		StarterGui.SetCoreGuiEnabled(Enum.CoreGuiType.All, true);
	});

	// Play the tween
	tween1.Play();
	print("AHH!");
}

export { evadetransition };
