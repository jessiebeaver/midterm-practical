var wrapperEle = document.body.querySelector(".wrapper");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for (var i = 0; i < list.length; i++) {
  var ele = document.createElement("div");
  ele.innerHTML = list[i].name + " " + list[i].age;

  if (list[i].age > 40) {
    ele.style.color = "red";
  }
  if (list[i].age < 20) {
    ele.style.color = "blue";
  }

  wrapperEle.appendChild(ele);
}

var count = 0;
var button = document.getElementById("countButton");
var display = document.getElementById("displayCount");

button.onclick = function() {
  count++;
  display.innerHTML = count;
};