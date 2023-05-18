player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

player1_score=0;
player2_score=0;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
question_turn=player1_name;
answer_turn=player2_name;
product="";
answer="";
function send(){
    get_num1=document.getElementById("number1").value;
    get_num2=document.getElementById("number2").value;
    console.log(get_num1);
    console.log(get_num2);
    product=Number(get_num1)*Number(get_num2);
    question="<h4 id='word_display'>Question: "+get_num1+" X "+get_num2+"</h4><br>";
    answer="<h4>Answer: <input id='input_check_box' class='form-control' type='text'></h4><br>";
    button="<button class='btn btn-info' onclick='check()'>Check</button><br>";
    row=question+answer+button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

function check(){
    answer=document.getElementById("input_check_box").value;
    console.log(answer);
    if(answer==product){
        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question Turn - "+player2_name;
    }
    else {
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
    }
    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;
    }
    else {
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer Turn - "+player1_name;
    }
    document.getElementById("output").innerHTML="";
}