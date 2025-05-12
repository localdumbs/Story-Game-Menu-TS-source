import { Players, RunService, Workspace, UserInputService, ReplicatedStorage } from "@rbxts/services";

const player = Players.LocalPlayer;
const camera = Workspace.CurrentCamera!;
const uhh = Workspace;
const camPart = Workspace.WaitForChild("CameraPart") as BasePart;
const ChosenLevel = script.FindFirstChildOfClass("ObjectValue");
const Maps = ChosenLevel?.Value;
//const randoms = ran
camera.CameraType = Enum.CameraType.Scriptable;

const character = player.Character || player.CharacterAdded.Wait()[0];
import transition = require("shared/Menu-UI");
//const fakemap = Maps?.Clone();
if (Maps && Maps.IsA("Folder")) {
	const fakemap = Maps.Clone();
	fakemap.Parent = uhh;
	print(fakemap);
} else {
	warn("ChosenLevel.Value is not set or not a Model.");
}
task.wait(1);
transition.evadetransition();
const maxTilt = 15;

RunService.RenderStepped.Connect(() => {
	const viewportSize = camera.ViewportSize;
	const mouseLocation = UserInputService.GetMouseLocation();

	const relativeX = (mouseLocation.X - viewportSize.X / 2) / viewportSize.X;
	const relativeY = (mouseLocation.Y - viewportSize.Y / 2) / viewportSize.Y;

	const tiltX = math.rad(relativeY * -maxTilt);
	const tiltY = math.rad(relativeX * -maxTilt);

	camera.CFrame = camPart.CFrame.mul(CFrame.Angles(tiltX, tiltY, 0));
});
