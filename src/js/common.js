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

function brightnessHandler(button) {
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