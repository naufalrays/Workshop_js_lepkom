// Membuat object mobil
var mobil = {
    nama : "Xpander",
    merek : "Mitsubitsi",
    tipeMobil : "Mini Jeep",
    tahunDibuat : 2007,
    warna : "putih",
    majuKencang : function (){
        console.log("Mobil ini melaju dengan kecepatan 300Km/h");
    },
    majuPelan : function (){
        console.log("Mobil ini melaju dengan kecepatan 10Km/h");
    },
    mundur : function (){
        console.log("Mobil ini melaju kebelakang");
    },
    stop : function(){
        console.log("Mobil ini berhenti");
    }
};
