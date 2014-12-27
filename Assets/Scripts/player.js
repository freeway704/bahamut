#pragma strict
var isJumping : boolean = false;
var speed : float = 5.0f;
var jumpForce : float = 800.0f;

function Start () {

}

function Update () {
	rigidbody2D.velocity = new Vector2(speed, rigidbody2D.velocity.y);
	if(Input.GetButtonDown("Jump") && isJumping == false){
		rigidbody2D.AddForce(new Vector2(0,jumpForce));
	}
}

function OnTriggerEnter2D (other : Collider2D) {
	if(other.tag == "Ground") {
		isJumping = false;
	}
	else if(other.tag == "Deadpit")
	{
		transform.position = GameObject.Find("SpawnPoint").transform.position;
	}
}

function OnTriggerExit2D (other : Collider2D) {
	if(other.tag == "Ground") {
		isJumping = true;
	}
}