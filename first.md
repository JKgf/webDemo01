# 第一个markdown文档

====================================================
### 轮播图代码说明

-------------------------------------------------------
#### html代码

    <div id="tab">

        <img src="images/1.jpg"/>
        <img src="images/2.jpg"/>
        <img src="images/3.jpg"/>
        <img src="images/4.jpg"/>
        <img src="images/5.jpg"/>

	</div>
    

    
   这是一个盒子里面放五张图片
   
   
   
================================================
### css代码

     #tab { 
        overflow:hidden; 
        width:520px; 
        height:280px; 
        position:relative; 
        float:left;
     }
     #tab>img:not(:first-child){ 
        display:none; 
     }   
        

1. 定义盒子的长宽高，定为及其浮动
2. 是第一张图片显示而其他四张图片不显示


   
==================================================
 ### javascript代码  
   
   window.onload = function(){
     
        var images = document.getElementsByTagName('img');
        var pos = 0;
        var len = images.length;
         
        setInterval(function(){
         
            images[pos].style.display = 'none';
          
            if (++pos == len) {
            		pos = 0; 		
            }
            else{
            	pos = pos;
            }
            images[pos].style.display = 'inline';
         
        },1000);
         
    };
   
   
1. 首先定义images标签获取所有的img标签
2. 定义一个变量使他初始化为0
3. 定义一个变量使他等于img标签的个数
4. 使用一个连续函数使他反复调用其中的代码
5. 函数内容：首先是第一张图片的显示模式变为none，在判断如果pos加一以后等于五就使pos变为0从而五张图片一循环，如果小于5就显示下一张；1000代表每1000ms切换一次




   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
