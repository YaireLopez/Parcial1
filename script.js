$("#CalA2").hide();
$("#GrasA2").hide();
$("#ProtA2").hide();
$("#CarbA2").hide();
$("#CalP2").hide();
$("#GrasP2").hide();
$("#ProtP2").hide();
$("#CarbP2").hide();
$("#CalC2").hide();
$("#GrasC2").hide();
$("#ProtC2").hide();
$("#CarbC2").hide();
$("#CalF2").hide();
$("#GrasF2").hide();
$("#ProtF2").hide();
$("#CarbF2").hide();
$("#cancelar").show();
$("#aceptar").show();


function mostrar(a,b,c,d,e,f,g,h,i,k)
{
  let text = "";
  if(i.text() === "Editar")
  {
    a.show();
    b.hide();
    c.show();
    d.hide();
    e.show();
    f.hide();
    g.show();
    h.hide();
    text=k;
    $("#cancelar").show();
    $("#aceptar").show();
  }
  
  i.html(text);
  $(k).hide();
}
function cancelar(a,b,c,d,e,f,g,h,i)
{
  a.hide();
  b.show();
  c.hide();
  d.show();
  e.hide();
  f.show();
  g.hide();
  h.show();
  text ="Editar"
  $("#cancelar").hide();
  $("#aceptar").hide();
  i.html(text);
}

function aceptar()
{

	if(($(".editar").text() === "Editar") == false)
  {
  	document.getElementById("CalA").innerHTML =document.getElementById("CalA2").value;
   	document.getElementById("GrasA").innerHTML =document.getElementById("GrasA2").value;
   	document.getElementById("ProtA").innerHTML =document.getElementById("ProtA2").value;
   	document.getElementById("CarbA").innerHTML =document.getElementById("CarbA2").value;
   	cancelar($('#CalA2'), $('#CalA'), $('#GrasA2'),$('#GrasA'),$('#ProtA2'),$('#ProtA'),$('#CarbA2'),$('#CarbA'),$(".editar"));
     $(".editar").show();
  }
  
  if(($(".editar").text() === "Editar") == false)
  {
    document.getElementById("CalP").innerHTML =document.getElementById("CalP2").value;
    document.getElementById("GrasP").innerHTML =document.getElementById("GrasP2").value;
    document.getElementById("ProtP").innerHTML =document.getElementById("ProtP2").value;
    document.getElementById("CarbP").innerHTML =document.getElementById("CarbP2").value;
    cancelar($('#CalP2'), $('#CalP'), $('#GrasP2'),$('#GrasP'),$('#ProtP2'),$('#ProtP'),$('#CarbP2'),$('#CarbP'),$(".editar2"));
     $(".editar2").show();
  }
  
  if(($(".editar").text() === "Editar") == false)
  {
    document.getElementById("CalC").innerHTML =document.getElementById("CalC2").value;
    document.getElementById("GrasC").innerHTML =document.getElementById("GrasC2").value;
    document.getElementById("ProtC").innerHTML =document.getElementById("ProtC2").value;
    document.getElementById("CarbC").innerHTML =document.getElementById("CarbC2").value;
    cancelar($('#CalC2'), $('#CalC'), $('#GrasC2'),$('#GrasC'),$('#ProtC2'),$('#ProtC'),$('#CarbC2'),$('#CarbC'),$(".editar3"));
     $(".editar3").show();
  }
  
  if(($(".editar").text() === "Editar") == false)
  {
    document.getElementById("CalF").innerHTML =document.getElementById("CalF2").value;
    document.getElementById("GrasF").innerHTML =document.getElementById("GrasF2").value;
    document.getElementById("ProtF").innerHTML =document.getElementById("ProtF2").value;
    document.getElementById("CarbF").innerHTML =document.getElementById("CarbF2").value;
    cancelar($('#CalF2'), $('#CalF'), $('#GrasF2'),$('#GrasF'),$('#ProtF2'),$('#ProtF'),$('#CarbF2'),$('#CarbF'),$(".editar4"));
     $(".editar4").show();
  }
    	
}
    
function cancelarAc()
{
 
 	if(($(".editar").text() === "Editar") == false)
  {
  	cancelar($('#CalA2'), $('#CalA'), $('#GrasA2'),$('#GrasA'),$('#ProtA2'),$('#ProtA'),$('#CarbA2'),$('#CarbA'),$(".editar"));
    $(".editar").show();
 	}
 
 	if(($(".editar").text() === "Editar") == false)
  {
    cancelar($('#CalP2'), $('#CalP'), $('#GrasP2'),$('#GrasP'),$('#ProtP2'),$('#ProtP'),$('#CarbP2'),$('#CarbP'),$(".editar2"));
    $(".editar2").show();
  }
  
  if(($(".editar").text() === "Editar") == false)
  {
    cancelar($('#CalC2'), $('#CalC'), $('#GrasC2'),$('#GrasC'),$('#ProtC2'),$('#ProtC'),$('#CarbC2'),$('#CarbC'),$(".editar3"));
    $(".editar3").show();
  }
 
 	if(($(".editar").text() === "Editar") == false)
  {
    cancelar($('#CalF2'), $('#CalF'), $('#GrasF2'),$('#GrasF'),$('#ProtF2'),$('#ProtF'),$('#CarbF2'),$('#CarbF'),$(".editar4"));
    $(".editar4").show();
  }

}
