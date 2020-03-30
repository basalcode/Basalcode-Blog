window.onload = function() {
    rainbowColorAnchor();
    textboxDropAnimation();
    textWritingAnimation();
}

function rainbowColorAnchor() {
    var aElement = document.querySelectorAll('a');
    for (var i = 0 ; i < aElement.length; i++) {
        aElement[i].addEventListener('mouseover', function(event) {
        
        });
        aElement[i].addEventListener('mouseout', function(event) {

        });
    }
        
}

// Conduct dropping textbox animation in sequence.
function textboxDropAnimation() {
    var pElement = document.querySelectorAll('article');
    var i = 0;
    var interval = window.setInterval(function() {
        if (i < pElement.length) {
            pElement[i].style.filter = 'opacity(100%)';
            pElement[i].style.top = 0 + 'px';
        } else {
            clearInterval(interval);
        }
        i++;
    }, 800);
}

// Conduct textWriting animation with caret which general text editor has.
function textWritingAnimation() {
    var textField = document.querySelectorAll(".text-field");
    var caretField = document.querySelectorAll(".caret");
    var textList = callTextList();

    // Traverse every <p> element.
    for (var i = 0; i < textField.length; i++) {
        // About writing animation.
        textField[i].appendChild(document.createTextNode(''));
        var writePos = textField[i].firstChild;
        wirteOnElement(writePos, textList.shift());

        // About caret animation.            
        caretField[i].appendChild(document.createTextNode(''));
        var caretPos = caretField[i].firstChild;
        caretOn(caretPos);
    }

    // Conduct a caret animation
    function caretOn(caretPos) {
        return new Promise(function(resolve) {
            window.setInterval(function() {
                if (caretPos.length === 0) {
                    caretPos.appendData('_');
                } else {
                    caretPos.deleteData(0, 1);
                }
                resolve();
            }, 500);
        });
    }

    // Conduct a writing animation
    async function wirteOnElement(writePos, text) {
        // Iterate every word in textList to write on <p> element.
        for (var i = 0; i < text.length; i++) {
            if (text[i] ===' ' && Math.random() * 5 < 1) {
                var waitOnSpace = Math.random() * 500 + 500;
                await writeText(writePos, text[i], waitOnSpace);
            }
            else {
                await writeText(writePos, text[i], 40);
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


function brightnessHandler(button) {
    var brightnessObj = {
        setColor : function(color) {
            document.querySelector('body').style.color = color;
            var linkList = document.querySelectorAll('a');
            for (var i = 0; i < linkList.length; i++) {
                linkList[i].style.color = color;
            }
        },
        setBackgroundColor : function(color) {
            document.querySelector('body').style.backgroundColor = color;
        }
    }

    if (button.value === "Dark Mode") {
        brightnessObj.setColor('white');
        brightnessObj.setBackgroundColor('black');
        button.value = "Bright Mode";
    } else {
        brightnessObj.setColor('black');
        brightnessObj.setBackgroundColor('white');
        button.value = "Dark Mode";
    }
}