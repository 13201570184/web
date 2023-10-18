$(function() {  //js先写入口函数 
  // 1. 点击了全选按钮使得所有的购物框里的勾选按钮都选上
    $(".checkall").on("change",function(){              //声明一个点击事件，当全选按钮发生改变的时候，触发以下事件 
      $(".j-checkbox,.checkall").prop("checked",$(this).prop("checked"))   //元素.j-checkbox（购物车小按钮)和全选按钮checkall 里的属性值checked 更改为点击后全选框的勾选结果
      if($(".j-checkbox").prop("checked")){    //如果元素.j-checkbox（购物车小按钮)的勾选checked 为true 则
        $(".cart-item").addClass("check-cart-item");    //将元素类名 .cart-item （此为商品介绍的一栏）添加一个类名check-cart-item.通过添加类名来添加背景颜色，通过css修改类名颜色
      }else{
        $(".cart-item").removeClass("check-cart-item");   //当元素.j-checkbox（购物车小按钮)的勾选checked 不为true 此时清除类名check-cart-item
      }
    });
 // 2. 当单独点击了一个勾选框，则此时给他添加一个类名check-cart-item 以此来添加颜色  当把购物车的全部商品都选择的话，则此时默认全选按钮也勾选
    $(".j-checkbox").on("change",function(){      //声明了单独勾选框的点击事件  
      if($(".j-checkbox:checked").length === $(".j-checkbox").length){    // 如果.j-checkbox（购物车小按钮)勾选的数量等于购物车小按钮的总数时，则全选按钮也勾选
        $(".checkall").prop("checked",true);      
      }else{                                            //如果不等于的话，则全选按钮不勾选
        $(".checkall").prop("checked",false);
      }
      if($(this).prop("checked")){                    // 如果.j-checkbox（购物车小按钮)的勾选选项checked为true 的时候，此时给他添加类名来添加颜色
        $(this).parents(".cart-item").addClass("check-cart-item");
      }else{                                  //如果把.j-checkbox（购物车小按钮)取消的话，则此时也取消为他添加的颜色
        $(this).parents(".cart-item").removeClass("check-cart-item");
      }
    })
    // 3. 增减商品数量模块 首先声明一个变量，当我们点击+号（increment），就让这个值++，然后赋值给文本框。
    $(".increment").on("click",function(){    //为添加按钮 + 号添加一个点击事件
      var n = $(this).siblings(".itxt").val();       //声明一个变量n 里面存储的是 .itxt里面原本填的数字
      n++;                                        //每点击一次 + 这个按钮，此时把n 的数字加1
      $(this).siblings(".itxt").val(n)        //将 变量 n 里面的数字填入 .itxt里面，.itxt为当前已选多少件
      var m = $(this).parents(".p-num").siblings(".p-price").text();      //声明一个变量m 里面存储的是当前点击的商品的单价
      m = m.substr(1);                                              //取出 m 的价格  substr(1) 即可以去除价格前面的图标￥
      var s = (n * m).toFixed(2);                           //声明变量s 里面存储的是 n*m的积，即单价乘数量，获得当前商品总价 .toFixed(2)表示保留小数点后面两位数
      $(this).parents(".p-num").siblings(".p-sum").text("￥" + s);    //将获得当前商品的总价 填入 总价这个标签里面
      getSum();   //运行一次计算选择的所有商品的总价
    })
    $(".decrement").on("click",function(){        //当点击-这个按钮，让当前商品的件数减1
      var n = $(this).siblings(".itxt").val();    
      if(n == 0){                         //注意 这里显示 当如果把商品的件数减到0 时，停止继续减1这个事件 返回0 这个数值
        return false;
      }
      n--;
      $(this).siblings(".itxt").val(n);
      var m = $(this).parents(".p-num").siblings(".p-price").text();
      m = m.substr(1);
      var s = ( n * m).toFixed(2);
      $(this).parents(".p-num").siblings(".p-sum").text("￥"+ s);
      getSum();
    });
    //  4. 用户修改文本框的值 计算 小计模块  
    $(".itxt").on("change",function(){          //当一个商品里的件数手动输入一个新的值的时候，此时执行以下操作
      var n = $(this).val();            //声明一个变量 n n为这个商品的件数
      var m = $(this).parents(".p-num").siblings(".p-price").text();        //声明一个变量m m为这个商品的价格
      m = m.substr(1);                      //获取去除价格符号后，的价格数字
      var s = (n * m).toFixed(2);           //声明一个变量s s 为更改变量后的该商品总价
      $(this).parents(".p-num").siblings(".p-sum").text("￥"+ s);   //将计算出来的该商品的总价，填入 总价这个标签里面 
      getSum();    //运行计算一次后的所有勾选商品的总价
    });
    // 5. 计算总计和总额模块
    getSum();  //打开页面后立马运行一次所有商品的总价
    
    function getSum() {     //封装一个计算所有商品总价格的v函数
        var count = 0;    //计算总件数
        var money = 0;    //计算总价钱
        $(".itxt").each(function(i,ele){    //遍历每个商品里选择的数量
          count += parseInt($(ele).val());      //将每个商品的数量都加到 变量count里面
        });
        $(".p-sum").each(function(i,ele){      //遍历每个商品的总价
          money += parseFloat($(ele).text().substr(1));   //将每个商品的总价都加到 变量money里面
        })
        $(".amount-sum em").text(count);    //将得到的总件数 添加到.amount-sum总件数这个标签里面
        $(".price-sum em").text("￥" + money.toFixed(2));  //将得到的总价格  ，添加到.price-sum总价格这个标签里面
    }
    // 6. 删除商品模块
    // (1) 商品后面的删除按钮
    $(".p-action").on("click",function(){  //为.p-action添加一个点击事件，
       $(this).parents(".cart-item").remove();    //点击了之后，移除该商品的框
       getSum();   //计算移除了一个商品后的总价
    })
    // (2) 删除选中的商品
    $(".remove-batch").on("click",function(){  //为.remove-batch添加一个点击事件
      $(".j-checkbox:checked").parents(".cart-item").remove();    //点击了这个键之后，移除所有勾选了商品的勾选框的商品栏
      getSum();   //计算移除移除了勾选商品后的总价
    })
    // (3) 清空购物车 删除全部商品
    $(".clear-all").on("click",function(){   //为.clear-all （清除购物车）添加一个点击事件
      $(".cart-item").remove();       //当点击了这个按键，则移除所有的商品栏
      getSum();   //计算移除移除了所有商品后的总价
    })
})