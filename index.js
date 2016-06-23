console.log("Hello World!");

$("#submit-btn").click(function(){
  var ipInt;
  var intAddress=0;
  var ipstring = $('#ip-input').val().split('.');
  console.log(ipstring);
  if(ipstring.length>4||ipstring.length<4){
    $('#int-value').html('invalid address');
  }
  else{
    for(var i = 0; i < ipstring.length; i++) {
      if(ipstring[i]>255 || ipstring[i]<0 || isNaN(ipstring[i])){
        $('#int-value').html('invalid address');
        break;
      }
      else{
        ipInt = parseInt(ipstring[i]) * Math.pow(256,3-i);
        console.log(ipInt);
        intAddress = intAddress + ipInt;
        console.log(intAddress);
        $('#int-value').html(intAddress);
      }
    }
  }
});
