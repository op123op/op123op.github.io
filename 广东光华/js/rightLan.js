var rightLan=document.querySelectorAll('.rightLan ul li');
var rightLan1=document.querySelectorAll('.rightLan div');
for (let index = 0; index < rightLan.length; index++) {
    rightLan[index].onmouseover=function(){
        rightLan[index].style='background-color: #d71418;';
        rightLan1[index].style='display:block;';
    }
    rightLan[index].onmouseout=function(){
        rightLan[index].style='background-color: rgba(36, 35, 35, 0.6);';
        rightLan1[index].style='display:none';
    }
    rightLan1[index].onmouseover=function(){
        rightLan[index].style='background-color: #d71418;';
        this.style='display:block';
    }
    rightLan1[index].onmouseout=function(){
        rightLan[index].style='background-color: rgba(36, 35, 35, 0.6);';
        rightLan1[index].style='display:none';
    }
}