// Feet To Mile Start
// 1 mile = 5280 feet

function feetToMile(feet){
    var mile = feet/5280 ;
    if(feet<=0){
        return 'Feet can not be negative or Zero.Please enter the positive velue';
    }
    return mile;
}

console.log(feetToMile(10));
// Feet To Mile End



//woodCalculator Start
// 1 Chair = 1 cubic feet wood
// 1 table = 3 cubic feet wood
// 1 bed = 5 cubic feet wood
function woodCalculator(chair,table,bed){

    var woodAmountOfChair  = 1*chair;
    var woodAmountOfTable  = 3*table;
    var woodAmountOfBed    = 5*bed; 
    var totalAmountOfWood = woodAmountOfChair+woodAmountOfTable+woodAmountOfBed;

    if(chair<=0 || table<=0 || bed<=0){
        return 'Please enter positive number';
    }
    return totalAmountOfWood;

}

console.log(woodCalculator(2,1,2));
//woodCalculator End


// brickCalculator Start
//1th - 10th floor  = 15 feet
//11th - 20th floor = 12 feet
//21th - ??????     = 10 feet
// 1feet = 1000 brick
function brickCalculator(amountOfFloor){

    if(amountOfFloor <= 0){
        return 'Amount of floor can not be a negative or Zero. Please enter positive value'
    }
    else if(amountOfFloor<11){
        return 15*1000*amountOfFloor;
    }
    else if(amountOfFloor>10 && amountOfFloor<21){
        return (amountOfFloor-10)*12*1000 + (10*1000*15);
    }
    else{
        return (amountOfFloor-20)*10*1000 + (10*1000*15) + (10*1000*12);
    }

}

console.log(brickCalculator(10));
// brickCalculator End




// tinyFriend Start 
var friendsName = ['Tamal','Omit','Sourob','Dhrbo','Amit','Omi','Om'];
var smallFriend = friendsName[0];


function tinyFriend(friendsName){

    for(var i=0 ; i<friendsName.length ; i++){
       var friend = friendsName[i];
       
       if(friend.length == 0){
           return 'Empty string can not be a name . Please enter valid name in array'
       }
       if(friend.length<smallFriend.length){
           smallFriend = friend;
       }
    }
    return smallFriend;
}

console.log(tinyFriend(friendsName));
// tinyFriend End 
