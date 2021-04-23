//Đồng hồ
function clock(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    document.getElementById("clock").innerHTML = '[' + day + '/' + month + '/' + year + ' - ' + hour + ":" + minute + ":" + second + ']';
}

setInterval("clock()", 1000);

//Đếm số lần giải, lưu vào localStorage
function localSave(){
    var solveCount = localStorage.getItem("solveCount");

    if(solveCount == null){
        solveCount = 0;
    }

    solveCount++;

    localStorage.setItem("solveCount", solveCount);
}

var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope){
    $scope.solveC = localStorage.getItem("solveCount");

    if($scope.solveC == null){
        $scope.solveC = 0;
    }

});

//Hàm random
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function change(){
    var a = document.getElementById("numberA").value;
    var b = document.getElementById("numberB").value;
    var c = document.getElementById("numberC").value;

    if(a < 0){
        document.getElementById("a").innerText = '(' + a + ')';
    } else{
        document.getElementById("a").innerText = a;
    }
    
    if(b < 0){
        document.getElementById("b").innerText = '(' + b + ')';
    } else{
        document.getElementById("b").innerText = b;
    }
    
    if(c < 0){
        document.getElementById("c").innerText = '(' + c + ')';
    } else{
        document.getElementById("c").innerText = c;
    }
}

document.getElementById("giai").disabled = true;

var equa = new Object();
equa.a = document.getElementById("numberA").value;
equa.b = document.getElementById("numberB").value;
equa.c = document.getElementById("numberC").value;
equa.varRandom = function(){
    document.getElementById("rs").innerHTML = "Kết quả của phương trình";
    document.getElementById("x1").innerHTML = "";
    document.getElementById("x2").innerHTML = "";
    this.a = document.getElementById("numberA").value = random(-10, 10);
    this.b = document.getElementById("numberB").value = random(-10, 10);
    this.c = document.getElementById("numberC").value = random(-10, 10);

    document.getElementById("giai").disabled = false;

    change();
}

equa.solve = function(){
    document.getElementById("giai").disabled = true;

    localSave();
    var solveCount = localStorage.getItem("solveCount");

    if(solveCount == null){
        solveCount = 0;
    }

    document.getElementById("scnt").innerText = 'Bạn đã giải được: ' + solveCount + ' lần!';

    if(this.a == 0){
        document.getElementById("rs").innerText = "Không phải phương trình bậc 2.";
        document.getElementById("x1").innerText = "Kết quả phương trình bậc 1";
        if(this.b != 0){
            document.getElementById("x2").innerText = "X = " + (-this.c / this.b).toFixed(2);
        } else{
            document.getElementById("x2").innerText = "Vô nghiệm";
        }
        return;
    }

    var delta = this.b * this.b - 4 * this.a * this.c;

    if(delta < 0){
        document.getElementById("rs").innerHTML = "Phương trình vô nghiệm.";
        document.getElementById("x1").innerHTML = "";
        document.getElementById("x2").innerHTML = "";
        return;
    } else if(delta == 0){
        document.getElementById("rs").innerHTML = "Phương trình có nghiệm kép.";
        document.getElementById("x1").innerHTML = "X = " + (-this.b / 2 * this.a).toFixed(1);
        document.getElementById("x2").innerHTML = "";
        return;
    } else{
        document.getElementById("rs").innerHTML = "Phương trình có 2 nghiệm phân biệt.";
        document.getElementById("x1").innerHTML = "X1 = " + ((-this.b + Math.sqrt(delta)) / 2 * this.a).toFixed(1);
        document.getElementById("x2").innerHTML = "X2 = " + ((-this.b - Math.sqrt(delta)) / 2 * this.a).toFixed(1);
        return;
    }
}

