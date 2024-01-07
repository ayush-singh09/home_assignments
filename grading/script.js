var button = document.querySelector(".but");
var input = document.querySelector(".inp");
var result = document.querySelector(".res");

button.addEventListener("click",function(){
    if(input.value == "")
    result.innerHTML = "Please Enter your Number";

    else check(input.value);
})

function check(str){
  if(str>50 || str<0)
  result.innerHTML = "Invalid Marks";
else if(str>=0 && str <= 10)
result.innerHTML = "Grade: E";
else if(str>=11 && str <= 20)
result.innerHTML = "Grade: D";
else if(str>=21 && str <= 30)
result.innerHTML = "Grade: C";
else if(str>=31 && str <= 40)
result.innerHTML = "Grade: B";
else if(str>=41 && str <= 50)
result.innerHTML = "Grade: A";
}