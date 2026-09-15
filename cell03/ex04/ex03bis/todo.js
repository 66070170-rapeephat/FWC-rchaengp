$(document).ready(function() {
    const $list = $('#ft_list');

    //บันทึกรายการลง cookie
    const save = () => {
        const todos = $list.children().map((_, el) => $(el).text()).get().reverse();
        document.cookie = `todos=${encodeURIComponent(JSON.stringify(todos))}; path=/; max-age=31536000`;
    };

    //แสดงรายการใหม่ที่ด้านบนสุด
    const addTodo = (text) => $('<div>', { class: 'todo-item', text }).prependTo($list);

    //ดึงข้อมูลจาก cookie มาแสดงผล
    const m = document.cookie.match(/todos=([^;]+)/);
    if (m) try { JSON.parse(decodeURIComponent(m[1])).forEach(addTodo); } catch (e) {}

    //กดปุ่ม New เพื่อเพิ่มรายการ
    $('#new-btn').click(() => {
        const text = prompt('Enter a new TO DO:');
        if (text && text.trim()) {
            addTodo(text.trim());
            save();
        }
    });

    //คลิกรายการเพื่อลบ
    $list.on('click', '.todo-item', function() {
        if (confirm('Do you want to remove this TO DO?')) {
            $(this).remove();
            save();
        }
    });
});