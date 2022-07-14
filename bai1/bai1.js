

function ketQuaThi(){
    var diemChuan = Number(document.getElementById("chuan").value);
    var diem1 = Number(document.getElementById("so1").value);
    var diem2 = Number(document.getElementById("so2").value);
    var diem3 = Number(document.getElementById("so3").value);

    var khuVuc = Number(document.getElementById("diemKhuVuc").value);
    var doiTuong = Number(document.getElementById("diemDoiTuong").value);
    var tongDiem = diem1 + diem2 + diem3 + khuVuc + doiTuong;
    var ketQua = "";
   

    if(diem1 == 0 || diem2 == 0 || diem3 ==0){
        ketQua = "Bạn đã rớt. Do có điểm liệt 0"

    }else if(tongDiem >= diemChuan){
        ketQua = " bạn đã đậu ;" + "tổng điểm :" + tongDiem;


    }else if(tongDiem < diemChuan){
        ketQua = "bạn đã rớt ;" + "tổng điểm : " + tongDiem;

    }
    document.getElementById("txtResult").innerHTML = ketQua;
        
        
    }
    document.getElementById("btnT").onclick = ketQuaThi;