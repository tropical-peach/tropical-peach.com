    var $=function(id) { return document.getElementById(id); };
     
     
    // + ------------------------------------ Configurazione (JS) ------------------------------------ +
     
    var presets=[ // curve x3(x2), margins x3(x2), translateZ x3(x2), rotation x3(x7), dim x3
    [0,0,0, 0,0,0, -350,-700,-1050, 350,700,1050, 0,0,0, 0,0,0, 0,30,0 ,0,60,0 ,0,90,0 ,0,-30,0 ,0,-60,0 ,0,-90,0 ,0,0,0, 30,10,0],                 // Preset 1
    [0,0,0, 0,0,0, -350,-700,-700, 350,700,700, 0,0,0, 0,0,0, 0,45,0, 0,90,0, 0,90,0, 0,-45,0, 0,-90,0, 0,-90,0, 0,0,0, 25,0,0],                    // Preset 2
    [0,0,0, 0,0,0, -350,-700,-1050, 350,700,1050, 0,0,0, 0,0,0, 0,0,-45, 0,0,-90, 0,0,-130, 0,0,45, 0,0,90, 0,0,130, 0,0,0, 30,10,0],               // Preset 3
    [0,0,0, 0,0,0, -350,-700,-700, 350,700,700, 0,0,0, 0,0,0, 0,0,-90, 0,0,-179, 0,0,-179, 0,0,90, 0,0,179, 0,0,179, 0,0,0, 25,0,0],                // Preset 4
    [0,0,0, 0,0,0, -350,-700,-700, 350,700,700, 0,0,0, 0,0,0, 0,179,0, 0,90,0, 0,90,0, 0,179,0, 0,90,0, 0,90,0, 0,0,0, 25,0,0],                     // Preset 5
    [0,0,0, 0,0,0, -330,-650,-920, 330,650,920, 30,160,280, 30,160,280, 0,20,0, 0,40,0, 0,60,0, 0,-20,0, 0,-40,0, 0,-60,0, 0,0,0, 30,10,0],         // Preset 6
    [0,0,0, 0,0,0, -350,-700,-700, 350,700,700, 0,0,0, 0,0,0, 0,45,45, 0,135,135, 0,135,135, 0,-45,-45, 0,-135,-135, 0,135,135, 0,0,0, 25,0,0],     // Preset 7
];
var preset          = 2;                    // 0 = null (Custom settings) (1,3 and 6 is widescreen)
var displayPreset   = false;                // Output current settings as preset string
 
// * = loaded from preset
var pg              = 3;                    // Selected box
var searchBox       = 3;                    // Box containing search engines/input fields (see "links")
var dim             = [ 30, 10, 0 ];        // * Opacity: 0-100 (step1,step2,step3) (%)
var dimColor        = "#524c59";            // Text input dim color
var background      = "#14101c";            // Background color
var color           = "#d6ccdc";            // Text/Link color
var autoFocus       = "search-1"            // "" = none | default: "search-1"
 
var enableScroll    = true;                 // Enable/Disable the posibility to scroll boxes
var enableTags      = true;                 // Show/Hide switch buttons/tags
var enableKeys      = true;                 // Allow key navigation when search field is not active
var enableTouch     = true;                 // Enable touch screen support
var enableTitle     = false;                // Enable clickable box titles/content
 
var invertScroll    = false;                // Invert mouse wheel
var useScrollLock   = true;                 // Delay next scroll trigger (prevents box skip)
var scrollLockMS    = 300;                  // Wait in milliseconds
var edgeBlock       = false;                // Block scrolling past the edge
 
var curve=[ // Vertical movement (marginTop)
    [ 0, 0, 0],                             // * Left side (step1,step2,step3)
    [ 0, 0, 0]                              // * Right side (step1,step2,step3)
];
var margins=[ // Horizontal movment (MarginLeft)
    [ 0, 0, 0],                             // * Left side (step1,step2,step3)
    [ 0, 0, 0]                              // * Right side (step1,step2,step3)
];
var marginT=-20;                            // Default marginTop
var marginC=-75;                            // Default marginLeft (center)
 
var translateZ=[ // Depth movement (z-index)
    [ 0, 0, 0],                             // * Left side (step1,step2,step3)
    [ 0, 0, 0]                              // * Right side (step1,step2,step3)
];
var perspective=800;
 
var rotation=[ // [ X, Y, Z] Degree (angle)
    [ 0, 0, 0], [ 0, 0, 0], [ 0, 0, 0],     // * Left side (step1,step2,step3)
    [ 0, 0, 0], [ 0, 0, 0], [ 0, 0, 0],     // * Right side (step1,step2,step3)
    [ 0, 0, 0]                              // * Center/Default
];
 
var waifu=[ // "./waifu-left.png", "./waifu-right.png" ("" = none)
    "", ""
];
 
var boxSetup=[ // Format: ["Title", "#color"],
    ["News",                "#d99395"],     // box-1
    ["Fourms",              "#c4d1a1"],     // box-2
    ["Search",              "#9bb6d4"],     // box-3
    ["Entertainment",       "#db9cbe"],     // box-4
    ["Other",               "#d1c894"],     // box-5
];
 
// Link setup (separa con "---", "---" (Non deve eccedere BoxSetup))
// Format: ["Name", "URL"],
    var links=[
        // News -           box-1
        ["EquestriaDaily",                      "http://equestriadaily.com"],
     
        ["---",                             "---"],
     
        // 4Chan -          box-2
        ["fourms",                     "fourmLINKS"],
     
        ["---",                             "---"],
     
        // Search -         box-3
        ["Google",                          "https://www.google.it/#q="],
        ["Images",                          "https://www.google.it/search?tbm=isch&q="],
        ["YouTube",                         "https://www.youtube.com/results?search_query="],
        ["Wikipedia",                       "http://en.wikipedia.org/w/index.php?search="],
        ["IMDb",                            "http://www.imdb.com/find?q="],
        ["Urban Dictionary",                "http://www.urbandictionary.com/define.php?term="],
     
        ["---",                             "---"],
     
        // Entertainment -  box-4
        ["Media",                      "mediaURLShere"],
     
        ["---",                             "---"],
     
        // Other -          box-5
        ["Others",                          "altURLShere"],
    ];
     
    // + ------------------------------------- Configurazione (JS) - Fine ------------------------------------- +
     
     
    function init() {
        var body=document.getElementsByTagName('body')[0];
        body.style.background=background;
        body.style.color=color;
     
        if(preset>0) { // load preset
            var p=preset-1;
     
            var e=0,f=0,g=0;
            for(var i=0;i<=17;i++) {
                switch(e) {
                    case 0: curve[g][f]=presets[p][i];      break;
                    case 1: margins[g][f]=presets[p][i];    break;
                    case 2: translateZ[g][f]=presets[p][i]; break;
                }
     
                f++; if(f>=3) { f=0; if(g==0) { g=1; } else { g=0; e++; } }
            }
     
            var a=0,b=0;
            for(var i=18;i<=38;i++) {
                rotation[a][b]=presets[p][i];
                b++; if(b>=3) { b=0; a++; }
            }
     
            var d=39;
            for(var i=0;i<3;i++) { dim[i]=presets[p][d]; d++; }
        }
     
        $('perspective').style.perspective=perspective+"px";
     
        if(body.addEventListener) {
            body.addEventListener("mousewheel", MouseWheelHandler, false);
            body.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
        } else {
            body.attachEvent("onmousewheel", MouseWheelHandler);
        }
     
        clear();
        build();
     
        var linkTags=document.getElementsByTagName('a');
        for(var a=0;a<linkTags.length;a++)    { linkTags[a].style.color=color; }
     
        var inputTags=document.getElementsByTagName('input');
        for(var i=0;i<inputTags.length;i++)   { inputTags[i].style.color=background; }
     
        var switchClass=document.getElementsByClassName('switch');
        for(var c=0;c<switchClass.length;c++) { switchClass[c].style.borderColor=color; }
     
        if(enableTags) { $('switch').style.visibility="visible"; }
     
        cleanup();
     
        if(autoFocus.length>0) { $(autoFocus).focus(); }
     
        if(displayPreset) { // generate and display preset
            var genPreset="["+curve[0][0]+","+curve[0][1]+","+curve[0][2]+", "+curve[1][0]+","+curve[1][1]+","+curve[1][2]+", \
    "+          margins[0][0]+","+margins[0][1]+","+margins[0][2]+", "+margins[1][0]+","+margins[1][1]+","+margins[1][2]+", \
    "+           translateZ[0][0]+","+translateZ[0][1]+","+translateZ[0][2]+", "+translateZ[1][0]+","+translateZ[1][1]+","+translateZ[1][2]+", ";
     
            var a=0;b=0;
            for(i=0;i<21;i++) {
                genPreset+=rotation[a][b];
     
                if(b>=2) { b=0; a++; if(a<rotation.length) { genPreset+=" ,"; } }
                else     { b++; genPreset+=","; }
            }
            genPreset+="],";
     
            //prompt("Animation preset : ",genPreset);
            $('preset').innerHTML="Animation preset : "+genPreset;
            $('preset').style.display="block";
        }
    }
     
    function clear() {
        $('boxes').innerHTML="";
        $('switch').innerHTML="";
     
        for(var i=0;i<=boxSetup.length-1;i++) {
            $('boxes').innerHTML+="<div id='box-"+(i+1)+"' class='container'></div>\n";
            $('switch').innerHTML+="<div id='pg-"+(i+1)+"' class='switch' onclick='javascript:go("+(i+1)+");'></div> \n";
     
            var onclick;
            if(enableTitle) { onclick="javascript:go("+(i+1)+");"; } else { onclick=""; }
     
            if((i+1)==searchBox) {
                $('box-'+searchBox).innerHTML="<label style='color: "+boxSetup[(searchBox-1)][1]+"; \
    "+              "border-color: "+boxSetup[i][1]+";' onclick='"+onclick+"'>"+boxSetup[i][0]+"</label></br />\
    "+               "<table id='search' border='0' cellspacing='0' cellpadding='0'>\
    "+                "<tr><td></td><td></td></tr></table>\n";
            } else {
                $('box-'+(i+1)).innerHTML="<label style='color: "+boxSetup[i][1]+"; \
    "+              "border-color: "+boxSetup[i][1]+";' onclick='"+onclick+"'>"+boxSetup[i][0]+"</label></br />\n";
            }
        }
     
        if(waifu[0]!="") {
            $('waifu-left').style.display="block";
            $('waifu-left').src=waifu[0];
        }
        if(waifu[1]!="") {
            $('waifu-right').style.display="block";
            $('waifu-right').src=waifu[1];
        }
    }
     
    function build() {
        var skip=false,c=1,r=1;
        for(var i=0;i<=links.length-1;i++) {
            if(links[i][0]=="---" && links[i][1]=="---") { skip=true; c++; }
     
            if(!skip) {
                if(c==searchBox) {
                    // search engines
                    var table=$('search');
                    var row=table.insertRow(r);
                    var cell1=row.insertCell(0),cell2=row.insertCell(1);
     
                    cell1.innerHTML="<label for='search-"+r+"'>"+links[i][0]+"</label>";
                    cell2.innerHTML="<input id='search-"+r+"' type='text' value='' \
    "+                  "onfocus='javascript:activeInput=true;if(searchBox!=pg) go(searchBox);' onblur='javascript:activeInput=false;' \
    "+                   "onkeypress='javascript:handleKeyPress(event,\""+links[i][1]+"\",this.value);' />";
     
                    r++;
                } else {
                    // links
                    var lnk_js=["",""];
                    if(enableTitle) { lnk_js=["javascript:open(\"","\");"]; }
                    $('box-'+c).innerHTML+="<a href='"+lnk_js[0]+links[i][1]+lnk_js[1]+"' target='_self'>"+links[i][0]+"</a><br />";
                }
            }
     
            skip=false;
        }
    }
     
    function cleanup() {
        var input=document.getElementsByTagName('input');
        if(pg==searchBox) { for(var i=0;i<=input.length-1;i++) { input[i].style.background=color; } }
        else              { for(var i=0;i<=input.length-1;i++) { input[i].style.background=dimColor; } }
     
        for(var i=1;i<=boxSetup.length;i++) { $('pg-'+i).style.background="transparent"; }
        $('pg-'+pg).style.background=color;
     
        var b=0,c=0,steps=parseInt(rotation.length/2);
        if(pg>=2) { // left side
            for(var i=(pg-1);i>=1;i--) {
                $('box-'+i).style.cssText="opacity: "+(parseFloat(dim[c]/100))+"; \
    "+              "margin-left: "+(margins[0][c]+marginC)+"px; margin-top: "+(curve[0][c]+marginT)+"px; \
    "+               "-moz-transform: perspective("+perspective+"px) translateZ("+translateZ[0][c]+"px) \
    "+                "rotateZ("+rotation[b][2]+"deg) rotateY("+rotation[b][1]+"deg) rotateX("+rotation[b][0]+"deg); \
    "+                 "-webkit-transform: perspective("+perspective+"px) translateZ("+translateZ[0][c]+"px) \
    "+                  "rotateZ("+rotation[b][2]+"deg) rotateY("+rotation[b][1]+"deg) rotateX("+rotation[b][0]+"deg);";
     
                if(c<steps-1) { c++; b++; }
            }
        }
     
        b=steps;c=0;
        if(pg<=boxSetup.length) { // right side
            for(var i=(pg+1);i<=boxSetup.length;i++) {
                $('box-'+i).style.cssText="opacity: "+(parseFloat(dim[c]/100))+"; \
    "+              "margin-left: "+(margins[1][c]+marginC)+"px; margin-top: "+(curve[1][c]+marginT)+"px; \
    "+               "-moz-transform: perspective("+perspective+"px) translateZ("+translateZ[1][c]+"px) \
    "+                "rotateZ("+rotation[b][2]+"deg) rotateY("+rotation[b][1]+"deg) rotateX("+rotation[b][0]+"deg); \
    "+                 "-webkit-transform: perspective("+perspective+"px) translateZ("+translateZ[0][c]+"px) \
    "+                  "rotateZ("+rotation[b][2]+"deg) rotateY("+rotation[b][1]+"deg) rotateX("+rotation[b][0]+"deg);";
     
                if(c<steps-1) { c++; b++; }
            }
        }
    }
     
    function move(p) {
        var c=rotation.length-1;
     
        $('box-'+pg).style.cssText="opacity: 1.0; \
    "+      "margin-left: "+marginC+"px; margin-top: "+marginT+"px; \
    "+       "-moz-transform: perspective("+perspective+"px) translateZ(0px) \
    "+        "rotateZ("+rotation[c][2]+"deg) rotateY("+rotation[c][1]+"deg) rotateX("+rotation[c][0]+"deg); \
    "+         "-webkit-transform: perspective("+perspective+"px) translateZ(0px) \
    "+          "rotateZ("+rotation[c][2]+"deg) rotateY("+rotation[c][1]+"deg) rotateX("+rotation[c][0]+"deg);";
     
        cleanup();
    }
     
    function go(x) { // switch using tags
        if(x!=pg) {
            if(x>pg) while(x>pg) { move(pg++); }
            else     while(x<pg) { move(pg--); }
        }
    }
     
    function open(url) { // url handler w/ clickable boxes
        var x=1;
        for(var i=0; i<links.length; i++) {
            if((links[i][1]==url && x==pg) || !enableTitle) { window.location=url; }
            else if(links[i][1]==url)                       { go(x); }
     
            if(links[i][0]=="---" && links[i][1]=="---")    { x++; }
        }
    }
     
    function handleKeyPress(e,url,q) { // query
        var key=e.keyCode || e.which
        if(key==13) { window.location=url+q; }
    }
     
    var scrollLock=false,sl_timer;
    function MouseWheelHandler(e) { // scroll navigation
        var e=window.event || e;
        var delta=Math.max(-1,Math.min(1,(e.wheelDelta || -e.detail)));
     
        if((!scrollLock || !useScrollLock) && enableScroll) {
            if(!invertScroll) {
                if(delta==-1 && pg<boxSetup.length)                     { move(pg++); }
                else if(delta==-1 && pg==boxSetup.length && !edgeBlock) { go(1); }
                if(delta==1 && pg>1)                                    { move(pg--); }
                else if(delta==1 && pg==1 && !edgeBlock)                { go(boxSetup.length); }
            } else {
                if(delta==1 && pg<boxSetup.length)                      { move(pg++); }
                else if(delta==1 && pg==boxSetup.length && !edgeBlock)  { go(1); }
                if(delta==-1 && pg>1)                                   { move(pg--); }
                else if(delta==-1 && pg==1 && !edgeBlock)               { go(boxSetup.length); }
            }
     
            if(useScrollLock) {
                scrollLock=true;              clearTimeout(sl_timer);
                sl_timer=setTimeout("scrollLock=false",scrollLockMS);
            }
        }
     
        return false;
    }
     
    var activeInput=false;
    document.onkeydown=function(e) { // key navigation
        if(!activeInput && enableKeys) {
            var key=e.keyCode || e.which
     
            if(key>=49 && (key<=57 && key<=(48+boxSetup.length)))              { go(key-48); }              // key 1-9
            if(key>=97 && (key<=105 && key<=(96+boxSetup.length)))             { go(key-96); }              // num key 1-9
     
            if((key==37 || key==65) && pg>1)                                   { move(pg--); }              // key left and A
            else if((key==37 || key==65) && pg==1 && !edgeBlock)               { go(boxSetup.length); }
            if((key==39 || key==68) && pg<boxSetup.length)                     { move(pg++); }              // key right and D
            else if((key==39 || key==68) && pg==boxSetup.length && !edgeBlock) { go(1); }
        }
    }
     
    var cX;
    document.ontouchstart=function(e) { cX=e.touches[0].clientX; }
    document.ontouchmove= function(e) { // touch navigation
        var X=e.touches[0].clientX;
     
        if(((X>=(cX+1)) && pg>1) && enableTouch)                                   { move(pg--); }
        else if(((X>=(cX+1)) && pg==1) && enableTouch && !edgeBlock)               { go(boxSetup.length); }
        if(((X<=(cX-1)) && pg<boxSetup.length) && enableTouch)                     { move(pg++); }
        else if(((X<=(cX-1)) && pg==boxSetup.length) && enableTouch && !edgeBlock) { go(1); }
    }