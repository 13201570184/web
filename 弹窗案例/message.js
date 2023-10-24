
function messageBox(title, content,cancel,Determine,center=false,name1,name2,isCancelBtn=true){
  var body = document.querySelector("body");
  var div = $('<div class="introduce">'
  +  '<h4>'+ '标题' + '</h4>'
  + '<a href="javascript:;">'+ '×' +'</a>'
  + '<p>' + '内容' +'</p>'
  + '<div class="list">'
  +  (isCancelBtn ? '<button class= "false">' + '取消' + '</button>' : "")
  + '<button class= "true">' + '确定' + '</button>'
  + '</div>'
  + '</div>'
  + '<div class="mask">' + '</div>')
  $(body).append($(div));
  close(cancel,Determine);
    // 点击了之后,显示提示栏和遮罩层
    $(".introduce").fadeIn();
    $(".mask").fadeIn();
  //  将标题和内容居中，通过添加class 通过if来控制是否使用
    if(center){
    $(".list").css({
      justifyContent : 'center',
    })
    $(".introduce").css({
      paddingBottom : '30px',
      marginTop : '-88px'
    })
    $(".introduce h4").css({
      textAlign : 'center',
      marginTop : '18px'
    })
    $(".introduce a").css({
      marginTop : '-57px'
    })
    $(".introduce p").css({
      marginTop : '2px',
      textAlign : 'center',
      marginBottom : '2px'
    })
    }

    
    if( name1 ===''){
      $(".list .false").html();
    }else{
      $(".list .false").html(name1);
    }

    if( name2 ===''){
      $(".list .true").html();
    }else{
      $(".list .true").html(name2);
    }

    if(title ===''){
      $(".introduce h4").html();
    }else{
      $(".introduce h4").html(title);
    }

    if(content ===''){
      $(".introduce p").html();
    }else{
      $(".introduce p").html(content);
    }

  }

      // 封装一个函数，
  function close(cancel,Determine){
    $(".introduce").on("click","a",function(){
      $(".introduce").remove();
      $(".mask").remove();
    })
    $(".introduce").on("click",".true",function(){
      $(".introduce").remove();
      $(".mask").remove();
      Determine&&Determine();
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

// var messageBox = function(){
//     let options = Object.assign({
//       title : '标题',
//       content : '内容',
//       name1 : '取消',
//       name2 : '确定'
//     })
//     var body = document.querySelector("body")
//   var div = $('<div class="introduce">'
//   +  '<h4>'+ '标题' + '</h4>'
//   + '<a href="javascript:;">'+ 'X' +'</a>'
//   + '<p>' + '内容' +'</p>'
//   + '<div class="list">'
//   +  (isCancelBtn ? '<button class= "false">' + '取消' + '</button>' : "")
//   + '<button class= "true">' + '确定' + '</button>'
//   + '</div>'
//   + '</div>'
//   + '<div class="mask">' + '</div>')
//   $(body).append($(div));
//   close(cancel);
//     // 点击了之后,显示提示栏和遮罩层
//     $(".introduce").fadeIn();
//     $(".mask").fadeIn();
//   //  将标题和内容居中，通过添加class 通过if来控制是否使用
//     if(center){
//     $(".introduce h4").addClass("titleCenter");
//     $(".introduce p").addClass("titleCenterP");
//     $(".list").addClass("buttonCenter");
//     }

//     if( name1 ===''){
//       $(".list .false").text();
//     }else{
//       $(".list .false").text(name1);
//     }

//     if( name2 ===''){
//       $(".list .true").text();
//     }else{
//       $(".list .true").text(name2);
//     }
//    $(".introduce h4").html(title);
//    $(".introduce p").html(content);

//   //  $(".list .false").html(name1);
//   //  $(".list .true").html(name2);
//   }

//       // 封装一个函数，
//   function close(cancel){
//     $(".introduce").on("click","a",function(){
//       $(".introduce").remove();
//       $(".mask").remove();
//     })
//     $(".introduce").on("click",".true",function(){
//       $(".introduce").remove();
//       $(".mask").remove();
//     });
//     $(".introduce").on("click",".false",function(){
//       $(".introduce").remove();
//       $(".mask").remove();
//       cancel&&cancel();
//     }
//     )}
