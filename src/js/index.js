window.onload = function() {
    function writeText() {
        var textFiled = document.querySelectorAll(".txet-filed");
        var textList = [];
        textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem temporibus repellat magni vel possimus!");
        textList.push("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, sapiente libero! At et non quibusdam.");
        textList.push("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium alias cupiditate vel, et praesentium.");

        for (var i = 0; i < textFiled.length; i++) {
            // About writing animation.
            var text = textList.shift();
            var pTextField = document.createTextNode('');
            textFiled[i].appendChild(pTextField);
            var writePos = textFiled[i].firstChild;    
    
            wirteOnElement(writePos, text);
        }

        // Take charge of animation for target element.
        async function wirteOnElement(writePos, text) {
            // Iterate every word to write on the target, <p>.
            for (var j = 0; j < text.length; j++) {
                if (text[j] ===' ' && Math.random() * 5 < 1) {
                    var waitOnSpace = Math.random() * 500 + 500;
                    await writeText(writePos, text[j], waitOnSpace);
                }
                else {
                    await writeText(writePos, text[j], 50);
                }
            }
        }

        // Actual writing function with an interval.
        function writeText(writePos, text, ms) {
            return new Promise(function(resolve) {
                window.setTimeout(function() {
                    writePos.appendData(text);
                    resolve();
                }, ms); 
            });
        }
    }
    

    
    // for (var i = 0; i < pElementList.length; i++) {
    //     // About caret animation.
    //     var newNode = document.createTextNode('');
    //     pElementList[i].appendChild(newNode);
    //     var caretPos = pElementList[i].lastChild;

    //     // About writing animation.
    //     var text = textList.shift();
    //     var pTextField = document.createTextNode('');
    //     pElementList[i].appendChild(pTextField);
    //     var writePos = pElementList[i].firstChild;    

    //     wirteOnElement(writePos, text);
    //     wirteCaret(caretPos);
    // }

   

    // async function wirteCaret(caretPos) {
    //     caretPos.appendData('_');
    //     while (true) {
    //         await startCaret(caretPos);
    //     }
    // }

    

    // function startCaret(caretPos) {
    //     return new Promise(function(resolve) {
    //         window.setTimeout(function() {
    //             if (caretPos[0] == '_') {
    //                 console.log(caretPos[0]);
    //                 caretPos.deleteData(0, 1);
    //             } else {
    //                 console.log(caretPos[0]);
    //                 caretPos.appendData('_');
    //             }
    //             resolve();
    //         }, 500);
    //     });
    // }
}

