const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');

// โหลดรายการจาก Cookie เมื่อเปิดหน้าเว็บ
window.addEventListener('load', loadTodos);

// เมื่อคลิกปุ่ม New
newBtn.addEventListener('click', () => {
    const text = prompt('Enter a new TO DO:');
    if (text && text.trim() !== '') {
        addTodo(text.trim());
        saveTodos();
    }
});

function addTodo(text) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = text;

    //ถามยืนยันการลบ
    div.addEventListener('click', () => {
        if (confirm('Do you want to remove this TO DO?')) {
            div.remove();
            saveTodos();
        }
    });

    //วางไว้บนสุดของรายการเสมอ
    ftList.prepend(div);
}

//บันทึกข้อมูลเป็น JSON string ใน Cookie
function saveTodos() {
    const items = [];
    const elements = ftList.querySelectorAll('.todo-item');
    //เก็บจากล่างขึ้นบนเพื่อให้เวลาโหลดกลับมา prepend แล้วได้ลำดับเดิม
    for (let i = elements.length - 1; i >= 0; i--) {
        items.push(elements[i].textContent);
    }
    const json = JSON.stringify(items);
    document.cookie = `todos=${encodeURIComponent(json)}; path=/; max-age=31536000`;
}

//ดึง Cookie มาแสดงผล
function loadTodos() {
    const cookies = document.cookie.split(';');
    for (const c of cookies) {
        const [key, value] = c.trim().split('=');
        if (key === 'todos' && value) {
            try {
                const items = JSON.parse(decodeURIComponent(value));
                items.forEach(text => addTodo(text));
            } catch (e) {
                console.error(e);
            }
            break;
        }
    }
}