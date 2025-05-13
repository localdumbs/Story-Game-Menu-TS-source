//-[Imports!]-\\
import { Players, RunService, Workspace, UserInputService, ReplicatedStorage } from "@rbxts/services";

print("started Menu camera!-");
//-[Vars]-\\
const player = Players.LocalPlayer;
const camera = Workspace.CurrentCamera!;
const uhh = Workspace;
const camPart = Workspace.WaitForChild("CameraPart") as BasePart;
const ChosenLevel = script.FindFirstChildOfClass("ObjectValue");
const Maps = ChosenLevel?.Value;
let CurrentMenu = ChosenLevel?.Value;
//const randoms = ran
//Character can camera stuff
camera.CameraType = Enum.CameraType.Scriptable;
// load the character, so shit don't break lmao! x3
const character = player.Character || player.CharacterAdded.Wait()[0];
import transition = require("shared/Menu-UI");
//const fakemap = Maps?.Clone();
if (Maps && Maps.IsA("Folder")) {
	const fakemap = Maps.Clone();
	fakemap.Parent = uhh;
	CurrentMenu = fakemap;
	print(fakemap);
} else {
	warn("ChosenLevel.Value is not set or is not valid.");
}
task.wait(1);
transition.evadetransition();
const maxTilt = 15;

RunService.RenderStepped.Connect(() => {
	// Runs everyframe to rotate the camera in the dirc of the mouse kinda shit but I dont care! x3
	const viewportSize = camera.ViewportSize;
	const mouseLocation = UserInputService.GetMouseLocation();

	const relativeX = (mouseLocation.X - viewportSize.X / 2) / viewportSize.X;
	const relativeY = (mouseLocation.Y - viewportSize.Y / 2) / viewportSize.Y;

	const tiltX = math.rad(relativeY * -maxTilt);
	const tiltY = math.rad(relativeX * -maxTilt);

	camera.CFrame = camPart.CFrame.mul(CFrame.Angles(tiltX, tiltY, 0));
	// this doesn't work and I have no idea why, probably gonna move this to a module! x3
	ChosenLevel?.GetPropertyChangedSignal("Value").Connect(() => {
		if (Maps && Maps.IsA("Folder")) {
			CurrentMenu?.Destroy();
			const fakemap = Maps.Clone();
			fakemap.Parent = uhh;
			CurrentMenu = fakemap;
			print(fakemap);
		} else {
			warn("ChosenLevel.Value is not set or is not valid.");
		}
	});
});
