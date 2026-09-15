$(document).ready(function() {
    let size = 200, i = 0, colors = ['red', 'green', 'blue'];
    const $b = $('#balloon');

    const update = () => $b.css({ width: size, height: size, backgroundColor: colors[i] });

    $b.click(() => {
        size = (size += 10) > 420 ? (i = 0, 200) : (i = (i + 1) % 3, size);
        update();
    });

    $b.mouseleave(() => {
        if (size > 200) {
            size -= 5;
            i = (i + 2) % 3;
            update();
        }
    });
});