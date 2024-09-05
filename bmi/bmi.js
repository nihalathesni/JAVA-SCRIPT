var weight=78,height=1.68;
var bmi=weight/(height*height);


if( bmi <18.5){
    console.log("under weight")
}
else if( bmi >= 18.5 && bmi <=24.9){
    console.log("Normal Weight")
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log("Over Weight")
}
else{
    console.log("Obesity")
}