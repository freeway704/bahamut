#pragma strict

import UnityEngine.UI;

var hp : int = 100;

function Update () {
	GameObject.Find("EnemyHP").GetComponent(Text).text = hp.ToString();
}