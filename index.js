console.log("Hello World!");

$("#submit-btn").click(function(){
  var ipInt;
  var intAddress=0;
  var ipstring = $('#ip-input').val().split('.');
  console.log(ipstring);
  if(ipstring.length>4){
    $('#int-value').html('invald format');
  }
  else if (ipstring<4) {
    $('#int-value').html('invalid format');
  }
  else{
    for(var i = 0; i < ipstring.length; i++) {
      ipInt = parseInt(ipstring[i]) * Math.pow(256,3-i);
      console.log(ipInt);
      intAddress = intAddress + ipInt;
      console.log(intAddress);
      $('#int-value').html(intAddress);
    }
  }
});
