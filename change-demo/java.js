function byId(id){
	return typeof(id) === "string"? document.getElementById(id):id;
}
//全局变量
var index=0,
    pics=byId("banner").getElementsByTagName("div"),
    len=pics.length,
    navs=byId("nav").getElementsByTagName("li"),
    timer=null;

//轮播切换函数
function slideImg(){
	var banner=byId("banner");
	banner.onmouseover=function(){
		clearInterval(timer);
	}
	banner.onmouseout=function(){
		timer=setInterval(function(){
			index++;
			if(index>=len){
				index=0;
			}
			changeImg();
		},1000);
	}
	banner.onmouseout();

	for(var j=0;j<len;j++){
		navs[j].id=j;
		navs[j].onclick=function(){
			index=this.id;
			changeImg();
		}
	}
}

function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
		navs[i].className="";
	}
	pics[index].style.display="block";
	navs[index].className="click";
}
slideImg();