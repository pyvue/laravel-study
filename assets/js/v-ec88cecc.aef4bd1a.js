(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[9430],{1770:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-ec88cecc",path:"/collections/skipWhile.html",title:"skipWhile",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/skipWhile.md",git:{updatedTime:1617072411e3,contributors:[]}}},8735:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="skipwhile"><a class="header-anchor" href="#skipwhile">#</a> skipWhile</h1><p>跳过集合中的项目，同时给定的回调返回 <code>true</code> ，然后将集合中的其余项目作为新集合返回。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">skipWhile</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1080\n     all: [\n       3 =&gt; 4,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p><strong>注意：</strong> 如果回调从不返回 <code>true</code> ，则 <code>skipWhile</code> 方法将返回一个空集合。</p></blockquote>',4),p={render:function(n,s){return e}}}}]);