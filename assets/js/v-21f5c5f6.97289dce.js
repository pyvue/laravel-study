(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[5628],{6601:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-21f5c5f6",path:"/collections/mapWithKeys.html",title:"mapWithKeys",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"不改变原集合",slug:"不改变原集合",children:[]}],filePathRelative:"collections/mapWithKeys.md",git:{updatedTime:1617071363e3,contributors:[]}}},520:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<h1 id="mapwithkeys"><a class="header-anchor" href="#mapwithkeys">#</a> mapWithKeys</h1><p>遍历集合并将每个值传入给定的回调。回调应该返回包含一个键值对的关联数组</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$item</span> <span class="token operator">=&gt;</span> <span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1085\n     all: [\n       &quot;first&quot; =&gt; &quot;value1&quot;,\n       &quot;second&quot; =&gt; &quot;value2&quot;,\n     ],\n   <span class="token punctuation">}</span> \n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>可以在 <code>mapWithKeys</code> 的回调函数中返回空数组来忽略集合中的某些元素。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$key</span> <span class="token operator">===</span> <span class="token string single-quoted-string">&#39;value2&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 集合中 key 为 value2 的项排除</span>\n    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token variable">$item</span> <span class="token operator">=&gt;</span> <span class="token variable">$key</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1091\n     all: [\n       &quot;first&quot; =&gt; &quot;value1&quot;,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>添加更多元素</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;value1&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;first&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;value2&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;second&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span>\n    <span class="token variable">$item</span> <span class="token operator">=&gt;</span> <span class="token variable">$key</span><span class="token punctuation">,</span>\n    <span class="token variable">$item</span><span class="token operator">.</span> <span class="token string single-quoted-string">&#39;_upper&#39;</span> <span class="token operator">=&gt;</span> <span class="token function">strtoupper</span><span class="token punctuation">(</span><span class="token variable">$key</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1093\n     all: [\n       &quot;first&quot; =&gt; &quot;value1&quot;,\n       &quot;first_upper&quot; =&gt; &quot;VALUE1&quot;,\n       &quot;second&quot; =&gt; &quot;value2&quot;,\n       &quot;second_upper&quot; =&gt; &quot;VALUE2&quot;,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="不改变原集合"><a class="header-anchor" href="#不改变原集合">#</a> 不改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">mapWithKeys</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n[]\n\narray:5 [\n  0 =&gt; 1\n  1 =&gt; 2\n  2 =&gt; 3\n  3 =&gt; 4\n  4 =&gt; 5\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>',9),t={render:function(n,s){return p}}}}]);