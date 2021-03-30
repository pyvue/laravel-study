(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[4805],{3528:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-0b79e4bc",path:"/collections/partition.html",title:"partition",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/partition.md",git:{updatedTime:1617072411e3,contributors:[]}}},1350:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="partition"><a class="header-anchor" href="#partition">#</a> partition</h1><p>可以和 PHP 中的 <code>list()</code> 方法结合使用，来分开通过指定条件的元素以及那些不通过指定条件的元素。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">list</span><span class="token punctuation">(</span><span class="token variable">$underThree</span><span class="token punctuation">,</span> <span class="token variable">$equalOrAboveThree</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">partition</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$i</span> <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$underThree</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$equalOrAboveThree</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token doc-comment comment">/**\narray:2 [\n  0 =&gt; 1\n  1 =&gt; 2\n]\n\narray:4 [\n  2 =&gt; 3\n  3 =&gt; 4\n  4 =&gt; 5\n  5 =&gt; 6\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',3),e={render:function(n,s){return p}}}}]);