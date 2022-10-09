var over1=document.querySelectorAll('.item1-list>ul>li');
var hidden1=document.querySelectorAll('.item1-list>ul .hidden');
//鼠标移入移出
for (let index = 0; index < over1.length; index++) {
    over1[index].onmouseover=function(){
        hidden1[index].style.display='block';
    }
    over1[index].onmouseout=function(){
        hidden1[index].style.display='none';
    }
}

//.main-item2鼠标移入移出
var item2_li=document.querySelectorAll('.main-item2>ul>li');
var divImg=document.querySelectorAll('.main-item2 .divImg img');
var hiddenImg=document.querySelectorAll('.main-item2 .hiddenImg img');
var hiddenDiv=document.querySelectorAll('.main-item2 .hiddenImg');
var name1=document.querySelectorAll('.main-item2 .name');
for (let index = 0; index < divImg.length; index++) {
    hiddenImg[index].onmouseover=function(){
        for (let i = 0; i < divImg.length; i++) {
            divImg[i].style='display:none;';
            hiddenImg[i].style='display:block;';
            name1[i].style='background-color: ;';
        }
        divImg[index].style='display:block;opacity: 0.8;';
        name1[index].style='background-color: #cb4647;opacity: 0.8;display:block';
    }
    // hiddenImg[index].onmouseout=function(){
    //     hiddenImg[index].style.display='none';
    // }
    divImg[index].onmouseover=function(){
        hiddenImg[index].style='display:none';
        divImg[index].style='display:block;opacity: 0.8;';
        name1[index].style='background-color: #cb4647;opacity: 0.8;display:block';
    }
    divImg[index].onmouseout=function(){
        for (let i = 0; i < divImg.length; i++) {
            hiddenImg[i].style='display:block;';
            name1[i].style='background-color: ;opacity: 0.8;';
        }
        divImg[index].style='display:block;opacity: 1;';
        name1[index].style='background-color: #cb4647;opacity: 1;display:block';
    }
}