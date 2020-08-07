function grab(){
  var numbers= document.querySelectorAll("input");
  var numbers_Array = new Array();
  for(var i=0;i<numbers.length;i++){
    numbers_Array[i]=Number(numbers[i].value);
    if(numbers[i].value ===""){
      numbers_Array[i]=0;
    }
  }
  return numbers_Array;
}
function validity(){
  if((this.value>=1 && this.value<=9)){
    this.value=Math.floor(this.value);
    return;
  }

  else if(this.value==""){
    return;
  }
  else if((this.value<1 || this.value>9)){
    alert("Value must be a Integer between 1 and 9");
    this.value="";
    return;
  }
}

var input_fields=document.querySelectorAll("input");

for(var i=0 ;i<input_fields.length;i++){
    input_fields[i].addEventListener("focusout",validity);
}

function warning(){
    document.querySelector("h1").classList.add("alert");
    document.querySelector("h1").classList.add("alert-danger");
    document.querySelector("h1").innerHTML="<h4>All the empty boxes will be processed as null values</h4>";

    function backToNormal(){
      document.querySelector("h1").className="text-center";
      document.querySelector("h1").innerHTML="Sudoku Solver";
    }
    var data_set=grab();
    setTimeout(backToNormal,1000);
}




document.querySelector("button").addEventListener("click",warning);
