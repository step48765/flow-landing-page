function random(min, max){
  return Math.floor(Math.random()*(max-min+1)+min);
}

function getTitle(){
  var a = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet', 'Dolorium'];
  var b = random(2, 6);
  var c = '';
  
  for(var i = 0; i < b; i++){
    c += a[i] + ' ';
  }
  
  return c;
}

function getBody(){
  var a = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis, ligula eget molestie suscipit, ipsum libero convallis elit, a cursus enim metus nec enim.';
  var b = random(80, 160);
  var c = a.substr(0, b);
  var d = c.substr(0, Math.min(c.length, c.lastIndexOf(" ")));
  
  return d;
}

for(var i = 0; i < 10; i++){
  for(var j = 1; j < 4; j++){
    var randomImageHeight = random(240, 340);
    var relation = 280/randomImageHeight;
    var padding = 100/relation;
    
    $('.card-col-'+j).append(`
    <div class="card">
      <div class="top" style="padding-bottom: ${padding}%">
        <img src="https://www.unsplash.it/280/${randomImageHeight}/?random&sig=${Math.random()}">
      </div>
      <div class="bottom">
        <h2>${getTitle()}</h2>
        <p>${getBody()}</p>
      </div>
    </div>`);
  }
}