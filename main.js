
var chieu_dai = Number,
    chieu_rong = Number,
    chieu_cao = Number,
    ban_kinh = Number;

function tinhdientich(chieu_rong, chieu_dai, chieu_cao, ban_kinh){
    if(chieu_dai === 0 || chieu_rong === 0 || chieu_cao === 0 || ban_kinh === 0 ){
        console.log("dien tich bang 0");
    }
    if( chieu_dai != 0 && chieu_rong != 0){
        console.log(" dien tich hinh chu nhat bang: " + chieu_dai * chieu_rong);
    }
    if( ban_kinh != 0){
        console.log(" dien tich hinh tron bang: " + (ban_kinh * ban_kinh)* Math.PI);
    }
    if( chieu_cao != 0){
        console.log(" dien tich hinh tam giac bang: " + 1/2 * chieu_cao * chieu_dai );
    }
}

tinhdientich(0,0,0,3);






