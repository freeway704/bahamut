#pragma strict

var nowEnergy : int = 100;
var maxEnergy : int = 100;

function Update () {
	GetComponent(Text).text = nowEnergy.ToString();
}

function AddEnergy (amount : int) {
	if (nowEnergy + amount < maxEnergy){
		nowEnergy += amount;
		return true;
	}
	else{
		nowEnergy = maxEnergy;
		return false;
	}
}

function SpendEnergy (amount : int){
	if (nowEnergy - amount >= 0){
		nowEnergy -= amount;
		return true;
		
	}
	else{
		Debug.Log("not enough energy!");
		return false;
	}
}