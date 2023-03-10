// Jika menggunakan object
var mahasiswa = {
    nama : "Rayhan Naufal Herlano",
    npm : 55419360,
    kelas : "4IA01",
    jurusan : "Teknik Informatika",
    IPSemester : [3.7, 3.8, 3.8, 3.8, 3.9, 4],
    IPKumulatif : function(){
        var total = 0;
        var ip = this.IPSemester;
        for(var i = 0; i < ip.length; i ++){
            total += ip[i];
        }
        return total/ip.length;
    }
}
mahasiswa.IPKumulatif();