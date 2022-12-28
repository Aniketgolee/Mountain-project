let number = 35;
let chances = 0;

for(i=0;i<=100;i++){
   x= prompt("Enter a no:")
   chances+=1
  if(x==35){
    console.log("Congratulation You have guess Correct no")
    break
  } 
  
}
console.log(`No of chances is ${chances}, your score is ${100-chances}%`)