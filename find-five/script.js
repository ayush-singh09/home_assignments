var button = document.querySelector(".but");
var input = document.querySelector(".inp");
var result = document.querySelector(".res");

button.addEventListener("click",function(){
    if(input.value == "")
    result.innerHTML = "Please Enter any Number";

    else check(input.value);
})

function check(str) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        
      if (str.charAt(i) === '5') {
        count++;
      }
    }
  
    result.innerHTML = "Count: "+count; 
  }
