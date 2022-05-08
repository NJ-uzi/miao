1.  列出至少 7 个常用 Linux 命令及其基本使用方法

```
1.ls命令 ls -a 列出目录所有文件，包含以 . 开始的隐藏文件
                 -A列出除.及.. 的其他文件
	-r反序排列
	-t以文件修改时间排序
	-s以文件大小排序
	-h以易读大小显示
	-l除了文件名之外，还将文件的权限、所有者、文件大小等详细信息列出来
2.cd 命令  cd / 进入要目录
	cd ~ 进入'home'目录
	cd - 进入上一次工作路径
	cd !$ 把上一个命令的参数作为cd参数使用
3.pwd命令  查看当前路径
	pwd -p 查看软链接的实际路径
4.mkdir命令 用于创建文件夹
	-m :对新建目录 设置存取权限，也可以用chmod命令设置
	-p：可以是一个路径名称。此时若路径中的某些目录尚不存在，加上此选项后，系统将自动建立好那些尚不在的目录，即一次可以建立多个目录。
	（1）mkdir t  //当前工作目录下创建名为t的文件夹
	（2）mkdir -p /tmp/test/t1/t    //在 tmp目录下创建路径为test/t1/t的目录，若不存在，则创建。
5.rm命令  删除一个目录中的一个或多个文件或目录，如果没有使用过-r选项，则rm不会删除目录。如果使用rm来删除文件，通常仍可以将该文件恢复原状。
	（1）rm -i *.log     //删除任何 .log 文件，删除前逐一询问确认
	（2）rm -rf test     //删除 test 子目录及子目录中所有档案删除，并且不用依次确认
	（3）rm -- -f*        //删除以-f开头的文件
6.rmdir 命令  从一个目录中删除一个或多个子目录项，删除某目录时也必须具有对其父目录的写权限。
```

2.  什么是 html 实体？常见 html 实体有哪些？

```
在HTML中，某些字符是预留的，这些预留字符必须被替换为字符实体（特殊字符）
如  空格   &nbsp;
>   大于  &gt;
<   小于  &lt;
&   和    &amp;
“   引号  &quot;
'     撇号  &apos;

```

3.  计算机为什么使用二进制？

```
1、计算机是由逻辑电路组成，逻辑电路通常只有两个状态，开关的接通与断开，这两种状态正好可以用“1”和“0”表示；
2、二进制中只使用0和1两个数字，传输和处理时不易出错，因而可以保障计算机具有很高的可靠性。
```

4.  什么是 Unicode？如何表示，有什么作用？最通用的 Unicode 实现是？

```
(1)Unicode是计算机科学领域里的一项业界标准，包括字符集、编码方案等。
(2)Unicode编码表示 在表示Unicode字符时，通常会用U+然后紧跟一组16进制的数字表示一个字符，编码从U+0000到U+FFFF,共支持6万多个字符，在BMP 以外的字符则需要使用5位或者6位16进制来表示
(3)UTF-8
```

5.  什么是 GUI，什么是 CLI，什么是接口/界面？现实生活中有哪些例子？

```
GUI :图形用户界面
CLI：命令行界面
接口/界面  都是 interface翻译过来的，只是翻译方式不同

```

6.  在什么情况下 html 标签可以不需要闭合？

```
<img>
<br>
<hr>
<input>
<li>
<p>
等自闭和标签或者空标签
```

7.  在一些情况下某些非自闭合标签的结束标签可以省略的原因是什么？

```

```

8.  什么是费茨定律？它有哪些应用？

```
费茨定律指的是：使用指点设备到达一个目标的时间同以下两个因素有关：
1.设备当前位置和目标位置的距离（D）。距离越长，所用时间越长；
2.目标的大小（S）。目标越大，所用时间越短。
该定律可用以下公式表示：t = a + b log2 (D / S + 1)
其中a，b是经验参数，它们依赖于具体的指点设备的物理特性，以及操作人员和环境等因素。
```

9.  WHY English is IMPORTANT for programmers?

```
看不懂英语怎么写英语？
```

10. 将二进制 `10010` 数转换为十进制数

```
2^4+2^1=16+2=18
```

11. 将十六进制数 `ABCDEF` 转换为十进制数

```
10*16**5+11*16**4+12*16**3+13*16**2+14*16+15
```

12. 将十进制数 `435` 分别转换成二进制数和十六进制数

```
  0001 1011 0011
  1B3
```

13. 列出 HTML 中常见的全局属性

```
id      规定元素的唯一id
class  规定元素的一个或多个类名
style  规定元素的行内 css样式
title   规定有关元素的额外信息
tabindex 规定元素的tab键次序

dir     规定元素内容的文本方向
hidden 规定元素被仍未或不在相关
lang  规定元素内容的语言
translate 规定是否该该翻译元素内容
```

14. 什么是操作系统的路径（Path）？它的作用及应用场景是？

```
是预先设计好的一系列文件夹列表

在运行命令是会自动按顺序在路径列表中查询对应的可执行程序
如果找到了就执行，找不到就会报command not found

```

15. 什么是文本文件？什么是二进制文件？它们最明显的区别是？

```
1、文本文件是通过编码文字符号填充得到的文件，可以通过文本编辑器打开并修改
2、二进制文件不是以文本内容的方式编码的文件，如电影，音乐，图片

文本文件可以用文本编辑器编辑
```

16. 为什么说 html 与数学公式有诸多相似之处？

```
都是树状结构
```

17. 几种常见图片格式有什么区别和特点？

```
jpg、png、gif、bmp、webp等格式
（1）JPEG格式，也叫做JPG或JPE格式，是最常用的一种文件格式，Photoshop“存储为”命令中默认的图片格式就是JPEG，大部分手机相机拍照的照片也是JPE格式。能够将图像压缩在很小的储存空间，不过这种压缩是有损耗的，过度压缩会降低图片的质量。JPEG格式压缩的主要是高频信息，对色彩的信息保留较好，因此特别适合应用于互联网，可减少图像的传输和加载时间。
（2）PNG也是常见的一种图片格式，它最重要的特点是支持 alpha 通道透明度，也就是说，PNG图片支持透明背景。比如在使用Photoshop制作透明背景的圆形logo时，如果使用JPG格式，则图片背景会默认地存为白色，使用PNG格式则可以存为透明背景图片。PNG格式图片也支持有损耗压缩，虽然PNG 提供的压缩量比JPG少，但PNG图片却比JPEG图片有更小的文档尺寸，因此现在越来越多的网络图像开始采用PNG格式。
（3）GIF也是一种压缩的图片格式，分为动态GIF和静态GIF两种。
GIF格式的最大特点是支持动态图片，并且支持透明背景。网络上绝大部分动图、表情包都是GIF格式的，相比与动画，GIF动态图片占用的存储空间小，加载速度快
bmp 原始数据不压缩，图片比较大
webp 有损压缩，支持透明，性能比jpg高
```

18. `data-*` 属性一般是用来干嘛？

```
data-* 为元素指定自定义属性
如存储元素所表达的产品的id，用户的名字，埋点的信息

```

19. 有没有办法扩大一个 checkbox 的可点击区域？

```
label标签，配置for属性为目标checkbox的id
```

20. 什么是 MIME Type？

```
媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。
为每一种文件类型指定的一个更加详细,明确,标准的类型标识
如 jpg图片 ： image/jpeg
html  :     text/html
```

21. 哪些标签可以使用 target 属性？哪些标签可以使用 href 属性？

```
herf属性
a
link
base

target属性
a
form
base标签，用来设置页面中所有a标签和form标签所打开的页面
```

22. 什么是 BOM 头？

```
BOM头是放在UTF-8编码的文件的头部的，占用三个字节，用来标识该文件属于UTF-8编码。
```

23. group（分组）类型的标签有哪些？

```

```

24. 什么是 SEO？

```
搜索引擎优化
```

25. 分别列出每种常见浏览器的内核名称（自己查）。

```
Trident、Gecko、Blink、Webkit

IE: Trident
firefox：Gecko
Safari：webkit
Chrome：Chromium
Opera：blink
```

26. 列表类标签有哪些？分别如何使用？需要注意些什么？

```
无序列表  ul   li   结果就没有排名，顺序不分先后。
有序列表  ol   li  有排列顺序的列表，各个列表项会按照一定的顺序排列定义。
自定义列表 dl  dt(表头) dd  自定义列表常用于对属于或名词进行解释和描述，定义列表项前没有任何项目符号。在HTML标签中，dl标签用于定义描述列表，该标签会与dt(定义项目/名字)和dd(描述每一个项目/名字)一起使用。
```

27. 为什么不同类型的标签的 fallback 内容要以不同的形式提供？如 iframe 的 fallback 需要写在其内部，而 script 和 frame 标签的 fallback 需要写在其外部。

```

```

28. 分别写出在 head 中设定页面编码，设定 icon，引入样式表的标签

```
  <meta charset="UTF-8">

  <link>
  <style>
```

29. 什么叫做可访问性，html 中为此做了什么工作？

```
可访问性有两方面：
针对不同设备都能用

为可访问性提供一个良好的基础
```

30. 写出以下几个符号的 ASCII 码：`a，A，0，CR，LF，空格，NBSP`。

```
a， 97
A，65
0，48
CR，13  (回车)
LF，10（换行）
空格，32
NBSP
```

31. 中英互翻

```
    * geek     极客
    * nerd      电脑迷
    * hacker   黑客
    * edge   边缘
    * bleeding/cutting edge 前沿/尖端/可能存在风险的技术
    * HTML 实体   HTML entity
    * coordinate     坐标
    * polygon       多边形
    * bit      比特
    * byte   字节
    * alternative	另外的选项
    * 属性       	property
    * obsolate   	过时的，废弃的
    * 二进制	binary
    * 十进制	decimal
    * 十六进制	hex
    * octal 		八进制
    * deprecate	不推荐
    * loop		循环
    * 行		row
    * 列		col
    * horizontal	水平的
    * 语义化	samantic
    * 可访问性	accessibility
```

32. 用文字描述如下选择器将选择哪些（个）元素，并给出其优先级

```css
div,
h1 {
} /*所有div中的h1 */
div[class] [id="abc"] {
} /*div中id为abc的class标签*/
div:hover ul li > div {
} /*div被hover时 div中的ul的子标签li 中的子div*/
body :active {
} /*body里面被鼠标选中的元素*/
div:hover::after {
} /*	div被hover时它的伪元素after*/
div:hover ::after {
} /*div被hover时其 里面元素 的伪元素after*/
::selection {
} /* 被鼠标选中的文字*/
:target {
} /*当前页的目标：id的值为页面的hash：地址栏中#后面的部分为页面的hash*/
input + ul + p ~ span {
} /*input元素后面ul后面的p后续的span；后面表示挨着的，后续表示不一定要挨着但得是兄弟元素*/
* * * {
} /*至少有两层祖先得元素*/
div * span {
} /*div里的所有span标签*/
div[title] {
} /* 有title属性得div*/
fieldset legend + input {
} /*fieldset里面得 legend 后面得 input*/
#some #thing .not:hover .abc:hover {
} /*some标签里的thing标签的子标签not被hover时其子标签abc被hover 时*/
```

33. `em,px,rem,vw,vh` 分别代表多长？

````
em 当前元素 font-size 的大小，用在字号大小时，表示父元素得字号大小
px  一个CSS 像素
rem  根元素的字号
vw 视口宽度的百分之一
vh 视口高度的百分之一
```
34. 显示器的物理分辨率为 `1920x1080`，操作系统设置的分辨率为 `1280x720`，网页的放大倍数为 `110%`，请计算一个 CSS 像素对应多少个显示器物理像素（面积与长度）？
```
1408×792
```
35. 写出如下代码显示在浏览器后**每个单词**的字号
```

```

    ```html
    <style>
      html {
        font-size: 20px;
      }
      section {
        font-size: 10rem;
      }
      p {
        font-size: 24px;
      }
      span {
        font-size: 150%;
      }
      .sucks {
        font-size: inherit;
      }
    </style>
    <body>
      <section>
        <h2>Brown</h2>
        <p>quick</p>
        <p>jumps <span>over <span>lazy</span> dog</span></p>
        <p class="sucks">sucks</p>
      </section>
    </body>
    ```

36. 如何给 css 添加注释

```

/* 在这里写注释 */

```
37. 指出如下css代码中的错误
```

h1 后面不能有， rgba 后面的： 参数也不对 color  font-varient;



    ```
    p,h1,{

        background-color: rgba:(abc)
        font-varient; abc;
        colr: #ff048;
        font: "serif" 25px;
    }
    ```

38. 写出如下结构中 div 元素的所有后代/祖先/子/父/兄弟元素

```

祖先 <section>
父 <main>
后代 <ul><li><a>
兄弟 <h2><aside>

````

    ```html
    <section>
      <h1><span></span></h1>
      <main>
        <h2></h2>
        <div>
          <ul>
            <li><a href=""><img src="" alt=""></a></li>
          </ul>
        </div>
        <aside>
          <h3></h3>
        </aside>
      </main>
    </section>
    ```

39. 常见的替换元素有哪些？它们与非替换元素最大的区别什么？

````

script , img ,iframe,picture,video,audio ，input
没有后代元素
有自身的宽高
(1)替换元素：就是浏览器根据其标签的元素属性来判断显示具体的内容的元素，且元素一般拥有固定的尺寸（宽高或宽高比）。
(2)非替换元素：html 中大多数都是非替换元素，他们直接将内容告诉浏览器，直接显示出来。

```
40. 让 CSS 在 HTML 页面上生效有哪些方法，分别写出来。
```
内联样式
内嵌样式
链接式
导入样式
```
41. 如何让页面打印时应用不同的效果？
```
给print设置样式
```
42. 假设 index.html 的路径为 http://user.coding.me/task/index.html ，如下引用的a.css和b.css路径分别为？
```
http://user.coding.me/foo/a.css

http://user.coding.me/task/foo/b.css
````

    ```html
    <!-- index.html的内容 -->
    <style>
        @import "/foo/bar/.././a.css";
    </style>
    ```
    ```css
    /* a.css的内容 */
    @import "./foo/b.css";
    ```

43. 写出满足如下条件的选择器

```css

li:nth-of-type(n+8):nth-of-type(-n+5) {}
[class^="damiao-"]{}

[rel~="nofollow"]

```

    * 第  8个子结点之后，倒数第 5 个子结点之前的li结点
    * 【类名】以“damiao-”开头的元素
    * rel 属性中有 nofollow 这个单词的标签

44. 链接伪类的几种状态书写的顺序是什么？为什么？

```css

1 a:link{color:black;}
2 a:visited{color:gray;}
3 a:focus
4 a:hover{color:red;}
5 a:active{color:blue;}
LoVe？ HA!



```

45. 如下 font 属性的值哪一个是书写正确的？

```css
font: serif 24px;
```

    * font: serif 24px;
    * font: serif bold 24px/1.2;
    * font: bold 24px/1.2 serif;

46. 详述你对盒模型的理解。

```

一个盒子包括了 content（实际内容）、border（边框）、padding（内边距）和 margin（外边距）。
box-sizing
颜色，背景范围


```

47. 元素的高度写百分比在什么情况下【无效】，为什么？在什么情况下【有效】，有效时是以哪个元素的高度为基准值？

```
当元素的高度会撑其父元素时，其写百分比就会无效，因为会造成逻辑矛盾

当包含快的高度不受该元素影响时，写百分比有效
```

48. 字体的 italic 与 obsolete 的区别是？

```

italic 是指斜体样式
obsolate 是直接把字体倾斜

```

49. 什么是模拟信号？什么是数字信号？它们的区别是？

```

模拟信号指在读取或接受到的最原信息/信号

数字信号，是指对收到的模拟信号进行转换，转换为二进制，人后再来理解这个二进制

```

50. 将如下 markdown 转换成 html

```css
<h2>四季变换</h2>
<dl>
	<dt>春</dt>
		<dd>立春</dd>
		<dd>惊蛰</dd>
		<dd>元宵</dd>
	<dt>夏</dt>
		<dd> <strong>小米</strong> 发布会</dd>
		<dd>华为发布会</dd>
	<dt>秋</dt>
		<dd>开学了</dd>
		<dd>军训了</dd>
	<dt>冬</dt>
		<dd>下雪了
			<dd>打雪仗了</dd>
		</dd>
		<dd>来暖气了</dd>
		<dd>开空调了</dd>
	<blockquote>知识就是力量，法国就是培根。</blockquote>
	<a href="http://baike.baidu.com/item/%E6%98%A5/6983693">春</a>
	<img alt='春' src='https://www.google.com.hk/images/nav_logo242_hr.png'>
</dl>
```

    ```md
    ## 四季变换

    一年有四季，
    四季有其对应的节气

    * 春
        - 立春
        - 惊蛰
        - 元宵
    * 夏
        - **小米**发布会
        - 华为发布会
    * 秋
        - 开学了
        - 军训了
    * 冬
        - 下雪了
            + 打雪仗了
        - 来暖气了
        - 开空调了

    > 知识就是力量，法国就是培根。

    [春](http://baike.baidu.com/item/%E6%98%A5/6983693)
    ![春](https://www.google.com.hk/images/nav_logo242_hr.png)
    ```

51. 如下表单提交后将跳转到什么地址

```
target属性让网页跳转的时候自动跳转本页面
https://www.baidu.com/s
```

```html
<form action="https://www.baidu.com/s" target="_blank">
  <input type="text" value="bb" name="a" />
  <input type="checkbox" name="b" id="b" value="123" checked />
  <input type="checkbox" name="b" id="b" value="456" checked />
  <input type="checkbox" name="b" id="b" value="789" />
  <input type="radio" name="c" id="c" value="a2" />
  <input type="radio" name="c" id="c" value="a5" checked />
  <input type="radio" name="c" id="c" value="a4" />
  <select name="select">
    <option value="01">0001</option>
    <option value="02">0002</option>
    <option value="03" selected>0003</option>
    <option value="04">0004</option>
    <option value="05">0005</option>
  </select>
  <button>提交</button>
</form>
```

52. 列出 input 的 type 有哪些值，以及为各个值时分别需要怎么使用。

```
button  定义可点击的按钮
color 定义拾色器
data 定义data控件（包括年、月、日）
datatime 定义data和time控件（包括年、月、日、时、分、秒、几分之一秒，基于UTC时区）
datatime-local  定义	data和time控件（包括年、月、日、时、分、秒、几分之一秒，不带时区）
email  定义用于e-mail的地址字段
file  定义文字选择字段和“浏览……”按钮，供文件上传
month 定义month和year控件，不带时区
number 定义用于输入数字的字段
password 定义密码字段（字段中的字符会被遮蔽）
radio  定义单选按钮
range 定义用于精确值不那么重要的数字输入字段
reset 定义重置按钮
search 定义用于输入搜索字符串的文本字段
submit 定义提交按钮
tel 定义用于输入电话号码的字段
text   定义一个单行的文本文字
time 定义用于输入时间的控件（不带时区）
url 定义用于输入URL的字段
week 定义week和year控件（不带时区）
checkbox   定义复选框

```

53. 想要让一个文本输入框在页面打开后自动获得光标要怎么办？

```
给input设置aotufocus
```

54. 如何在文本框里放置提示性文字？

```
给input的placeholder属性设置提示性文字即可
```

55. option 标签的主体内容太长影响用户体验，你会如何解决？

```
给标签设置宽高 然后overflow:heidden
```

56. 想要在 textarea 标签中默认显示一段 html 代码最安全的做法是什么？

```
html实体的方式显示
```

57. 如何禁用一组输入框？

```
给input标签设置disabled属性
```

58. 如下表格渲染出来后是什么效果？不要直接将代码贴入 jsbin 中看效果

```

```

    ```html
    <table border=1>
      <caption>美国队长</caption>
      <col>
      <col bgcolor=red>
      <col>
      <colgroup bgcolor=pink>
        <col>
        <col>
        <col bgcolor=brown>
      </colgroup>
      <thead>
        <tr>
          <th>01</th>
          <th>02</th>
          <th>03</th>
          <th>04</th>
          <th>05</th>
          <th>06</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>abc</td>
          <td colspan=3 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td colspan=2 rowspan=3>abc</td>
        </tr>
        <tr bgcolor=lightgreen>
          <td colspan=2 rowspan=2>abc</td>
          <td>abc</td>
          <td>abc</td>
        </tr>
        <tr>
          <td>abc</td>
          <td>abc</td>
        </tr>
      </tbody>
    </table>
    ```

59. 写出如下标签或属性值的英文全称

```
html：HyperTextMarkupLanguage
div: division
p: paragraph
a: anchor
em：emphasis
tr：table row
th：table header cell
td: table data cell
col：Computer-OrientedLanguage
ul：Unordered List
ol：ordered list
li：listitem
dl：definition list
dt：dictionary title
dd：dictionary data
pre：predefined
nav：navigation

coord：Coordinatwe
rect：rectangle
poly：polygon
href：Hypertext Reference
src：source

```

    标签：html,div,p,a,em,tr,th,td,col,ul,ol,li,dl,dt,dd,pre,nav

    属性：coord,rect,poly,href,src

60. 请说出你对命令行程序的理解，以及其与 GUI 程序的区别

```
命令行程序就是一切交互都用命令的方式来实现，而GUI程序的交互都可以通过可视化操作界面，鼠标点击来实现
```

61. 请确认以下标签分别属性什么类别（Content Category）？

```
p：块级元素
meta：行内元素
h1：块级元素
fieldset：块级元素
option：块级元素
input：行内元素
area：行内元素
```

    p, meta, h1, fieldset, option, input, area

62. 解释 box-sizing 可以取哪些值，以及每个值的意义

```
content-box
width属性设置的时content-box的宽度

border-box
width属性设置的时border-box的宽度，实际用来展示内容的宽度为width属性减去border和padding
高度也类似
```

63. 简述 ie7 市场份额比 ie6 低的原因并在网络上找出目前各大浏览器在中国和全球的市场份额

```
ie7/6都只能装在winxp系统上。而用xp的用户也不会去升级浏览器
```

64. 画出如下代码中 div 及其子元素的渲染结果，并指出 p 标签中【每个行内元素的，内容区，行内框的范围】，p 元素的行框，并指明理论的行框高度。有尺子的可以以 1mm 为 2px 来绘制。

```

```

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>JS Bin</title>
      <style>
        p {
          font-size: 20px;
          line-height: 120%;
          margin: 30px;
          margin-left: auto;
          margin-right: -20px;
          width: 300px;
          background-color: tan;
        }

        .a {
          display: inline-block;
        }

        .b {
          font-size: 30px;
          vertical-align: 15px;
        }

        .c {
          display: inline-block;
          width: 60px;
          height: 60px;
          background-color: pink;
          margin: 8px;
        }

        img {
          box-sizing: border-box;
          width: 50px;
          height: 50px;
          border: 2px solid;
          margin: 4px;
          vertical-align: -10px;
          margin-bottom: -5px;
        }
        div {
          width: 400px;
          border: 1px dotted;
        }
      </style>
    </head>
    <body>
      <div>
        <p>
          <span class=a>foo</span>
          <span class=b>bar</span>
          <span class=c></span>
          <img src="https://drscdn.500px.org/photo/205228769/m%3D1170_k%3D1/d721302d063d447aa3bd6301dc1cba87" alt="">
        </p>
      </div>
    </body>
    </html>
    ```

65. vertical-align 取 middle 时元素如何对齐？

```
父元素内水平居中
```

66. 什么是 baseline？

```
文本的基准线 匿名文本X下边缘
```

67. 解释 position 可以取哪些值以及这些值的意义

```
static 默认值。没有定位，元素在常规流中。
absolute 绝对定位 相对于 static 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
fixed 绝对定位  相对于窗口进行定位
relative  相对定位 相对于其正常位置进行定位
inherit 规定应该从父元素继承 position 属性的值。
```

68. 被定位的元素（即想要定位的那个元素）的定位原点是其哪个 box？

```
被定位元素的margin-box相对于定位祖先的padding-box定位

```

69. 说出级联菜单的大体实现思路

```
ul的li里继续套ul标签，并在其被hover时子元素（子菜单）出现
所以级联菜单的html结构一定时嵌套的，子菜单一定是其上级菜单元素的子元素
```

70. 如下结构中，div 有两个伪元素，分别标出伪元素的位置，用 `<before></before>` 表示 `::before` 伪元素，用 `<after></after>` 表示 `::after` 伪元素

    ```html
    <div>
      <before></before>
      <h1>The article</h1>
      <p>the quick brown fox</p>
      <after></after>
    </div>
    ```

71. 如何在伪元素中插入换行符？如何让这个换行符在页面中生效？

```
div::after{
  content:'/A';
  white-space: ;
}
通过CSS设置让回车直接显示，而不是合并为空白
```

72. 有坐标点 `(1, 2), (3, 4), (3, 0), (8, 1)`，画出它的大致 Beizer 曲线。可查维基百科。

```

```

73. 可渐变与不可渐变属性的最大的区别是什么？

```
可渐变会有一个变化的过程，而不可渐变的直接从起点跳转到终点没有变化的过程
可渐变属性一般是数值属性
可渐变属性一般是离散关键字属性

除了visibility属性
```

74. 想要让一个元素对鼠标完全不可点击，用什么办法？

```
div{
pointer-events: none;
}
可以用来做水印
```

75. 页面有无 `doctype` 声明会有什么区别？

```
页面没有doctype时，元素的box-sizing默认为border-box
而有doctype时，为content-box
```

76. HTML 的 `aria-*` 与 `role` 属性的作用是？

```
提升页面的可访问性的
具体地说
aria-*是为不方便的人士提供的功能，比如windows的放大镜，语言朗读，高对比度主题等
role是描述一个非标准的tag的实际作用。比如用div做button，那么设置div的role = "button"，辅助工具就可以认出这个实际上是个button
```

77. 中英互翻

```
omit 忽略
multiple 乘法、多个
驼峰式   camelCase
中划线式  kebab case
layout，  布局
typo，  拼写错误
code review， 代码审查
半径， radius
config， 配置，配置项
集合，  sat
矩形，  rectangle

quirk， 俏皮话  怪癖
reference，参考，引用
大小写敏感， Case Sensitive
别名  alias
```

78. 有一张高为 80 宽为 50 的图片，中心有一个直径为 40 的圆，其做为一个 150x200 的元素的背景图片，background-size 为 contain 和 cover 时，圆的直径分别为多少？

```

```

79. 画出以下代码的布局，并标出关键位置的尺寸。

```

```

    ```html
    <style>
    .b {
      position: relative;
      margin: 10px 15px 30px;
      border: 20px solid;
      padding: 5px 20px 10px 35px;
      width: 565px;
      height: 400px;
      box-sizing: border-box;
    }
    .c {
      width: 198px;
      height: 200px;
      background-color: #fff;
      position: absolute;
      left: 52px;
      bottom: 45px;
    }
    .a {
      position: absolute;
      margin: 8px 9px;
      border: 6px solid;
      border-right-width: 14px;
      padding: 13px 17px;
      width: 100px;
      height: 100px;
    }
    </style>
    <div class=b>
      <div class=c>
        <div class=a></div>
      </div>
    </div>
    ```

80. 写出实现小米首页 logo 返回主页的动画效果的代码。

```

```

81. 清除浮动与闭合浮动分别是什么？它们的区别和联系是什么？

```
清除浮动：让元素下移以避开浮动元素
闭合浮动：让元素变高以包裹浮动元素

区别：闭合浮动可以利用清除浮动来实现
在需要闭合的元素最后放一个元素，让这最后一个元素清除浮动，由于他的下一，撑大了其父元素，实现了闭合浮动

```

82. 解释如下代码渲染结果的成因：https://jsbin.com/nigucupoju/edit?html,css,output

```
左浮动时li的高度比<a>标签的高度小，所以后面的标签就会被前面的标签挡住无法浮动到最左边
```

83. 什么是 CSS Sprite？为什么要使用 CSS Sprite？它有哪些优缺点？

```
把页面上用到的所有的小图标做成一个图片，通过设置为背景移动图片位置来实现图标显示的效果
使用css sprite能减少加载页面的资源消耗

优点：降低资源消耗，只需加载一张图片就能循环利用
减少流量，防止页面抖动
缺点：如果网速很慢，导致这张图片半天也加载不出来，那么这张图片上的所有图片都不能显示出来
难以使用
不能使用动图
难以维护
```

84. 如何理解 display 为 inline-block,inline-table,inline-flex 等 inline 类型的元素？它有什么需要注意的地方？

```
元素外部布局是inline的，内部布局是相应的属性设置的
考虑元素自身的摆放时将元素当成行内元素，考虑元素内部的布局时，内部元素就认为自己在相应的类型的块元素中

inline-block：行内块元素，元素可以设置宽高，且一行可以同时存在多个
inline-table：元素作为内联表格显示，表格前后没有换行符
inline-flex：父元素根据子元素的宽度自适应
```

85. color 这个属性有什么需要注意的地方？

```
其值会作为一些属性颜色的默认值，如边框，文字阴影
通过currentColor 可以取到当前元素的颜色值
```

86. 简述 em 框，内容区，行内框，行框的构成以及其需要注意的问题。

```
em框：就是字号大小形成的框
内容区：在非替换元素中，内容区是元素中各字符的em框串在一起构成的框
行内框：行内框通过向内容区增加行间距来描述。对于非替换元素，元素行内框的高度等于line-height的高度；对于替换元素，元素行内框的高度则恰好等于内容区的高度，因为行间距不应用到替换元素
行框：行框是包含该行中出现的行内框的最高点和最低点的最小框。换句话说，行框的上边界要位于最高行内框的上边界；而行框的底边要放在最低行内框的下边界
```

87. 如何确定一个行内框的 baseline 及其最高点和最低点？

```
行内框里穿过X的中心点的线就是baseline，X的顶点就是最高点，X的底点就是最低点
```

88. 表格布局中各层的层次顺序是什么？

```
<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>
```

89. 找出如下代码中的错误

```

```

    ```
    <style>
      div::after：hover {        ：  : 中文冒号！！！
        opacity: 85%；           ；  ; 中文分号！！！
        transition: opactiy .3s step(5,end);   steps
      }
      a:visited {
        font-size: 28px;           无效果的
      }
    </style>
    <div>
      <a href="jd.com”>京东商场<a>     "https://jd.com" </a>
      <a href="mi.com”>小米网<a>       "https://mi.com" </a>
    </div>
    ```

90. 如下内容渲染在【同一行】中，请计算那一行的理论行高

```

```

    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>JS Bin</title>
      <style>
        div {
          margin: 80px;
          background-color: violet;
        }
        span {
          display: inline-block;
          border: 1px dotted;
          background-color: pink;
        }

        .a {
          vertical-align: -15px;
          width: 30px;
          height: 30px;
        }
        .b {
          margin-top: -50px;
          width: 30px;
          height: 30px;
          vertical-align: top;
        }
        .c {
          margin-bottom: 10px;
          vertical-align: middle;
        }
        .d {
          width: 30px;
          height: 30px;
        }
      </style>
    </head>
    <body>
      <div>
        x<span class="a">foo</span>
        <span class="b">bar</span>
        <span class="c">baz</span>
        <span class="d"></span>
      </div>
    </body>
    </html>
    ```

91. `vertical-align` 取值为 `baseline` 时在不同情况下分别是如何对齐的？

```
表单元格
  改行所有单元格第一行文字的基线对齐

行内布局
  有文字就是最后一行文字的基线与所在行的匿名文本的基线对齐
  没有文字就是元素的行内框底部与所在行的匿名文本的基线对齐
```

92. 解释如下代码渲染结果的成因：https://jsbin.com/dimaxip/1

```

```

93. 说出至少三种闭合浮动的方案，并解释原理

```

```

94. 默写与表格布局相关的 CSS 属性，并说明相关属性的作用

```
border-width:设置表格宽度
border-style:设置表格样式
border-color:设置表格颜色
```

95. 在各种情况下，一个元素的包含块分别是什么？

```
是一个元素的定位参考框或者定位坐标参考系
```

96. 解释常规流与包含块的概念

```
常规流：普通盒子模型布局
包含块：块与块直接包含的关系
```

97. 写出与背景相关的属性并说明每个属性的作用和会产生的效果

```
background-color：修改背景颜色
background-position：修改背景图片位置
background-size：修改背景图片大小
background-repeat：设置如何重复背景图片
background-origin：设置背景图片的定位区域
background-clip：设置背景图片的区域
background-attachment：设置背景图片是否固定或者随着页面的其他部分滚动
background-image：设置背景图片
```

98. 如何实现单方向的盒子阴影？

```
box-shadow: 1px 0 0 blue;
```

99. `visibility:hidden`，`display:none`，`opacity:0`分别有什么不同？

```
visibility:hidden 不可见，隐藏，保留在原地
display:none  让元素消失
opacity:0   元素的透明度设置为0，元素还在原来的地方

```

100. 表单元素有哪些伪类选择器？

```css
:input //匹配所有input元素
:text //匹配所有单行文本框
:password //匹配所有密码框
:radio //匹配所有单选按钮
:checkbox //匹配所有复选框
:submit //匹配所有提交按钮
:image //匹配所有图片
:reset // 匹配所有重置按钮
:button //匹配所有按钮
:file //匹配所有文件域
:hidden //匹配所有不可见元素
:enable //匹配所有可见元素
:disable //匹配所有不可见元素
:checked //匹配所有选中的被选中元素
:select //匹配所有选择的option元素
```

1.  为什么要在文件的最后一行加一个回车？

```
文本文件中的最后一行数据没有以换行符或回车符/换行符终止，则许多较旧的工具将无法正常工作。
```

2.  `:nth-of-type()`，`:nth-last-of-type()`，`:first-of-type`，`:last-of-type` 这一组伪类选择器有什么需要注意的地方？

```

```

3.  给写以下结构，写出只选中第一个 p 标签的选择器

```
div+p
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div></div>
    <p></p>
    <p></p>
    <p></p>
  </body>
</html>
```

4.  写出至少两种三栏等高自适应布局的代码

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  /* flex方法
  .main {
    display: flex;
    justify-content: space-between;
  }

  .left,
  .right,
  .main {
    height: 100px;
  }

  .left {
    width: 200px;
    background-color: #fff;
  }

  .right {
    width: 200px;
    background-color: #123221;
  }

  .middle {
    background-color: #213897;
    width: 100%;
    margin: 0 20px;
  } */
</style>

<body>
  <div class="main">
    <div class="left">左侧</div>
    <div class="middle">中间</div>
    <div class="right">右侧</div>
  </div>
</body>
</html>
---------------------------------------------
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<style>
  /*float方法*/
  .main {
    float: left;
    width: 100%;
  }

  .left,
  .middle,
  .right {
    height: 200px;
    line-height: 200px;
    text-align: center;
  }

  .middle {
    margin: 0 110px;
    background-color: #213897;
  }

  .left,
  .right {
    float: left;
    width: 100px;
    margin-left: -100%;
    background-color: #fff;
  }

  .right {
    margin-left: -100px;
    background-color: #123221;
  }
</style>

<body>
  <div class="main">
    <div class="middle">中间</div>
  </div>
  <div class="left">左侧</div>
  <div class="right">右侧</div>
</body>
</html>
```

5.  表布局中边框合并的原则是什么？

```
隐藏>>>>>>
border-collapse用来设置表格的边框合并 一旦设置 border-spacing就失效
```

6.  如何让一个元素可被 focus？如何去掉其被 focus 时的虚框？

```
给元素加上tabindex属性

:focus{outline:none}
```

7.  IE hack 是什么，如何使用？vendor prefix 又是什么，它的意义是什么？条件注释的语法是什么，它有什么用处？

```
IE hack 是解决IE不同版本兼容性的一种方法  对应不同版本的IE写不同版本的CSS code
Vendor prefix—浏览器引擎前缀，是一些放在CSS属性前的小字符串，用来确保这种属性只在特定的浏览器渲染引擎下才能识别和生效。
--------------------------------------------------
-moz-     /* 火狐等使用Mozilla浏览器引擎的浏览器 */
-webkit-  /* Safari, 谷歌浏览器等使用Webkit引擎的浏览器 */
-o-       /* Opera浏览器(早期) */
-ms-      /* Internet Explorer (不一定) */
--------------------------------------------------
浏览器引擎前缀(Vendor Prefix)主要是各种浏览器用来试验或测试新出现的CSS3属性特征。可以总结为以下3点：

试验一些还未成为标准的的CSS属性——也许永远不会成为标准
对新出现的标准的CSS3属性特征做实验性的实现
对CSS3中一些新属性做等效语义的个性实现

条件注释：
<!--[if IE]>用于 IE <![endif]-->
<!--[if IE 6]>用于 IE6 <![endif]-->
<!--[if IE 7]>用于 IE7 <![endif]-->
<!--[if IE 8]>用于 IE8 <![endif]-->
<!--[if IE 9]>用于 IE9 <![endif]-->
<!--[if gt IE 6]> 用于 IE6 以上版本<![endif]-->
<!--[if lte IE 7]> 用于 IE7或更低版本 <![endif]-->
<!--[if gte IE 8]>用于 IE8 或更高版本 <![endif]-->
<!--[if lt IE 9]>用于 IE9 以下版本<![endif]-->
<!--[if !IE]> -->用于非 IE <!-- <![endif]-->
作用：可被用来向 Internet Explorer 提供及隐藏代码
```

8.  CSS 中一般为何不使用 `cm`，`mm` 等长度单位？

```
因为它们不准确
如果想要准，不惜得让操作系统直到当前显示器得真实尺寸
```

9.  display 属性有哪些值可选？

```
none
block
inline
inline-block

list-item
run-in
compact
marker
table
inline-table
table-row-group
table-header-group
table-footer-group
table-footer-group
table-row
table-column-group
table-column
table-cell
table-caption
inherit
```

10. 画出如下代码的渲染结果

```

```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>JS Bin</title>
    <style>
      div {
        background-color: brown;
        width: 200px;
        height: 150px;
        margin: 20px;
        padding: 1px;
      }

      span {
        background-color: pink;
        margin: 1px;
      }

      [a1] {
        width: 50px;
        height: 40px;
        float: left;
      }
      [a2] {
        width: 20px;
        height: 50px;
        float: left;
      }
      [a3] {
        width: 20px;
        height: 70px;
        float: right;
      }
      [a4] {
        width: 30px;
        height: 30px;
        float: left;
        clear: both;
      }
      [a5] {
        width: 60px;
        height: 190px;
        float: right;
      }

      [b1] {
        width: 30px;
        height: 30px;
        float: left;
      }
      [b2] {
        width: 40px;
        height: 40px;
        float: right;
      }
      [b3] {
        width: 50px;
        height: 90px;
        clear: both;
        float: left;
      }
    </style>
  </head>
  <body>
    <div a>
      <span a1>a1</span>
      <span a2>a2</span>
      <span a3>a3</span>
      <span a4>a4</span>
      <span a5>a5</span>
      lorem
    </div>
    <div b>
      <span b1>b1</span>
      <span b2>b2</span>
      <span b3>b3</span>
    </div>
  </body>
</html>
```

11. reset.css 与 normalize.css 分别是什么，区别是什么，何种场景会使用到？现在更流行哪一种？

```
reset.css是浏览器样式重置插件
normalize.css是浏览器样式统一插件，需要同时应用于多个浏览器时使用
现在normalize.css更流行
```

12. 如何让背景图片从元素的左下角向上偏移 5 像素，往右偏移 3 像素；图片不重复平铺？写出代码。

```
background-position:  left 5px buttom 3px;
background-repeat: no-repeat;
```

13. `td` 元素的 `headers` 属性是干嘛的？

```
用来关联当前单元格的表头的
以让读屏器

headers 属性的值是一个或多个单元的 ID 属性值。
```

14. 写出创建如下目录结果的命令行脚本（注：有扩展名的为文件，没有扩展名的为文件夹）。

```
mkdir a
touch a/readme.md
mkdir a/foo
touch a/foo/c
mkdir a/bar
cd a/bar
touch a.txt
touch b.txt
mkdir y
cd y
touch a.js

```

    ```
    a
    │  readme.md
    │
    ├─foo
    │  └─c
    └─bar
        │  a.txt
        │  b.txt
        │
        └─y
                a.js
    ```

15. https://www.example.com/foo/bar/product.html 页面中有如下代码

```
https://www.example.com/foo/bar/path/bbc/ccd.css
```

    ```html
    <link rel="stylesheet" href="//test.example.com/assets/../the/../path/bbc/ccd.css">
    ```
    请问最终引入的c.css的完整路径是什么？

16. 把如下公式【等号右边反 A 左边】转换为通过函数名来表达数学符号的单行纯文本表达式形式

```

```

    * 用 `sigma(s,e,f)` 函数表示函数 `f(x)` 在 `x` 从 `s` 到 `e` 范围的和：
        * 即如果 `f(x) = x*x` ，则 `sigma(1,10,f)` 将得到 1 到 10 的平方和
    * 用 `factorial(x)` 表示 `x` 的阶乘

    * 用 `pow(x,y)` 表示 `x` 的 `y` 次方
    * 用 `division(x,y)` 表示 `x` 除以 `y`（`x/y`）
    * 用 `add(x,y)` 表示 `x` 加 `y`
    * 用 `mul(x,y)` 表示 `x` 乘以 `y`

    例如等差数列前 n 项和的公式可以表达为如下形式 `division(mul(n,add(n,1)),2)`

17. 如下代码中，div 元素设置了多列布局，如何让 h2 标签跨越多列显示？

```

```

    ```html
    <div>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 18. Mollitia, 19. Harum atque quaerat recusandae quibusdam.</p>
        ```

        ```
        ```

        ```
        <p>Aliquid unde perferendis illo consectetur, magni corporis placeat, impedit ullam minus illum 20. Expedita, ipsa!</p>
        ```

        ```
        <p>Expedita, magni sed accusantium quaerat mollitia doloribus, cum! Possimus nostrum ratione autem aut, laborum doloremque!</p>
        <h2>Lorem ipsum dolor sit amet, consectetur.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing 21. Cupiditate adipisci, esse? Cupiditate?</p>
        ```

        ```
        <p>Mollitia doloribus nihil dolor ipsam ab, nesciunt cupiditate, aut iste aspernatur reprehenderit.</p>
        <p>Veniam necessitatibus, doloremque iusto eveniet nisi illo! Excepturi facilis autem similique tempore!</p>
    </div>
    ```

22. 写出如下选择器选中哪些元素

    - :only-child 选择其父元素的唯一子元素
    - :only-of-type 选择其父元素的唯一的目标子元素
    - :first-of-type 选择其父元素的首个目标元素
    - :last-of-type 选择其父元素的最后一个目标元素
    - :nth-of-type(n) 选择其父元素的第 n 个目标子元素
    - :nth-last-of-type 选择其父元素的倒数第 n 个目标子元素
    - :not(n) 选择非<n>的所有子元素
    - :checked 选择被 checked 的目标元素
    - :disabled 选择每个被禁用的目标子元素
    - :enabled 选择每个被启用的目标子元素
    - :valid 选择所有带有有效值的目标子元素
    - :invalid 选择所有带有无效值的目标值子元素
    - ::selection 选择用户已经选取的部分元素

23. 实现当页面内容很少时，页面的 footer 也处于视口的底部；当页面内容较多时（多于视口大小），footer 显示在页面的尾部。

```

```

效果页面：https://getbootstrap.com/examples/sticky-footer-navbar/
调节视口高度即可观察到效果（当视口过高时，footer 总是处于视口底部，当视口高度过小时，footer 部分处于内容区域的尾部）

24. 给定如下 html 结构，为书名加书名号（《》）。为章节加上章节编号，为章节中的段落加上段落编号。为每个段落执行两个文字左右的缩进。并为每章（回）的第一段实现首字下沉效果（类似于报纸杂志的第一个字特大的效果）。

```css
h1::before {
  content: "《";
}
h1::after {
  content: "》";
}
p {
  text-indent: 2em;
}
p:first-letter {
  font-size: ;
}
p:first-letter {
  float: left;
  line-height: 1em;
  font-size: 2em;
}
```

    ```html
    <h1>红楼梦</h1>
    <h2>甄士隐梦幻识通灵  贾雨村风尘怀闺秀</h2>
    <p>——此开卷第一回也。作者自云：曾历过一番梦幻之后，故将真事隐去，而借

通灵说此《石头记》一书也，故曰“甄士隐”云云。……</p>

<p>看官你道此书从何而起?说来虽近荒唐，细玩颇有趣味。却说那女娲氏炼石补
天之时，于大荒山无稽崖炼成高十二丈、见方二十四丈大的顽石三万六千五百零一
块。那娲皇只用了三万六千五百块，单单剩下一块未用，弃在青埂峰下。</p>
<h2>贾夫人仙逝扬州城 冷子兴演说荣国府</h2>
<p>甲：此回亦非正文，本旨只在冷子兴一人，即俗谓“冷中出热，无中生有”也。其演说荣府一篇者，盖因族大人多，若从作者笔下一一叙出，尽一二回不能得明，则成何文字？故借用冷子一人，略出其大半，使阅者心中，已有一荣府隐隐在心，然后用黛玉、宝钗等两三次皴染，则耀然于心中眼中矣。此即画家三染法也。</p>
<p>未写荣府正人，先写外戚，是由远及近、由小至大也。若使先叙出荣府，然后一一叙及外戚，又一一至朋友、至奴仆，其死板拮据之笔，岂作“十二钗”人手中之物也？今先写外戚者，正是写荣国一府也。故又怕闲文赘累，开笔即写贾夫人已死，是特使黛玉入荣之速也。</p>
<h2>托内兄如海荐西宾 接外孙贾母惜孤女</h2>
<p>却说雨村忙回头看时，不是别人，乃是当日同僚一案参革的张如圭。他系此地
人，革后家居，今打听得都中奏准起复旧员之信，他便四下里寻情找门路，忽遇见
雨村，故忙道喜。二人见了礼，张如圭便将此信告知雨村，雨村欢喜，忙忙叙了两
句，各自别去回家。</p>
<p>那女学生原不忍离亲而去，无奈他外祖母必欲其往，且兼如海说：“汝父年已
半百，再无续室之意，且汝多病，年又极小，上无亲母教养，下无姊妹扶持。今去
依傍外祖母及舅氏姊妹，正好减我内顾之忧，如何不去？”黛玉听了，方洒泪拜别，
随了奶娘及荣府中几个老妇登舟而去。雨村另有船只，带了两个小童，依附黛玉而
行。</p>
<h2>薄命女偏逢薄命郎 葫芦僧判断葫芦案</h2>
<p>卻說黛玉衕姐妹們至王夫人處，見王夫人正和兄嫂處的來使計議家務，又說姨母家遭人命官司等語。因見王夫人事情冗雜，姐妹們遂出來，至寡嫂李氏房中來了。原來這李氏即賈珠之妻。珠雖夭亡，幸存一子，取名賈蘭，今方五歲，已入學攻書。這李氏亦系金陵名宦之女，父名李守中，曾為國子祭酒；族中男女無不讀詩書者。</p>
<p>如今且說賈雨村授了應天府，一到任就有件人命官司詳至案下，卻是兩家爭買一婢，各不相讓，以致毆傷人命。</p>
```

25. transition-property 写成 all 可能会造成什么问题？

```
所有的属性都将获得过渡效果
```

26. 如何让一个元素的大小正合适？

```
没办法

```

27. 在 Twitter 点赞的动画中，为什么让动画以 `0.4666` 且以 `linear` 的方式进行，就可以正确观察到动画了？

```
因为现在大部分显示器流行的帧率都是60帧
按刷新率，0.4666s正好会刷新29次
而图片在匀速运动，每次刷新图片正好是一张画面运动到元素的范围内
所以每次看到的都是完整的一张画面
```

28. 缓动函数 steps(10, end) 表现出什么样的行为？

```
steps(10,end) 动画分成10步，每步向前1/10，以突变的形式进行
也称步进动画
动画执行时以结尾端点为开始，默认值为 end。
```

29. 给出至少 5 种水平垂直居中的方案。

绝对定位
绝对定位+2d 变幻
flex（两种，其中一种子元素可以比父元素大）
表格
grid
行内布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .father {
        width: 200px;
        height: 200px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .son {
        width: 100px;
        height: 100px;
        background-color: pink;
      }
    </style>
  </head>
  <body>
    <div class="father">
      <div class="son"></div>
    </div>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .father {
        width: 200px;
        height: 200px;
        background-color: red;
        overflow: hidden;
      }
      .son {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin: calc((200px - 100px) / 2) auto;
      }
    </style>
  </head>
  <body>
    <div class="father">
      <div class="son"></div>
    </div>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .father {
        width: 200px;
        height: 200px;
        background-color: red;
        float: left;
      }
      .son {
        width: 100px;
        height: 100px;
        background-color: pink;
        margin: calc((200px - 100px) / 2) auto;
      }
    </style>
  </head>
  <body>
    <div class="father">
      <div class="son"></div>
    </div>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .father {
        width: 200px;
        height: 200px;
        background-color: red;
        position: relative;
      }
      .son {
        width: 100px;
        height: 100px;
        background-color: pink;
        position: absolute;
        left: calc(50% - 50px);
        top: calc(50% - 50px);
      }
    </style>
  </head>
  <body>
    <div class="father">
      <div class="son"></div>
    </div>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .father {
        width: 200px;
        height: 200px;
        background-color: red;
        position: relative;
      }
      .son {
        width: 100px;
        height: 100px;
        background-color: pink;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <div class="father">
      <div class="son"></div>
    </div>
  </body>
</html>
```

30. sourcemap 是什么？

```
记录了编译结果中的每个单词与其源代码中每个单词的对应关系
以让各种工具能够通过编译结果展示源代码位置
方便调试
一般以下面的形式放在编译结果文件的末尾

/*# sourceMappingURL=bootstrap.min.css.map */


sourcemap本质上是一个信息文件，里面存储着代码转换前后的对应位置信息。
```

31. 用 svg 画现一个小米的 logo，给出 svg 源代码。

```

```

32. 何为缓动函数（即 transition-timing-function）？它有哪些内置值？如何自定义一个缓动函数？

```
缓动函数是用来表述css属性在变化时的 进度-时间 图像

linear 规定以相同速度开始至结束的过渡效果（等于 cubic-bezier(0,0,1,1)）
ease 规定慢速开始，然后变快，然后慢速结束的过渡效果（cubic-bezier(0.25,0.1,0.25,1)）
ease-in 规定以慢速开始的过渡效果（等于 cubic-bezier(0.42,0,1,1)）
ease-out 规定以慢速结束的过渡效果（等于 cubic-bezier(0,0,0.58,1)）
ease-in-out 规定以慢速开始和结束的过渡效果（等于 cubic-bezier(0.42,0,0.58,1)）
steps(5,end)

cubic-bezier(x1,y1, x2,y2)
```

33. 为什么 if ([]) {} 能进 if 分支，但 [] == false 却为真？

```
if语句中是将[]转成boolean ，而所有对象转成boolean都是真

[] == false中，是先将[]转成字符串再做对比
即
'' == false 是将空字符串转换成false，所以对比结果为真
```

34. 请尽量多的列出 JS 语言的运算符。

```
! < > = + - * ** / && | || >>> >> == === ++ -- += -= >= <= ^ %
... 展开运算符  也可以展开对象
??  空值合并运算符  a??b  左边为null或undefined 才返回右边
?. 可选链

```

35. 常见缓动函数有哪些，画出其【典型的】【时间-距离】图像。

```

```

36. 使用 css3 animation 实现 marquee 标签的效果

```

```

37. 简述字体图标的原理及其优缺点

```
通过设计特定的字体文件，让该字体文件中的一些符号的形状为我们所需的图标型状
然后再某元素的中使用这个字体，并插入相应的符号，元素即会显示出该图标
实际中一般使用伪元素来插入符号

优点：
1.轻量性：一个图标字体比一系列的图像（特别是在Retina屏中使用双倍图像）要小。一旦图标字体加载了，图标就会马上渲染出来，不需要下载一个图像。可以减少HTTP请求，还可以配合HTML5离线存储做性能优化。
2.灵活性：图标字体可以用过font-size属性设置其任何大小，还可以加各种文字效果，包括颜色、Hover状态、透明度、阴影和翻转等效果。可以在任何背景下显示。使用位图的话，必须得为每个不同大小和不同效果的图像输出一个不同文件。
3.兼容性：网页字体支持所有现代浏览器，包括IE低版本。

缺点：
1.图标字体只能被渲染成单色或者CSS3的渐变色，由于此限制使得它不能广泛使用。
2.使用版权上有限制，有好多字体是收费的。当然也有很多免费开源的精美字体图标供下载使用。
3.创作自已的字体图标很费时间，重构人员后期维护的成本偏高
不能动画
```

38. 说出 viewport 声明的意义，及如何适配移动端页面，分别给出不同情况下的解决方案

```
<meta name="viewport" content="width=device-width">
其作用是设置手机上的浏览器用多大窗口渲染页面

    - 不同的浏览器环境
        + 安卓 5.0 以上
            直接将所有手机的viewport设置成相同的值即可
        + 安卓 5.0 以下
            使用rem：
              我们希望视觉稿宽度为手机浏览器宽度，即为浏览器窗口宽度
                X = 100vw
                Xrem = 100vw
                1rem = 100vw/X

    - 不同的设计需求
        + 严格按比例还原视觉稿布局

        + 页面内容与屏幕大小呈正相关
            设置width=device-width
            相当于手机屏幕越大，窗口越宽
            用像素单位开发即可
            但此时要考虑页面面对的窗口宽度不同所以要写处流式/响应布局页面

39. 什么是 FOUC 以及 FOUT？如何产生的？如何避免？

```

如果使用 import 方法对 css 进行导入,会导致某些页面在 Windows 下的 Internet Explorer 出现一些奇怪的现象:
以无样式显示页面内容的瞬间闪烁,这种现象称之为文档样式短暂失效(Flash of Unstyled Content),简称为 FOUC.

原因大致为：
1，使用 import 方法导入样式表。
2，将样式表放在页面底部
3，有几个样式表，放在 html 结构的不同位置。
其实原理很清楚：当样式表晚于结构性 html 加载，当加载到此样式表时，页面将停止之前的渲染。
此样式表被下载和解析后，将重新渲染页面，也就出现了短暂的花屏现象。

解决方法：使用 link 标签将样式表放在文档 head 中

FOUT Flash of Unstyled Text
无样式字体闪烁
使用在线字体，但是字体下载较缓慢时产生

```

40. 如何实现文字溢出后显示为省略号，写出完整代码

```

div{
overflow: hidden;
text-overflow: ellipsis;
wite-space: nowrap;
}

```

41. 如何禁用 textarea 元素默认的可缩放行为？

```

textarea{
resize:none; both/horizontal/vertical
}
此属性也可以应用再其他元素，但要配合 overflow:auto;一起使用

```

42. 用 CSS 画出一个半圆形，分别给出实心与空心的的画法。

```

```

43. 解释什么是 reflow 与 repaint 以及它们各自的特点以及会造成的问题并给出应对方案。

```

reflow 回流，也叫 relayout,即重新计算布局，因为有元素的布局属性发生了变化
回流一定会包含重绘
回流速度较慢，浏览器计算布局的时间会相对久一些

repaint 重绘，指元素的布局没有发生变化，但样式变了，如颜色，北京，边框样式
重绘不包含回流
重绘时复用了之前的回流计算结果，只是改变了元素的显示效果，不改变位置，大小等方面，所以速度很快

在做交互或动画时，如果能用仅触发的方式实现，尽量选择重绘
当元素要动的时候，可以选择 transform 来实现，transform 属性不改变布局

```

44. transition-delay 及 animation-delay 为负表现出什么样的行为？

```

动画或缓动从已经播放了一会才开始执行

```

45. 指出如下程序中存在的【所有错误】

```

````

    ```
    var x = (5 + 8 *( 9+2(4+5*(2*5(3(4+0)*7)%2)/2)*4.5)/9)
    var y = 'foobar'
    var fruit = 'apple'

    for (var i = 0; i<10; i++) {
      console.log(i)
    }

    if (x >= 25) {
      console.log(3)
    } else if (x <= 30) {
      console.log(2)
    } else if(x<=20) {
      console.log(2)
    } else {
      console.log(2)
    }
    ```

46. 假设如下【重新定义】闰年，写出判断闰年的函数 isLeapYear

```js
function isLeapYear(y) {
  if (y % 3200 == 0) {
    return false
  }
  if (y % 400 == 0) {
    return true
  }
  if (y % 100 == 0) {
    return false
  }
  if (y % 4 == 0) {
    return true
  }
  return false
}
````

    - 4的倍数
    - 100的倍数不是
    - 400的倍数是
    - 3200的倍数不是

47. 分别用 flex，float，定位，表格等写出三栏等高自适应布局的实现代码

```

```

48. 读程序写结果

```
没有给sum初始值
NaN
```

    ```
    var sum
    for (var i = 45; i >= -5; i-=2) {
      sum += i
    }
    console.log(sum)
    ```

49. JS 程序不加分号的话在哪些特殊情况下要加？

```
当一行的第一个符号是 +， -， /， (， [， `， 时，改行的前一行末尾要加分号，否则这两行就会合并成一行
由于是通过当前行决定上一行要不要加分号，所以往往是把分号加到这一行的开头即分号前置
```

50. 读程序写结果

```
379
```

    ```js
    var x = 0
    var i = -8, j = 42
    var count = 0
    while (x < 10) {
      for(i = x; i<42;i++) {
        do {
          count++
          j--
        } while (j > 37)
      }
      x++
    }
    console.log(count)
    ```

51. CSS3 的 @font-face 除了可以用来做字体图标外，还可以如何使用以提高代码的可维护性？

```

```

52. CSS3 Media Query 可以在查询媒体的哪些方面以实现不同情况下让不同的 CSS 代码生效？

```
窗口宽，高，比例，横竖，像素密度，设备，介质（屏幕or打印）
```

53. 写出使用 8 位二进制表示 168 与-200 时的形式。然后计算它们进行按位与，按位或，按位非，按位异或的结果

```
168：10101000，为-88
-200：
原码：111001000
反码：100110111
补码：100111000
保留低8位：00111000，为56

   10101000   01010111
   00111000   11000111
&  00101000   40
|  10111000   -72

```

54. 请解释什么是“不动点理论”

```
在一个地区查看这个地区的地图，则地图上必然有个点与其真实的物理位置是重叠的
```

55. 当页面中出现表示时间的文字但表意不明确时，比较优雅且富有语义的做法是什么？

```
<time></time>
```

56. JS 代码在什么情况下会发生（隐式/自动）类型转换？

```
当运行符两边的类型不符合其期望时
[]==flase 是对的  就是把[]转换成字符'' 然后在比较
```

57. 能否使用 for 做为变量的名字？为什么？

```
不能，它是关键字
但它确实可以做对象的属性名
```

58. break 关键字可以用在哪些语句里？

```
 for  while  do while  switch
```

59. c++ 与 ++c 有什么区别？

```
c++是先返回c的值再对c加1
++c是对c加1再返回新的c的值
```

60. 请把【foo"'\\n//】这 10 个符号表示为 js 中的字符串（不含两个【】符号）。

```
'foo"\'\\\\n//'
```

61. 请用自己的话列出数组和字符串的常用函数/方法的使用方式，即函数名及接收参数与返回的值。

```
map.filter,reduce,find,findIndex
some,every
sort,slice,splice
```

62. 请【手动】调整如下代码的缩进及格式

```js
var primeList = [2, 3, 5, 7, 11, 13, 17, 19, 23];

function isPrime(n) {
  var sn = Math.sqrt(n);

  for (var i = 0; primeList[i] <= sn; i++) {
    if (n % primeList[i] === 0) {
      return false;
    }
  }
  return true;
}

function countPrimes(n) {
  var count = 1;
  for (var i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      primeList.push(i);
      count++;
    }
  }
  return count;
}
```

    ```js
    var primeList = [2,3,5,7,11,13,17,19,23]

    function isPrime(n) {
        var sn = Math.sqrt(n)

    for(var i = 0; primeList[i] <= sn; i++) {
        if (n % primeList[i] === 0) {

return false
}}
return true
}

    function countPrimes(n) {
      var count = 1
      for(var i = 3; i < n; i+=2) {
    if (   isPrime(i)) {
            primeList.push(i)

count++
}
}return count
}

    ```

63. 什么是死循环？什么情况下会触发死循环？

```
一直不结束的循环
结束条件一直不满时

```

64. 如何调试 JS 代码？调试功能最主要的目的是什么？

```

```

65. switch/case 语句有哪些需要注意的问题？

```
进入switch语句后如果不遇到break，会一直向下执行，即使在其它case语句下也会执行



```

66. while 语句和 do while 语句的区别是什么？

```

```

67. 为什么判断一个数是否为素数只需要拿它除以小于等于它平方根的所有素数就可以了？推导整个过程

```
因如果小于平方根里找不到其因子，那么大于其平方根的数中也不可能有因子
因为因子是成对出现的，且必然分布在平方根的两边

因为如果除以一个素数都除不尽，则除以该素数的倍数必然除不尽，所以不用除了
所以就只需要除以素数了
```

68. 解释一下数学中映射的意义及其在编程语言中对应的概念

```
对象：名字映射到值
数组：编号映射到值
函数：参数映射到返回值
switch语句：值映射到语句

```

69. JS 语言有哪些基本的数据类型？相同及不同数据类型的值分别可以做什么类型的运算？

```
如果“基本”的意思是不可拆分的，则
number,string,boolean,null,undefined,symbol

如果“基本”的意思是自带的
那么对象与函数也得算上

```

70. 解释函数声明语句的语法为什么不能直接被调用

```

function foo(a,b) {
  return a + b
}(1,5)

因为它是一条“语句”不是表达式，语句不产生求值结果
且它到}就结束了，相当于}后面有一个分号

```

71. 使用 var 与使用 let 声明变量有什么区别？

```
var声明的会提前，且在函数作用域内（即在所在函数中可用）

let声明的变量在块级作用域（即最近的表示语句块{}内可用）
let声明的变量存在TDZ：即在其所在作用域内，声明完成之前不使用该变量（不会使用到外层同名变量）
```

72. 中英互翻

```

```

    * graceful degrade   优雅降级
    * shrink   收缩
    * alternative   另外的可选项
    * render   渲染
    * surprisingly 吃惊的
    * convention     习惯
    * trigger    触发
    * syntax   语法
    * pixel ratio   像素比例
    * linear   线性的
    * series   系列
    * chain    链式  _.chain([1,2,3])
    * keyframe  关键帧
    * unique    唯一的
    * maintainable   可维护的
    * dppx     dot per px
    * dpi      dot per inch
    * instant  立刻
    * precede  前续的
    * counterparts   对应的部分
    * immediately  立刻马上
    * shape   形状
    * horizontal  水平方向
    * feature   功能
    * incredibly  吃惊的，很大程度上的，吓人
    * cpu-intensive    计算密集的
    * hardware acceleration  硬件加速
    * available   可用的
    * situation   情况
    * case        用例
    * scenario    场景
    * shorthand   快捷键
    * vertical    垂直的
    * compose     组合，创作
    * vendor      厂商
    * prefix      前缀
    * subsequent    后续的，接下来的
    * illustrate   演示
    * dpcm       dots  per  cm
    * resolution 分辨率，解决方案
    * square     平方
    * cinematic   电影的，戏剧的
    * multiple    多个，乘法
    * bulletproof  防弹的
    * address   地址，称呼，处理，解决
    * issue     （存在的）问题，刊物的某一期
    * workaround  解决问题的另外办法
    * introduce   引入，介绍
    * model       模型，模特
    * hexadecimal 十六进制
    * combine     结合
    * quartet     四分之一
    * perspective 视角
    * prime       素数
    * torture     受苦
    * evenly      均匀的
    * shift       切换
    * offset      偏移
    * implement   实现
    * 字体子集   font subset
    * axis      坐标轴
    * viewport   视口
    * develop    开发，有时简称dev
    * development  开发（名词）
    * attribute selector   属性选择器
    * siblings    兄弟
    * ajacent     毗邻的
    * cartesian coordinate system  笛卡尔坐标系（即直角坐标系）
    * dimensional      维度
    * inherit  继承
    * output    输出
    * input   输入
    * default   默认值
    * restrict   限制，受限
    * certain    特定的
    * circumstance  情况
    * sceneario  场景
    * 伪元素   pseudo element
    * 伪类 pseudo class
    * structure  结构
    * infinite   无穷的
    * intensive  密集的
    * palette    调色盘
    * reduce     聚积，归约
    * ellipse    椭圆
    * ellipsis   省略号
    * currency   货币
    * quirk      奇怪的，怪异的
    * portrait   竖屏，肖像画
    * landscape  横屏，风景画
    * orientation  方向（指横屏竖屏的方向）
    * credentials  凭据
    * origin       源，起点，起源
    * gradient     渐变
    * distort      变形的
    * cubic        立方体
    * implicit     隐式的
    * explicit     显式的，明确的
    * decoration   装饰

73. 以下两种定义函数的方式有何种区别？

```
第一种是变量声明并赋值一个函数表达式的求值结果

第二种是函数声明，会提前
```

    ```
    var f = function(x) {
        return x * x
    }

    function g(x) {
        return x * x * x
    }
    ```

74. 对象与数组有何种相似与不同之处？

```
都表达映射
对象是将名字映射到值
数组是次索引映射到值


不同：
数组的背后是连续的内存空间
对象的背后是哈希表

```

75. 读程序写结果

```
console.log([2,3,3,9,12,27,7][3])

```

    ```js
    var a = 3
    var b = 9
    console.log(function(n){return [2,3,a,b,a+b,a*b,n]}(7)[Math.round(Math.sin(3.14))+3])
    ```

76. 递归函数能正确运算的两个必要条件是什么？实现递归函数时应该以何种思路来实现？编写递归代码时需要注意些什么？

```
递归函数能正确运算的两个必要条件是什么？
基准情形
不断向基准情形推进

实现递归函数时应该以何种思路来实现？
把递归函数当成已经被正确实现

编写递归代码时需要注意些什么？
不要有重复计算

```

77. 完成以下递归函数以实现输出汉诺塔（http://www.7k8k.com/h5/5675_swf.html）游戏的解题/操作过程。建议先自己多玩几局这个游戏，找到套路后再写代码，玩法可以自行百度。

```js
function hanoi(n = 6, from = 1, to = 3) {
  if (n == 1) {
    // 如果只有一层，直接挪
    console.log(from, "->", to);
  } else {
    // 如果不只一层
    var mid = 6 - from - to; // 计算出中转杆
    hanoi(n - 1, from, mid); // 将上面的n-一层从起点挪到中转杆
    console.log(from, "->", to); // 将最后一层从起点挪到终点
    hanoi(n - 1, mid, to); // 将上面的n-一层从中转杆挪到终点
  }
}
```

    ```js
      /*
         n 为最上面的若干层，默认为6，相当于游戏的第4关
         from 为将这些层当前的位置
         to 为这些层的目标位置
         游戏开始时所有塔在一号杆，需要移到三号杆，所以from默认为1，to默认为3
         按顺序输出每一步应该如何操作，console.log('请将x号杆最上面的塔移到y号杆')
      */
      function hanoi(n = 6, from = 1, to = 3) {

      }
    ```

78. 如下表达式的求值结果是多少？

```js
Math.max(4, 5, 6);
```

    ```js
    Math.max(...([1,2,3,[4,5,6],[5,6,7]][3]))
    ```

79. 如下代码的输出是什么？并解释原因

```js
// 原始类型是不可变的

var str = "hello world";
str.a = 8; // 不报错但也不会成功
console.log(str.a); // undefined
str.length = 5; // 同上
console.log(str); // 'hello world'
var num = 8;
num.value = 9;
console.log(num); // 8
var arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr); // [1,2,3]
```

    ```js
    var str = 'hello world'
    str.a = 8
    console.log(str.a)
    str.length = 5
    console.log(str)
    var num = 8
    num.value = 9
    console.log(num)
    var arr = [1,2,3,4,5]
    arr.length = 3
    console.log(arr)
    ```

80. 解释一下什么是词法作用域与动态作用域以及它们会如何影响程序的执行

```
词法作用域
  函数内的代码对变量的访问取决函数自身所在作用域，同时也是函数自身的定义位置，而非函数的调用位置。
  定义位置只有一份，但该函数的实例可能有多个
  如高阶函数中，内层函数只写了一份，但外层函数每运行一次都会创建一次内层函数


动态作用域
  函数内的代码读取形参以外的变量时，能够访问到函数调用位置的变量
  在不同位置调用，读到变量值是不同的

  词法作用域中程序员是明确知道函数中的变量是哪一个的
  但动态作用域中，无法确定函数内访问的变量具体是哪个变量
  会让程序逻辑变的混乱

```

81. 为什么不带参数调用 Math.max 返回的是-Infinity？

```

function max(...args) {
  var result = -Infinity
  for (var xxx) {

  }
  return result
}

```

82. 书写对象时，属性名在什么情况下需要加引号，什么情况下不需要加？

```
属性名为数值或属性名可以做为合法变量名时，不用加引号
其它情况要加，如有标点，有空格等
曾经属性名为关键字时也要加

```

83. obj.x 与 obj[x]有何不同，什么情况下是相同的？

```
obj.x 总是读取obj的名为x的属性

obj[x] 是将中括号内的内容当表达式运算出一个字符串，以那个字符串做为要读取的属性

在x的求值结果为'x'的时候相同
```

84. 读程序写结果

```

```

    ```js
    function foo(a, b, c) {
        a = {
            name: 'damiao'
        }
        b.teacher = 'xieran'
        c.radix = 16
        console.log(c.radix)
    }

    var company = {
        name: 'xiaomi'
    }
    var person = {
        teacher: 'xiedamiao'
    }
    var c = 99
    foo(company, person, c)
    console.log(company, person, c)
    ```

85. 读程序写结果

```

```

    ```js
    var a = 1
    function foo() {
        var a = 4
        var o = {
            bar: function() {
                window.a = 99
                console.log(a)
            }
        }
        return o
    }

    var b = foo()
    b.baar = function() {
        console.log(a)
    }
    b.bar() //4
    b.baar() // 99
    ```

86. 简述 2d 矩阵变幻的原理计算方式。并说出对一个元素执行 matrix(1,0,0,2,10,20) 会对元素做怎样的变幻？

```
原理：
将元素的每个像素的坐标乘以矩阵得到另一个坐标，将该像素移动到另一个坐标
根据矩阵的不同，会对元素执行不同的线性变幻

(x,y) (1,0,0,2) => (x, 2y)
相当于将元素在垂直方向拉伸到原来的两倍
并平移（10，20）
```

87. 请区分调用栈，闭包，词法作用域几个概念，以及它们会如何影响程序的执行？

```
调用栈   函数间的等待关系
  a函数运行时调用b函数，a函数就在等待b函数，b函数运行又调用c函数，b在等待c
  a，b，c函数间就调用栈的关系，其中c函数在栈顶，是最先运行完成的
  每个语言都有


闭包     函数创建的作用域未被销毁
  一个函数运行返回了一个函数，则其运行时创建的作用在返回函数还能使用时不会销毁


词法作用域   对变量访问或查找的语法规则
  从代码书写位置开始向外层作用域找

```

88. 如何探测调用栈的深度？如何得知当前函数在递归的第几层？

```
可以
通过给想要统计深度的函数前后加上对调用深度的统计代码（前面增加深度变量，后面减小深度变量）
是可以实现的，任何时候读取该变量即可知调用深度
```

89. 简述什么是随机算法及其基本思想，并设计算法计算派（π）的近似值

```
随机算法不是随数生成算法

而是算法中有使用随机数的算法，如快排。

var n = 10000
var inCircle = 0

for (var i = 0; i < n; i++) {
  var x = Math.random()
  var y = Math.random()
  if (x * x + y * y < 1) {
    inCircle++
  }
}

console.log(inCircle * 4 / n)

```

90. 完成以下代码使其能够输出数组中去掉一个最大值和最小值后的平均值，【并精确到小数点后两位】

```

```

    ```js
    [3,5,2,7,8,1,4,9]
    .reduce(function(memo, value, index, array) {
      return (memo * index + value) / (index + 1)
    })

    [3,5,2,7,8,1,4,9]
    .reduce(function(memo, value, index, array) {
      if (index == array.length - 1) {
        return array.reduce((a,b) => a+b) / array.length
      }
    })
    ```

91. 如下招租广告中租金和房东的电话分别是多少？

```

```

    ```
    // 五道口三居室精装修电梯房xxxx元一个月
    // 空调暖气热水器，三房两卫大阳台
    // 千兆光纤免费用，卧室全部都朝南
    // 但是只租程序员，！！！！！！！
    // 租房还配米家扫地机器人！
    // 房东非北京本地人，长年在外地，人品好，性格好，只为找个好租客
    // 租金及房东电话号码从以下程序中得出
    // 联系我时请说明是在知乎上看到的
    var td = [1, 0, 5, 6, 7, 8]
    var dm = [4, 4, 5, 2, 4, 1, 0, 0, 3, 5, 0]
    var dm = [7, 7, 8, 5, 7, 0, 1, 1, 6, 8, 1]
    var 月租金 = [1,2,3,4,5,6,7,8,9,10].filter(isNotPrime).reduce((a,b)=>a*b, 1.5)
    var 房东电话 = dm.map(i => td[i]).reverse().join()

    // 注：相关真实事件地址：http://www.phpjyz.com/article-1065.html
    ```

92. 高阶函数的定义是什么？它能给编程人员带来什么便利/好处？

```

如果一个函数接收一个函数或者返回一个函数或者再者兼有，则它称为高阶函数

可以对特定的动作进行抽象

```

93. 读程序写结果

```

```

    ```js
    var foo = function(){
        return 9
    }

    var obj = {
        foo: function(){
            return 8
        }
    }

    function bar(f) {
        console.log(f())
    }

    bar(obj.foo)
    ```

94. 算法复杂度中的大 O 符号的具体定义是什么？

```
描述复杂度的一个符号，它描述的一个函数的增长率不超过另一个函数

具体到算法中，是描述一段程序的运行时间随着输入的提升所发生的变化不会超某个函数的增长速度
```

95. for in 循环与 for of 循环的区别是什么？for in 循环有什么需要注意的问题？in 运算符有什么需要注意的问题？

```
for in用来遍历对象的属性名

for of用来遍历数组的项，而非下标


for in循环有什么需要注意的问题？
它会把原型中可枚举属性也遍历出来

in运算符有什么需要注意的问题？
属性在原型中存在时in也会返回真

```
