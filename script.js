
//
// SEE ==> https://javascript.info/onload-ondomcontentloaded
//         for info about `DOMContentLoaded' !!!!!!

/// DOMContentLoaded
///document.addEventListener("DOMContentLoaded", function(event) { // Wait for DOM to load
//document.addEventListener("xonload", function(event) { // Wait for DOM to load
//    console.log(event);
//    x = document.getElementsByTagName("*");
//    console.log("DOMelements=>",x.length);
//    for (i=0; i<x.length; i++){
//	console.log("elementID=>",x[i].id,"/",x[i].tagName);
//    }
//    xxx = initialize();
//});
enumeratePage = function(){
    x = document.getElementsByTagName("*");
    console.log("DOMelements=>",x.length);
    for (i=0; i<x.length; i++){
	console.log("elementID=>",x[i].id,"/",x[i].tagName);
    }
}
    
window.onload = function() {
    //    alert('Page loaded');
    enumeratePage();
    initialize();
    reportBoundsX();
}


let html;
let body;

let container;
let status;
let control;

let container_info;
let width;
let height;

let min_width;
let max_width;
let min_height;
let max_height;

function initialize(){
    // get `pointers' to major web-page elements
    html = document.getElementsByTagName("html")[0]
    body = document.getElementsByTagName("body")[0]
    
    container = document.getElementById("container");
    status = document.getElementById("status");
    control = document.getElementById("control");
    info = document.getElementById("info");

    // indicate that initialize() has been called
    container.innerHTML += " => BINGO"
}
function appendStatusLine(s){
    status.innerHTML += s;
}
function reportBoundsX(){
    var x = [status, body, container, info];
    x.forEach(report);
}
function report(item, index){
    var w;
    var h;
    var id;
    w = item.offsetWidth;
    h = item.offsetHeight;
    id = item.id
    console.log(item.id)
    appendStatusLine(` ${id}:${w}x${h}`);
}

//function reportBounds(){
//    var w;
//    var h;
//    // width and height of `status'
//    w = status.offsetWidth;
//    h = status.offsetHeight;
//    appendStatusLine(` status:${w}x${h}`);
//    // width and height of `body'
//    w = body.offsetWidth;
//    h = body.offsetHeight;
//    appendStatusLine(` body:${w}x${h}`);
//    // width and height of `container'
//    w = container.offsetWidth;
//    h = container.offsetHeight;
//    appendStatusLine(` container:${w}/${h}`);
//    // width and height of info
//    w = info.offsetWidth;
//    h = info.offsetHeight;
//    appendStatusLine(` info:${w}x${h}`);
//    
//    
//    min_width = w/2;
//    max_width = w;
//    min_height = h/2;
//    max_height = h;
//}
    // get `container' dimensions
    //containerInfo(container);
    //height = Math.trunc(container_info.height);
    //width = Math.trunc(container_info.width);

   // createButtons(10);
    
//    displayTiles(container, 5);


// -------------------vvv---------------- div is the container I'm going to divide !!!
function displayTiles(div, n){
    var sizes;
    createDIVs(n*2);
    
    width = div.offsetWidth;
    height = div.offsetHeight;
    sizes = calcSizes(height, width, n)

    adjustWidths(container.children);
    
 
    positionTiles()
    newColors()
    addEventListener()
}
function xadjustWidths(x){
    width = container.offsetWidth;
    height = container.offsetHeight;
    sizes = calcSizes(height, width, 5)

    for(i=0; i<x.length; i++){

	r = sizeTile(i); // r is a rectangel

	if((i % 2) == 0) {
	    x[i].style.width = r[0]+"px";
	    x[i].style.height = r[1]+"px";
	}
	else {
	    x[i].style.width = r[1]+"px";
	    x[i].style.height = r[0]+"px";
	}
    }
}
function positionDIVs(x){
    x = container.children;
    x[0].style.top = 0;
    x[0].style.left = 0;
    x[1].style.bottom = 0
    x[1].style.left = 0;
    x[1].style.top = "";
    x[2].style.right = 0;
    x[2].style.bottom = 0;
    x[2].style.top = "";
    x[3].style.top = 0;
    x[3].style.right = 0;
//    xxadjustWidth(x[3],100,300);
}
function adjustDIVsize(div, min_w, max_w, min_h, max_h){
    xxadjustWidth(div, min_w, max_w);
    adjustHeight(div, min_h, max_h);
}

function xxadjustWidth(div, min, max){
    var x = Math.floor(Math.random() * (max - min));
    width = min + x;
    div.style.width = `${width}px`;
}
function adjustHeight(div, min, max){
    var x = Math.floor(Math.random() * (max - min));
    width = min + x;
    div.style.height = `${width}px`;
}


function adjustWidths(x){
    for(i=0; i<x.length; i++){

	r = sizeTile(i); // r is a rectangel

	if((i % 2) == 0) {
	    x[i].style.width = r[0]+"px";
	    x[i].style.height = r[1]+"px";
	}
	else {
	    x[i].style.width = r[1]+"px";
	    x[i].style.height = r[0]+"px";
	}
    }
}
function containerInfo(c){
    r = c.getClientRects();
    console.log(r[0]);
    container_info = r[0];
}
function getOlderSiblingBottom(div){
    x = div.previousSibling
    return x.getClientRects()[0].bottom;
}
function getOlderSiblingLeft(div){
    x = div.previousSibling
    return x.getClientRects()[0].left;
}
function createButtons(n){
    control.innerHTML = "";
    for(i=0; i<n; i++){
	control.innerHTML += `<button id="b${i}" onclick="handleButton(this)">button[${i}]</button>`;
    }
}
function handleButton(e){
    // console.log(id = e.id)
    id = e.id;
    switch(id){
    case "b0":
	console.log(id);
	//newColors();
	createDIVs(4);
	break;
    case "b1":
	console.log(id);
	//xadjustWidths(container.children);
	positionDIVs(x);
	break;
    case "b2":
	x = container.children
	for(i=0; i<x.length; i++){
	    adjustDIVsize(x[i],min_width,max_width,min_height,max_height);
	}
	break;
    case "b3":
	newColors();
	break;
    case "b4":
	x = container.children
	for(i=0; i<x.length; i++){
	    adjustDIVsize(x[i],min_width,max_width,min_height,max_height);
	}
	newColors();
	break;
    }
}

var functionTable = [
    {id: "b0", f: console.log("bingo")},
    {id: "b1", f: 100 }
]


//function createTiles(div, n){
function createDIVs(n){
//    var top = div.offsetTop;
//    var left = div.offsetLeft;
    container.innerHTML = ""      // clear contents of the `container

    // add to the main division (container) n additional divisions
    // <div>${i}</div> each child div will have position=absolute
    //                                          border=solid 1px
    //
    var top = 0;
    for(i=0; i<n; i++){
	container.innerHTML += `<div style="border: solid 1px; position: absolute; top:${top}px;">${i}</div>`
	top += 50;

//	let div = container.lastElementChild;

//	div.style.border = "solid  1px";

//	div.style.position = "absolute";
//	div.style.left = `${left}px`;
//	div.style.top = `${top}px`;

//	x = sizeTile(i)

//	if((i % 2) == 0) {
//	    div.style.width = x[0]+"px";
//	    div.style.height = x[1]+"px";
//	}
//	else {
//	    div.style.width = x[1]+"px";
//	    div.style.height = x[0]+"px";
//	}
    }
}
// sizeTile(i) returns a list of x,y dimensions for the "child" <div>'s
// The first item in the list is the width of the 1st child
// The second item is the height of the child.
// div[0]=> w=389 h=294
// div[1]=> h=294 w=194
// div[2]=> w=194 h=147
// ...
// that's why I check index i for even or odd
// 0: 389
// 1: 294
// 2: 194
// 3: 147
// 4: 97
// 5: 73
// 6: 48
// 7: 36
// 8: 24
// 9: 18
// 10: 12
// length: 11


//	container.lastElementChild.style.border = "solid blue";
//	container.lastElementChild.style.margin = "0px";
//	div.addEventListener("mouseover", handleMouseOver);
//	div.addEventListener("onclick", handleMouseOver);

function handleMouseOver(event){
    console.log("event=>", event);
    x = event.target;
    color = x.style.background;
    console.log(color);
    x.innerHTML = color.toString();
}

var sizes;

function calcSizes(height, width, n){
    // stop = 1 + (2**n);
    x = [];
    x.push(width)
    for(i=1; i<n+1; i++){
	x.push(Math.trunc(height/(2**i)));
	x.push(Math.trunc(width/(2**i)));
    }
    sizes = x;
    return sizes;
}

function sizeTile(n){
    w = sizes[n]
    h = sizes[n+1];
    return [Math.trunc(w), Math.trunc(h)]
}
function newRandomColor () {
	var x = Math.floor(Math.random() * Math.pow(2,24));
	x = x & 0x00FFFFFF
	var color = "#" + x.toString(16).padStart(6,'0');
	this.color = color;
	return color;
}
function xnewColors(){
    x = container.childNodes;
    for(i=0; i<x.length; i++){
	x[i].style.background = newRandomColor();
    }
}
// this function works, BUT the container's background should be white
function newColors(){
    x = container.childNodes;
    for(i=0; i<x.length; i++){
	r = Math.trunc(Math.random() * 256);
	g = Math.trunc(Math.random() * 256);
	b = Math.trunc(Math.random() * 256);
	a = Math.random();
	color = `rgba(${r},${g},${b},${a})`;
	x[i].style.background = color;
    }
}
function addEventListener(){
    let x = container.childNodes;
    for(i=0; i<x.length; i++){
//	x[i].addEventListener("mouseover", handleMouseOver);
	x[i].addEventListener("click", handleMouseOver);
	// don't use "onclick" !!!
    }
    container.addEventListener("click", newColors);
}

let nextOffset = [0, 0];
function positionTiles(){
    var x = container.getClientRects()[0]
    nextOffset = [x.x, x.y];
    x = container.childNodes
    for(i=0; i<x.length; i++){
	x[i].style.position = "absolute";
//	x[i].style.left = nextOffset[0]+"px";
//	x[i].style.top = nextOffset[1]+"px";
	r = x[i].getClientRects()[0];
	if((i % 2) == 0){
	    nextOffset = [Math.trunc(r.left), Math.trunc(r.bottom)];
	}
	else {
	    nextOffset = [Math.trunc(r.right), Math.trunc(r.top)]
	}
    }
}

//function positionTiles(){
//    var x = container.childNodes
//    var n = x.length
//    var p_top = x[0].getClientRects()[0].top;
//    var p_bottom = x[0].getClientRects()[0].bottom;
//    var p_left = x[0].getClientRects()[0].left;
//    var p_right = x[0].getClientRects()[0].right;
//    var top_left = [ p_bottom, p_left];
//    for(i=1;i<n+1;i++){
//	x[i].style.left = top_left[1]+"px"
//	x[i].style.top = top_left[0]+"px"
//    }
//}

function xadjustHeight(i,h){
    container.childNodes[i].style.height = `${h}px`
}

function adjustWidth(i,h){
    container.childNodes[i].style.width = `${h}px`
}

/* ==========================================
let flex_container = {
    fc: 0,
    children: 0,
    getChildren: function(){
	this.children = [...this.fc.children]
    },
    init: function(){
	this.fc = document.getElementById('flex-container');
	console.log(this.fc.innerHTML);
    },
    add: function(){
	this.fc.innerHTML += "<div></div>";
    },
    colorBackground: function(){
	this.fc.style.background = newRandomColor(0x00FFFFFF);
    },
    colorChildren: function(){
	this.getChildren();
        this.children.forEach(function(i){
	    i.style.background = newRandomColor(0x00FFFFFF);
	})
    },
    showIndex: function(tf){
	j = 0;
	if(tf === true){
	    this.children.forEach(function(i){
		i.innerHTML = j++;
	    })
	}
	else {
	    this.children.forEach(function(i){
		i.innerHTML = "";
	    })
	}
    }
};
function grow(){
    flex_container.add()
    flex_container.colorBackground();
    flex_container.colorChildren();
}
var timer = 0;
function start(){
    timer = setInterval(grow, 800);
}
function stop(){
    clearInterval(timer);
    timer = 0;
}
function newRandomColor(mask){
    var x = Math.floor(Math.random() * Math.pow(2,24));
    x = x & mask
    var color = "#" + x.toString(16).padStart(6,'0');
    return color;
}

const inputArray = {
    checkboxes: ["start", "index"],
    addEventListener: function(){
	this.checkboxes.forEach(function(i){
	    x = document.getElementById(i);
	    x.addEventListener("change", handleCheckbox);
	})
    }
};
function handleCheckbox(event){
    tf = event.target.checked;
    switch (event.target.id){
    case "start":
	if(tf === true){ start(); break; }
	if(tf === false){ stop(); break; }
    case "index":
	flex_container.showIndex(tf);
	break;
    }
}
*/

