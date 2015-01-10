#pragma strict

var nowHP : float;
var maxHP : float;
var scaleX : float;

function Start () {
	nowHP = GetComponentInParent(Monster).hp;
	maxHP = nowHP;
}

function Update () {
	nowHP = GetComponentInParent(Monster).hp;
	var rate : float = nowHP / maxHP;
	if(rate < 0.3){
		GetComponent(SpriteRenderer).color = Color.red;
	}
	else if(rate < 0.5){
		GetComponent(SpriteRenderer).color = Color.yellow;
	}
	else{
		GetComponent(SpriteRenderer).color = Color.green;
	}
	transform.localScale.x = scaleX*rate;
}