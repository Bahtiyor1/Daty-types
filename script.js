let string = prompt("String typedagi malumot kiriting");
let number = prompt("Number typedagi malumot kiriting");
let boolean = prompt("boolean typedagi malumot kiriting");

let isConfirmed = confirm(`hamma malumotlarni to'g'ri kiritganizga ishonchingiz komilmi?`);

if (isConfirmed) {
    console.log(`string ${string}`);
    console.log(`number ${number}`);
    console.log(`boolean ${boolean}`);

    alert(`Siz kiritgan ${string} sozi string typeda tegishli \nSiz kiritgan ${number} sozi number typeda tegishli \nSiz kiritgan ${boolean} sozi boolean typeda tegishli`);
}
