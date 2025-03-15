// topup.js

// ฟังก์ชันที่เรียกเมื่อช่องกรอกได้รับการคลิก
function removePlaceholder() {
    const linkInput = document.getElementById("truewallet-link");

    // ลบข้อความ placeholder เมื่อมีการคลิกเข้าไป
    linkInput.placeholder = "";
}

// ฟังก์ชันที่เรียกเมื่อเริ่มพิมพ์ในช่องกรอก
function clearExampleText() {
    const linkInput = document.getElementById("truewallet-link");

    // ถ้าผู้ใช้เริ่มพิมพ์ให้ลบ placeholder
    if (linkInput.value !== "") {
        linkInput.placeholder = "";
    }
}

function openTopupLink() {
    const linkInput = document.getElementById("truewallet-link");

    // เปิดลิงค์ในแท็บใหม่
    const link = linkInput.value;
    window.open(link, "_blank");

    // เคลียร์ค่าในช่องกรอกหลังจากที่เปิดลิงค์
    linkInput.value = "";
}
