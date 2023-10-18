
// // 编写JS代码首先应该写入口函数
// $(function(){
//   var flag = true;
//   // 首先获取导航栏应该在什么位置显现
//   var reTop = $(".recommend").offset().top;
//   // 调用一次函数
//   toggleTool();
//   // 封装一个函数，设置一个条件来显现导航栏
//   function toggleTool(){
//     // 如果页面卷去的长度超过设置显示导航栏的距离，此时显现导航栏
//     if($(document).scrollTop() >= reTop){
//       $(".fixedtool").fadeIn()
//     }else{
//       $(".fixedtool").fadeOut()
//     }
//   }
// // 设置一个函数，当此时页面位于那一部分，使得该部分的导航栏显示红色
//  $(window).scroll(function(){
//   //在函数执行时，判段此时显不显示导航栏
//   toggleTool()
//   //尝试执行一次导航栏变色的条件
//   if(flag)
// // 将每一栏的内容进行遍历，看能否满足条件执行函数
//   $(".floor .w").each(function(i,ele){
// // 如果遍历当前的导航栏的内容高度，满足条件，则此时给对应的导航栏变色
//     if($(document).scrollTop() >= $(ele).offset().top){
// // 此时给当前遍历的对象，所对应的导航栏添加颜色，给其余的导航栏去除颜色，通过添加和删除类名一次来改变颜色
//       $(".fixedtool li").eq(i).addClass("current").siblings().removeClass()
//     }
//   })
//  });

// //建立一个点击导航栏的函数
// $(".fixedtool li").on("click",function(){
// // 当通过点击来跳转页面的时候，不要让它慢慢滚动滚动到目标位置，而是直接跳转到目标位置（取消滚动切换导航栏效果）
//   flag = false;
// //声明一个变量等于点击了的导航栏对应的元素距离网页顶部的距离
// var topLength = $(".floor .w").eq($(this).index()).offset().top;
// // 把修改页面卷去的长度，当卷去的长度等于元素内容所对应的距离，即可使点击导航栏对应内容显现
// $("body, html").stop().animate({      //页面滚动通过$("body,html")来实现
//   scrollTop : topLength
// },function(){         
//   flag = true;  //当点击事件执行完毕会，恢复页面的滚动效果
// });
// $(this).addClass("current").siblings().removeClass();  //点击到哪，给当前的li添加元素，其余的元素移除颜色
// });

// });


//编写入口函数
$(function(){
//获取指定位置距离顶端的距离
var reTop = $(".recommend").offset().top;
showMaker();
flag = true;
function showMaker(){
  //如果网页滚动卷去的长度等于 指定位置距离顶端的位置时,显示出导航栏
  if($(document).scrollTop() >= reTop){
   $(".fixedtool").fadeIn();
 }else{
   $(".fixedtool").fadeOut();
 }
}
//添加一个窗口滚动事件
$(window).scroll(function(){
showMaker();
  //随着网页的滚动,使得导航栏对应的一栏改变颜色 通过遍历每一栏的位置,获取索引号,以此来改变导航栏的颜色
  if(flag){
$(".floor .w").each(function(i,ele){
  //如果网页卷去的长度大于等于某一栏的距离顶端的距离时
  if($(document).scrollTop() >= $(ele).offset().top){
    //将该一栏商品介绍的索引号给到导航栏对应的一栏,使得其改变颜色
    $(".fixedtool li").eq(i).addClass("current").siblings().removeClass();
  }
})
}
})

//添加一个导航栏的点击事件,点击了之后可以跳转到指定该商品的介绍栏处
$(".fixedtool li").on("click",function(){
  flag = false;
  // 设置一个当前点击的导航栏对应的商品介绍栏处于的位置
  var topLength = $(".floor .w").eq($(this).index()).offset().top;
  $("body,html").stop().animate({
    scrollTop : topLength
  },function(){
    flag = true; //当点击事件执行完毕会，恢复页面的滚动效果
  });
$(this).addClass("current").siblings().removeClass();  //点击到哪，给当前的li添加元素，其余的元素移除颜色
});
});
