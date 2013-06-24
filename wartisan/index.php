<?php 

if ( isset($_POST['submit']) && ($_POST['submit'] == 'submit')){
    
    $file = "email.txt";
    $current = file_get_contents($file);
    $email = stripcslashes($_POST['mailbox']);
    if (strstr($current,$email) == null){     
        $current .= $email."\r\n";
    }
    file_put_contents($file, $current);
}



?>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>wartisan</title>
<link rel="stylesheet" href="style/css.css">
<link rel="stylesheet" href="style/jquery-ui-1.10.3.custom.min.css">
<script src="js/jquery-1.9.1.js"></script>
<script src="js/jquery-ui-1.10.3.custom.min.js"></script>
<script src="js/index.js"></script>
</head>

<body>
<div id="main">
	<div id="container">
    	<div class="header"></div> 
        <div class="content">
        	<div class="conleft">
                    <form method="post" action="">
                        <input id="email" type="text" name="mailbox" class="mailbox" value="your@email.address">
                        <input type="submit" id="submit" name="submit" value="">
                    </form>
    
                <div class="context">
               <p>Send us your email address and we'll sign you up for our beta program and update you with our progress.</p>
                <p><i>Please see our <a href="privacy.html">privacy policy</a> to learn how we store your information.</i></p>
                </div>	
            </div>
            <div class="conright">
            	<div class="conppt">
                
<img style="visibility:hidden;width:0px;height:0px;" border=0 width=0 height=0 src="http://c.gigcount.com/wildfire/IMP/CXNID=2000002.0NXC/bT*xJmx*PTEzNzE4MDU*Njc3MDEmcHQ9MTM3MTgwNTQ3MTczMiZwPTE4MjU5MSZkPSZnPTImbz*5M2FmZGU3NDY1NWM*M2IyYjQz/ZTVmM2ViMmVlNjljYyZvZj*w.gif" /><object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="Empressr_Viewer" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,47,0" width="500" height="374.5762711864407"><param name="movie" value="http://www.empressr.com/empressrflx/Empressr_Viewer.swf?token=hdTtuWX7dtU=&loc=http://www.empressr.com/&type=Viewer" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="allowScriptAccess" value="sameDomain" /><param name="allowFullScreen" value="true" /><embed src="http://www.empressr.com/empressrflx/Empressr_Viewer.swf?token=hdTtuWX7dtU=&loc=http://www.empressr.com/&type=Viewer" quality="high" bgcolor="#000000" allowFullScreen="true" name="Empressr_Viewer" align="middle" play="true" loop="false" quality="high" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" width="656" height="448" pluginspage="http://www.adobe.com/go/getflashplayer" FlashVars="gig_lt=1371805467701&gig_pt=1371805471732&gig_g=2"></embed> <param name="FlashVars" value="gig_lt=1371805467701&gig_pt=1371805471732&gig_g=2" /></object></div>
            </div>
            <div style="clear:both"></div>
        </div>  
        <div class="seccontent">
        	<img src="images/index7.gif"><img src="images/index7.gif"><img src="images/index7.gif"><img src="images/index7.gif">
        </div> 
        <div class="footer">
        	<div>Copyright © 2013 - All Rights Reserved - www.wartisan.com</div>
        </div> 
    </div>
</div>



</body>
</html>
