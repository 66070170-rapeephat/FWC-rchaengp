#!/bin/bash

# ตรวจสอบว่าไม่มีการส่ง argument เข้ามาหรือไม่
if [ $# -eq 0 ]; then
    echo "No arguments supplied"
else
    # แสดง argument ตัวที่ 1 ถ้ามี
    if [ -n "$1" ]; then
        echo "$1"
    fi
    # แสดง argument ตัวที่ 2 ถ้ามี
    if [ -n "$2" ]; then
        echo "$2"
    fi
    # แสดง argument ตัวที่ 3 ถ้ามี
    if [ -n "$3" ]; then
        echo "$3"
    fi
fi
