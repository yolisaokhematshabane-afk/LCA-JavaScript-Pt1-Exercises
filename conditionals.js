//Create a variable called score and give it a value between 0 and 100
let score=80
//Create a variable called passingGrade and set it to 60
let passingGrade=60
//Write an if statement to check if score is greater than or equal to passingGrade
if(score >=passingGrade){
    console.log("The score is equal or greater than the passing mark")
}
//Add an else statement for when the score is below passingGrade

    else{
        console.log("The score is less than the passing mark")
    }
//Print "Passed" or "Failed" based on the score
let message = score >= passingGrade ? " Passed" : "failed";
console.log(message)
//Add another condition to check if the score is perfect (100)
if(score ===100){
    console.log("Perfect score!")
}
if(score<100){
    console.log("incorrect score")
}