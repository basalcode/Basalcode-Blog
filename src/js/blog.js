window.onload = async function() {
    var pElementList = document.querySelectorAll("p");
    var textList = [];
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa ipsam pariatur at quo aliquam maxime maiores distinctio, sit officia voluptatum minima accusamus corrupti temporibus in veritatis, laboriosam possimus eius ex mollitia amet! Odit enim hic, illo esse nobis temporibus eum amet ratione alias, quia laborum suscipit aut eligendi sapiente.");
    textList.push("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fugiat omnis, nobis, iusto ducimus officia ex impedit nemo provident veritatis dolores. Facere, reprehenderit vero doloremque sit tenetur facilis fuga ullam voluptatibus ratione dolor commodi enim ipsum, magni natus? Cupiditate quibusdam numquam, sit dicta adipisci dolorem! Quia molestiae dignissimos officia distinctio.");
    textList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores commodi, itaque maxime quas sed quo illum hic sequi vitae consequuntur ipsa odio dolorem iure quasi totam. Quos minus, aperiam nemo placeat tempora culpa commodi iste, provident velit voluptate accusantium sunt asperiores ex. Exercitationem aliquid modi ab reiciendis quisquam ut.");

    // Iterate every <p> element.
    for (var i = 0; i < pElementList.length; i++) {
        var text = textList.shift(); 
        var pTextField = document.createTextNode('');
        pElementList[i].appendChild(pTextField);
        var target = pElementList[i].firstChild;
        
        wirteOnElement(target);
    }

    // Take charge of animation for target element.
    async function wirteOnElement(target) {
        // Iterate every word to write on the target, <p>.
        for (var j = 0; j < text.length; j++) {
            if (text[j] ===' ' && Math.random() * 5 < 1) {
                var waitOnSpace = Math.random() * 500 + 500;
                await writeText(target, text[j], waitOnSpace);
            }
            else {
                await writeText(target, text[j], 50);
            }
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