(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[8746],{9694:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-59bf2e47",path:"/collections/contains.html",title:"contains",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/contains.md",git:{updatedTime:1617072411e3,contributors:[]}}},7708:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>k});var p=a(6252);const t=(0,p.uE)('<h1 id="contains"><a class="header-anchor" href="#contains">#</a> contains</h1><p>判断集合是否包含给定的项目。</p><ul><li>基本用法</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;value&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; false\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;value1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;value1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; true\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;key&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;value1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;value1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; true\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>也可以用 <code>contains</code> 方法匹配一对键/值，即判断给定的配对是否存在于集合中</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Desk&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;Chair&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">100</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">dump</span><span class="token punctuation">(</span><span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;product&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;Bookcase&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;price&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;100&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\nfalse  \n\n=&gt; true\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><ul><li>也可以传递一个回调到 <code>contains</code> 方法来执行自己的真实测试</li></ul><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$value</span> <span class="token operator">&gt;</span> <span class="token number">4</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; true\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">contains</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">,</span> <span class="token variable">$key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token variable">$value</span> <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; false\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',11),e={href:"/collections/contains.md",target:"_blank",rel:"noopener noreferrer"},c=(0,p.Uk)("contains"),o=(0,p.Uk)(" 方法在检查项目值时使用「宽松」比较，意味着具有整数值的字符串将被视为等于相同值的整数。"),l=(0,p.Uk)("相反 "),u={href:"/collections/containsStrict.md",target:"_blank",rel:"noopener noreferrer"},i=(0,p.Uk)("containsStrict"),r=(0,p.Uk)(" 方法则是使用「严格」比较进行过滤。"),k={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)("blockquote",null,[(0,p.Wm)("p",null,[(0,p.Wm)("a",e,[c,(0,p.Wm)(a)]),o]),(0,p.Wm)("p",null,[l,(0,p.Wm)("a",u,[i,(0,p.Wm)(a)]),r])])],64)}}}}]);