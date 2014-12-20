#pragma strict

var speed : float = 8.0f;

function Update(){
	rigidbody2D.velocity = new Vector2(speed, rigidbody2D.velocity.y);
}

function OnCollisionEnter2D (coll:Collision2D){
	if(coll.collider.tag == "EnemyTower"){
		coll.collider.GetComponent(Tower).hp -=1;
		Destroy(gameObject);
	}
}