function getAdv(){

    var startup = document.getElementById("startup").value;
	var faf = document.getElementById("faf").value;
	var damage = document.getElementById("damage").value;
	var air = document.getElementById("air").value;
	var type = document.getElementById("type").value;

    if (((startup<=0)&&(air==0))||(faf<=0)||(damage<=0)){
    	alert("Invalid values entered - positive values needed");
        return;
    }
	
	var recovery;
	
	if (air==0) recovery = faf - startup;
    else recovery = faf;
	
	var stun;
	if (type==0) stun = (damage/1.75)+2;
	else stun = (damage/3.5)+2;
	var stunRounded = Math.floor(stun);
	var advantage = stunRounded - recovery;

	var msg1 = "Shield stun frames: ";
	var msg2 = "Advantage: ";
	var element = document.getElementById("results");
	element.innerHTML = stunRounded;
	
	element = document.getElementById("results2");
	element.innerHTML = advantage;

}