#pragma strict

var enemySpawnPoint : GameObject;
var prefab : GameObject [];

function Start () {
	SpawnMonster (0, 3, 5, 0.3);
	yield WaitForSeconds(10);
	SpawnMonster (0, 3, 10, 0.3);
}

function SpawnMonster (startIndex : int, endIndex : int, amt : int, wait : float) {
	for(var i=0;i<amt;i++){
		Instantiate(prefab[Random.Range(startIndex,endIndex)],enemySpawnPoint.transform.position,Quaternion.identity);
		yield WaitForSeconds(wait);
	}
}