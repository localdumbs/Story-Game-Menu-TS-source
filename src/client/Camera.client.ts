import { Players, RunService, Workspace, UserInputService } from "@rbxts/services";

const player = Players.LocalPlayer;
const camera = Workspace.CurrentCamera!;
const camPart = Workspace.WaitForChild("CameraPart") as BasePart;

camera.CameraType = Enum.CameraType.Scriptable;

const character = player.Character || player.CharacterAdded.Wait()[0];

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
