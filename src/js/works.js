window.onload = function() {
    var paragraphList = document.querySelectorAll("p");
    var articleList = [];
    articleList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi, vitae, dolor ut aliquam doloremque officia quisquam totam odit harum illum. Error aut itaque quos? Reiciendis aliquam esse ratione at.");
    articleList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi, vitae, dolor ut aliquam doloremque officia quisquam totam odit harum illum. Error aut itaque quos? Reiciendis aliquam esse ratione at.");
    articleList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi, vitae, dolor ut aliquam doloremque officia quisquam totam odit harum illum. Error aut itaque quos? Reiciendis aliquam esse ratione at.");
    articleList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste modi, vitae, dolor ut aliquam doloremque officia quisquam totam odit harum illum. Error aut itaque quos? Reiciendis aliquam esse ratione at.");
    
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