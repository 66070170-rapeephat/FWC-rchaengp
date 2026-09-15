$(document).ready(function() {
    $('.calculator').submit(function(e) {
        e.preventDefault();
        const l = $('#left').val().trim(), r = $('#right').val().trim(), op = $('#operator').val();

        // ตรวจสอบว่าเป็นจำนวนเต็มบวกหรือศูนย์
        if (!/^\d+$/.test(l) || !/^\d+$/.test(r)) return alert('Error :(');

        // ตรวจสอบการหารหรือmodด้วย 0
        if ((op === '/' || op === '%') && parseInt(r, 10) === 0) {
            console.log("It's over 9000!");
            return alert("It's over 9000!");
        }

        // คำนวณผลลัพธ์
        const res = eval(`${l} ${op} ${r}`);
        console.log(res);
        alert(res);
    });

    setInterval(() => alert('Please, use me...'), 30000);
});