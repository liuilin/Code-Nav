var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

// notes
function AutoScroll(obj){
        $(obj).find("ul:first").animate({
                marginTop:"-25px"
        },500,function(){
                $(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
        });
}
$(document).ready(function(){
setInterval('AutoScroll(".scrollDiv")',3000)
});

// banner
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name]
	}
	else
	{
		return getComputedStyle(obj,false)[name]
	}
}

function getByClass(oParent,nClass)
{
	var eLe = oParent.getElementsByTagName('*');
	var aRrent  = [];
	for(var i=0; i<eLe.length; i++)
	{
		if(eLe[i].className == nClass)
		{
			aRrent.push(eLe[i]);
		}
	}
	return aRrent;
}

function startMove(obj,att,add)
{
	clearInterval(obj.timer)
	obj.timer = setInterval(function(){
	   var cutt = 0 ;
	   if(att=='opacity')
	   {
		   cutt = Math.round(parseFloat(getStyle(obj,att)));
	   }
	   else
	   {
		   cutt = Math.round(parseInt(getStyle(obj,att)));
	   }
	   var speed = (add-cutt)/4;
	   speed = speed>0?Math.ceil(speed):Math.floor(speed);
	   if(cutt==add)
	   {
		   clearInterval(obj.timer)
	   }
	   else
	   {
		   if(att=='opacity')
		   {
			   obj.style.opacity = (cutt+speed)/100;
			   obj.style.filter = 'alpha(opacity:'+(cutt+speed)+')';
		   }
		   else
		   {
			   obj.style[att] = cutt+speed+'px';
		   }
	   }
	   
	},30)
}

  window.onload = function()
  {
	  var oDiv = document.getElementById('playBox');
	  var oPre = getByClass(oDiv,'pre')[0];
	  var oNext = getByClass(oDiv,'next')[0];
	  var oUlBig = getByClass(oDiv,'oUlplay')[0];
	  var aBigLi = oUlBig.getElementsByTagName('li');
	  var oDivSmall = getByClass(oDiv,'smalltitle')[0]
	  var aLiSmall = oDivSmall.getElementsByTagName('li');
	  
	  function tab()
	  {
	     for(var i=0; i<aLiSmall.length; i++)
	     {
		    aLiSmall[i].className = '';
	     }
	     aLiSmall[now].className = 'thistitle'
	     startMove(oUlBig,'left',-(now*aBigLi[0].offsetWidth))
	  }
	  var now = 0;
	  for(var i=0; i<aLiSmall.length; i++)
	  {
		  aLiSmall[i].index = i;
		  aLiSmall[i].onclick = function()
		  {
			  now = this.index;
			  tab();
		  }
	 }
	  oPre.onclick = function()
	  {
		  now--
		  if(now ==-1)
		  {
			  now = aBigLi.length;
		  }
		   tab();
	  }
	   oNext.onclick = function()
	  {
		   now++
		  if(now ==aBigLi.length)
		  {
			  now = 0;
		  }
		  tab();
	  }
	  var timer = setInterval(oNext.onclick,3000) //滚动间隔时间设置
	  oDiv.onmouseover = function()
	  {
		  clearInterval(timer)
	  }
	   oDiv.onmouseout = function()
	  {
		  timer = setInterval(oNext.onclick,3000) //滚动间隔时间设置
	  }
  }

}
/*
     FILE ARCHIVED ON 02:04:08 Feb 26, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:59:32 May 27, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  PetaboxLoader3.resolve: 187.745 (3)
  RedisCDXSource: 36.901
  captures_list: 279.434
  CDXLines.iter: 17.876 (3)
  exclusion.robots: 0.383
  exclusion.robots.policy: 0.367
  LoadShardBlock: 221.208 (3)
  load_resource: 64.102
  esindex: 0.012
  PetaboxLoader3.datanode: 67.896 (4)
*/