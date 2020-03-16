window.onload = function() {
    var paragraphList = document.querySelectorAll("p");
    var articleList = [];
    articleList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ipsa ipsam pariatur at quo aliquam maxime maiores distinctio, sit officia voluptatum minima accusamus corrupti temporibus in veritatis, laboriosam possimus eius ex mollitia amet! Odit enim hic, illo esse nobis temporibus eum amet ratione alias, quia laborum suscipit aut eligendi sapiente.");
    articleList.push("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic fugiat omnis, nobis, iusto ducimus officia ex impedit nemo provident veritatis dolores. Facere, reprehenderit vero doloremque sit tenetur facilis fuga ullam voluptatibus ratione dolor commodi enim ipsum, magni natus? Cupiditate quibusdam numquam, sit dicta adipisci dolorem! Quia molestiae dignissimos officia distinctio.");
    articleList.push("Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam asperiores commodi, itaque maxime quas sed quo illum hic sequi vitae consequuntur ipsa odio dolorem iure quasi totam. Quos minus, aperiam nemo placeat tempora culpa commodi iste, provident velit voluptate accusantium sunt asperiores ex. Exercitationem aliquid modi ab reiciendis quisquam ut.");

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