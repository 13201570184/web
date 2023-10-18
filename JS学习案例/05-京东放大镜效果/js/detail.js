  // window.addEventListener('load', function() {
  //     var preview_img = document.querySelector('.preview_img');
  //     var mask = document.querySelector('.mask');
  //     var big = document.querySelector('.big');
  //     // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
  //     preview_img.addEventListener('mouseover', function() {
  //         mask.style.display = 'block';
  //         big.style.display = 'block';
  //     })
  //     preview_img.addEventListener('mouseout', function() {
  //             mask.style.display = 'none';
  //             big.style.display = 'none';
  //         })
  //         // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
  //     preview_img.addEventListener('mousemove', function(e) {
  //         // (1). 先计算出鼠标在盒子内的坐标
  //         var x = e.pageX - this.offsetLeft;
  //         var y = e.pageY - this.offsetTop;
  //         // console.log(x, y);
  //         // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
  //         // (3) 我们mask 移动的距离
  //         var maskX = x - mask.offsetWidth / 2;
  //         var maskY = y - mask.offsetHeight / 2;
  //         // (4) 如果x 坐标小于了0 就让他停在0 的位置
  //         // 遮挡层的最大移动距离
  //         var maskMax = preview_img.offsetWidth - mask.offsetWidth;
  //         if (maskX <= 0) {
  //             maskX = 0;
  //         } else if (maskX >= maskMax) {
  //             maskX = maskMax;
  //         }
  //         if (maskY <= 0) {
  //             maskY = 0;
  //         } else if (maskY >= maskMax) {
  //             maskY = maskMax;
  //         }
  //         mask.style.left = maskX + 'px';
  //         mask.style.top = maskY + 'px';
  //         // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
  //         // 大图
  //         var bigIMg = document.querySelector('.bigImg');
  //         // 大图片最大移动距离
  //         var bigMax = bigIMg.offsetWidth - big.offsetWidth;
  //         // 大图片的移动距离 X Y
  //         var bigX = maskX * bigMax / maskMax;
  //         var bigY = maskY * bigMax / maskMax;
  //         bigIMg.style.left = -bigX + 'px';
  //         bigIMg.style.top = -bigY + 'px';

  //     })

  // })



window.addEventListener("load",function(){
  //首先获取元素
  var preview_img = document.querySelector(".preview_img");
  var mask = document.querySelector(".mask");
  var big = document.querySelector(".big");
  //当鼠标进入手机介绍栏时,显示出mask框,和右侧的放大后的图片
  preview_img.addEventListener("mouseenter",function(){
    mask.style.display = "block";
    big.style.display = "block";
  });
  //当鼠标离开手机介绍栏时,使得显示出来的mask和右侧放大的图片隐藏
  preview_img.addEventListener("mouseleave",function(){
    mask.style.display = "none";
    big.style.display = "none";
  });
  //建立一个鼠标在手机介绍栏移动时,mask框也跟着一起移动
  preview_img.addEventListener("mousemove",function(e){
    //获取鼠标在手机介绍栏的坐标
  var x = e.pageX - this.offsetLeft;
  var y = e.pageY - this.offsetTop;
  //mask的中心位置应该位于鼠标的显示上 mask的中心位置为mask的宽高的一半
  var maskX = x - mask.offsetWidth / 2;
  var maskY = y - mask.offsetHeight / 2;

  //mask可移动的范围仅限于手机介绍栏的范围 故其最大的移动距离为手机介绍栏的宽高减去mask的宽高
  maskMaxX = preview_img.offsetWidth - mask.offsetWidth;
  maskMaxY = preview_img.offsetHeight - mask.offsetHeight;
  //如果mask的左侧移动到手机介绍栏的最左侧,此时应停止mask继续向左移动
  if(maskX < 0){
    maskX = 0;
    //如果mask的右侧移动到手机介绍栏的最右侧,此时停止mask继续向右移动
  }else if (maskX > maskMaxX){
    maskX = maskMaxX;
  }
    //如果mask的上端移动到手机介绍栏的最左侧,此时应停止mask继续向上移动
    if(maskY < 0){
      maskY = 0;
      //如果mask的下端移动到手机介绍栏的最右侧,此时停止mask继续向下移动
    }else if (maskY > maskMaxY){
      maskY = maskMaxY;
    }
  // 将得到的坐标赋值给mask的top值和left值
  mask.style.left = maskX + 'px';
  mask.style.top = maskY + 'px';
  //mask移动的同时,big里的大图片也应该跟着移动
  //获取到大图片
  var bigImg = document.querySelector(".bigImg");
  //获取大图片随着小图片的移动而应该移动多少距离  可以利用等比例来获取
  var bigImgMaxX = bigImg.offsetWidth - big.offsetWidth;
  var bigImgMaxY = bigImg.offsetHeight - big.offsetHeight;
  var bigImgX = maskX * bigImgMaxX / maskMaxX;
  var bigImgY = maskY * bigImgMaxY / maskMaxY;
  //将获取到的大图片应该移动的距离赋值给图片
  bigImg.style.left = -bigImgX + 'px';
  bigImg.style.top = -bigImgY + 'px';
  });
})