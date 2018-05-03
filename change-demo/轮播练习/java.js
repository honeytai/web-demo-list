//封装一个获取id的函数
function byId(id){
	return typeof(id) === "string"?document.getElementById(id):id;
}

//全局变量
var timer=null,
    index=0,
    pics=byId("banner").getElementsByTagName("div"),
    dots=byId("dots").getElementsByTagName("span"),
    prev=byId("prev"),
    next=byId("next"),
    len=pics.length,
    manuSer=byId("nav-item").getElementsByClassName("nav-content"),
    navItem=byId("nav-item"),
    bigbox=byId("bigbox"),
    manu=byId("main").getElementsByClassName("manu");
    console.log(bigbox);

//轮播效果的实现
function slideImg(){
var main=byId("main");
main.onmouseover=function(){
	if(timer){
		clearInterval(timer);
	}
}
main.onmouseout=function(){
	timer=setInterval(function(){
		index++;
		if(index>=len){
			index=0;
		}
		changeImg();
	},3000);
}
main.onmouseout();

for(var m=0;m<manuSer.length;m++){
	manuSer[m].setAttribute("data-index", m);
	manuSer[m].onmouseover=function(){
		var num=this.getAttribute("data-index");
		for(var n=0;n<manuSer.length;n++){
			manu[n].style.display="none";
			manuSer[n].style.background="none";		
		}
		bigbox.style.display="block";
		manu[num].style.display="block";
		manuSer[num].style.background="rgba(0,0,0,0.1)";
	}
	bigbox.onmouseover=function(){
		bigbox.style.display="block";
	}
	bigbox.onmouseout=function(){
		bigbox.style.display="none";
	}
	navItem.onmouseout=function(){
	bigbox.style.display="none";
	}
}

for(var j=0;j<len;j++){
	dots[j].id=j;
	dots[j].onclick=function(){
		index=this.id;
		changeImg();
	}
}

next.onclick=function(){
	if(index==(len-1)){
		index=0;
	}
	else{
		index++;
	}
	changeImg();
}
prev.onclick=function(){
	if(index==0){
		index=len-1;
	}
	else{
		index--;
	}
	changeImg();
}

}
//图片切换函数
function changeImg(){
	for(var i=0;i<len;i++){
		pics[i].style.display="none";
		dots[i].className="";
	}
	pics[index].style.display="block";
	dots[index].className="active";
}
slideImg();