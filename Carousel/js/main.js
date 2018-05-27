 window.onload = function(){
     
        var images = document.getElementsByTagName('img');
        var pos = 0;
        var len = images.length;
         
        setInterval(function(){
         
            images[pos].style.display = 'none';
            pos = ++pos == len ? 0 : pos;
            images[pos].style.display = 'inline';
         
        },1000);
         
    };