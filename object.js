function Person(nis, name, email, address, className) {
    this.nis = nis;
    this.name = name;
    this.email = email;
    this.address = address;
    this.className = className;
}

const javier = new Person(4422, 'JAVIER GAVRA', 'javiergavra@gmail.com', 'KUDUS', '10 PPLG 1');

javier.value = 
`NIS : ${javier.nis}
Nama : ${javier.name} 
Email : ${javier.email} 
Asal Kota : ${javier.address} 
Kelas : ${javier.className}`;


const zumar = new Person(4423, 'M. ZUMAR RAMADHAN ', 'zumarramadhan@gmail.com', 'KUDUS', '10 PPLG 1');

zumar.value = 
`NIS : ${zumar.nis}
Nama : ${zumar.name}
Email : ${zumar.email}
Asal Kota : ${zumar.address}
Kelas : ${zumar.className}`;

const rizal = new Person(4424, 'KHOIRU RIZAL ', 'khoirurizal@gmail.com', 'JOGJA', '10 PPLG 1');

rizal.value = 
`NIS : ${rizal.nis}
Nama : ${rizal.name}
Email : ${rizal.email}
Asal Kota : ${rizal.address}
Kelas : ${rizal.className}`;

// button 
document.getElementById('btn').addEventListener('click', function () {

    let nisValue = document.getElementById('nis').value;

    if (nisValue == javier.nis) {
        document.getElementById('result').value = javier.value;
    } else if (nisValue == zumar.nis) {
        document.getElementById('result').value = zumar.value;
    } else if (nisValue == rizal.nis) {
        document.getElementById('result').value = rizal.value;
    } else if (nisValue == '') {
        document.getElementById('result').value = 'MOHON ISI NIS TERLEBIH DAHULU';
    } else {
        document.getElementById('result').value = 'NIS TIDAK DITEMUKAN';
    }
});