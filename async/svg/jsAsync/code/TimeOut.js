function delay (t, p) {
  var promise = new Promise(function resolve, reject) {
    setTimeOut( function () {
      var r = Math.random();
      if ( r > p ){
        console.log("resolved");
        resolve(r);
      } else {
        reject(r);
      } //end else
    }, r);
});
return promise;
}
