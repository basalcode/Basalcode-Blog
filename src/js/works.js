window.onload = async function() {
    var pElementList = document.querySelectorAll("p");
    var textList = [];
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi, vitae, dolor ut aliquam doloremque officia quisquam totam odit harum illum. Error aut itaque quos? Reiciendis aliquam esse ratione at.");
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi, vitae, dolor ut aliquam doloremque officia quisquam totam odit harum illum. Error aut itaque quos? Reiciendis aliquam esse ratione at.");
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi, vitae, dolor ut aliquam doloremque officia quisquam totam odit harum illum. Error aut itaque quos? Reiciendis aliquam esse ratione at.");
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi, vitae, dolor ut aliquam doloremque officia quisquam totam odit harum illum. Error aut itaque quos? Reiciendis aliquam esse ratione at.");
    
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