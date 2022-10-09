var headerul_li=document.querySelectorAll('#header .headerul>li');
var headerul_li_ul=document.querySelectorAll('#header .headerul>li>ul');
var li=document.querySelectorAll('#header .headerul>li>ul>li');
var lab=-40;
var height1=0;
var div;
//鼠标移入移出
for (let index = 0; index < headerul_li.length; index++) {
    height1=headerul_li_ul[index].querySelectorAll('li').length*window.getComputedStyle(li[index]).height.substr(0,2);
    headerul_li_ul[index].style.height=height1;
    headerul_li[index].onmouseover=function(){
        headerul_li_ul[index].style='display:block;left:'+(lab+index*104+index*2)+'px;';
    }
    headerul_li[index].onmouseout=function(){
        headerul_li_ul[index].style='display:none;';
    }
}
var style1='width:10px;height:10px;position: absolute;top: 23px;left: 49px;display:none;';
var style2='border-style: solid;border-color: transparent;border-width: 5px 0 5px 5px;border-left-color: red;'

for (let index = 0; index < li.length; index++) {
    li[index].innerHTML+='<div style="'+style1+'"><div style="'+style2+'"></div></div>';
    div=document.querySelectorAll('#header .headerul>li>ul>li>div');
    li[index].onmouseover=function(){
        div[index].style='width:10px;height:10px;position: absolute;top: 23px;left: 49px;';
        this.style='background-color: #f8f8f8;'

    }
    li[index].onmouseout=function(){      
        div[index].style='display:none';  
        this.style='background-color: white;'
    }
    
}
