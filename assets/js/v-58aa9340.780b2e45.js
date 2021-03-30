(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[2015],{5147:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-58aa9340",path:"/collections/transform.html",title:"transform",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"改变原集合",slug:"改变原集合",children:[]}],filePathRelative:"collections/transform.md",git:{updatedTime:1617071687e3,contributors:[]}}},6897:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>b});var p=a(6252);const e=(0,p.uE)('<h1 id="transform"><a class="header-anchor" href="#transform">#</a> transform</h1><p>迭代集合并对集合内的每个项目调用给定的回调，而集合的内容也会被回调返回的值取代。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1086\n     all: [\n       2,\n       4,\n       6,\n       8,\n       10,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',3),t=(0,p.Uk)("与大多数集合的方法不同，"),l=(0,p.Wm)("code",null,"transform",-1),c=(0,p.Uk)(" 会修改集合本身。 如果想创建新集合，应该使用 "),o={href:"/collections/map.md",target:"_blank",rel:"noopener noreferrer"},r=(0,p.Uk)("map"),u=(0,p.Uk)(" 方法。"),i=(0,p.uE)('<h2 id="改变原集合"><a class="header-anchor" href="#改变原集合">#</a> 改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$item</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$item</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\narray:5 [\n  0 =&gt; 2\n  1 =&gt; 4\n  2 =&gt; 6\n  3 =&gt; 8\n  4 =&gt; 10\n]\n\narray:5 [\n  0 =&gt; 2\n  1 =&gt; 4\n  2 =&gt; 6\n  3 =&gt; 8\n  4 =&gt; 10\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div>',2),b={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("blockquote",null,[(0,p.Wm)("p",null,[t,l,c,(0,p.Wm)("a",o,[r,(0,p.Wm)(a)]),u])]),i],64)}}}}]);