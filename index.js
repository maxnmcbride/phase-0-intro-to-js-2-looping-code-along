const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);




function writeCards(arrayOfNames, occassion){
    const cards =[]
    // this is the new empty array to hold the messages
    for(let i = 0; i < arrayOfNames.length; i++){
        // this allows the function to iterate through the input array
        cards.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${occassion} gift!`);
        // push adds info to end of array and returns the new length
    }
    return cards
}

function countDown(){
    let countDown = 10;
    while (countDown >= 0){
        console.log(countDown--);
    }
}