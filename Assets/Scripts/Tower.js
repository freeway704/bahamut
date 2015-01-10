#pragma strict
/*
var hp_ui:GameObject;

function LostHp (amount : int) {
	hp_ui.SendMessage("UI_LostHP",amount);
}
*/
var hp : int = 500;

function Damage (atk : int){
	hp-=atk;
}
function Update(){
	if(hp<=0) Destroy(gameObject);
}