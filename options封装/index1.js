new Promise(function (resolve, reject) {
  console.log(1111);
  resolve(2222);
}).then(function (value) {
  console.log(value);
  return 3333;
}).then(function (value) {
  console.log(value);
  throw "An error";
}).catch(function (err) {
  console.log(err);
});