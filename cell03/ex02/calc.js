// ฟังก์ชันตรวจสอบว่าเป็นจำนวนเต็มบวกหรือศูนย์
function isValidPositiveInteger(str) {
    const trimmed = str.trim();
    if (!/^\d+$/.test(trimmed)) {
        return false;
    }
    const num = Number(trimmed);
    return Number.isInteger(num) && num >= 0;
}

function calculate(event) {
    event.preventDefault();

    const leftInput = document.getElementById('left').value;
    const rightInput = document.getElementById('right').value;
    const operator = document.getElementById('operator').value;

    // ตรวจสอบค่าต้องเป็นจำนวนเต็มบวกหรือศูนย์เท่านั้น
    if (!isValidPositiveInteger(leftInput) || !isValidPositiveInteger(rightInput)) {
        alert('Error :(');
        return;
    }

    const left = parseInt(leftInput, 10);
    const right = parseInt(rightInput, 10);

    // ตรวจสอบการหารหรือmodด้วย 0
    if ((operator === '/' || operator === '%') && right === 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    let result = 0;
    switch (operator) {
        case '+':
            result = left + right;
            break;
        case '-':
            result = left - right;
            break;
        case '*':
            result = left * right;
            break;
        case '/':
            result = left / right;
            break;
        case '%':
            result = left % right;
            break;
    }

    alert(result);
    console.log(result);
}

// แจ้งเตือนทุกๆ 30 วินาที
setInterval(() => {
    alert('Please, use me...');
}, 30000);