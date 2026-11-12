const per1= {
    name : "kaung",
    age : 23,
    height : 175,
    is_empluee : true,
    //method(in object)
    walk : (()  => {
        let num= 4;
        if (num >= 0){
        return "He is Walking";
        }
        else{
            return "He is't Walking";
        }
    })(),
    eat : (() => {
        let num=3;
        let isDoing="";
        switch(num){
            case 1 : isDoing ="He is eating";
            break;
            case 2 : isDoing ="He is working";
            break;
            case 3 : isDoing ="He is not at Place";
            break;
            default : isDoing ="Absent"

        }
        return isDoing;

    })()
}

console.log(per1);
console.log(per1["name"]);
per1.hobby = "Programming";
console.log(per1);
per1.height="250m";
console.log(per1);

const inputName="KK";
const inputAmount="22222"; 
const properName= "donatedby" + inputName;
per1[properName]= inputAmount
console.log(per1);
console.log(per1.hobby);
console.log(per1["height"]);



log



