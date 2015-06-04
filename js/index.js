
var button = document.getElementsByName('button')[0];
button.addEventListener('click', function(){
  event.preventDefault();
  document.getElementById('results').innerHTML=null;
  var userText = document.getElementById('search').value;
  var text =userText.replace("?","");
  var array =text.split("&");

  for(var i=0; i<array.length;i++){
    var input = array[i].split('=');
    var finalInput= input[0]
  }
  console.log(finalInput);

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://www.omdbapi.com/?s='+ finalInput);
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
      document.getElementById('results').appendChild(p);
      }
  })
xhr.send();
});
