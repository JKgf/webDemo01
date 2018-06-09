# **代码分析**
### 网页换肤
    <dl id="message">
	<form action="">
		<dt>
			<strong>可以换肤的提交框：</strong>
			<input id="button1" type="button" value="皮肤1" name="skin1"  onclick="document.getElementById('link').href='css/css1.css'" />
			<input id="button2" type="button" value="皮肤2" name="skiin2" onclick="document.getElementById('link').href='css/css2.css'" />
		</dt>
		<dd>输入姓名：<input class="text" type="text" name="username"/></dd>
		<dd>输入密码：<input class="text" type="password" name="password"/></dd>
		<dd>请您留言：<textarea></textarea></dd>
		<dd class="center"><input class="button" type="submit" value="提交" /></dd>
	</form>
	</dl>


**这是html的代码**     
- 首先我定义了一个自定义表单,我的想法是首先做出一个比较简单的登陆界面;
- 首先是中文提示部分,然后是用input标签完成输入框,密码框以及留言框;
- 网页换肤的简单思路:我的换肤思想是通过点击按钮进行css的切换,虽然上次学长说这种方法对浏览器的性能消耗太大,但是短时间内我没有想到比较好的办法做出那种真正意义上的的网页换肤.所以我就将就这样了.
- 接下来就是换肤的实现过程:首先我们默认引用css1,打开网页就会显示出css1的网页样式,然后通过点击皮肤2这个按钮通过javascript的点击事件让css1的样式变为css2的样式
从而达到换肤效果,同理点击皮肤1的时候让css2的样式变为css1的样式;     

***
    
    body { 
        margin-top: 40px; 
        background: url(../images/bg1.jpg) no-repeat center center; 
    }    

    dl { 
        width: 400px; 
        border: 2px solid #ccc; 
        background: #FFFFCC; 
        padding: 20px; 
        margin: 0 auto; 
        filter: alpha(opacity: 70);
        opacity: 0.7; 
    }    
    dt { 
        font-size: 18px; 
        color: #009933; 
        border-bottom: 1px solid #ccc; 
        padding-left: 10px; 
        padding-bottom: 10px; 
        margin-bottom: 20px; 
    }    
    dd { 
        margin-left: 0; 
        padding-bottom: 10px; 
        font-size: 14px; 
        padding-left: 10px; 
    }    
    .text { 
        width: 300px; 
        height: 30px; 
        line-height: 30px; 
    }    
    textarea { 
        width: 300px; 
        height: 120px; 
        overflow: auto; 
    }    
    .button { 
        width: 120px; 
        height: 40px; 
    }    
    .center { 
        text-align: center; 
    }    



**这是css代码**
- 其实这个css也是比较简单的,我主要是为了复习一下css
- 就说一下其中的重点吧
- 首先整个登陆界面肯定要居中显示text-align: center;然后有的地方需要垂直居中,我用的是行高等于盒子高度line-height这个属性;些vi用了一个比较新的属性 filter: alpha(opacity: 70);
        opacity: 0.7;
        其实是可以直接写成opacity: 0.7;但是ie浏览器好像必行必须加上filter: alpha(opacity: 70);
        这次也是很好的兼容了ie浏览器和其他浏览器的
    

    