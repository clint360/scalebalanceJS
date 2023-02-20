const form = document.querySelector('form');
const result = document.querySelector('#displayresult')

form.addEventListener("submit", (e) => {
e.preventDefault();
let num1 = parseInt(e.target.n1.value);
let num2 = parseInt(e.target.n2.value);
let listed = e.target.list.value;
let x, y, a, b
let arr = listed.split(",");
let numlist = [];
let toBeBalanced = [num1, num2];
let found = false
for (let i = 0; i < arr.length; i++) {
  numlist.push(parseInt(arr[i]));
}
if ((e.target.n1.value.length === 0) || (e.target.n2.value.length === 0)) {

  result.style.color = "red"
result.textContent = "Please input Values!!"
} else {
numlist.sort();
for (let i = 0; i < 2; i++) {
  for (let i = 0; i < numlist.length; i++) {
    if ((numlist[i])) {}
  } 
}

for (let i = 0; i < numlist.length; i++) {
  for (let j = 0; j < numlist.length; j++) {
   x = toBeBalanced[0] + numlist[i];
   y = toBeBalanced[1] + numlist[j];
   if (x === y) { 
    found = true;
    a = numlist[i]
    b = numlist[j]
    break;
   }
   if (found) {
   
    break;
   }   
  }
  if (found) {
    let resultarray = [a, b]
    resultarray.sort()
    result.textContent = ` ${resultarray} is needed to balance ${toBeBalanced}`
  } else {
    result.style.color = "white"
    result.textContent = `Scale Imbalanced`
  }
}
}
})


