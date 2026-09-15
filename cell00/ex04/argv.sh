#ตรวจสอบว่าส่งargument เข้ามาไหม
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    #แสดตัวที่ 1 ถ้ามี
    if [ -n "$1" ]; then
        echo "$1"
    fi
    #แสดตัวที่ 2 ถ้ามี
    if [ -n "$2" ]; then
        echo "$2"
    fi
    #แสดงตัวที่ 3 ถ้ามี
    if [ -n "$3" ]; then
        echo "$3"
    fi
fi
