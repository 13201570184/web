function messageBox(title, content,cancel,center=false,name1,name2){
  var body = document.querySelector("body")
  var div = $('<div class="introduce">'
  +  '<h4>'+ '标题' + '</h4>'
  + '<a href="javascript:;">'+ 'X' +'</a>'
  + '<p>' + '内容' +'</p>'
  + '<div class="list">'
  + '<button class= "false">' + '取消' + '</button>'
  + '<button class= "true">' + '确定' + '</button>'
  + '</div>'
  + '</div>'
  + '<div class="mask">' + '</div>')
  $(body).append($(div));
  close(cancel);
    // 点击了之后,显示提示栏和遮罩层
    $(".introduce").fadeIn();
    $(".mask").fadeIn();
  //  将标题和内容居中，通过添加class 通过if来控制是否使用
    if(center){
    $(".introduce h4").addClass("titleCenter");
    $(".introduce p").addClass("titleCenterP");
    $(".list").addClass("buttonCenter");
    }
  

   $(".introduce h4").html(title);
   $(".introduce p").html(content);
   $(".list .false").text(name1);
   $(".list .true").text(name2);


  }


      // 封装一个函数，
  function close(cancel){
    $(".introduce").on("click","a",function(){
      $(".introduce").remove();
      $(".mask").remove();
    })
    $(".introduce").on("click",".true",function(){
      $(".introduce").remove();
      $(".mask").remove();
    });
    $(".introduce").on("click",".false",function(){
      $(".introduce").remove();
      $(".mask").remove();
      cancel&&cancel();
    }
    )}


  $.extend({
    messageBox,
  })