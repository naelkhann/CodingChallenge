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
  del_btn.setAttribute('onclick', 'deleteFromList(this)');
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

}
