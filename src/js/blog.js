window.onload = async function() {
    var textField = document.querySelectorAll(".text-field");
    var caretField = document.querySelectorAll(".caret");
    var textList = [];
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa ipsam pariatur at quo aliquam maxime maiores distinctio, sit officia voluptatum minima accusamus corrupti temporibus in veritatis, laboriosam possimus eius ex mollitia amet! Odit enim hic, illo esse nobis temporibus eum amet ratione alias, quia laborum suscipit aut eligendi sapiente.");
    textList.push("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fugiat omnis, nobis, iusto ducimus officia ex impedit nemo provident veritatis dolores. Facere, reprehenderit vero doloremque sit tenetur facilis fuga ullam voluptatibus ratione dolor commodi enim ipsum, magni natus? Cupiditate quibusdam numquam, sit dicta adipisci dolorem! Quia molestiae dignissimos officia distinctio.");
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores commodi, itaque maxime quas sed quo illum hic sequi vitae consequuntur ipsa odio dolorem iure quasi totam. Quos minus, aperiam nemo placeat tempora culpa commodi iste, provident velit voluptate accusantium sunt asperiores ex. Exercitationem aliquid modi ab reiciendis quisquam ut.");

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