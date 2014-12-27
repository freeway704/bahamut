#pragma strict
var hp_ui:GameObject;

function LostHp (amount : int) {
	hp_ui.SendMessage("UI_LostHP",amount);
}