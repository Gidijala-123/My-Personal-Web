      //- Linkedin scrolling animation with pause on hover effect
      var delayb4scroll=800 //Specify initial delay before marquee starts to scroll on page (2000=2 seconds)
      var marqueespeed=1 //Specify marquee scroll speed (larger is faster 1-10)
      var pauseit=1 //Pause marquee onMousever (0=no. 1=yes)?
      ////NO NEED TO EDIT BELOW THIS LINE////////////
      var copyspeed=marqueespeed
      var pausespeed=(pauseit==0)? copyspeed: 0
      var actualheight=''
      function scrollmarquee(){
      if (parseInt(cross_marquee.style.top)>(actualheight*(-1)+8))
      cross_marquee.style.top=parseInt(cross_marquee.style.top)-copyspeed+"px"
      else
      cross_marquee.style.top=parseInt(marqueeheight)+8+"px"
      }
      function initializemarquee(){
      cross_marquee=document.getElementById("vmarquee")
      cross_marquee.style.top=0
      marqueeheight=document.getElementById("marqueecontainer").offsetHeight
      actualheight=cross_marquee.offsetHeight
      if (window.opera || navigator.userAgent.indexOf("Netscape/7")!=-1){ //if Opera or Netscape 7x, add scrollbars to scroll and exit
      cross_marquee.style.height=marqueeheight+"px"
      cross_marquee.style.overflow="scroll"
      return
      }
      setTimeout('lefttime=setInterval("scrollmarquee()",35)', delayb4scroll)//change the value to control scroll speed
      }
      if (window.addEventListener)
      window.addEventListener("load", initializemarquee, false)
      else if (window.attachEvent)
      window.attachEvent("onload", initializemarquee)
      else if (document.getElementById)
      window.onload=initializemarquee;

      // Skillbar animation
      console.clear();
      let percent1 = 0
      let timer1 = setInterval(function() {
      percent1 += 1
      $('.skill-bar-percent1').text(`${percent1} %`)
      if(percent1 >= 75) {
      clearInterval(timer1)
      }
      }, 75);
    
      console.clear();
      let percent2 = 0
      let timer2 = setInterval(function() {
      percent2 += 1
      $('.skill-bar-percent2').text(`${percent2} %`)
      if(percent2 >= 90) {
      clearInterval(timer2)
      }
      }, 65);
    
      console.clear();
      let percent3 = 0
      let timer3 = setInterval(function() {
      percent3 += 1
      $('.skill-bar-percent3').text(`${percent3} %`)
      if(percent3 >= 65) {
      clearInterval(timer3)
      }
      }, 85);
    
      console.clear();
      let percent4 = 0
      let timer4 = setInterval(function() {
      percent4 += 1
      $('.skill-bar-percent4').text(`${percent4} %`)
      if(percent4 >= 60) {
      clearInterval(timer4)
      }
      }, 90);
    
      console.clear();
      let percent5 = 0
      let timer5 = setInterval(function() {
      percent5 += 1
      $('.skill-bar-percent5').text(`${percent5} %`)
      if(percent5 >= 69) {
      clearInterval(timer5)
      }
      }, 75);
    
      console.clear();
      let percent6 = 0
      let timer6 = setInterval(function() {
      percent6 += 1
      $('.skill-bar-percent6').text(`${percent6} %`)
      if(percent6 >= 85) {
      clearInterval(timer6)
      }
      }, 68);
    
      console.clear();
      let percent7 = 0
      let timer7 = setInterval(function() {
      percent7 += 1
      $('.skill-bar-percent7').text(`${percent7} %`)
      if(percent7 >= 80) {
      clearInterval(timer7)
      }
      }, 72);
  
      jQuery(document).ready(function(){
      jQuery('.skillbar').each(function(){
      jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
      },6000);
      });
      });

      //- Function to change webpage background color
      $(function () {
       $(".icon1").click(function () {
          $(".user-card").css('background-color', '#0f0c4f');
          $(".user-bg").css("background-image", "url('/images/11.jpg')");
          $(".thumbnail").css("background-image","linear-gradient( to bottom, #0f0c4f ,#41d7d8)" );
        });
      });
    
      $(function () {
       $(".icon2").click(function () {
          $(".user-card").css('background-color', '#0f1e25');
          $(".user-bg").css("background-image", "url('/images/2.jpg')");
          $(".thumbnail").css("background-image","linear-gradient( to bottom,#0f1e25, #c8e690)" );
        });
      });
  
      $(function () {
       $(".icon3").click(function () {
          $(".user-card").css('background-color', '#210002');
          $(".user-bg").css("background-image", "url('/images/3.png')");
          $(".thumbnail").css("background-image","linear-gradient( to bottom, #210002,#ffae34)" );
        });
      });
    
      $(function () {
       $(".icon4").click(function () {
          $(".user-card").css('background-color', '#9193d3');
          $(".hh").css('color', '#grey');
          $(".user-bg").css("background-image", "url('/images/4.jpg')");
          $(".thumbnail").css("background-image","linear-gradient( to bottom,#9193d3,#fdb5c1)" );
        });
      });

      // Page refresh counter
      var n = localStorage.getItem('on_load_counter');
      if (n === null) {
      n = 0;
      }
      n++;
      //- localStorage.removeItem('on_load_counter');
      localStorage.setItem("on_load_counter", n);
      nums = n.toString().split('').map(Number);
      document.getElementById('CounterVisitor').innerHTML = '';
      for (var i of nums) {
      document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
      };
      //- to remove loggedin msg when clicked on close(present near footer)
      (function() {
      var $body, $value, restore;
      $('[data-hide]').on('click', function() {
      var $message, $this;
      $this = $(this);
      $message = $this.parent();
      restore($message);
      return $message.addClass('hide');
      });
      $('[data-close]').on('click', function() {
      var $message, $this;
      $this = $(this);
      $message = $this.parent();
      //- restore($message);
      return $message.addClass('hide');
      });
      restore = function(el) {
      return el.one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      return setTimeout((function() {
      return el.removeClass('hide');
      }), 1000);
      });
      };
      $body = $('body');
      $value = $('#font-size-value');
      $('#font-size').on('change', function() {
      var value;
      value = this.value;
      $value.html("" + value + "em");
      return $body.css('font-size', "" + value + "em");
      });
      }).call(this);
    

      //- Animated graph
      var stepX = 77 / 14;
      var chart_1_y = [
      15, 25, 40, 30, 45, 40, 35, 55, 37, 50, 60, 45,70, 78
      ];
      var chart_2_y = [
      80, 65, 65, 40, 55, 34, 54, 50, 60, 64, 55, 27, 24, 30
      ];
      function point(x, y) {
      x: 0;
      y: 0;
      }
      /* DRAW GRID */
      function drawGrid(graph) {
      var graph = Snap(graph);
      var g = graph.g();
      g.attr('id', 'grid');
      for (i = 0; i <= stepX + 2; i++) {
      var horizontalLine = graph.path(
      "M" + 0 + "," + stepX * i + " " +
      "L" + 77 + "," + stepX * i);
      horizontalLine.attr('class', 'horizontal');
      g.add(horizontalLine);
      };
      for (i = 0; i <= 14; i++) {
      var horizontalLine = graph.path(
      "M" + stepX * i + "," + 38.7 + " " +
      "L" + stepX * i + "," + 0)
      horizontalLine.attr('class', 'vertical');
      g.add(horizontalLine);
      };
      }
      drawGrid('#chart-1');
      function drawLineGraph(graph, points, container, id) {
      var graph = Snap(graph);
      /*END DRAW GRID*/
      /* PARSE POINTS */
      var myPoints = [];
      var shadowPoints = [];
      function parseData(points) {
      for (i = 0; i < points.length; i++) {
      var p = new point();
      var pv = points[i] / 100 * 40;
      p.x = 83.7 / points.length * i + 1;
      p.y = 40 - pv;
      if (p.x > 78) {
      p.x = 78;
      }
      myPoints.push(p);
      }
      }
      var segments = [];
      function createSegments(p_array) {
      for (i = 0; i < p_array.length; i++) {
      var seg = "L" + p_array[i].x + "," + p_array[i].y;
      if (i === 0) {
      seg = "M" + p_array[i].x + "," + p_array[i].y;
      }
      segments.push(seg);
      }
      }
      function joinLine(segments_array, id) {
      var line = segments_array.join(" ");
      var line = graph.path(line);
      line.attr('id', 'graph-' + id);
      var lineLength = line.getTotalLength();
      line.attr({
      'stroke-dasharray': lineLength,
      'stroke-dashoffset': lineLength
      });
      }
      function calculatePercentage(points, graph) {
      var initValue = points[0];
      var endValue = points[points.length - 1];
      var sum = endValue - initValue;
      var prefix;
      var percentageGain;
      var stepCount = 1300 / sum;
      function findPrefix() {
      if (sum > 0) {
      prefix = "+";
      } else {
      prefix = "";
      }
      }
      var percentagePrefix = "";
      function percentageChange() {
      percentageGain = initValue / endValue * 100;
      if(percentageGain > 100){
      console.log('over100');
      percentageGain = Math.round(percentageGain * 100*10) / 100;
      }else if(percentageGain < 100){
      console.log('under100');
      percentageGain = Math.round(percentageGain * 10) / 10;
      }
      if (initValue > endValue) {
      percentageGain = endValue/initValue*100-100;
      percentageGain = percentageGain.toFixed(2);
      percentagePrefix = "";
      $(graph).find('.percentage-value').addClass('negative');
      } else {
      percentagePrefix = "+";
      }
      if(endValue > initValue){
      percentageGain = endValue/initValue*100;
      percentageGain = Math.round(percentageGain);
      }
      };
      percentageChange();
      findPrefix();
      var percentage = $(graph).find('.percentage-value');
      var totalGain = $(graph).find('.total-gain');
      var hVal = $(graph).find('.h-value');
      function count(graph, sum) {
      var totalGain = $(graph).find('.total-gain');
      var i = 0;
      var time = 1300;
      var intervalTime = Math.abs(time / sum);
      var timerID = 0;
      if (sum > 0) {
      var timerID = setInterval(function () {
      i++;
      totalGain.text(percentagePrefix + i);
      if (i === sum) clearInterval(timerID);
      }, intervalTime);
      } else if (sum < 0) {
      var timerID = setInterval(function () {
      i--;
      totalGain.text(percentagePrefix + i);
      if (i === sum) clearInterval(timerID);
      }, intervalTime);
      }
      }
      count(graph, sum);
      percentage.text(percentagePrefix + percentageGain + "%");
      totalGain.text("0%");
      setTimeout(function () {
      percentage.addClass('visible');
      hVal.addClass('visible');
      }, 1300);
      }
      function drawPolygon(segments, id) {
      var polySeg = segments.slice();
      polySeg.push([78, 38.4], [1, 38.4]);
      var polyLine = polySeg.join(' ').toString();
      var replacedString = polyLine.replace(/L/g, '').replace(/M/g, "");
      var poly = graph.polygon(replacedString);
      var clip = graph.rect(-80, 0, 80, 40);
      poly.attr({
      'id': 'poly-' + id,
      /*'clipPath':'url(#clip)'*/
      'clipPath': clip
      });
      clip.animate({
      transform: 't80,0'
      }, 1300, mina.linear);
      }
      parseData(points);
      createSegments(myPoints);
      calculatePercentage(points, container);
      joinLine(segments,id);
      drawPolygon(segments, id);
      }
      function drawCircle(container,id,progress,parent){
      countCircle(animTime,parent,progress);
      }
      $(window).on('load',function(){
      drawLineGraph('#chart-1', chart_1_y, '#graph-1-container', 1);
      });
    
    //- gallery slider
      window.jssor_1_slider_init = function() {
      var jssor_1_SlideshowTransitions = [
      {$Duration:800,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
      {$Duration:800,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
      ];
      var jssor_1_options = {
      $AutoPlay: 1,
      $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1
      },
      $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
      },
      $ThumbnailNavigatorOptions: {
      $Class: $JssorThumbnailNavigator$,
      $SpacingX: 5,
      $SpacingY: 5
      }
      };
      var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
      /*#region responsive code begin*/
      var MAX_WIDTH = 980;
      function ScaleSlider() {
      var containerElement = jssor_1_slider.$Elmt.parentNode;
      var containerWidth = containerElement.clientWidth;
      if (containerWidth) {
      var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
      jssor_1_slider.$ScaleWidth(expectedWidth);
      }
      else {
      window.setTimeout(ScaleSlider, 20);
      }
      }
      ScaleSlider();
      $Jssor$.$AddEvent(window, "load", ScaleSlider);
      $Jssor$.$AddEvent(window, "resize", ScaleSlider);
      $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
      /*#endregion responsive code end*/
      };
    
      jssor_1_slider_init();


    