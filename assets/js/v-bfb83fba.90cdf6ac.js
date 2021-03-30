(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[1672],{3720:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-bfb83fba",path:"/collections/toJson.html",title:"toJson",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/toJson.md",git:{updatedTime:1617072411e3,contributors:[]}}},7229:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var t=a(6252);const p=(0,t.uE)('<h1 id="tojson"><a class="header-anchor" href="#tojson">#</a> toJson</h1><p>将集合转换成 JSON 字符串。</p><p>通过 <code>json_encode</code> 函数将数组转换成 JSON</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token variable">$data</span> <span class="token operator">=</span> <span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">json_encode</span><span class="token punctuation">(</span><span class="token variable">$data</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;product&quot;:&quot;apples&quot;,&quot;price&quot;:45}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>可以直接调用 toJson 方法将集合转换称 JSON</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {&quot;product&quot;:&quot;apples&quot;,&quot;price&quot;:45}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>当然，也可以在调用 <code>toJson</code> 时，传递对应的参数，比如：<code>JSON_PRETTY_PRINT</code> 参数。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;product&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;apples&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;price&#39;</span> <span class="token operator">=&gt;</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">-&gt;</span><span class="token function">toJson</span><span class="token punctuation">(</span><span class="token constant">JSON_PRETTY_PRINT</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/** \n&quot;&quot;&quot;\n<span class="token punctuation">{</span>\\n\n   &quot;product&quot;: &quot;apples&quot;,\\n\n   &quot;price&quot;: 45\\n\n<span class="token punctuation">}</span>\n&quot;&quot;&quot;\n*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',8),e=(0,t.Uk)("更多参数"),o={href:"https://www.php.net/manual/zh/json.constants.php",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("参考JSON 常量"),l=(0,t.Uk)(" 。"),u={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[e,(0,t.Wm)("a",o,[c,(0,t.Wm)(a)]),l])],64)}}}}]);