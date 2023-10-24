
var Introduce = function(){
  this.init = (params) => {
    let options = Object.assign(
    {
      title:'标题',
      content:'内容',
      cancelBtn:false,
      yes:'确定',
      no:'取消',
      center:false,
    },
    params
  )
  var body = document.querySelector("body");
  var div = $('<div class="introduce">'
  +  '<h4>'+ '标题' + '</h4>'
  + '<a href="javascript:;">'+ '×' +'</a>'
  + '<p>' + '内容' +'</p>'
  + '<div class="list">'
  +  (options.cancelBtn ? '<button class= "false">' + '取消' + '</button>' : "")
  + '<button class= "true">' + '确定' + '</button>'
  + '</div>'
  + '</div>'
  + '<div class="mask">' + '</div>')
  $(body).append($(div));
    $(".introduce").fadeIn();
    $(".mask").fadeIn();
    $(".introduce h4").html(options.title)
    $(".introduce p").html(options.content)
    $(".list .false").html(options.no)
    $(".list .true").html(options.yes)
 
    if(options.center){
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
    $(".introduce").on("click","a",function(){
      $(div).remove();
    })
    return new Promise((resolve,reject)=>{
      $(".introduce").on("click",".true",function(){
        $(div).remove();
            resolve()
          })
          $(".introduce").on("click",".false",function(){
            $(div).remove();
            reject();
          }) 
    })
  
    
    // close()
  // function close(){
   

  //   $(".introduce").on("click",".true",function(){
  //     $(".introduce").remove();
  //     $(".mask").remove();
  //     // determine&&determine();
  //   }).then(()=>{
  //     this.$message({
  //       type:'success',
  //       message:'删除成功'
  //     })
  //   })
    
  //   $(".introduce").on("click",".false",function(){
  //     $(".introduce").remove();
  //     $(".mask").remove();
  //     // cancel&&cancel();
  //   }).catch(()=>{
  //     this.$message({
  //       type:'info',
  //       message:'已取消'
  //     })
  //   })
  // }

    // function message($('.true') $('.false')){
    //   return new Promise((resolve,reject)=>{
    //   })
    // }


    
  
  }
}






