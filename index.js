// Bài 1: Tìm số nguyên dương nhỏ nhất
function sum1() {
    let sum = 0;
    let n = 0;
    for (let j = 0; sum < 10000; j++) {
        sum += j;
        if (sum > 10000) {
            return n;
        }
        n++;
    }
}
document.getElementById("bai1").innerHTML = "Số nguyên dương nhỏ nhất: " + sum1();

// Bài 2: Viết chương trình nhập vào 2 số x, n. Tính tổng S(n) = x + x^2 + x^3 + ... + x^n

let result2 = document.getElementById("bai2");
document.getElementById("btn2").onclick = function () {
    let x = document.getElementById("soX").value;
    let n = document.getElementById("soN").value;
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += Math.pow(x, i)
    }
    result2.innerHTML = sum;
}

// Bài 3: Nhập vào n. Tính giai thừa 1*2*...n

let result3 = document.getElementById("bai3");
document.getElementById("btn3").onclick = function () {
    let n = +document.getElementById("numN").value;
    let factorial = 1;
    if (n === 0 || n === '') {
        alert("Nhập không hợp lệ!!")
    } else {
        for (let i = 1; i <= n; i++) {
            factorial *= i;
        }
        result3.innerHTML = factorial;
    }

}

// Bài 4: Tạo thẻ 10 Div
let bai4 = document.getElementById("bai4");
let btn4 = document.getElementById("btn4")
function event4() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        let divEl = document.createElement("div");
        result = bai4.appendChild(divEl);
        divEl.style.color = "#fff"
        if (i % 2 === 0) {
            result++;
            divEl.innerHTML = "Div chẵn"
            divEl.style.backgroundColor = "red";
        } else {
            result++;
            divEl.innerHTML = "Div lẻ"
            divEl.style.backgroundColor = "blue"
        }
    }
    btn4.disabled = true;
}
btn4.addEventListener("click", event4);

// Bài 5: In số nguyên tố
function testPrime(n) {
    if (n < 2) {
        return false;
    } else if (n === 2) {
        return true;
    } else if (n % 2 === 0) {
        return false;
    } else {
        for (let i = 3; i <= Math.sqrt(n); i += 2) {
            if (n % i === 0) {
                return false;
            }
        }
    }
    return true;
}
let result5 = document.getElementById("bai5");
document.getElementById("btn5").onclick = function () {
    let n5 = +document.getElementById("numN5").value;
    for (let i = 0; i <= n5; i++) {
        if (testPrime(i)) {
            result5.innerHTML += " " + i;
        }
    }
}



