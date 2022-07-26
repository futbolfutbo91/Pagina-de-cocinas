let num2 = 8798; 

let num=767;
if(num<7){
	alert("ssdafe")
}

function arrosp(){
	document.getElementById("bpa").style.display = "block";
	document.getElementById("bca").style.display = "none";
	document.getElementById("bpe").style.display = "none";
	document.getElementById("bac").style.display = "none";
	document.getElementById("bap").style.display = "none";
}

function camar(){
	document.getElementById("bca").style.display = "block";
	document.getElementById("bpa").style.display = "none";	
	document.getElementById("bpe").style.display = "none";
	document.getElementById("bac").style.display = "none";
	document.getElementById("bap").style.display = "none";
}

function pes(){
	document.getElementById("bac").style.display = "none";
	document.getElementById("bpa").style.display = "none";
	document.getElementById("bca").style.display = "none";
	document.getElementById("bpe").style.display = "block";
	document.getElementById("bap").style.display = "none";
}

function aji(){
	document.getElementById("bac").style.display = "block";
	document.getElementById("bca").style.display = "none";
	document.getElementById("bap").style.display = "none";
	document.getElementById("bpa").style.display = "none";	
	document.getElementById("bpe").style.display = "none";
}

function ban(){
	document.getElementById("bap").style.display = "block";
	document.getElementById("bac").style.display = "none";
	document.getElementById("bca").style.display = "none";
	document.getElementById("bpa").style.display = "none";	
	document.getElementById("bpe").style.display = "none";
}

function ha2(){
	document.getElementById("ha").style.display = "grid";
	document.getElementById("ha").style.position = "fixed";
	document.getElementById("pe").style.display = "none";
	document.getElementById("pi").style.display = "none";
	document.getElementById("cer").style.display = "inline-block";
	document.getElementById("po").style.display = "none";
	document.getElementById("ar").style.display = "none";
	document.getElementById("pa").style.display = "none";
	document.getElementById("ga").style.display = "none";
	document.getElementById("valle").style.display = "none";
	document.getElementById("ifo").style.filter = "blur(12px)";
}

function pe2(){
	document.getElementById("pe").style.display = "grid";
	document.getElementById("pe").style.position = "fixed";
	document.getElementById("ha").style.display = "none";
	document.getElementById("pi").style.display = "none";
	document.getElementById("po").style.display = "none";
	document.getElementById("cer").style.display = "inline-block";
	document.getElementById("ar").style.display = "none";
	document.getElementById("pa").style.display = "none";
	document.getElementById("ga").style.display = "none";
	document.getElementById("valle").style.display = "none";
	document.getElementById("ifo").style.filter = "blur(12px)";
}

function pi2(){
	document.getElementById("pi").style.display = "grid";
	document.getElementById("pi").style.position = "fixed";
	document.getElementById("ha").style.display = "none";	
	document.getElementById("pe").style.display = "none";
	document.getElementById("cer").style.display = "inline-block";
	document.getElementById("po").style.display = "none";
	document.getElementById("ar").style.display = "none";
	document.getElementById("pa").style.display = "none";
	document.getElementById("ga").style.display = "none";
	document.getElementById("valle").style.display = "none";
	document.getElementById("ifo").style.filter = "blur(12px)";
}

function po2(){
	document.getElementById("po").style.display = "grid";
	document.getElementById("po").style.position = "fixed";
	document.getElementById("ha").style.display = "none";	
	document.getElementById("pe").style.display = "none";
	document.getElementById("pi").style.display = "none";
	document.getElementById("cer").style.display = "inline-block";
	document.getElementById("ar").style.display = "none";
	document.getElementById("pa").style.display = "none";
	document.getElementById("ga").style.display = "none";
	document.getElementById("valle").style.display = "none";
	document.getElementById("ifo").style.filter = "blur(12px)";
}

function ar2(){
	document.getElementById("ar").style.display = "grid";
	document.getElementById("ar").style.position = "fixed";
	document.getElementById("po").style.display = "none";
	document.getElementById("ha").style.display = "none";	
	document.getElementById("cer").style.display = "inline-block";
	document.getElementById("pe").style.display = "none";
	document.getElementById("pi").style.display = "none";
	document.getElementById("pa").style.display = "none";
	document.getElementById("ga").style.display = "none";
	document.getElementById("valle").style.display = "none";
	document.getElementById("ifo").style.filter = "blur(12px)";
}

function pa2(){
	document.getElementById("pa").style.display = "grid";
	document.getElementById("pa").style.position = "fixed";
	document.getElementById("po").style.display = "none";
	document.getElementById("ha").style.display = "none";	
	document.getElementById("pe").style.display = "none";
    document.getElementById("cer").style.display = "inline-block";
	document.getElementById("ar").style.display = "none";
	document.getElementById("pi").style.display = "none";
	document.getElementById("ga").style.display = "none";
	document.getElementById("valle").style.display = "none";
	document.getElementById("ifo").style.filter = "blur(12px)";
}

function ga2(){
	document.getElementById("ga").style.display = "grid";
	document.getElementById("ga").style.position = "fixed";
	document.getElementById("pa").style.display = "none";
	document.getElementById("po").style.display = "none";
	document.getElementById("ha").style.display = "none";	
	document.getElementById("pe").style.display = "none";
	document.getElementById("cer").style.display = "inline-block";
	document.getElementById("ar").style.display = "none";
	document.getElementById("pi").style.display = "none";
	document.getElementById("valle").style.display = "none";
	document.getElementById("ifo").style.filter = "blur(12px)";
}

function valle5(){
	document.getElementById("valle").style.display = "grid";
	document.getElementById("valle").style.position = "fixed";
	document.getElementById("ga").style.display = "none";
	document.getElementById("pa").style.display = "none";
	document.getElementById("po").style.display = "none";
	document.getElementById("cer").style.display = "inline-block";
	document.getElementById("ha").style.display = "none";	
	document.getElementById("pe").style.display = "none";
	document.getElementById("ar").style.display = "none";
	document.getElementById("pi").style.display = "none";
	document.getElementById("ifo").style.filter = "blur(12px)";
}

function cer2(){
	document.getElementById("valle").style.display = "none";
	document.getElementById("ga").style.display = "none";
	document.getElementById("pa").style.display = "none";
	document.getElementById("po").style.display = "none";
	document.getElementById("ha").style.display = "none";	
	document.getElementById("cer").style.display = "none";
	document.getElementById("pe").style.display = "none";
	document.getElementById("ar").style.display = "none";
	document.getElementById("pi").style.display = "none";
	document.getElementById("ifo").style.filter = "none";
}