// Instructions :- Calculate the area of circle, square and rectangle, if the sum of all
// the three areas is greater than 200, display a message "Sum of Areas is greater than 200",
// if not then just display the product of all the three areas.
var r =1;
var l=2;
var b=1;
var circle=Math.PI*Math.pow(r,2);
var rect=l*b;
var square=Math.pow(r,2)
var sum= circle+rect+square;
if(sum>200){
    console.log("Sum of area is greater than 200");
}else{
    console.log(rect*square*circle);
}