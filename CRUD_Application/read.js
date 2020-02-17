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
      "http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true"
    );
    getInfo.send();
  });
}

async function getInfoFromServer() {
  var users = await getData();
  displayUses(users);
}

// function getInfoFromServer() {
//   var users = getData();
//   console.log(users);
// }

getInfoFromServer();

function displayUses(data) {
  data.map(function(obj) {
    //   Creating Option Element Dynamically
    var opt = document.createElement("option");

    // Adding Fname to the dynamic Option tag
    opt.innerHTML = obj.fname;

    document.getElementById("mySelect").appendChild(opt);
  });
}

function getUser() {
  var userFname = document.getElementById("mySelect").value;
  var selectedUser = data.filter(function(obj) {
    return obj.fname == userFname;
  });
  console.log(selectedUser);
}
