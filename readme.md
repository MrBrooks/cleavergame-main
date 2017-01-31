<p>Блоки для сайта http://clever-game.ru/</p>
<p>Сборка лежит в build</p>
<p>Зависимости (css - включены в style.css, js - сами библиотеки лежат в vendor.js, а активация в custom.js):</p>
<ol>
  <li>jQuery JavaScript Library v2.1.4</li>
  <li>owl carousel 2 <a href="http://www.owlcarousel.owlgraphic.com">http://www.owlcarousel.owlgraphic.com/</a></li>
</ol>

==============================
update - multy-level menu v1.0
==============================
Изменения:
Переделана структура меню в html, css & js
P.S.: теперь при инициализации меню нужно указывать параметры:
<pre>
var defs = {
  selector: "#cg-menu", // селектор меню по id
  btn: false,           // если нужна кнопка - то тут селектор кнопки
  speed: 300            // скорость выезжания
}
</pre>
