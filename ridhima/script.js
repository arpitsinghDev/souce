var qAnda=[
{
	qusetion:"green",
	answer:'#0f0',
	audiof:"audio/green.mp3"
},
{
	qusetion:"red",
	answer:'#f00',
	audiof:"audio/red.mp3"
},
{
	qusetion:"blue",
	answer:'#00f',
	audiof:"audio/blue.mp3"
},
{
	qusetion:"white",
	answer:'#fff',
	audiof:"audio/white.mp3"
},
{
	qusetion:"black",
	answer:'#000',
	audiof:"audio/black.mp3"
},
{
	qusetion:"grey",
	answer:'#555',
	audiof:"audio/grey.mp3"
},
{
	qusetion:"yellow",
	answer:'#ff0',
	audiof:"audio/yellow.mp3"
},
{
	qusetion:"pink",
	answer:'#f0f',
	audiof:"audio/pink.mp3"
},
{
	qusetion:"Purple",
	answer:'#505',
	audiof:"audio/purple.mp3"
},
{
	qusetion:"violet",
	answer:'#e8e',
	audiof:"audio/violet.mp3"
}
];
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
var question=document.getElementById("question")
var option1=document.getElementById("option1")
var option2=document.getElementById("option2")
var option3=document.getElementById("option3")
var option4=document.getElementById("option4")
var box=document.getElementById("box")
let notchoose=1
function creater(a){
	var m=[]
	if(a>=7){
		m=[a,a-1,a-2,a-3]}
		else{
		m=[a,a+1,a+2,a+3];}
	m.sort(()=> .5-Math.random());
let value=""
value=`Where is color ${qAnda[a].qusetion}`;
var mysound=new sound("audio/wsc.mp3")

document.body.addEventListener("ended",function(){
mysound.play()
setTimeout(function(){colorName.play()},1000)
},true)

window.onload = function(){
alert("")
mysound.play()
setTimeout(function(){colorName.play()},1000)
}


let colorName = new sound(qAnda[a].audiof)

question.innerHTML=value
let oc1=option1.style.backgroundColor=qAnda[m[0]].answer
let oc2=option2.style.backgroundColor=qAnda[m[1]].answer
let oc3=option3.style.backgroundColor=qAnda[m[2]].answer
let oc4=option4.style.backgroundColor=qAnda[m[3]].answer

	option1.addEventListener("click",()=>{
		if(oc1==qAnda[a].answer){
			right(option1)
		}
		else {
			wrong(option1)
		}
	});
	option2.addEventListener("click",()=>{
		if(oc2==qAnda[a].answer){
			right(option2)
		}
		else {
			wrong(option2)
		}
	});
	option3.addEventListener("click",()=>{
		if(oc3==qAnda[a].answer){
			right(option3)
		}
		else {
			wrong(option3)
		}
	});
	option4.addEventListener("click",()=>{
		if(oc4==qAnda[a].answer){
			right(option4)
		}
		else {
			wrong(option4)
		}
	});
}

//if(notchoose==1){
function right(r){
	
	if(notchoose==1){
	r.firstChild.innerHTML="V"
	r.firstChild.style.color="#0f0"
	setTimeout(function(){location.reload()},2000)
}
notchoose++
}
function wrong(w){
	if(notchoose==1){
	w.firstChild.innerHTML="X"
	w.firstChild.style.color="#f00"
	setTimeout(function(){location.reload()},2000)
}
notchoose++
}

//}
let next=[8,7,1,2,3,4,5,6]
next.sort(()=>.5-Math.random())
creater(next[0])


