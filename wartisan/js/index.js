window.onload = function(){
	
/***************************老大提供的代码段*******************************/	
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41924210-1', 'wartisan.com');
  ga('send', 'pageview');
/***********************************************************************/

/************************* 添加事件响应  ******************/
 //*******设置submit按钮鼠标移动时的样式
  $("#submit").mouseenter(function(){
	  $(this).css("opacity", "0.7");
	  }).mouseout(function(){
	  $(this).css("opacity", "1");
	  });
  //end
/***********************************************************************/ 
  var text = ''; //保存弹窗消息					
  var html; //保存弹窗div
  
  //*******设置email的默认值
   document.getElementById("email").onfocus = function(){
	   this.value = "";
	   var container = document.getElementById("signup");
	   
	   var errorRemind = document.getElementById("errormessage");
	   if(errorRemind){
	   container.removeChild(errorRemind);
	   var submitBtn = document.getElementById("submit");
	   submitBtn.disabled = false;
	   }
   }
   //end
   
   document.getElementById("email").onblur = function(){
	    if(this.value == ""){
	   		this.value = "your@mail.com";
	   }
   }
   //end
/*************使用colorbox插件显示小视频***************************/
   $(".collaboration").colorbox({iframe:true, innerWidth:640, innerHeight:390});
   $(".management").colorbox({iframe:true, innerWidth:640, innerHeight:390});
   $(".timeline").colorbox({iframe:true, innerWidth:640, innerHeight:390});
   
/***************************************************************/


/*************email注册提交*************************/   
   //提交email
   document.getElementById("submit").onclick = function(){
	  var email = document.getElementById("email").value;
	  if((!isValidmail(email))||(email=="your@mail.com")){
		   text = "Please enter a valid email!";
		 
		var errorRemind = document.createElement("p");
		var errorText =  document.createTextNode(text);
		errorRemind.id = "errormessage";
		errorRemind.appendChild(errorText);
		var container = document.getElementById("signup");
		var submitBtn = document.getElementsByClassName("cbutton")[0];
		var submitbutton = document.getElementById("submit");
		container.insertBefore(errorRemind, submitBtn);
		submitbutton.disabled = true;
		return;	
		
	  }
	  var datasent = "CLIENT\n"+ "email: " + email_x;
		  $.getJSON('http://smart-ip.net/geoip-json?callback=?', function(data) {
	        //$('p').html('My IP Address is: ' + data.host);
				datasent =  datasent +'\nIP: ' + data.host + ' CountryName: ' + data.countryName + ' CityName: ' +data.city;
				postdata(datasent);		
					  
				text = "Thanks for your attention!";	
				alert(text);
	    });
	  
	    
	  //正则判断email有效性
	  function isValidmail(sEmail){
		  var reMail = /^(?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i;
		  var bValid = reMail.test(sEmail);
		  return bValid;
	  }
	  
	 
	 //end postdata
	  
  }
/**************************************************************/

  window.onbeforeunload = function() { 
	var time;
		getInfo();	
  	}
	function getInfo(){
  		var pl=document.getElementById("video");
    	time = "video1: " + pl.currentTime +"s";
    	postdata(time);
 	}
   
   //提交数据
function postdata(datasent){
		  
	$.ajax({
			  type: "POST",
			  url: "storedata.php",
			  data: "mailbox="+datasent,
			  success: function(msg){
				return;
			  }
		  });
					  
	}
}
