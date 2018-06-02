 window.onload = function(){
     
        var images = document.getElementsByTagName('img');
        var pos = 0;
        var len = images.length;
         
        setInterval(function(){
         
            images[pos].style.display = 'none';
            //pos = ++pos == len ? 0 : pos;
            if (++pos == len) {
            		pos = 0; 		
            }
            else{
            	pos = pos;
            }
            images[pos].style.display = 'inline';
         
        },3000);
         
    };