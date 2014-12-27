#pragma strict

function Start () {

}

function LostHp (amount : int) {
	GameObject.Find("EnemyTowerHp").SendMessage("UI_LostHP",amount);
}