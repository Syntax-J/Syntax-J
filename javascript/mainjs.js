$(document).ready(function(){
  $("#paras_1").click(function(){
  	$('#content_title').load('./paras/paras_1.txt h1');
    $('#total_content').load('./paras/paras_1.txt p,a');
  });
  $("#mainBox").velocity({
  	opacity:"1",
  },
  	{
  		duration:1000,
  		complete:function(){
  			$("#mainBox").velocity({
  				opacity:"0",
          scaleY:"0"
  			},{
  				duration:600,
  				delay:1400
  			});
  		}
  	});
});