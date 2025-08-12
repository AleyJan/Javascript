var arr=[34,23,56,87,1,45,88];
var input=parseInt(prompt('enter number to find'));
console.log("user input=", input);
var found= false;
for(var i=0; i<arr.length; i++){
   // console.log(arr[i]);
    if(arr[i]===input){
        console.log("found"+input+"on index="+i);
        found=true;
        break;
    }
}
if(!found){
    console.log("Not found");
}