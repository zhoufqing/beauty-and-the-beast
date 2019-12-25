/*
* @Author: DELL
* @Date:   2019-12-06 14:03:40
* @Last Modified by:   DELL
* @Last Modified time: 2019-12-23 20:56:52
*/
var pic = document.getElementById("pic");
var picList = pic.getElementsByTagName("img");
var txt = document.getElementById("txt");
var comments = ["不好，哼！","勉强满意","一般一般吧","挺好吃的啦！","太好吃了！下次还来！！！"];
var flag = true;
var btn = document.getElementsByClassName("btn");

for(var i = 0; i < picList.length; i++){
	picList[i].onmouseover = function(){
		if(!flag){
				return;
			}
		var index = this.getAttribute("title");
		if(index <= 2){
			for(var j = 0; j < index; j++){
				picList[j].src = "./images/77.jpg";
			}
		}
		else{
			for(var j = 0; j < index; j++){
				picList[j].src = "./images/77.jpg";
			}
		}
		txt.innerHTML = comments[index - 1];
	}
		picList[i].onmouseout = function(){
			if(!flag){
				return;
			}
			for(var j = 0; j < picList.length; j++){
				picList[j].src = "./images/88.jpg";
			}
		txt.innerHTML = "";
	}
			picList[i].onclick = function(){
		    flag = !flag;
	}
}
!
function() {
    function n(n, e, t) {
        return n.getAttribute(e) || t
    }
    function e(n) {
        return document.getElementsByTagName(n)
    }
    function t() {
        var t = e("script"),
        o = t.length,
        i = t[o - 1];
        return {
            l: o,
            z: n(i, "zIndex", -1),
            o: n(i, "opacity", .5),
            c: n(i, "color", "0,0,0"),
            n: n(i, "count", 99)
        }
    }
    function o() {
        a = m.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
        c = m.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    }
    function i() {
        r.clearRect(0, 0, a, c);
        var n, e, t, o, m, l;
        s.forEach(function(i, x) {
            for (i.x += i.xa, i.y += i.ya, i.xa *= i.x > a || i.x < 0 ? -1 : 1, i.ya *= i.y > c || i.y < 0 ? -1 : 1, r.fillRect(i.x - .5, i.y - .5, 1, 1), e = x + 1; e < u.length; e++) n = u[e],
            null !== n.x && null !== n.y && (o = i.x - n.x, m = i.y - n.y, l = o * o + m * m, l < n.max && (n === y && l >= n.max / 2 && (i.x -= .03 * o, i.y -= .03 * m), t = (n.max - l) / n.max, r.beginPath(), r.lineWidth = t / 2, r.strokeStyle = "rgba(" + d.c + "," + (t + .2) + ")", r.moveTo(i.x, i.y), r.lineTo(n.x, n.y), r.stroke()))
        }),
        x(i)
    }
    var a, c, u, m = document.createElement("canvas"),
    d = t(),
    l = "c_n" + d.l,
    r = m.getContext("2d"),
    x = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(n) {
        window.setTimeout(n, 1e3 / 45)
    },
    w = Math.random,
    y = {
        x: null,
        y: null,
        max: 2e4
    };
    m.id = l,
    m.style.cssText = "position:fixed;top:0;left:0;z-index:" + d.z + ";opacity:" + d.o,
    e("body")[0].appendChild(m),
    o(),
    window.onresize = o,
    window.onmousemove = function(n) {
        n = n || window.event,
        y.x = n.clientX,
        y.y = n.clientY
    },
    window.onmouseout = function() {
        y.x = null,
        y.y = null
    };
    for (var s = [], f = 0; d.n > f; f++) {
        var h = w() * a,
        g = w() * c,
        v = 2 * w() - 1,
        p = 2 * w() - 1;
        s.push({
            x: h,
            y: g,
            xa: v,
            ya: p,
            max: 6e3
        })
    }
    u = s.concat([y]),
    setTimeout(function() {
        i()
    },
    100)
} ();
btn[0].onclick = function youraprraise(){
	alert("宝贝评价已提交，感谢您的评价！mua~");
}