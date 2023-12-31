/*You are developing a booking appli-ation for a -inema+ The ti-ket pri-e depends on the type of the
viewer("-hild", "adult", or "senior")+ Write a program whi-h -al-ulates the pri-e a--ordingly and prints the total
pri-e to be paid+ Let’s assume the ti-ket pri-e for a -hild is Rs+ 100, adult ti-ket pri-e is Rs+ 150 and ti-ket pri-e
for a senior is Rs+ 120*/
let numberOfChilds=2;
let numberOfAdults=1;
let numberOfSenior=1;
 // price of the ticket based on childs,Adults,Seniors 
let child=100;
let Adults=150;
let Senior=120;
//Now for final price of the tickets is =
let totalprice=(numberOfChilds*child+numberOfAdults*Adults+numberOfSenior*Senior);
console.log("The Total Ticket price = "+ totalprice );