
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.omdbapi.com/?s=pizza');
xhr.addEventListener('load', function(){
  var response = xhr.response;
  var responseData = JSON.parse(response);

    for (var i=0;i<responseData.Search.length; i++){
      var id=responseData.Search[i].imdbID;
    }

    for (var i = 0; i < responseData.Search.length; i++) {

    var a = document.createElement('a');
    a.innerHTML= responseData.Search[i].Title;
    a.href='/show.html?i=' + id;

    var p= document.createElement('p');
    p.appendChild(a);
    document.body.appendChild(p);
    }


})
xhr.send();
