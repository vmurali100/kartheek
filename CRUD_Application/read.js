var data;
//function create
// function getData() {
//   return new Promise(function(resolve, reject) {
// var getInfo = new XMLHttpRequest();
// getInfo.onreadystatechange = function() {
//   if (getInfo.readyState == 4 && getInfo.status == 200) {
//     data = JSON.parse(getInfo.response);
//     resolve(data);
//   }
// };
// getInfo.open(
//   "GET",
//   "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
// );
// getInfo.send();
//   });
// }
// console.log(getData());

// getData()
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function() {
//     console.log("Something went wrong");
//   });
// getData();

// function displayData() {
//   console.log(data);
// }
function getData() {
  return new Promise(function(resolve, reject) {
    var getInfo = new XMLHttpRequest();

    getInfo.onreadystatechange = function() {
      if (getInfo.readyState == 4 && getInfo.status == 200) {
        data = JSON.parse(getInfo.response);
        resolve(data);
      }
    };
    getInfo.open(
      "GET",
      "http://www.filltext.com/?rows=3&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    );
    getInfo.send();
  });
}

async function getInfoFromServer() {
  var users = await getData();
  displayUsers(users);
}

// function getInfoFromServer() {
//   var users = getData();
//   console.log(users);
// }

getInfoFromServer();

function displayUsers(data) {
  document.getElementById("myTable").innerHTML = "";
  data.map(function(obj, index) {
    var myTr = document.createElement("tr");
    //To iterate objects
    for (a in obj) {
      var myTd = document.createElement("td");
      myTd.innerHTML = obj[a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.setAttribute("onclick", "editUser(" + index + ")");
    var deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.setAttribute("onclick", "delteUser(" + index + ")");
    deleteBtn.innerHTML = "Delete";
    editTd.appendChild(editBtn);
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);
    document.getElementById("myTable").appendChild(myTr);
    //   Creating Option Element Dynamically
    // var opt = document.createElement("option");
    // Adding Fname to the dynamic Option tag
    // opt.innerHTML = obj.fname;
    // document.getElementById("mySelect").appendChild(opt);
  });
}

function editUser(index) {
  gindex = index;
  console.log(data[index]);
  var obj = data[index];
  for (a in obj) {
    document.getElementById(a).value = obj[a];
  }
}

function updateUser() {
  // Will be used to Clone an Object
  var updateObj = Object.assign({}, data[0]);

  for (a in updateObj) {
    updateObj[a] = document.getElementById(a).value;
  }
  console.log(updateObj);
  data[gindex] = updateObj;
  displayUsers(data);
  clearForm(updateObj);
}

function delteUser(index) {
  console.log(data[index]);
  data.splice(index, 1);
  displayUsers(data);
}
function getUser() {
  var userFname = document.getElementById("mySelect").value;
  var selectedUser = data.filter(function(obj) {
    return obj.fname == userFname;
  });
  console.log(selectedUser);
}

function createUser() {
  var newUser = Object.assign({}, data[0]);
  for (a in newUser) {
    newUser[a] = document.getElementById(a).value;
  }
  data.push(newUser);
  displayUsers(data);
  clearForm(newUser);
}
function clearForm(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}
