/* You are developin2 a form validation system. Write a pro2ram that takes user information(such as name,
    email, a2e) and uses the typeof operator to check the data type of each input. Print appropriate messa2es
    like "Name should be a strin2," "Email should be a strin2," or "02e should be a number." if any field is not
    proper.*/
    let name="Mithun";
    let email="mithun.s@gmail.com"
    let age="21";
    if(typeof name!=="string "){
            console.log("Name should be String ");
    }else if(typeof email !=="string"){
        console.log("Email should be string type ");

    }else if(typeof age !=="number"){
        console.log("Age should be number ");

    }else{
        console.log("oh wrong typeof string ");

    }