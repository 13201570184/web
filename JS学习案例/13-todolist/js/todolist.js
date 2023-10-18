//JS编写首先需写入口函数
$(function(){ 
  load();     //此处在入口函数第一层调用load()函数，使得页面在第一次加载的时候就调用

  // 1.1 首先建立回车键按下的事件函数
  $("#title").on("keydown",function(e){   //e设置事件对象，可代指“这个操作的对象”的一些条件
    if(e.keyCode === 13){       //回车键的ASII码值为13
      var local = getDate();   //这里声明一个变量local  将当前得到的本地存储里的数据存放到local变量里面
      local.push({title: $(this).val(), done:false});  //这里将通过回车键输入的元素通过对象格式存放到前面声明的变量local里面去
      saveDate(local);     //在这一步调用saveDate函数，将数据存储到本地数据中去

      // 2.1 将通过回车键输入的数据渲染到页面中去
      load();  
      $(this).val("");
    }

  });

// 3 点击按钮删除数据  建立一个点击事件函数
$('ol,ul').on('click','a',function(){    
  var data = getDate();       //data获取当前本地存储的数据
  var index = $(this).attr('id');    //声明变量index 获取本地存储的各个数据所对应的索引号  通过 id类名来传递
  data.splice(index,1);    //将data 里面的数据通过splice(i(从第几个索引号开始),n(从索引号开始删除的个数))
  saveDate(data);    //将删除后的数据存入本地存储当中
  load();      //在点击删除之后，将删除后的数据再渲染一次
})

//4 进行选择 正在进行的和已经完成的
$('ol,ul').on('change','input',function(){   //给正在进行ol 和已经完成ul 添加事件 
  var data = getDate();     // data获取当前本地存储的数据
  var index = $(this).siblings('a').attr('id');   //index获取通过siblings()兄弟元素的索引号
  data[index].done = $(this).prop('checked');   // 通过input的索引号获取的元素，改变它的done属性，让它和input的点击条件一样，勾选了为true，未勾选为false
  saveDate(data);   //保存done属性发生选择后的数据
  load();       //在点击了复选框之后，将done属性改变了的数据再渲染一次
})



  // 1.2 声明一个函数来存储本地数据  此函数为封装函数，可随时调用
  function getDate(){
    var data = localStorage.getItem("todoList")  //这里的data为当前本地存储的数据内容
    if( data !== null){    
      return JSON.parse(data);    //如果本地存储里面不为空，则把本地存储里面的数据转换为对象格式返回给getDate()    (本地存储里面的数据都是以字符串格式保存的) 
    } else{
      return [];    //如果本地存储数据为空则返回一个数组，把多个对象放到一个数组里面
    }

  }
  // 1.3 这里声明一个封装函数，将1.1 里面存放的通过回车键存进local里面的数据 存放到本地localStorage里面去      
  function saveDate(data){
    localStorage.setItem("todoList",JSON.stringify(data));  //此处data为形参，与1.2 的data同为局部变量，两者不冲突且没有关系
  }

  // 2.2 声明一个封装函数，将通过回车键输入的数据渲染到页面中去
  function load(){
    var data = getDate();   //通过声明变量data 来取得本地存储里面的数据
    $("ol,ul").empty();       //在每次遍历之前，清除ol和ul里面的所有数据，之后通过遍历引入新的数据
    var todoCount = 0;
    var doneCount = 0;
    $.each(data,function(i, n){     //遍历$.each(对象或数组名称,function(i(对象或数组里元素的索引号),n(对象或数组里元素对象的值)))
     if(n.done){              //添加条件。，如果元素的done 属性为true的，则为复选框打勾的，就是已经完成的，将数据渲染到ul里面
      $("ul").prepend("<li><input type = 'checkbox' checked = 'checked'> <p>"+ n.title +"</p> <a href='javascript:;' id = "+ i +"></a></li>");  //通过遍历，data里面的每个元素每遍历一次，将元素对象里的值的title属性放到建立的<li></li>里面   给添加的元素创建一个id id里面放遍历时排的索引号
      doneCount++;   //每加入一个已完成的则给doneCount 加一
     }else{           //添加条件。，如果元素的done 属性为false的，则为复选框没有打勾的，就是正在进行的，将数据渲染到ol里面
      $("ol").prepend("<li><input type = 'checkbox'> <p>"+ n.title +"</p> <a href='javascript:;' id = "+ i +"></a></li>");  //通过遍历，data里面的每个元素每遍历一次，将元素对象里的值的title属性放到建立的<li></li>里面   给添加的元素创建一个id id里面放遍历时排的索引号
      todoCount++;    //每加入一个正在进行的则给todoCount 加一
     }

    });
    $("#todoCount").text(todoCount);    //将todoCount的值,赋值给id为todoCount的元素
    $("#doneCount").text(doneCount);    //将doneCount的值,赋值给id为doneCount的元素

  }

});







