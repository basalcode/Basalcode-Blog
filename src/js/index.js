window.onload = function() {
    var pElementList = document.querySelectorAll("p");
    var textList = [];
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem temporibus repellat magni vel possimus!");
    textList.push("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, sapiente libero! At et non quibusdam.");
    textList.push("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium alias cupiditate vel, et praesentium.");

    for (var i = 0; i < pElementList.length; i++) {
        var text = textList.shift(); 
        var pTextField = document.createTextNode('');
        pElementList[i].appendChild(pTextField);
        var target = pElementList[i].firstChild;
        
        for (var j = 0; j < text.length; j++) {
            window.setTimeout(
                writeText(target, text[j]),
                10000
            );
        }
    }

    for (var i = 0; i < pElementList.length; i++) {
        var textNode = document.createTextNode('');
        writeText(textList.shift(), pElementList[i].appendChild(textNode));
    }
}

function writeText(target, text) {
    target.appendData(text);
}