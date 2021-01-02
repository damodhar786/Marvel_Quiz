var readlineSync = require("readline-sync"); // syntax to read the data
const chalk = require('chalk'); //syntax to style the sheet

console.log(chalk.whiteBright.bold("Welcome to Marvel Cinematic Universe \n"));

var score = 0;

//Array of Quiz questions
let quizList = 
[
  {
    question: ("1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?"),
        a: "[a] 2005",
        b: "[b] 2008",
        c: "[c] 2010",
        d: "[d] 2012",
    correctAnswer:"b",
  },
  {
    question: ("2. What is the name of Thor’s hammer?"),
        a: "[a] Mjolnir",
        b: "[b] Vanir",
        c: "[c] Aesir",
        d: "[d] Norn",
    correctAnswer:"a",
  },
  {
    question: ("3.What is Captain America’s shield made of?"),
        a: "[a] Adamantium",
        b: "[b] Promethium",
        c: "[c] Vibranium",
        d: "[d] Carbonadium",
    correctAnswer:"c",
  },
  {
    question: ("4. The Flerkens are a race of extremely dangerous aliens that resembles what?"),
        a: "[a] Raccoons",
        b: "[b] Ducks",
        c: "[c] Reptiles",
        d: "[d] Cats",
    correctAnswer:"d",
  },
  {
    question: ("5. Before becoming Vision, what is the name of Iron Man’s A.I. butler?"),
        a: "[a] H.O.M.E.R.",
        b: "[b] J.A.R.V.I.S.",
        c: "[c] A.L.F.R.E.D.",
        d: "[d] M.A.R.V.I.N.",
    correctAnswer:"b",
  },
  {
      question: ("6. What fake name does Natasha use when she first meets Tony?"),
        a: "[a] Natalie Rushman",
        b: "[b] Natalia Romanoff",
        c: "[c] Nicole Rohan",
        d: "[d] Naya Rabe",
    correctAnswer:"a",
  },
  {
    question: ("7. What song does Baby Groot dance to at the end of the first Guardians of the Galaxy?"),
        a: "[a] ‘Cherry Bomb’ – The Runaways",
        b: "[b] ‘Ain’t No Mountain High Enough’ – Marvin Gaye & Tammi Terrell",
        c: "[c] ‘I Want You Back’ – The Jackson 5",
        d: "[d] ‘Hooked On A Feeling’ – Voidoid",
    correctAnswer:"c",
  },
  {
    question: ("8. What type of doctor is Stephen Strange?"),
        a: "[a] Neurosurgeon",
        b: "[b] Cardiothoracic Surgeon",
        c: "[c] Trauma Surgeon",
        d: "[d] Plastic Surgeon",
    correctAnswer:"a",
  },
  {
    question: ("9. What is the name of the organisation revealed to have taken over S.H.I.E.L.D. in Captain America: The Winter Soldier?"),
        a: "[a] M.O.S.S.A.D",
        b: "[b] M.I.6",
        c: "[c] M.O.R.A.G",
        d: "[d] H.Y.D.R.A",
    correctAnswer:"d",
  },
  {
    question: ("10. What is the real name of the Scarlet Witch?"),
        a: "[a] Wanda Maximoff",
        b: "[b] Anne Weying",
        c: "[c] Carol Danvers",
        d: "[d] Natasha Romanoff",
    correctAnswer:"a",
  }
]

// function to confirm
function playingrnot()
{
  if(readlineSync.keyInYN(chalk.whiteBright.bold("Are you a Marvel Fan!! \n \n")))
  {
    userdetails(); // calling of user datails
    playgame(); //calling for game questions
  }
  else
  {
    console.log("\n\nThank you!! Have a Great Day......");
  }
}


// Confirm before play - fuction call
playingrnot(); 


// function for user details
function userdetails()
{
    var name = readlineSync.question("\nPlease Enter your Name to start the game....... ");
    console.log("\n Hello!  " + name + "\n Please read Rules and Guidelines before staring the game: \n")
  
    console.log("  1. Game is of 10 questions. \n  2. Each question carries 5 points \n  3. Correct Answer:     5 points \n     Incorrect Answer:  -2 points \n");
      
         
}

//function for Quiz
function playgame()
{
    for(var i = 0;i < quizList.length;i++)
    {
      var questions = quizList[i].question;
      var option1 = quizList[i].a;
      var option2 = quizList[i].b;
      var option3 = quizList[i].c;
      var option4 = quizList[i].d;
      console.log(questions,"\n");
      console.log(option1);
      console.log(option2);
      console.log(option3);
      console.log(option4);
      var userAnswer = readlineSync.question("Your Answer:  \n");
      if(userAnswer.toLowerCase() == quizList[i].correctAnswer.toLowerCase())
      {
        score = score + 5;
        console.log("Amazing!! Correct Answer (+5)\n Current Score: ",score);
        console.log("--------------------------------------------------------------------------------")
      }
      else
      {
        score = score - 2;
        console.log("Oopps!! Wrong Answer (+5)\n Current Score: ",score);
        console.log("--------------------------------------------------------------------------------")
      }

    }
    console.log("The Game Ended.......\n THANK YOU for Playing \n");
    
    console.log("--------------------------------------------------------------------------------")
    
    leaderBoard();
}
 function leaderBoard()
{
  console.log("Hurrayyy!! you scored: ", score);
  console.log("--------------------------------------------------------------------------------")
  var highScores=[
                  {name:"Pari",score: 50},
                  {name:"Dhiru",score: 48},
                  {name: "Prashanth",score: 46},
                  {name: "Dam",score: 45},
                  //{name: name,score: score}
                  ];
  console.log("Leader Board ")
  for(i = 0;i < highScores.length;i++)
  {
   console.log((i+1)+"  Name : "+highScores[i].name + ",  Score : "+highScores[i].score); 
  }
}