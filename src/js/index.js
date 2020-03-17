window.onload = function() {
    var pElementList = document.querySelectorAll("p");
    var textList = [];
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem temporibus repellat magni vel possimus!");
    textList.push("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, sapiente libero! At et non quibusdam.");
    textList.push("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium alias cupiditate vel, et praesentium.");

    for (var i = 0; i < pElementList.length; i++) {
        var textNode = document.createTextNode('');
        writeText(textList.shift(), pElementList[i].appendChild(textNode));
    }
}

var indexNumber = 0;
function writeText(text, target) {
    setInterval(typeOneLetter(text, target, indexNumber), 200);
}

function typeOneLetter(text, target, index) {
    console.log("text");
    target.appendData(text[index]);
    indexNumber++;
}