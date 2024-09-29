function clr(){
    document.getElementById('results').value="";
}

function display(val){
    document.getElementById('results').value+=val;
}

function equte(){
    let x = document.getElementById('results').value;
    let y = eval(x)
    document.getElementById('results').value = y;
}