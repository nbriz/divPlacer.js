        /********************************
         *                              *
         *            divPlacer.js      *
         *            by Nick Briz      *
         *    copy<it>right - 2011      *
         *                              *
         ********************************/
 
        var width, height, divObj, interval;
        var l, t, r, b;

        function setup() {
                width = window.innerWidth;
                height = window.innerHeight;
                interval = setInterval(loadDiv, 50);
        }

        document.onmousemove=getMouseCoordinates;
           
        function getMouseCoordinates(event) {
            ev = event || window.event;
            
            l = ev.pageX; t = ev.pageY;
            r = width - l; b = height - t;
                   
            divObj.innerHTML = '<div style="position: absolute; left: 20px;">.class {<br>&nbsp;&nbsp;&nbsp;position: absolute;<br>&nbsp;&nbsp;&nbsp;left: ' + l + 'px;<br>&nbsp;&nbsp;&nbsp;top: ' + t + 'px;<br>}</div><div style="position: absolute; left: 250px;">.class {<br>&nbsp;&nbsp;&nbsp;position: absolute;<br>&nbsp;&nbsp;&nbsp;right: ' + r + 'px;<br>&nbsp;&nbsp;&nbsp;bottom: ' + b + 'px;<br>}</div>';      
        }
        
        function loadDiv() {
            divObj = document.getElementById("divPlacement");
        }
              
        document.write('<div id="divPlacement" style="position: absolute; right: 25px; bottom: 25px; z-index: 1000; color: #fff; font-family: monospace; background-color: #000; opacity:0.4; filter:alpha(opacity=40); -webkit-border-radius: 5px;-moz-border-radius: 5px; border-radius: 5px; padding: 10px; width: 420px; height: 80px; border: solid #ccc;"></div>');
        
        setup();