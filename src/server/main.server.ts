import { CollectionService } from "@rbxts/services";

for (const obj of CollectionService.GetTagged("InvisWall")) {
	if (obj.IsA("BasePart")) {
		obj.Transparency = 1;
		obj.Locked = true;
	}
}
