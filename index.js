var myAdjectives = ["big", "small", "great", "ugly", "intelligent", "cuorius", "crazy", "smelly", "awesome"];
var myNouns = ["driver", "aunt", "neighbor", "dog", "mother", "son", "boss", "great=grandad", "nephew", "teacher"];
var myVerb = ["drove", "jumped", "flew", "walked over", "ran over", "pushed", "fired", "sent"];
var myPersonalNoun = ["computer", "car", "home", "rain", "mental health", "pencil", "notebook", "cousin", "keys", "kids"];
var myPlace = ["my home", "my bed", "my doctor's office", "my school", "car dealer", "theatre", "garabe"];



function clickFunction(){

    wordSelectorFromArray(myAdjectives, "adjective");
    wordSelectorFromArray(myNouns, "noun");
    wordSelectorFromArray(myVerb, "verb");
    wordSelectorFromArray(myPersonalNoun, "personalNoun");
    wordSelectorFromArray(myPlace, "place");
}



function wordSelectorFromArray(theArray, theId){

    var firstLength = theArray.length-1;
    var myRandomNumber = Math.random()*firstLength;
    var myRoundedNumber = Math.floor(myRandomNumber);
    
    document.getElementById(theId).innerHTML = theArray[myRoundedNumber];
    
}