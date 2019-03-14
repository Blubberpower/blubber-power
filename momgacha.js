//horribly made by Blubba


//audio function for the kotori sound button
function play(){
    var audio = document.getElementById("audio");
    audio.volume = 0.05;
    audio.play();
              }




//some janky code i found on w3schools that outputs console.log() into html somehow dunno how to clear() it
// (function () {
//     var old = console.log;
//     var logger = document.getElementById('log');
//     console.log = function () {
//       for (var i = 0; i < arguments.length; i++) {
//         if (typeof arguments[i] == 'object') {
//             logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
//         } else {
//             logger.innerHTML += arguments[i] + '<br />';
//         }
//       }
//     }
// })();

var museMode = 0;
var srTicket = 0;
var DrollSum = document.getElementById("DrollSum");
var srTicketButton = document.getElementById("srTicketButton")
var rollicons = document.getElementById("rollicons")

var DsUR = document.getElementById("DsUR");
var DcUR = document.getElementById("DcUR");
var DpUR = document.getElementById("DpUR");
var DtUR = document.getElementById("DtUR");
var DUR = document.getElementById("DUR");

var rollSR = document.getElementById("rollSR");
var DsSR = document.getElementById("DsSR");
var DcSR = document.getElementById("DcSR");
var DpSR = document.getElementById("DpSR");
var DtSR = document.getElementById("DtSR");
var DSR = document.getElementById("DSR");



var rollR = document.getElementById("rollR");
var DsR = document.getElementById("DsR");
var DcR = document.getElementById("DcR");
var DpR = document.getElementById("DpR");
var DtR = document.getElementById("DtR");
var DR = document.getElementById("DR");


var sUR = 0;
var cUR = 0;
var pUR = 0;
var tUR = 0;

var sSR = 0;
var cSR = 0;
var pSR = 0;
var tSR = 0;


var sR = 0;
var cR = 0;
var pR = 0;
var tR = 0;


var UR = 0;
var SR = 0;
var R = 0;


//aqours and mode switch toggle
function check() {
    if (document.getElementById("switch").checked == true) {
    museMode = 1;
    }
    else {
    museMode = 0;
    }
  }

//SR Ticket mode switch toggle
function srTicketCheck() {
    if (srTicket===1) {
    srTicket = 0;
    srTicketButton.classList.remove("myButtonToggle")
    }
    else {
    srTicketButton.classList.add("myButtonToggle")
    srTicket = 1;
    }
  }


//rollUR.textContent = ("URs: " + "Smile:" + sUR + " Cool:" + cUR + " Pure:" + pUR + " Tricolor:" + tUR + " Total:" + UR);
//rollSR.textContent = ("SRs: " + "Smile:" + sUR + " Cool:" + cUR + " Pure:" + pUR + " Tricolor:" + tUR + " Total:" + SR);
//rollR.textContent = ("Rs: " + "Smile:" + sR + " Cool:" + cR + " Pure:" + pR + " Tricolor:" + tR + " Total:" + R);



function simulateRollDebug() {
var attribute = ['Smile', 'Cool', 'Pure', 'Tricolor'];
var attributepull = attribute[Math.floor(attribute.length * Math.random())];
var URrate;
var SRrate;
var platinumEffect;

if (srTicket === 0) {      
platinumEffect = ' ';  
URrate = 0.1; //10%
SRrate = 0.3; //30%
}
else { 
platinumEffect = ' class=platinumEffect ';  
URrate = 0.05; //5%
SRrate = 1; //100% of (80%)
}

    var d = Math.random();  
    console.log(Math.random());
    
    
    //if you hit the 10% or if you use an SR+ Ticket to hit 20%
    if (d < URrate) {
        Rarity = "UR";
        rollMessage = "Congrats you rolled a ";
        if (attributepull === 'Smile') {
            sUR++
            DsUR.textContent = sUR;
            if (museMode === 0) {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="sUR.png" style="width: 90px; height: 90px; padding: 2px; margin-top: 1px;">';
        }   else {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="sUR2.png" style="width: 90px; height: 90px; padding: 2px; margin-top: 1px;">';
        }
        } 
        else if (attributepull === 'Cool') { 
            cUR++
            DcUR.textContent = cUR;
            if (museMode === 0) {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="cUR.png" style="width: 90px; height: 90px; padding: 2px; margin-top: 1px;">';
        }   else {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="cUR2.png" style="width: 90px; height: 90px; padding: 2px; margin-top: 1px;">';
        }
        }
        else if (attributepull === 'Pure') { 
            pUR++
            DpUR.textContent = pUR;
            if (museMode === 0) {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="pUR.png" style="width: 90px; height: 90px; padding: 2px; margin-top: 1px;">';
        }   else {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="pUR2.png" style="width: 90px; height: 90px; padding: 2px; margin-top: 1px;">';
        }
        }
        else if (attributepull === 'Tricolor') { 
            tUR++
            DtUR.textContent = tUR;
            if (museMode === 0) {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="tUR.png" style="width: 90px; height: 90px; padding: 2px; margin-top: 1px;">';
        }   else {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="tUR2.png" style="width: 90px; height: 90px; padding: 2px; margin-top: 1px;">';
        }
        }

        UR++;
        DUR.textContent = UR;
        //rollUR.textContent = ("URs: " + "Smile:" + sUR + " Cool:" + cUR + " Pure:" + pUR + " Tricolor:" + tUR + " Total:" + UR);
    }

    //if you hit the 30% or if you use an SR+ Ticket to hit 80%
    else if (d < SRrate) {
        Rarity = "SR";
        rollMessage = "Nice you rolled a ";
        if (attributepull === 'Smile') {
            sSR++
            DsSR.textContent = sSR;
            if (museMode === 0) {                                            
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="sSR.png" style="width: 85px; height: 85px; padding: 2px; padding-top: 7px; margin-top: 1px;padding-right:5px">';
        }   else {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="sSR2.png" style="width: 85px; height: 85px; padding: 2px; padding-top: 7px; margin-top: 1px;padding-right:5px">';
        }    
        } 
        else if (attributepull === 'Cool') { 
            cSR++
            DcSR.textContent = cSR;
            if (museMode === 0) {                                        
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="cSR.png" style="width: 85px; height: 85px; padding: 2px; padding-top: 7px; margin-top: 1px;padding-right:5px">';
        }   else {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="cSR2.png" style="width: 85px; height: 85px; padding: 2px; padding-top: 7px; margin-top: 1px;padding-right:5px">';
        }    
        }
        else if (attributepull === 'Pure') { 
            pSR++
            DpSR.textContent = pSR;
            if (museMode === 0) {        
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="pSR.png" style="width: 85px; height: 85px; padding: 2px; padding-top: 7px; margin-top: 1px;padding-right:5px">';
        }   else {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="pSR2.png" style="width: 85px; height: 85px; padding: 2px; padding-top: 7px; margin-top: 1px;padding-right:5px">';
        }    
        }
        else if (attributepull === 'Tricolor') { 
            tSR++
            DtSR.textContent = tSR;
            if (museMode === 0) {        
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="tSR.png" style="width: 85px; height: 85px; padding: 2px; padding-top: 7px; margin-top: 1px;padding-right:5px">';
        }   else {
            document.querySelector("container").innerHTML += '<img' + platinumEffect + 'src="tSR2.png" style="width: 85px; height: 85px; padding: 2px; padding-top: 7px; margin-top: 1px;padding-right:5px">';
        }
        }

        SR++;
        DSR.textContent = SR;
        //rollSR.textContent = ("SRs: " + "Smile:" + sSR + " Cool:" + cSR + " Pure:" + pSR + " Tricolor:" + tSR + " Total:" + SR);
    }

    //if you hit the 60%
    else {
        Rarity = "R";
        rollMessage = "Sorry you rolled a ";
        if (attributepull === 'Smile') {
            sR++
            DsR.textContent = sR;
            document.querySelector("container").innerHTML += '<img src="sR.png" style="width: 80px; height: 80px; padding: 2px; padding-top: 12px; margin-top: 1px;padding-right:10px">';

        } 
        else if (attributepull === 'Cool') { 
            cR++
            DcR.textContent = cR;
            document.querySelector("container").innerHTML += '<img src="cR.png" style="width: 80px; height: 80px; padding: 2px; padding-top: 12px; margin-top: 1px;padding-right:10px">';

        }
        else if (attributepull === 'Pure') { 
            pR++
            DpR.textContent = pR;
            document.querySelector("container").innerHTML += '<img src="pR.png" style="width: 80px; height: 80px; padding: 2px; padding-top: 12px; margin-top: 1px;padding-right:10px">';
  
        }
        else if (attributepull === 'Tricolor') { 
            tR++
            DtR.textContent = tR;
            document.querySelector("container").innerHTML += '<img src="tR.png" style="width: 80px; height: 80px; padding: 2px; padding-top: 12px; margin-top: 1px;padding-right:10px">';
        }

        R++;
        DR.textContent = R;
       //rollR.textContent = ("Rs: " + "Smile:" + sR + " Cool:" + cR + " Pure:" + pR + " Tricolor:" + tR + " Total:" + R);

    }

    console.log(rollMessage + attributepull + " " + Rarity + "!");
    rollSum = (UR + SR + R);
    DrollSum.textContent = rollSum



}




	function simulateRollAmount() {
	var input = prompt("Would you like to do a single roll or a 10 Roll? 1-200")
	if (input <= 200 && input > 0) {
	for (i = 0; i < input; i++) {
	simulateRollDebug();
	}
    } 
    else if (input.toUpperCase() === "URFAT") {
		alert("NO URFAT");
	}
    }






function simulateRollSingle() {
simulateRollDebug();
}






function srTicketRoll() {

}