#pragma strict

var id : int;
var prefab : GameObject;

function SummonMonster () {
	Instantiate(prefab, GameObject.Find("MySpawnPoint").transform.position,Quaternion.identity);
}