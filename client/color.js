$( document ).ready(function() {
  var $red = $("#red");
  var $blue = $("#blue");
  var $green = $("#green");
  var colorObj;
  var $tbody = $("tbody");
    (function(){
      $.get("http://localhost:3000/main", function(data, status){
        colorObj = data;
        assignColorObj(colorObj);
      })
  })();

  function assignColorObj(obj){
      console.log(obj);
    for(var i = 0; i < obj.length; i++){
      if(obj[i].color === "red"){
        $red.append("<li id='"+obj[i].id+"'>"+obj[i].id+"</li>");
      }
      else if(obj[i].color === "blue"){
        $blue.append("<li id='"+obj[i].id+"'>"+obj[i].id+"</li>");
      }
      else{
        // "<li id='"+obj[i].id+"'>"+obj[i].id+"<li>"
        $green.append("<li id='"+obj[i].id+"'>"+obj[i].id+"</li>");      }
    }

  }
});