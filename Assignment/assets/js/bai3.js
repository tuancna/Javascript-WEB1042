function sum(){
    var table = document.getElementById("cart");
    var row = table.getElementsByTagName("tr");
    var price = 0, total = 0;

    for(let index = 0; index < 5; index++){
        var skuPrice = parseFloat(row[index + 1].children[2].innerHTML);
        var amount = row[index + 1].children[3].children[0].value;

        price = skuPrice * amount;

        row[index + 1].children[4].innerHTML = price;

        total += price;
    }

    document.getElementById("total").innerText = total;
}

function show(obj){
    var chkbox = obj.parentElement.parentElement;
    var amount = chkbox.children[3].children[0];
    if(amount.disabled == true){
        amount.disabled = false;
        amount.value++;
        sum();
    } else{
        amount.disabled = true;
        amount.value = '';
        sum();
    }
}

function select(select){
    var table = document.getElementById("cart");
    var row = table.getElementsByTagName("tr");
    var fltr = select.value;
    for(let index = 0; index < 5; index++){
        var price = parseFloat(row[index + 1].children[2].innerHTML);
        if(price < fltr){
            row[index + 1].style.display = "";
        } else{
            row[index + 1].style.display = "none";
            row[index + 1].children[0].children[0].checked = false;
            row[index + 1].children[3].children[0].value = "";
            row[index + 1].children[3].children[0].disabled = true;
            sum();
        }
    }
}