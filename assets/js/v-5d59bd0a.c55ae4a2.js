(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[4438],{5940:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-5d59bd0a",path:"/collections/demo/get_key_from_value.html",title:"通过值获取对应key",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"问题如下",slug:"问题如下",children:[]},{level:2,title:"通过 contains 和 search 方法",slug:"通过-contains-和-search-方法",children:[]}],filePathRelative:"collections/demo/get_key_from_value.md",git:{updatedTime:1617071687e3,contributors:[]}}},9026:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>b});var e=a(6252);const t=(0,e.uE)('<h1 id="通过值获取对应key"><a class="header-anchor" href="#通过值获取对应key">#</a> 通过值获取对应key</h1><h2 id="问题如下"><a class="header-anchor" href="#问题如下">#</a> 问题如下</h2><p>有如下数据：</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;val1&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;val2&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key3&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;val3&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',4),p={id:"通过-contains-和-search-方法"},l=(0,e.Wm)("a",{class:"header-anchor",href:"#通过-contains-和-search-方法"},"#",-1),o=(0,e.Uk)(" 通过 "),c={href:"/collections/contains.md",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("contains"),i=(0,e.Uk)(" 和 "),u={href:"/collections/search.md",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("search"),g=(0,e.Uk)(" 方法"),d=(0,e.uE)('<p>当知道值 <code>val2</code> 时，获取其在数组中的 key 值。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$messages</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;key1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;val1&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;val2&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;key3&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;val3&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$messages</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;val2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">collect</span><span class="token punctuation">(</span><span class="token variable">$messages</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">search</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;val2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token doc-comment comment">/**\n=&gt; &quot;key2&quot;\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>',2),b={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("h2",p,[l,o,(0,e.Wm)("a",c,[r,(0,e.Wm)(a)]),i,(0,e.Wm)("a",u,[k,(0,e.Wm)(a)]),g]),d],64)}}}}]);