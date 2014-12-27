#pragma strict

var speed : float = 8.0f;
var atk: int = 1.0;

function Update(){
	rigidbody2D.velocity = new Vector2(speed, 0);
}

function OnTriggerEnter2D (other : Collider2D){
	if(other.tag == "EnemyTower"){
		other.GetComponent(EnemyTower).LostHp(atk);
		Destroy(gameObject);
	}
}