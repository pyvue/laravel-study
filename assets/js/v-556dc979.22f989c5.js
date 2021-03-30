(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[7456],{7402:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-556dc979",path:"/collections/collapse.html",title:"collapse",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/collapse.md",git:{updatedTime:1617071363e3,contributors:[]}}},1548:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="collapse"><a class="header-anchor" href="#collapse">#</a> collapse</h1><p>将多个数组合并成一个。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">collapse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1097\n     all: [\n       1,\n       2,\n       3,\n       4,\n       5,\n       6,\n       7,\n       8,\n       9,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>上面方法的使用类似于 <code>flatten</code> 方法的调用结果。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token number">0</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;array1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token number">1</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;array2&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token number">2</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;array3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">collapse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1102\n     all: [\n       [\n         &quot;array1&quot;,\n       ],\n       [\n         &quot;array2&quot;,\n       ],\n       [\n         &quot;array3&quot;,\n       ],\n       3,\n       4,\n       5,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>上面方法的使用类似于 <code>flatten(1)</code> 方法的调用结果。</p>',6),e={render:function(n,s){return p}}}}]);