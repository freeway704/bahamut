#pragma strict

var target : Transform;
var leftoffset: float = 19.0f;
var distance = -10;
var damping = 10;
var lockRotation : boolean = true;

function Update () {
	var wantedPosition = target.TransformPoint(leftoffset, 0, -distance);
	transform.position = Vector3.Lerp (transform.position, new Vector3(wantedPosition.x, 0, transform.position.z), Time.deltaTime * damping);

	transform.LookAt (target, target.up);
	
	if(lockRotation) {
		transform.localRotation = Quaternion.identity;
	}
}