window.onload = function(){

    var todoList = [];

    document.getElementById('add').onclick = function (){
        var d = document.getElementById('in').value;
        var temp = {};
        temp.todo = d;
        temp.check = false;
        var i = todoList.length;
        todoList[i] = temp;
        out();
    }

    document.getElementById('delete').onclick = function (){
        var i = todoList.length;
        todoList[i] = {};
        del();
    }


    function del(){
        var del="";
        todoList = [];
        document.getElementById('out').innerHTML = del;
    }

    function out(){
        var out="";
        for (var key in todoList){
          if (todoList[key].check == true){
             out += '<input type="checkbox" checked>'
          }
          else{
             out += '<input type="checkbox">'
          }
          out += todoList[key].todo + '<br>';
        }
        document.getElementById('out').innerHTML = out;
    }
}