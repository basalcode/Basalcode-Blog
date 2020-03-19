window.onload = async function() {
    var pElementList = document.querySelectorAll("p");
    var textList = [];
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem temporibus repellat magni vel possimus!");
    textList.push("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, sapiente libero! At et non quibusdam.");
    textList.push("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium alias cupiditate vel, et praesentium.");

    // Iterate every <p> element.
    for (var i = 0; i < pElementList.length; i++) {
        var text = textList.shift(); 
        var pTextField = document.createTextNode('');
        pElementList[i].appendChild(pTextField);
        var target = pElementList[i].firstChild;
        
        // Iterate every word to write on the target, <p>.
        for (var j = 0; j < text.length; j++) {
            await writeText(target, text[j], 50);
        }
    }

    // Actual writing function with an interval.
    function writeText(target, text, ms) {
        return new Promise(function(resolve) {
            window.setTimeout(function() {
                target.appendData(text);
                resolve();
            }, ms);
        });
    }
}

