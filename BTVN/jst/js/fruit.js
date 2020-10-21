
var jfruit = document.getElementById("txt_fruit");
var jvungchua = document.getElementById("vungchua");
var data=['orange','banana','apple'];
function check(){
    if(jfruit.value==""){
        alert("Bạn chưa nhập tên trái cây");
    }
    else
    {
        for(var i=0;i<data.length;i++)
        {
            if(jfruit.value == data[i])
            {
                jvungchua.innerHTML = '<img src="../images/'+data[i]+'.png"></img>';
                break;
            }
            else
            {
                if(i==2)
                    alert("Bạn nhập tên không đúng");
            }
        }
    }
}

// var jchonmua = document.getElementsByTagName('input');

// for(var i=0;i<jchonmua.length;i++)
// {
//     jchonmua[i].addEventListener('click',function(){
//         var jproduct = this.parentElement;
//         var jproductchild = jproduct.children;


//         alert(jproductchild[1].innerHTML);
//     });
// }