var slideshowBodyImg=document.querySelectorAll('.slideshow-body img');
var dotDiv=document.querySelectorAll('.dot div');
var steeringYoke=document.querySelectorAll('.steering-yoke div');
var flag2=0;
    function qingshu(){
        for (let j = 0; j < slideshowBodyImg.length; j++) {
            slideshowBodyImg[j].style.display='none';
            dotDiv[j].style='background-color: #333;border: 0px solid black;';
        }
    }
    function fuqu(index1){
        slideshowBodyImg[index1].style.display='block';
        dotDiv[index1].style='background-color: white;border: 1px solid black;';
    }
    //点击下一张图片
    steeringYoke[0].onclick=function(){
        flag2++;
        qingshu();
        fuqu(flag2);
        if(flag2==3){
            flag2=-1;
        }
    } 
    //点击上一张图片
    steeringYoke[1].onclick=function(){
        if(flag2==-1){
            flag2=3;
        }
        qingshu();
        fuqu(flag2);
        flag2--; 
    }
    //定时更换图片
    setInterval(()=>{
            flag2++;
            qingshu();
            fuqu(flag2);
            if(flag2==3){
                flag2=-1;
            }
    },2000);
    //鼠标移入移出事件
    for (let index = 0; index < dotDiv.length; index++) {
        dotDiv[index].onclick=function(){
            qingshu();
            fuqu(index);
        }
        dotDiv[index].onmouseover=function(){
            qingshu();
            fuqu(index);
        }
        dotDiv[index].onmouseout=function(){
            qingshu();
            fuqu(0);
        }
    }
    
