
div是块，自动换行
absolute绝对定位的定位点是浏览器左上角坐标点为(0,0)这个像素点为起点的。
        绝对定位使元素的位置与文档流无关，因此不占据空间。
relative相对定位通过设置垂直或水平位置，让这个元素“相对于”它的起点进行移动。

inline-block
cover
-webkit-line-clamp:2;
display:-webkit-box;

立即执行函数：不会污染外面的js空间 ，立即执行

；分号(function(){   }  不影响别人，别人不影响我，分号代表结束，安全性标记

click 很慢，是来自pc的点击，mobile tap
 移动端tap 比click更敏感
 fastclick   引入alloyfinger 使用
 touch 触发会很频繁



block-level elements (块级元素) 和 inline elements (内联元素)。block元素通常被现实为独立的一块，会单独换一行；inline元素则前后不会产生换行，一系列inline元素都在一行内显示，直到该行排满。

常见的块级元素有 DIV, FORM, TABLE, P, PRE, H1~H6, DL, OL, UL 等。
常见的内联元素有 SPAN, A, STRONG, EM, LABEL, INPUT, SELECT, TEXTAREA, IMG, BR 等。
block元素可以包含block元素和inline元素；但inline元素只能包含inline元素。要注意的是这个是个大概的说法，每个特定的元素能包含的元素也是特定的，所以具体到个别元素上，这条规律是不适用的。比如 P 元素，只能包含inline元素，而不能包含block元素。
一般来说，可以通过display:inline和display:block的设置，改变元素的布局级别。

1、display:block
block元素会独占一行，多个block元素会各自新起一行。默认情况下，block元素宽度自动填满其父元素宽度。
block元素可以设置width,height属性。块级元素即使设置了宽度,仍然是独占一行。
block元素可以设置margin和padding属性。
2，display:inline
inline元素不会独占一行，多个相邻的行内元素会排列在同一行里，直到一行排列不下，才会新换一行，其宽度随元素的内容而变化。
inline元素设置width,height属性无效。
inline元素的margin和padding属性，水平方向的padding都产生边距效果；但竖直方向的padding不会产生边距效果。
3,display:inline-block
简单来说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会被排列在同一行内。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性又具有inline的同行特性。


alloyfinger是一款非常轻量的开源手势库,由于其轻量、基于原生js等特性被广泛使用。


async 函数对 Generator 函数的改进,（1）内置执行器。 Generator 函数的执行必须靠执行器，所以才有了 co 函数库，而 async 函数自带执行器。也就是说，async 函数的执行，与普通函数一模一样，只要一行。
var result = asyncReadFile();
（2）更好的语义。 async 和 await，比起星号和 yield，语义更清楚了。async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。

（3）更广的适用性。 co 函数库约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。

spawn 函数就是自动执行器。
function fn(args){ 
  return spawn(function*() {
    // ...
  }); 
}