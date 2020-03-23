window.onload = function() {
    var textField = document.querySelectorAll(".text-field");
    var caretField = document.querySelectorAll(".caret");
    var textList = [];
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem temporibus repellat magni vel possimus!");
    textList.push("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, sapiente libero! At et non quibusdam.");
    textList.push("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium alias cupiditate vel, et praesentium.");
    
    var writeOn = true;
    for (var i = 0; i < textField.length; i++) {
        // About caret animation.            
        caretField[i].appendChild(document.createTextNode(''));
        var caretPos = caretField[i].firstChild;
        startCaret(caretPos);

        // About writing animation.
        textField[i].appendChild(document.createTextNode(''));
        var writePos = textField[i].firstChild;
        wirteOnElement(writePos, textList.shift());
    }
    writeOn = false;

    async function startCaret(caretPos) {
        if (caretPos.length === 0) {
            await writeCaret(caretPos).then(startCaret(caretPos));
        } else {
            await deleteCaret(caretPos).then(startCaret(caretPos));
        }
    }

    function writeCaret(caretPos) {
        return new Promise(function(resolve) {
            window.setTimeout(function() {
                caretPos.appendData('_');
                resolve();
            }, 500);
        });
    }

    function deleteCaret(caretPos) {
        return new Promise(function(resolve) {
            window.setTimeout(function() {
                caretPos.deleteData(0, 1);
                resolve();
            }, 500);
        });
    }

    // Take charge of animation for target element.
    async function wirteOnElement(writePos, text) {
        // Iterate every word to write on the target, <p>.
        for (var i = 0; i < text.length; i++) {
            if (text[i] ===' ' && Math.random() * 5 < 1) {
                var waitOnSpace = Math.random() * 500 + 500;
                await writeText(writePos, text[i], waitOnSpace);
            }
            else {
                await writeText(writePos, text[i], 50);
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