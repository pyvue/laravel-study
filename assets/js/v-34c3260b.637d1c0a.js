(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[3289],{8131:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-34c3260b",path:"/collections/zip.html",title:"zip",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"不改变原集合",slug:"不改变原集合",children:[]}],filePathRelative:"collections/zip.md",git:{updatedTime:1617072411e3,contributors:[]}}},8891:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(6252).uE)('<h1 id="zip"><a class="header-anchor" href="#zip">#</a> zip</h1><p>将给定数组的值与相应索引处的原集合的值合并在一起。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1218\n     all: [\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1217\n         all: [\n           1,\n           5,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1216\n         all: [\n           2,\n           6,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1215\n         all: [\n           3,\n           7,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1214\n         all: [\n           4,\n           8,\n         ],\n       <span class="token punctuation">}</span>,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>传递多个数组给 zip 方法</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1228\n     all: [\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1227\n         all: [\n           1,\n           5,\n           &quot;a&quot;,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1226\n         all: [\n           2,\n           6,\n           &quot;b&quot;,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1225\n         all: [\n           3,\n           7,\n           &quot;c&quot;,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1224\n         all: [\n           4,\n           8,\n           &quot;d&quot;,\n         ],\n       <span class="token punctuation">}</span>,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>如果传递的数组个数不匹配，将以 <code>null</code> 填充。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1224\n     all: [\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1223\n         all: [\n           1,\n           5,\n           &quot;a&quot;,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1222\n         all: [\n           2,\n           6,\n           &quot;b&quot;,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1221\n         all: [\n           3,\n           7,\n           null,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1220\n         all: [\n           4,\n           8,\n           null,\n         ],\n       <span class="token punctuation">}</span>,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>当然也可以在提供的数组中传递 <code>null</code> 值来重新索引</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token constant">null</span><span class="token punctuation">,</span> <span class="token constant">null</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;b&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\n=&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1230\n     all: [\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1229\n         all: [\n           1,\n           5,\n           null,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1228\n         all: [\n           2,\n           6,\n           null,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1227\n         all: [\n           3,\n           7,\n           &quot;a&quot;,\n         ],\n       <span class="token punctuation">}</span>,\n       Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1226\n         all: [\n           4,\n           8,\n           &quot;b&quot;,\n         ],\n       <span class="token punctuation">}</span>,\n     ],\n   <span class="token punctuation">}</span>\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><h2 id="不改变原集合"><a class="header-anchor" href="#不改变原集合">#</a> 不改变原集合</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$collection</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span> <span class="token operator">=</span> <span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">zip</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token variable">$newCollection</span><span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token variable">$collection</span><span class="token operator">-&gt;</span><span class="token function">dd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:4 [\n  0 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1231\n    #items: array:2 [\n      0 =&gt; 1\n      1 =&gt; 5\n    ]\n  <span class="token punctuation">}</span>\n  1 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1230\n    #items: array:2 [\n      0 =&gt; 2\n      1 =&gt; 6\n    ]\n  <span class="token punctuation">}</span>\n  2 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1229\n    #items: array:2 [\n      0 =&gt; 3\n      1 =&gt; 7\n    ]\n  <span class="token punctuation">}</span>\n  3 =&gt; Illuminate\\Support\\Collection <span class="token punctuation">{</span>#1228\n    #items: array:2 [\n      0 =&gt; 4\n      1 =&gt; 8\n    ]\n  <span class="token punctuation">}</span>\n]\narray:4 [\n  0 =&gt; 1\n  1 =&gt; 2\n  2 =&gt; 3\n  3 =&gt; 4\n]\n */</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>',11),e={render:function(n,s){return p}}}}]);