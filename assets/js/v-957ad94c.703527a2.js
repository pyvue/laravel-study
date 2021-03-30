(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[4943],{6776:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-957ad94c",path:"/collections/only.html",title:"only",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"接收字符串或者可变参数",slug:"接收字符串或者可变参数",children:[]},{level:2,title:"接收数组参数",slug:"接收数组参数",children:[]},{level:2,title:"接收集合参数",slug:"接收集合参数",children:[]},{level:2,title:"Null 参数",slug:"null-参数",children:[]},{level:2,title:"不改变原集合",slug:"不改变原集合",children:[]}],filePathRelative:"collections/only.md",git:{updatedTime:1617072411e3,contributors:[]}}},927:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>i});var p=a(6252);const t=(0,p.uE)('<h1 id="only"><a class="header-anchor" href="#only">#</a> only</h1><p>不改变原集合的返回集合中给定键的所有项目。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1217\n     all: [\n       0 =&gt; 1,\n       2 =&gt; 3,\n       3 =&gt; 4,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><code>only</code> 方法的参数接收另一个集合、数组、字符串、可变参数或NULL，并返回对应键的值重新构建的新集合，且新集合中的 <code>key</code> 不会被重置。</p><h2 id="接收字符串或者可变参数"><a class="header-anchor" href="#接收字符串或者可变参数">#</a> 接收字符串或者可变参数</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span>\n  <span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;price&#39;</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1214\n     all: [\n       &quot;product&quot; =&gt; &quot;coconuts&quot;,\n       &quot;price&quot; =&gt; 10,\n     ],\n   <span class="token punctuation">}</span> \n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="接收数组参数"><a class="header-anchor" href="#接收数组参数">#</a> 接收数组参数</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span>\n  <span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1216\n     all: [\n       &quot;product&quot; =&gt; &quot;coconuts&quot;,\n       &quot;price&quot; =&gt; 10,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="接收集合参数"><a class="header-anchor" href="#接收集合参数">#</a> 接收集合参数</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$keys</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token variable">$keys</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1222\n     all: [\n       &quot;product&quot; =&gt; &quot;coconuts&quot;,\n       &quot;qty&quot; =&gt; 45,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="null-参数"><a class="header-anchor" href="#null-参数">#</a> Null 参数</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token constant">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1213\n     all: [\n       &quot;product&quot; =&gt; &quot;coconuts&quot;,\n       &quot;price&quot; =&gt; 10,\n       &quot;qty&quot; =&gt; 45,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><blockquote><p>传入 <code>null</code> 参数，返回的集合将原样返回原集合。</p></blockquote><h2 id="不改变原集合"><a class="header-anchor" href="#不改变原集合">#</a> 不改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$keys</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;coconuts&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;qty&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">only</span><span class="token punctuation">(</span><span class="token variable">$keys</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印原集合</span>\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 打印通过 only 方法调用后的新集合</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:3 [\n  &quot;product&quot; =&gt; &quot;coconuts&quot;\n  &quot;price&quot; =&gt; 10\n  &quot;qty&quot; =&gt; 45\n]\narray:2 [\n  &quot;product&quot; =&gt; &quot;coconuts&quot;\n  &quot;qty&quot; =&gt; 45\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',15),e=(0,p.Uk)("与 "),o=(0,p.Wm)("code",null,"only",-1),l=(0,p.Uk)(" 相反的操作是 "),c={href:"/collections/except.md",target:"_blank",rel:"noopener noreferrer"},u=(0,p.Uk)("except"),r=(0,p.Uk)(" 方法。"),i={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("blockquote",null,[(0,p.Wm)("p",null,[e,o,l,(0,p.Wm)("a",c,[u,(0,p.Wm)(a)]),r])])],64)}}}}]);