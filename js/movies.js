var script = document.location.search;
var objNew={};
var script = script.replace("?", "");
var fullObj =script.split("&");
  for(var i =0; i<fullObj.length;i++){
    var newString =fullObj[i].split("=");
    objNew[newString[0]]=newString[1];
  }

var id=objNew.i;

var request= new XMLHttpRequest;
request.open('GET', "http://www.omdbapi.com/?i=" + id);
request.addEventListener('load', function(){
  var response= request.response;
  var responseInfo=JSON.parse(response);
  var keyValuePairs="";
  for (var key in responseInfo){
    keyValuePairs += key +": "+ responseInfo[key] +"<p>";
  }

  document.body.innerHTML = keyValuePairs;

  })


request.send();
