class Temperature {
    constructor(){
        this.celsius=0;
        this.fehrenheit=32;

    }
    // getter for celsius temperature 
    get getCelsius(){
        return this.celsius;
    }
    //setter for celsius temperature 
      set setCelsius(value){
        if(typeof value=== 'number '){
            this.celsius=value;
            this.fehrenheit =(value*9/5)+32;

        }else{
            console.log('Invalid input please provide a number for celsius temparature .');
        }
}
//getter for fahrenheit temperature 
get getFahrenheit(){
    return this.fehrenheit;
}
// setter for fahrenheit temperature 
set setFahrenheit(value){
    if(typeof value=== 'number'){
        this.fehrenheit=value;
        this.celsius=(value-32)*5/9;

    }else{
        console.log('Invalid input please provide a number for fahrenheit temperature .');
    }
}
}
const temparature=new Temperature();
console.log(`Initial celsius :${temparature.getCelsius}°C`);
console.log(`Initial fahrenheit:${temparature.getFahrenheit}°F`);

temparature.setCelsius= 24;
console.log(`celsius :${temparature.getCelsius}°C`);
console.log(` fahrenheit :${temparature.getFahrenheit}°F`);
// sir please check i am not able to find correct output ..so please guid me ..........