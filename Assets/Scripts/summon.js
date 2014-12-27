#pragma strict

var id : int;
var prefab : GameObject;
var amount :int=1;

function SummonMonster () {
	if(GameObject.Find("Energy").GetComponent(Energy).SpendEnergy(amount)) {
		Instantiate(prefab, GameObject.Find("MySpawnPoint").transform.position,Quaternion.identity);
	}
}