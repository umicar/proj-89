var score=0;
function update(){
    score=score +1;
    document.getElementById("score").innerHTML="Score : "+ score;
}

function save(){
    localStorage.setItem("score", score);
}

function next(){
    window.location="activity_2.html";

}