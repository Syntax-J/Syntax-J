$(document).ready(function(){
  $("#paras_1").click(function(){
  	$('#content_title').load('./paras/paras_1.txt h1');
    $('#total_content').load('./paras/paras_1.txt p,a');
  });
});