


document.getElementById('btnTinhdiem').onclick=function () {
    // input: điểm chuẩn, điểm 3 môn, khu vực ưu tiên, đối tượng ưu tiên
var diemChuan = Number(document.getElementById('diemChuan').value);
var diem1 = Number(document.getElementById('mon1').value);
var diem2 = Number(document.getElementById('mon2').value);
var diem3 = Number(document.getElementById('mon3').value);
var diemKV = Number(document.getElementById('khuVuc').value);
var diemDoituong = Number(document.getElementById('doiTuong').value);
// output: kết quả đậu/rơt và điểm tổng
var ketQua_b1 = '';

// Xử lý: 

// tính tổng điểm

var tongDiem = diem1 + diem2+ diem3 + diemKV + diemDoituong;

if (tongDiem >= diemChuan) {

    ketQua_b1 = "Đậu và " + "Tổng điểm = " + tongDiem; 
    
} else {
    ketQua_b1 = "Rớt và " + "Tổng điểm = " + tongDiem; 
    
}

// in ra giao diện

document.getElementById('ketQua_B1').innerHTML = ketQua_b1;

}

// Bài 2

document.getElementById('btnTinhTien').onclick = function () {
    var yourName = document.getElementById('Name').value;
    var eQuantity = Number(document.getElementById('quantity').value);
    var tienDien = 0;
    
    if (eQuantity >= 0 && eQuantity <= 50) {
        tienDien = 500* eQuantity; 
    } else if (eQuantity> 50 && eQuantity <=100) {
        tienDien = 500*50 + 650* (eQuantity-50); 
    } else if (eQuantity>100 & eQuantity <= 200)
    {
        tienDien = 500*50 + 650*50 +850* (eQuantity-100);
    }
    else if (eQuantity>200 && eQuantity <=350) {
        tienDien = 500*50 + 650*50 +850*100 + 1100*(eQuantity-200);
    }
    else if (eQuantity>350)
    {
        tienDien = 500*50 + 650*50 +850*100 + 1100*150 + 1300*(eQuantity-350);
    }
    else {
        tienDien = "không xác định";
    }

    // xuất ra giao diện
    document.getElementById('ketQua_2').innerHTML = "Tiền điện của bạn " + yourName + " là: " + tienDien + " VND";
}

