window.onload = function(){
	
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-41924210-1', 'wartisan.com');
  ga('send', 'pageview');
  
  var text = '';					
	var html;
  
  //设置email的默认值
   document.getElementById("email").onfocus = function(){
	   this.value = "";
   }
   document.getElementById("email").onblur = function(){
	    if(this.value == ""){
	   		this.value = "your@email.address";
	   }
   }
   
   //提交email
   document.getElementById("submit").onclick = function(){
	  var email = document.getElementById("email").value;
	  if((!isValidmail(email))||(email=="your@email.address")){
		   text = "Please enter a valid email!";
		  html =
    '<div class="dialog" id="dialog-message">' +
    '  <p>' + text +  
    '  </p>' +
    '</div>';
		 return $(html).dialog({});	
	  }
	  
	  postdata();
	  
	  text = "Thanks for your attention!";
	html =
    '<div class="dialog" id="dialog-message">' +
    '  <p>' + text +  
    '  </p>' +
    '</div>';
	return $(html).dialog({});
	  
	  //正则判断email有效性
	  function isValidmail(sEmail){
		  var reMail = /^(?:[a-z\d]+[_\-\+\.]?)*[a-z\d]+@(?:([a-z\d]+\-?)*[a-z\d]+\.)+([a-z]{2,})+$/i;
		  var bValid = reMail.test(sEmail);
		  return bValid;
	  }
	  
	  //提交数据
	  function postdata(){
		  $.ajax({
			  type: "POST",
			  url: "storedata.php",
			  data: "mailbox="+$("#email").val(),
			  success: function(msg){
		var text = "Thanks for your attention!";	
	var html =
    '<div class="dialog" id="dialog-message">' +
    '  <p>' + text +  
    '  </p>' +
    '</div>';
	$(html).dialog({});
	
	html =
    '<div class="dialog" id="dialog-message">' +
    '  <p>' + msg +  
    '  </p>' +
    '</div>';
	$(html).dialog({});
			  }
		  });
	  }
	  
	  
  }
  
  
}
