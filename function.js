
btn=document.querySelectorAll("button"); //returns nodelist of all btns
const clickSound = document.getElementById('click-sound'); // accessing audio of button clicked
const congo=document.getElementById('congo');// accessing audio of congratulations!
congo_text=document.querySelector("p");//accessing for printing the congratulation msg 
reload_=document.querySelector(".reset");//accessing to reload the browser

let a,b; //making it global
ask();
function ask(){
 a=prompt("Name of player1 (0) => ");
 b=prompt("Name of player2 (x) => ");

if(a=="" || b==""){
  alert("Please write your names to play the game");
  ask();
}
}
// winning conditions
const winner_cond=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]     
    ];

    //function definition of arrow function
  const check=()=>{
    for(let cond of winner_cond){
        let pos_1=btn[cond[0]].innerText;
        let pos_2=btn[cond[1]].innerText;
        let pos_3=btn[cond[2]].innerText;

        if (pos_1!=""&& pos_2!=""&& pos_3!=""){

            if(pos_1===pos_2 && pos_2 ===pos_3){
            congo.play(); //playing clicked sound
            if(pos_1=="0"){
            congo_text.innerText=`Congratulations ${a}. You have won the match . Regards, Sarthak Niroula `;
            congo_text.style.color="red";
            }

            else{
              congo_text.innerText=`Congratulations ${b}. You have won the match . Regards, Sarthak Niroula `;
              congo_text.style.color="green";

            }

            draw++; //checking if it wins at 9th press

            for(let val of btn){
            val.disabled=true; //disabling all the buttons if winner is found
            }
          }
        }
    }

    if(count==9 && draw==0){ // check this cond only if winner isn't found in the above iteration
      congo_text.innerText=`Match tied. Regards, Sarthak Niroula `;
  
      
    }
};

let decide=true; //identifying the player 0 and x
let count=0; // counting for assuring is it is draw
let draw=0;

btn.forEach((val) => {
    val.addEventListener("click", ()=>{
      clickSound.play(); // playing button clicked sound

        if (decide==true){
        val.innerText="0"; //printing 0 on button
        val.style.color="red";//changing color to red
        decide=false;
        count++;
        }
        else{ 
            val.innerText="x";//printing x on button
            decide=true;
            count++;

        }
        val.disabled=true;

        check(); // function call of arrow function
        
    }); 
});


reload_.addEventListener("click",()=>{
  clickSound.play(); 
  location.reload();
});






