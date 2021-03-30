(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[1599],{2239:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-012645e6",path:"/collections/diffKeys.html",title:"diffKeys",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/diffKeys.md",git:{updatedTime:1617072411e3,contributors:[]}}},5148:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="diffkeys"><a class="header-anchor" href="#diffkeys">#</a> diffKeys</h1><p>与另外一个集合或 PHP 数组的「键」进行比较，然后返回原集合中存在而给定的集合中不存在「键」所对应的键值对。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">10</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">diffKeys</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">30</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;pears&#39;</span><span class="token punctuation">,</span> <span class="token number">20</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;bananas&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1087\n     all: [\n       10 =&gt; &quot;apples&quot;,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>',3),p={render:function(n,s){return e}}}}]);