let num =2;
 if (num =2){
    console.log("findde");
    
 }
 const calculate = (...params) =>{
   let total = 0;
   for (let i=0;i<params.length;i++)
      {total += params[i];
      }
      return total
 }
 console.log(calculate(1,2,3,4,5));
 let result = calculate(2,4,32,3)
console.log(result);
 


const sendData=(callback) =>{
   console.log("kdfjaskfjaslfjks");
   const arr=[1,2,3,5,6];
   let total = 0;
   for (let i=0;i<arr.length;i++)
      {total += arr[i];
         }
         console.log(total);
         
      console.log("finish");
      callback();

}
const recievedata =()=>{
   console.log("Recieced");
   
   const aceptdata = () =>{
      console.log("Acepted");
      
   }
   sendData(aceptdata);
}
recievedata()
