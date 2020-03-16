window.onload = function() {
    var paragraphList = document.querySelectorAll("p");
    var articleList = [];
    articleList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem temporibus repellat magni vel possimus!");
    articleList.push("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, sapiente libero! At et non quibusdam.");
    articleList.push("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium alias cupiditate vel, et praesentium.");

    for (var i = 0; i < paragraphList.length; i++) {
        var textNode = document.createTextNode('');
        writeArticle(articleList.shift(), paragraphList[i].appendChild(textNode));
    }
}

function writeArticle(text, target) {
    for (var i = 0; i < text.length; i++) {
        target.appendData(text[i]);
    }
}