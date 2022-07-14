

const moc1 = 500;
const moc2 = 650;
const moc3 = 850;
const moc4 = 1100;
const moc5 = 1300;


function tinhTienDien(){
    var ten = document.getElementById("hoten").value;
    var soDien = Number(document.getElementById("soKW").value);

    var tienDien = "";
    if(0 < soDien && soDien <= 50){
            tienDien = soDien * moc1;
    }else if(50 < soDien && soDien <= 100){
        tienDien = (50 * moc1)+ ((soDien-50 )* moc2);

    }else if(100 < soDien && soDien <=200){
            tienDien = (50 * moc1)+ (50 *moc2) +((soDien - 100)* moc3);
    }else if(200 < soDien && soDien <=350){
            tienDien =  (50 * moc1)+ (50 *moc2)+ (100 * moc3) + ((soDien -200)* moc4);
    }else if(350 < soDien){
        tienDien = (50 * moc1)+ (50 *moc2)+ (100 * moc3) + (150 * moc4) + ((soDien - 350)* moc5);

    }else{
        alert("nhập lại số kw");
    }
    document.getElementById("txt").innerHTML ="họ tên : "+ ten + "; tiền điện : " + tienDien +" vnd";
        

    
}
document.getElementById("btnT").onclick = tinhTienDien;