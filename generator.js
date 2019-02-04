const PI = 3.14159;

function startGenerator() {
    generateBody();
    generateAge();
    generateHair();
	generatefujinum();
	generateStaytime();
    generateEyes();
    generateAttribute();
    generateCharacter();
   // generateCup();
   //generateHairData();
    generateSuperPower();
    generateSkin();
}


function generateBody() {
    var height = normalDistribution(3, 3);
    height = Math.round(height);
    var text1 = document.getElementById("height");
    text1.innerHTML=height;
}
