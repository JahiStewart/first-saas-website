function rollSixDice() {
    var total=0;
    for(let i=1; i<7; i++){
        var num=Math.floor(Math.random()*6) + 1
        document.getElementById("die"+i).value = num;
        total+=num
    } 
    document.getElementById("total").value= total;
}
function displayDice(){
    //Display Dice
    for(let i = 1; i < 7; i++) {
        document.body.innerHTML +=`<span>
                                Die #`+i+`: <input id="die`+i+`" type="text" value="" size="5" readonly>
                                </span>`
     }
    //Display Total
    document.body.innerHTML +='<br><br>Total: <input id="total" type="text" value="" size="5" readonly><br>'
}
