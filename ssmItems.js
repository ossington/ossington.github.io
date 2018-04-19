<!--

/*
Configure menu styles below
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors
*/
YOffset=150; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=20 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="black";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=150; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="verdana";
hdrFontSize="2";
hdrFontColor="white";
hdrBGColor="#170088";
hdrAlign="left";
hdrVAlign="center";
hdrHeight="15";
linkFontFamily="Verdana";
linkFontSize="2";
linkBGColor="white";
linkOverBGColor="#FFFF99";
linkTarget="_top";
linkAlign="Left";
barBGColor="#444444";
barFontFamily="Verdana";
barFontSize="2";
barFontColor="white";
barVAlign="center";
barWidth=20; // no quotes!!
barText="SIDE MENU"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Menu"] //create header
ssmItems[1]=["Home", "index.html", ""]
ssmItems[2]=["Marriages 1600-1837", "page6.html",""]
ssmItems[3]=["Census 1841", "page5.html", ""]
ssmItems[4]=["Census 1851", "page4.html", ""]
ssmItems[5]=["Census 1861", "page3.html", ""]
ssmItems[6]=["", "page", ""]
ssmItems[7]=["Census 1881", "page7.html", ""]
ssmItems[8]=["Census 1891", "page2.html", ""]
ssmItems[9]=["", "page", ""]
ssmItems[10]=["", "page", ""]
ssmItems[11]=["", "page", ""]
ssmItems[12]=["", "page", ""]

buildMenu();

//-->