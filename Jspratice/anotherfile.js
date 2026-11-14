// Destructuring, Spread Operator, Rest Parameter
const per1 ={
 name : "kk",
 age : 23,
 email : "kk.com"
}
const {name,email,gender} = per1;
 console.log(name);
const COPYper1={...per1}
console.log(COPYper1);

 
 const cities= ["Yangon","dala","pyay"]
 const [c1,c2 ,c3]= cities;
 console.log(c1);
 const CopyCities=[...cities];
 console.log(CopyCities);
 cities.push("hly")
 console.log(cities);
 cities.splice(1,1)
 console.log(cities);
 
 const calculate = ((...params) => {
    let total = 0;
    for (let i = 0; i < params.length ; i++){
        total += params[i]}
        return total;
        
 })()
 
calculate(2,2,2,2)