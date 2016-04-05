var list_array = [];

function wipeBox(){
 document.getElementById('input_area').value = "";
}

function addToList(){
  var input_area = document.getElementById('input_area').value;
  list_array.push(input_area);
  wipeBox();
  displayList(list_array);
}

function genDelButton(){
  var del_btn = document.createElement("button");
  del_btn.setAttribute('id', 'delete');
  del_btn.setAttribute('onclick', 'deleteFromList(this)')
  del_btn.innerHTML = "Delete";
  return del_btn;
}

function displayList(array){
  var ul = document.getElementById('reusable_list');
  ul.innerHTML = "";
  for(var i=0; i < array.length; i++){
      var li = document.createElement("li");
      var text = document.createTextNode(array[i]);
      li.appendChild(text);
      li.appendChild(genDelButton());
      ul.appendChild(li);
  }
}


function deleteFromList(clicked){
  var clicked_text = clicked.previousSibling.textContent;
  for(var i = 0; i < list_array.length; i++){
    if(clicked_text == list_array[i]){
      list_array.splice(i,1);
      break;
    }
  }
  displayList(list_array);
}
