#ตรวจสอบจำนวน argument ถ้าเป็น 0 ให้แจ้งเตือน
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
for arg in "$@"
    do

mkdir "ex$arg"
    done
fi
