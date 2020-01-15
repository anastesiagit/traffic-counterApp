var _type = "";
var date_string;
function formatAMPM() {
    var der = new Date();
    var DD = ("0" + der.getDate()).slice(-2);
    var MM = ("0" + (der.getMonth() + 1)).slice(-2);
    var YYYY = der.getFullYear();
    var hh = ("0" + der.getHours()).slice(-2);
    var mm = ("0" + der.getMinutes()).slice(-2);
    var ss = ("0" + der.getSeconds()).slice(-2);
    date_string = YYYY + "-" + MM + "-" + DD + " "+ hh + ":" + mm + ":" + ss;
    document.getElementById("timing").innerHTML = date_string;
    setTimeout('formatAMPM()',1000)
}
formatAMPM();
$(function(){
		   $('#menu1').hide();
			$('#menu').on('click', function(){
				$('#sidebar').css('width','230px')
				$('#sidebar').css('display','block');
				$('#menu').hide();
				$('#menu1').show();
        })
			$('#menu1').on('click', function(){
				$('#sidebar').hide();
				$('#sidebar').css('width','0')
				$('#menu').show();
				$('#menu1').hide();
    })
}())
function start(){
$('#welcomePage').fadeOut(2000)
document.getElementById('welcomePage').style.display = "none";
setTimeout('logIn()',1000)
}
setTimeout('start()',300);
function logIn (){
    $('#mainPage').fadeIn(2000)
document.getElementById('mainPage').style.display = "";
document.getElementById('add').style.display = "";
document.getElementById('menuBar').style.display = "";
$('#arrow').css('display','none');
}
$(function(){
	$('#aboutButton').on('click',function(){
		$('#aboutPage').fadeIn(1000);
		$('#mainPage, #histPage, #exitPage, #add').css('display','none');
        $('#aboutPage').css('display','block');
		$('#sidebar').hide(200);
        $('#arrow').show();
	})
})
// about page ends ....

// homePage starts here//

$(function(){
	$('#homebtn').on('click',function(){
		$('#mainPage').fadeIn(1000);
		$('#aboutPage, #histPage, #exitPage, #add').css('display','none');
        $('#mainPage').css('display','block');
		$('#sidebar').hide(200);
        $('#arrow').show();
	})
})

// homePage ends here//
// exit page starts from here.....

$(function(){
	$('#exit').on('click',function(){
		$('#exitPage').fadeIn(1000);
		$('#exitModal , #welcomePage, #histPage, #menuBar, #mainPage, #aboutPage, #calculatePage, #add, #exitPage').css('display','none');
		 $('#sidebar, #exampleModal').hide();
    })
})

$(function(){
	$('#histbtn').on('click',function(){
		$('#histPage').fadeIn(1000);
         $('#sidebar, #exampleModal').hide();
         $('#sidebar').hide(200);
		$('#histPage').css('display','block');
		$('#exitPage, #exitModal, #mainPage, #aboutPage, #add, #welcomePage').css('display','none')
        $('#arrow').show();
    var fetchkeys = Object.keys(localStorage);
        
	for (var p = 0; p < fetchkeys.length; p++) {
        // const element = array[p];
		   var ann = JSON.parse(localStorage.getItem(fetchkeys[p]));
		   var timer = ann.timers;
   
		   var series = ann.categoeries;
   
		   var serialNo = ann.cnt;
            
           var rrt  = ann.endedTime;
            var mn = `<tr><td>`+serialNo+`</td><td>`+series+`</td><td>`+timer+`</td><td>`+rrt+`</td></tr>`;
         tbody.innerHTML += mn;
         } 
    basicaddon1.value = bbt;
   })
})
$(document).on('click','.trsshBin', function(){
    $('#delDiv').show();
 })
 $(document).on('click', '#confirmDel', function(){
     $('#carDiv').remove();
     $('#delDiv').hide();
  })
  $(document).on('click', '#confirmDel', function(){
     $('#bikeDiv').remove();
     $('#delDiv').hide();
  })
 // History Page ends here
 
 $(function(){
     $('#allContainer').on('click',function(){
     $('#sidebar').css('display','none')
     })
 })
 backToMainPage = () =>{
     $('#mainPage').fadeIn(1000);
     document.getElementById('mainPage').style.display = "";
     document.getElementById('add').style.display = "";
     $('#aboutPage').css('display','none');
     $('#histPage').css('display','none');
 }
 function countMe(){
    inlineCheckbox1.value++;
}
function countMe(){
    inlineCheckbox1.value++;
}
function clickTocount(){
    inlineCheckbox2.value++;
}
var fafa = '';
addEventListener('click', (event)=>{
event.preventDefault();
if( event.target.id == 'car1'){	
    fafa = '';
    fafa = 'fa fa-car';
    
}
if( event.target.id == 'car2'){	
    fafa = '';
    fafa = 'fa fa-bus-alt';
    
}
if( event.target.id == 'car3'){	
    fafa = '';
    fafa = 'fa fa-bicycle';
    
}
if( event.target.id == 'car4'){	
    fafa = '';
    fafa = 'fa fa-biking';
    
}
if( event.target.id == 'car5'){	
    fafa = '';
    fafa = 'fa fa-walking';
}
if( event.target.id == 'car6'){	
    fafa = '';
    fafa = 'fa fa-train';
}
if( event.target.id == 'car7'){	
    fafa = '';
    fafa = 'fa fa-truck ';
}
if( event.target.id == 'car8'){	
    fafa = '';
    fafa = 'fa fa-shuttle-van';
}
if( event.target.id == 'car9'){	
    fafa = '';
    fafa = 'fa fa-taxi';
}
if( event.target.id == 'car10'){	
    fafa = '';
    fafa = 'fa fa-ambulance';
}
})
var	timpCap;
var ar;
count = 1;
var ty = [];
 function addItem(){
  
   $('#myModal').modal('hide');
     all = [];
	 var c = Math.random();
    var s = Math.floor(c*1000);
    var v = 'ann'+ s;
    var ar = document.getElementsByClassName('allcounters');
    for(var i = 0; i < ar.length;i++){
        all.push(ar[i].value);
    }
    timpCap = date_string;
    var bikes = Object.keys(localStorage);
    var biker = "myVehi" + bikes.length;
    var obj = {
     timers: timpCap,
     categoeries: itemList.value,
      cnt: count++,
      totals : all
    //   endedTime : bbt
   } 
     var tye = JSON.stringify(obj);
     localStorage.setItem(biker,tye);
   console.log(timpCap);
   var  e = itemList.value;
         for(var i = 0; i < ar.length;i++){
            ar[i].value = all[i];
        }  
        
        defaltDiv.innerHTML +=`<table class="table col-md-12 mt-3 bg-primary text-white table-sm p-3 table-borderless" id=`+v+`Table  style="border-radius: 50px;background-color:#0F0096 !important;cursor: pointer;">
        <thead>
            <tr>
                <td  onmouseup="generalCount(`+s+`)" ><span class="${fafa} ml-2 p-2"></span></td>
                <td class="p-2"  onmouseup="generalCount(`+s+`)" > `+e+` </td>
                <td><input type="number"  id=`+v+` value="0" readonly onmouseup="generalCount(`+s+`)" class="form-control form-control-sm  bg-primary text-white allcounters" 
                    style="text-align: center; border: none;background-color:#0F0096 !important;cursor: pointer;"></td>
                <td  onclick="subInp(`+s+`)" id=`+v+`><span class="fa fa-minus mr-4 p-2"></span></td>
                <td  style=" background: rgb(129, 1, 1) !important;border-radius: 30px;" onclick= "del(`+s+`)"><span class="fa fa-times mr-3 p-2 text-white"></span></td>
            </tr>
        </thead>
     </table>`

     document.getElementById('defaltDiv').style.display= "block";
    } 
function clearall(){
    defaltDiv.innerHTML = "";
    showtot.value = "";
}
var bbt;
function calc(){
    bbt = date_string;
    var cars = Object.keys(localStorage);
   var carr = "myVehic" + cars.length;
   var obje = {
      endedTime : bbt
      } 
    var ty = JSON.stringify(obje);
	localStorage.setItem(carr,ty);
    console.log(bbt);
var n = document.getElementsByClassName('allcounters');
 tot = 0;
   for(var i = 0; i < n.length; i++){
        if(parseInt(n[i].value)){
            tot  += parseInt(n[i].value);
        } 
    }
  document.getElementById('showtot').value = tot;
}
var addInppt;
function generalCount(c){
 addInppt = 'ann' + c;
   console.log(addInppt);
   document.getElementById(addInppt).value = Number(document.getElementById(addInppt).value)+1;
}
let subInp = c => {
   var rt = 'ann' + c;
  console.log(rt);
  var yy = document.getElementById(rt).value;
	if(yy > 0){
	document.getElementById(rt).value = Number(document.getElementById(rt).value)-1;
	}
}
let subDef =()=>{
	let bt = inlineCheckbox2.value;
	if(bt > 0){
		inlineCheckbox2.value--;
	}
}
let subDef2 =()=>{
	let bt = inlineCheckbox1.value;
	if(bt > 0){
		inlineCheckbox1.value--;
	}
}
let clearHistory = () =>{
    $('#hisDelDiv').show();
}
addEventListener('click', (event)=>{
    if(event.target.id == 'confirmDelHist'){
        localStorage.clear();
        tbody.innerHTML = "";
        $('#hisDelDiv').hide();
    }
});
addEventListener('click', (event)=>{
    if(event.target.id == 'cancele'){
        $('#delDiv').hide();
    }
});
function del(type){
    if (typeof(type)=='number') {
        type = 'ann'+type
    }
    _type = type;
    $("#delDiv").show();
}
addEventListener('click', (event)=>{
    if(event.target.id == 'confirmDel'){
        
        $(`#${_type}Table`).remove();
  }
});




