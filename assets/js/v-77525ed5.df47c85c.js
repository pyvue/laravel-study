(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[7972],{4842:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-77525ed5",path:"/model/related-relationships/hasOneThrough.html",title:"远层一对一",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[],filePathRelative:"model/related-relationships/hasOneThrough.md",git:{updatedTime:1617071363e3,contributors:[]}}},9628:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>r});const a=(0,e(6252).uE)('<h1 id="远层一对一"><a class="header-anchor" href="#远层一对一">#</a> 远层一对一</h1><p>预案层一对一关联通过单一中间关系链接模型。</p><p>例如，如果每个供应商都有一个用户，同时每个用户都与一个用户历史记录相关联，这样，供应商模型就可以通过用户来访问用户的历史。下面我们来看看定义这个关联关系所需的数据表结构：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>users\n    id - integer\n    supplier_id - integer\n\nsuppliers\n    id - integer\n\nhistory\n    id - integer\n    user_id - integer\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><code>history</code> 数据表不包含 <code>supplier_id</code> 列，<code>hasOneThrough</code> 关联仍然可以为供应商提供对用户历史的访问。</p><p>现在，已经知道关联关系对应的数据表结构，接下来在 <code>Supplier</code> 模型上定义这个关联</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App;\n\nuse Illuminate\\Database\\Eloquent\\Model;\n\nclass Supplier extends Model\n{\n    /**\n     * Get the user&#39;s history.\n     */\n    public function userHistory()\n    {\n        return $this-&gt;hasOneThrough(\n            &#39;App\\History&#39;,\n            &#39;App\\User&#39;,\n            &#39;supplier_id&#39;, // Foreign key on users table...\n            &#39;user_id&#39;, // Foreign key on history table...\n            &#39;id&#39;, // Local key on suppliers table...\n            &#39;id&#39; // Local key on users table...\n            );\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>',7),r={render:function(n,s){return a}}}}]);