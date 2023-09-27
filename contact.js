// console.log("hello");
// alert("Selamat");
// document.write("cibai");

// Var

// VAR
// LET
// CONST


// var bisa dideklarasikan ulang (auto ketimpa)
    // var gelas = "air";
    // var gelas = "kopi";
    // console.log(gelas);

// let gabisa dideklarasikan ulang
    // let mangkok = "baso";
    // tapi bisa ganti data dengan panggil fungsinya
    // mangkok = "mie";
    // console.log(mangkok);

    // const gabisa dideklarasikan ulang, dan panggil valuenya ulang (cuma satu kali)
    // const piring = "nasi goreng";

// console.log(piring);

// data types

// primitive data types
    // let nama = "Rizqul"; // string
    // let age = 24; // number
    // let isMarried = false; // bool / boolean (y/n 0/1 true/false)

// nama saya Rizqul umur saya 24 thn
    // console.log("nama saya Rizqul umur saya 24 thn");   // cara 1 - basic
    // console.log(`nama saya ${nama}, umur saya ${age}`); // cara 2 - template string (bawa komponen)
    // console.log("nama saya", nama, "umur saya", age);   // cara 3 - koma (aga ribet)
    // console.log("nama saya "+nama+" umur saya "+age);   // cara 4 - plus

// operator = perhitungan dengan js

// let bilangan1 = 69; let bilangan2 = "420";

// let result = bilangan1 * bilangan2;
// console.log(result);

// untuk operator + dengan number dan string jadinya digabungin
// sisanya string dipaksa menjadi number

// condition (melakukan pengecekan value)
// = =
// = = =
// jika nilai diatas 75, lulus

// let nilai = 70;
// // return value bool
// if (nilai > 70) {
//     console.log("lulus"); // true
// } else {
//     console.log("gagal"); // false
// }

// function test
// function hello(){
//     let x = 50;
//     let y = 20;
//     let result = x + y;
//     console.log(result);
// }

// hello();

function submitData(){
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let tel = document.getElementById("input-tel").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-message").value;

    if (name === ""){
        return alert("Nama harus diisi.")
    }else if (email === ""){
        return alert("Email harus diisi.")
    }else if (tel === ""){
        return alert("Telpon harus diisi.")
    }else if (subject === ""){
        return alert("Subject harus diisi.")
    }else if (message === ""){
        return alert("message harus diisi.")
    };

    let emailReceiver = "rizqullahanjr@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo, nama saya ${name}, ${message}, tolong kontak saya di ${tel}, atau email saya di ${email}`
    a.click();

    let messenger = {
        name: name,
        email: email,
        tel: tel,
        subject: subject,
        message: message,
    };
    console.log(messenger);
}