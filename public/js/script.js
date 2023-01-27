// document.getElementById('menu-btn').innerHTML = "temp";
// // const menu = document.getElementById('menu');
// // console.log("btn" + btn);

// // btn.addEventListener('click', navToggle)

// // function navToggle() {
// //     console.log(btn);
// //   btn.classList.toggle('open')
// //   menu.classList.toggle('flex')
// //   menu.classList.toggle('hidden')
// // }


document.getElementById('menu-btn').addEventListener('click', navToggle);

console.log(document.getElementById('menu-btn'));

function navToggle() {
  document.getElementById('menu-btn').classList.toggle('open');
  document.getElementById('menu').classList.toggle('flex');
  document.getElementById('menu').classList.toggle('hidden');
}
