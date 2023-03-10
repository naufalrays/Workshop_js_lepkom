function buatObjectMahasiswa(nama, npm, email, jurusan){
    var mhs = {};
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs
}
var mhs3 = buatObjectMahasiswa("Rayhan", 55419360, "rayhan@gmail.com", "Teknik Informatika");