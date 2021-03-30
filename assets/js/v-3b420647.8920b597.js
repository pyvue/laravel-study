(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[5029],{8181:(n,e,s)=>{"use strict";s.r(e),s.d(e,{data:()=>a});const a={key:"v-3b420647",path:"/model/related-relationships/morphMany.html",title:"多态关联",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"软件版本",slug:"软件版本",children:[]},{level:2,title:"关键字和表",slug:"关键字和表",children:[]},{level:2,title:"生成模型和迁移文件",slug:"生成模型和迁移文件",children:[{level:3,title:"编辑迁移文件",slug:"编辑迁移文件",children:[]},{level:3,title:"运行 php artisan 命令保存修改到数据库",slug:"运行-php-artisan-命令保存修改到数据库",children:[]}]},{level:2,title:"定义关联关系和修改模型的 fillable 属性",slug:"定义关联关系和修改模型的-fillable-属性",children:[]},{level:2,title:"使用 tinker 填充测试数据",slug:"使用-tinker-填充测试数据",children:[]},{level:2,title:"关联操作",slug:"关联操作",children:[{level:3,title:"新增数据",slug:"新增数据",children:[]},{level:3,title:"查询数据",slug:"查询数据",children:[]},{level:3,title:"删除数据",slug:"删除数据",children:[]},{level:3,title:"更新数据",slug:"更新数据",children:[]}]}],filePathRelative:"model/related-relationships/morphMany.md",git:{updatedTime:1617071363e3,contributors:[]}}},657:(n,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>r});const a=(0,s(6252).uE)('<h1 id="多态关联"><a class="header-anchor" href="#多态关联">#</a> 多态关联</h1><p>多态关联允许一个模型在单个关联下属于多个不同父模型。常见的多态关联就是评论，评论内容可能是属于文章或视频。</p><h2 id="软件版本"><a class="header-anchor" href="#软件版本">#</a> 软件版本</h2><ul><li><p>Laravel Version 5.4.19</p></li><li><p>PHP Version 7.0.8</p></li></ul><h2 id="关键字和表"><a class="header-anchor" href="#关键字和表">#</a> 关键字和表</h2><ul><li><p><code>morphTo()</code></p></li><li><p><code>morphMany()</code></p></li><li><p><code>attach()</code></p></li><li><p><code>detach()</code></p></li><li><p><code>sync()</code></p></li><li><p><code>toggle()</code></p></li><li><p><code>posts</code> 、<code>videos</code>、<code>comments</code> 和 <code>users</code> 表</p></li></ul><p>常见的多态关联就是评论，现在我们的内容类型包括文章和视频，用户既可以评论文章 ，也可以评论视频 。文章存在文章表 <code>posts</code>，视频存在视频表 <code>videos</code> ，评论存在评论表 <code>comments</code> ，某一条评论可能归属于某篇文章，也可能归属于某个视频。 在评论表中添加一个 <code>commentable_id</code> 字段表示其归属节点 ID ，同时定义一个 <code>commentable_type</code> 字段表示其归属节点类型，比如 <code>App\\Post</code> 或者 <code>App\\Video</code> 。</p><h2 id="生成模型和迁移文件"><a class="header-anchor" href="#生成模型和迁移文件">#</a> 生成模型和迁移文件</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:model  Post -m\nphp artisan make:model Video -m\nphp artisan make:model Comment -m\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="编辑迁移文件"><a class="header-anchor" href="#编辑迁移文件">#</a> 编辑迁移文件</h3><p>文件 <code>&lt;project&gt;/database/migrate/*_create_users_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  Schema::create(&#39;users&#39; , function(Blueprint $table){\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;string(&#39;name&#39;);\n    $table-&gt;string(&#39;email&#39; , 30)-&gt;unique();\n    $table-&gt;string(&#39;password&#39;);\n    $table-&gt;rememberToken();\n    $table-&gt;timestamps();\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_posts_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;posts&#39;, function (Blueprint $table) {\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;unsignedInteger(&#39;user_id&#39;);\n    $table-&gt;string(&#39;title&#39;, 60);\n    $table-&gt;text(&#39;body&#39;);\n    $table-&gt;timestamps();\n    $table-&gt;timestamp(&#39;published_at&#39;)-&gt;nullable();\n    $table-&gt;foreign(&#39;user_id&#39;)\n        -&gt;references(&#39;id&#39;)\n        -&gt;on(&#39;users&#39;)\n        -&gt;onUpdate(&#39;cascade&#39;)\n        -&gt;onDelete(&#39;cascade&#39;);\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_videos_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;videos&#39; , function(Blueprint $table){\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;unsignedInteger(&#39;user_id&#39;)-&gt;comment(&#39;用户id&#39;);\n    $table-&gt;string(&#39;title&#39; , 30)-&gt;comment(&#39;标题&#39;);\n    $table-&gt;string(&#39;description&#39; , 120)-&gt;comment(&#39;描述&#39;);\n    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;内容&#39;);\n    $table-&gt;unsignedTinyInteger(&#39;status&#39;)-&gt;comment(&#39;数据状态&#39;);\n    $table-&gt;timestamps();\n\n    $table-&gt;foreign(&#39;user_id&#39;)\n        -&gt;references(&#39;id&#39;)\n        -&gt;on(&#39;users&#39;)\n        -&gt;onUpdate(&#39;cascade&#39;)\n        -&gt;onDelete(&#39;cascade&#39;);\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>文件 <code>&lt;project&gt;/database/migrate/*_create_comments_table.php</code> 内容如下</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Schema::create(&#39;comments&#39; , function(Blueprint $table){\n    $table-&gt;increments(&#39;id&#39;);\n    $table-&gt;unsignedInteger(&#39;user_id&#39;);\n    $table-&gt;unsignedInteger(&#39;commentable_id&#39;)-&gt;comment(&#39;评论所在表数据id&#39;);\n    $table-&gt;string(&#39;commentable_type&#39; , 60)-&gt;comment(&#39;评论所属模型&#39;);\n    $table-&gt;char(1)-&gt;notNull()-&gt;default(&#39;F&#39;)-&gt;comment(&#39;数据状态&#39;);\n    $table-&gt;text(&#39;body&#39;)-&gt;comment(&#39;评论内容&#39;);\n\n    $table-&gt;timestamps();\n\n    $table-&gt;foreign(&#39;user_id&#39;)\n        -&gt;references(&#39;id&#39;)\n        -&gt;on(&#39;users&#39;)\n        -&gt;onUpdate(&#39;cascade&#39;)\n        -&gt;onDelete(&#39;cascade&#39;);\n});\n// 注意： 这里 `commentable_id` 和 `commentable_type`，字段前缀与模型的方法保持一些。比如这列使用 `commentable_` 那么定义的关联方法为 `commentable()`\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="运行-php-artisan-命令保存修改到数据库"><a class="header-anchor" href="#运行-php-artisan-命令保存修改到数据库">#</a> 运行 php artisan 命令保存修改到数据库</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan migrate\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>执行上面的命令后数据库将生成六张表，如下：</p><ul><li>migrations</li><li>password_resets</li><li>users</li><li>commons</li><li>posts</li><li>videos</li></ul></blockquote><h2 id="定义关联关系和修改模型的-fillable-属性"><a class="header-anchor" href="#定义关联关系和修改模型的-fillable-属性">#</a> 定义关联关系和修改模型的 fillable 属性</h2><p>在 <code>User</code> 模型中的对应关系：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function comments()\n{\n    /**\n     * Comment::class related 关联模型\n     * id foreignKey 关联表字段\n     * user_id localKey 当前表关联字段\n     */\n    return $this-&gt;hasMany(\\App\\Comment::class , &#39;user_id&#39; , &#39;id&#39;);\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>在 <code>Post</code> 模型中的对应关系：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected $fillable = [&#39;user_id&#39; , &#39;title&#39; , &#39;body&#39; , &#39;published_at&#39;];\n\npublic function user()\n{\n    /**\n     * User::class related 关联模型\n     * id foreignKey 表 User::table 的关联字段\n     * user_id localKey 关联表字段\n     */\n    return $this-&gt;hasOne(\\App\\User::class , &#39;id&#39; , &#39;user_id&#39;);\n}\n\npublic function comments()\n{\n    /**\n     * @param  string $related  关联模型\n     * @param  string $name     关联的名称，模型的方法名称\n     * @param  string $type     关联的字段type\n     * @param  string $id       关联的字段id\n     * @param  string $localKey 当前模型的主键id\n     */\n    return $this-&gt;morphMany(Comment::class , &#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39; , &#39;id&#39;);\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>在 <code>Video</code> 模型中的对应关系：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected $fillable = [&#39;user_id&#39; , &#39;title&#39; , &#39;description&#39; , &#39;content&#39; , &#39;status&#39;];\n\npublic function user()\n{\n    /**\n     * User::class related 关联模型\n     * id foreignKey 表 User::table 的关联字段\n     * user_id localKey 关联表字段\n     */\n    return $this-&gt;hasOne(\\App\\User::class , &#39;id&#39; , &#39;user_id&#39;);\n}\n\npublic function comments()\n{\n    /**\n     * @param  string $related  关联模型\n     * @param  string $name     关联的名称，模型的方法名称\n     * @param  string $type     关联的字段type\n     * @param  string $id       关联的字段id\n     * @param  string $localKey 当前模型的主键id\n     */\n    return $this-&gt;morphMany(\\App\\Comment::class , &#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39; , &#39;id&#39;);\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><p>在 <code>Comment</code> 模型中的对应关系：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>protected $fillable = [&#39;user_id&#39; , &#39;body&#39;];\n\n\npublic function commentable()\n{\n    /**\n     * @param  string $name 与数据库的 commentable 前缀保持一致,并且方法名要与之一致\n     * @param  string $type 与数据库的 commentable_type 字段保持一致\n     * @param  string $id   与数据库的 commentable_id 字段保持一致\n     */\n    return $this-&gt;morphTo(&#39;commentable&#39; , &#39;commentable_type&#39; , &#39;commentable_id&#39;);\n}\n\npublic function user()\n{\n    /**\n     * User::class related 关联模型\n     * user_id ownerKey 当前表关联字段\n     * id relation 关联表字段\n     */\n    return $this-&gt;belongsTo(&#39;App\\User&#39; , &#39;user_id&#39; , &#39;id&#39;);\n}\n\npublic function post()\n{\n    /**\n     * Post::class related 关联模型\n     * commentable_id ownerKey 当前表关联字段\n     * id relation 关联表字段\n     */\n    return $this-&gt;belongsTo(&#39;App\\Post&#39; , &#39;commentable_id&#39; , &#39;id&#39;);\n}\n\npublic function video()\n{\n    /**\n     * Post::class related 关联模型\n     * commentable_id ownerKey 当前表关联字段\n     * id relation 关联表字段\n     */\n    return $this-&gt;belongsTo(&#39;App\\Video&#39;, &#39;commentable_id&#39; , &#39;id&#39;);\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="使用-tinker-填充测试数据"><a class="header-anchor" href="#使用-tinker-填充测试数据">#</a> 使用 tinker 填充测试数据</h2><p>修改 <code>/databases/factories/ModelFactory.php</code>，修改关联数据。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>/** @var \\Illuminate\\Database\\Eloquent\\Factory $factory */\n$factory-&gt;define(App\\User::class , function(Faker\\Generator $faker){\n    static $password;\n\n    return [\n        &#39;name&#39;           =&gt; $faker-&gt;name ,\n        &#39;email&#39;          =&gt; $faker-&gt;unique()-&gt;safeEmail ,\n        &#39;password&#39;       =&gt; $password ? : $password = bcrypt(&#39;secret&#39;) ,\n        &#39;remember_token&#39; =&gt; str_random(10) ,\n    ];\n});\n\n$factory-&gt;define(App\\Post::class , function(Faker\\Generator $faker){\n    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();\n\n    return [\n        &#39;user_id&#39;      =&gt; $faker-&gt;randomElement($user_ids) ,\n        &#39;title&#39;        =&gt; $faker-&gt;title ,\n        &#39;body&#39;         =&gt; $faker-&gt;paragraph ,\n        &#39;published_at&#39; =&gt; $faker-&gt;time(&#39;Y-m-d H:i:s&#39;) ,\n    ];\n});\n$factory-&gt;define(App\\Video::class , function(Faker\\Generator $faker){\n    $user_ids = \\App\\User::pluck(&#39;id&#39;)-&gt;toArray();\n\n    return [\n        &#39;user_id&#39;     =&gt; $faker-&gt;randomElement($user_ids) ,\n        &#39;title&#39;       =&gt; $faker-&gt;title ,\n        &#39;description&#39; =&gt; $faker-&gt;title ,\n        &#39;body&#39;     =&gt; $faker-&gt;paragraph ,\n        &#39;status&#39;      =&gt; 1\n    ];\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><p>使用 tinker 命令</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan tinker\n\n## 进入到 tinker 界面执行如下命令\nnamespace App\nfactory(User::class,5)-&gt;create(); // 生成5个用户\nfactory(Post::class,10)-&gt;create() // 生成10条 posts 表的测试数据\nfactory(Video::class,10)-&gt;create(); // 生成10条 videos 表的测试数据\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>至此，上面的 <code>users</code> 、<code>posts</code> 和 <code>videos</code> 表数据都已填充完毕。</p><h2 id="关联操作"><a class="header-anchor" href="#关联操作">#</a> 关联操作</h2><h3 id="新增数据"><a class="header-anchor" href="#新增数据">#</a> 新增数据</h3><h4 id="添加一个文章评论"><a class="header-anchor" href="#添加一个文章评论">#</a> 添加一个文章评论</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1);\n$comment = new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Post 1.&#39; , &#39;user_id&#39; =&gt; \\Auth::user()-&gt;id]);\n$post-&gt;comments()-&gt;save($comment); // 新增的 `comment` 模型中 `commentable_id` 和 `commentable_type` 字段会被自动设定\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="添加多条文章评论"><a class="header-anchor" href="#添加多条文章评论">#</a> 添加多条文章评论</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user_id = \\Auth::user()-&gt;id;\n$comments = [\n    new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id]) ,\n    new \\App\\Comment([&#39;body&#39; =&gt; &#39;Another comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id]) ,\n    new \\App\\Comment([&#39;body&#39; =&gt; &#39;The latest comment For Post 2.&#39; , &#39;user_id&#39; =&gt; $user_id])\n];\n$post = \\App\\Post::find(2);\n$post-&gt;comments()-&gt;saveMany($comments);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h4 id="添加视频评论"><a class="header-anchor" href="#添加视频评论">#</a> 添加视频评论</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user_id = \\Auth::user()-&gt;id;\n$video = \\App\\Video::find(10);\n$comment = new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new Comment For Video 10.&#39;, &#39;user_id&#39; =&gt; $user_id]);\n$video-&gt;comments()-&gt;save($comment); //\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h4 id="添加多条视频评论"><a class="header-anchor" href="#添加多条视频评论">#</a> 添加多条视频评论</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user_id = \\Auth::user()-&gt;id;\n$comments = [\n    new \\App\\Comment([&#39;body&#39; =&gt; &#39;A new comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id]) ,\n    new \\App\\Comment([&#39;body&#39; =&gt; &#39;Another comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id]) ,\n    new \\App\\Comment([&#39;body&#39; =&gt; &#39;The latest comment For Video 5.&#39;, &#39;user_id&#39; =&gt; $user_id])\n];\n$video = \\App\\Video::find(5);\n$video-&gt;comments()-&gt;saveMany($comments);\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="查询数据"><a class="header-anchor" href="#查询数据">#</a> 查询数据</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// 查询一篇文章下的评论和发布评论者\n$comments = \\App\\Post::find(1)-&gt;with([&#39;user&#39; , &#39;comments&#39;])-&gt;first();\n\n// 通过评论查询出数据和发布评论的用户信息\n$commentable = \\App\\Comment::find(1)-&gt;commentable()-&gt;with(&#39;user&#39;)-&gt;first();\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="删除数据"><a class="header-anchor" href="#删除数据">#</a> 删除数据</h3><h4 id="删除一篇文章下的所有评论"><a class="header-anchor" href="#删除一篇文章下的所有评论">#</a> 删除一篇文章下的所有评论</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$post = \\App\\Post::find(1);\n$post-&gt;comments()-&gt;delete();\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="删除用户的所有评论"><a class="header-anchor" href="#删除用户的所有评论">#</a> 删除用户的所有评论</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$user = \\App\\User::find(1);\n$user-&gt;comments()-&gt;delete();\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="更新数据"><a class="header-anchor" href="#更新数据">#</a> 更新数据</h3>',54),r={render:function(n,e){return a}}}}]);