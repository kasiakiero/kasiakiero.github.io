function mpcCookieRead(e){var t=e+"=";var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null}function mpcCookieSet(e,t,n){var r=new Date;r.setDate(r.getDate()+n);var i=escape(t)+(n==null?"":";path=/; expires="+r.toUTCString());document.cookie=e+"="+i}function mpcCookieLoadCss(){var e="cssCookie";if(!document.getElementById(e)){var t=document.getElementsByTagName("head")[0];var n=document.createElement("link");n.id=e;n.rel="stylesheet";n.type="text/css";n.href=mpc_css_url;n.media="all";t.appendChild(n)}}function mpcCheckVariable(){if(mpc_fulltext!=null){mpcCookieInsertBox("mpc_cookie_fulltext",mpc_fulltext)}else{window.setTimeout("mpcCheckVariable();",100)}}function mpcLoadJs(e){var t=document.createElement("script");t.setAttribute("type","text/javascript");t.setAttribute("src",e);document.getElementsByTagName("head")[0].appendChild(t)}function mpcSetLocation(){var e=navigator.userAgent.toLowerCase();if(e.indexOf("chrome")>0||e.indexOf("safari")>0){this.location.href=this.location.pathname+"#"}else{top.location.hash="#"}}function mpcCookieFullInfo(){if(mpc_fulltext==null){mpcLoadJs(mpc_fulltext_url)}mpcCheckVariable();mpcSetLocation();return false}function mpcCookieInsertBox(e,t){var n=document.getElementById(e);if(!n){var r=document.createElement("div");r.id=e;r.innerHTML=t;if(document.body.firstChild){document.body.insertBefore(r,document.body.firstChild)}else{document.body.appendChild(r)}}else{n.innerHTML=t;n.style.display="block"}}function mpcCookieHide(e,t){if(t==1){mpcCookieSet("cookie_seen_info",1,30)}var n=document.getElementById(e);n.style.display="none"}function mpcCookieCreateInfo(){if(!mpcCookieRead("cookie_seen_info")){html='<div id="mpc_cookie_intro_content"><p><a class="mpc_continue" href="javascript:;" onclick="mpcCookieHide(\'mpc_cookie_intro\', 1)">Kontynuuj</a>W tej witrynie stosujemy pliki cookies i podobnych technologii m.in. w celach: świadczenia usług, analiz, statystyk, reklamy. Standardowe ustawienia przeglądarki internetowej zezwalają na zapisywanie ich na urządzeniu końcowym Użytkownika. Kontynuowanie przeglądania serwisu bez zmiany ustawień traktujemy jako zgodę na użycie plików cookies i podobnych technologii. Więcej w "<a href="http://rodo.grupazpr.pl/#time-polityka-cookies">Polityce Cookies</a>", oraz w <a href="http://rodo.grupazpr.pl/#time-polityka-prywatnosci">Polityce Prywatności</a>. Pamiętaj, że zawsze możesz zmienić te ustawienia.</p><img src="'+mpc_cookie_close_buttom+'" alt="zamknij" onclick="mpcCookieHide(\'mpc_cookie_intro\',1)"></div>';mpcCookieInsertBox("mpc_cookie_intro",html)}}function mpcLoadEvent(e){var t=window.onload;if(typeof window.onload!="function"){window.onload=e}else{window.onload=function(){if(t){t()}e()}}}var mpc_fulltext=null;var mpc_fulltext_url="//muratordom.smcloud.net/t/cookie_info_more.js";var mpc_css_url="//muratordom.smcloud.net/t/cookie.css";var mpc_cookie_close_buttom="//muratordom.smcloud.net/t/mpc_cookie_close.gif";mpcCookieLoadCss();mpcLoadEvent(mpcCookieCreateInfo)