var table = document.createElement('table');

var columns = ['roll','name','college','course'];

for(var i = 0; i <= data.length; i++){
  var tr = document.createElement('tr');
  if(i==0){ //for table header
    for(var j = 0; j <= 3; j++){
      var th = document.createElement('th');
      th.innerHTML = columns[j].toUpperCase();
      th.style.border = "1px solid black";
      tr.appendChild(th);
    }
    table.appendChild(tr);
    continue;
  }

  for(var j = 0; j <= 3; j++){ //for table data
    var td = document.createElement('td');
    var a = document.createElement('a');
    var img = document.createElement('img');

    if( j == 1){
      img.src = 'images/' + data[i-1].image ;
      a.href = data[i-1].link;
    }
    
    a.innerHTML = data[i-1][columns[j]];
    
    td.style.border = "1px solid black";
    td.appendChild(img);
    td.appendChild(a);
    tr.appendChild(td);
  }
  table.appendChild(tr);
}
table.style.border = "1px solid black";
document.body.appendChild(table);

