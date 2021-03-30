(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[325],{3457:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-5304a612",path:"/collections/dump.html",title:"dump",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"collections/dump.md",git:{updatedTime:1617071687e3,contributors:[]}}},7056:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>u});var p=a(6252);const e=(0,p.uE)('<h1 id="dump"><a class="header-anchor" href="#dump">#</a> dump</h1><p>打印集合的元素，在调试时很有帮助。</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token function">collect</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 打印输出</span>\n  <span class="token operator">-&gt;</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token variable">$value</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token variable">$value</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token operator">-&gt;</span><span class="token function">dump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 打印输出</span>\n  <span class="token operator">-&gt;</span><span class="token function">first</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  \n<span class="token comment">// output</span>\n<span class="token doc-comment comment">/**\narray:4 [\n  3 =&gt; 4\n  2 =&gt; 3\n  1 =&gt; 2\n  0 =&gt; 1\n]\narray:4 [\n  0 =&gt; 10\n  1 =&gt; 20\n  2 =&gt; 30\n  3 =&gt; 40\n]\n10\n*/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>我们可以通过在链式调用集合方法的时候使用<code>dump</code>打印出当前的集合状态，以便查看集合状态。</p>',4),t=(0,p.Uk)("如果需要在某处停止链式调用，建议使用 "),c={href:"/collections/dd.md",target:"_blank",rel:"noopener noreferrer"},l=(0,p.Uk)("dd"),o=(0,p.Uk)(" 方法。"),u={render:function(n,s){const a=(0,p.up)("OutboundLink");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)("p",null,[t,(0,p.Wm)("a",c,[l,(0,p.Wm)(a)]),o])],64)}}}}]);