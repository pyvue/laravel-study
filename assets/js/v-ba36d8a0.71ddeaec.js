(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[8706],{2980:(n,e,s)=>{"use strict";s.r(e),s.d(e,{data:()=>a});const a={key:"v-ba36d8a0",path:"/others/laravel-package-hello-world.html",title:"使用Laravel开发自己的Package",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Version",slug:"version",children:[]},{level:2,title:"建立项目",slug:"建立项目",children:[]},{level:2,title:"建立目录",slug:"建立目录",children:[]},{level:2,title:"设定PSR-4命名空间",slug:"设定psr-4命名空间",children:[]},{level:2,title:"建立Service Provider",slug:"建立service-provider",children:[]},{level:2,title:"注册ServiceProvider",slug:"注册serviceprovider",children:[]},{level:2,title:"建立Router",slug:"建立router",children:[]},{level:2,title:"建立View",slug:"建立view",children:[]},{level:2,title:"创建Migration",slug:"创建migration",children:[]},{level:2,title:"创建配置文件",slug:"创建配置文件",children:[]},{level:2,title:"建立Controller",slug:"建立controller",children:[]},{level:2,title:"修改Service Provider",slug:"修改service-provider",children:[]},{level:2,title:"执行发布命令",slug:"执行发布命令",children:[]},{level:2,title:"访问效果",slug:"访问效果",children:[{level:3,title:"设定package的命名空间",slug:"设定package的命名空间",children:[]},{level:3,title:"建立本地Git仓库",slug:"建立本地git仓库",children:[]},{level:3,title:"建立远程git仓库",slug:"建立远程git仓库",children:[]},{level:3,title:"推送到远程仓库",slug:"推送到远程仓库",children:[]}]},{level:2,title:"上传Packagist",slug:"上传packagist",children:[{level:3,title:"登入Packagist",slug:"登入packagist",children:[]},{level:3,title:"提交Github网址",slug:"提交github网址",children:[]},{level:3,title:"确认提交",slug:"确认提交",children:[]},{level:3,title:"上传成功",slug:"上传成功",children:[]}]},{level:2,title:"测试Package",slug:"测试package",children:[{level:3,title:"建立测试项目",slug:"建立测试项目",children:[]},{level:3,title:"安裝Package",slug:"安裝package",children:[]},{level:3,title:"发布配置和迁移文件",slug:"发布配置和迁移文件",children:[]},{level:3,title:"浏览器测试",slug:"浏览器测试",children:[]}]}],filePathRelative:"others/laravel-package-hello-world.md",git:{updatedTime:1617172623e3,contributors:[]}}},5927:(n,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>d});var a=s(6252);const l=(0,a.uE)('<h1 id="使用laravel开发自己的package"><a class="header-anchor" href="#使用laravel开发自己的package">#</a> 使用Laravel开发自己的Package</h1><p><code>Service Provider</code>最主要的功能就是让我们写package，本文以一个简单的 <code>Hello World</code> 的功能，介绍一下package的开发流程。</p><p>包含<code>route</code>、<code>controller</code>与<code>view</code>，然后会打包成package传到github与packagist，最后在其他的laravel项目中直接使用 <code>composer require vendor/package</code> 下载执行我们上传的package。</p><h2 id="version"><a class="header-anchor" href="#version">#</a> Version</h2><ul><li>Laravel 5.5</li><li>php 7.1.12</li></ul><h2 id="建立项目"><a class="header-anchor" href="#建立项目">#</a> 建立项目</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer create-project laravel/laravel MyPackage --prefer-dist\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>建立一个开发package的项目。</p><h2 id="建立目录"><a class="header-anchor" href="#建立目录">#</a> 建立目录</h2><p>在项目根目录下串建立<code>packages</code>目录，关于该package的源代码都会放在它里面。</p><p>在<code>packages</code>目录下建立<code>vendor/package/src</code>子目录，本package会建立<code>curder/helloworld/src</code>。</p>',11),r=(0,a.uE)('<h2 id="设定psr-4命名空间"><a class="header-anchor" href="#设定psr-4命名空间">#</a> 设定PSR-4命名空间</h2><p>由于目前Laravel预设的<code>root namespace</code>是在<code>app</code>目录下，并且无法法得知我们新加的<code>packages/curder/helloworld/src</code>目录，必须在<code>MyPackage</code>项目的<code>composer.json</code>加入对应新的<code>root namespace</code>。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;name&quot;: &quot;laravel/laravel&quot;,\n    &quot;description&quot;: &quot;The Laravel Framework.&quot;,\n    &quot;keywords&quot;: [&quot;framework&quot;, &quot;laravel&quot;],\n\n    ...\n\n   &quot;autoload&quot;: {\n        &quot;classmap&quot;: [\n            &quot;database/seeds&quot;,\n            &quot;database/factories&quot;\n        ],\n        &quot;psr-4&quot;: {\n            &quot;App\\\\&quot;: &quot;app/&quot;,\n            &quot;Curder\\\\HelloWord\\\\&quot;: &quot;packages/curder/helloworld/src/&quot;\n        }\n    },\n\n    ...\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>注意我们添加的行：<code>&quot;Curder\\\\HelloWorld\\\\&quot;: &quot;packages/curder/helloworld/src/&quot;</code>的命名空间和路径的映射关系。</p><p>修改完上面的设定后，需要执行下面的composer命令更新一下自动加载。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer dump-autoload\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="建立service-provider"><a class="header-anchor" href="#建立service-provider">#</a> 建立Service Provider</h2><p>使用下面的命令建立<code>Service Provider</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:provider HelloWorldServiceProvider\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>产生<code>HelloWorldServiceProvider.php</code>默认在<code>app/Providers</code>目录下，因为我们是要写package，所以将此文件移到<code>packages/curder/helloworld/src</code>目录下。</p><p>因为文件的目录已经移动，需要重新修改一些它的namespace。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace Curder\\HelloWorld;\n\nuse Illuminate\\Support\\ServiceProvider;\n\nclass HelloWorldServiceProvider extends ServiceProvider\n{\n    /**\n     * Bootstrap the application services.\n     *\n     * @return void\n     */\n    public function boot()\n    {\n        //\n    }\n\n    /**\n     * Register the application services.\n     *\n     * @return void\n     */\n    public function register()\n    {\n        //\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>注意文件的命名空间是：<code>Curder\\HelloWorld</code>，使用命令生成的Provider默认会建立<code>boot()</code>和<code>register()</code>。</p><h2 id="注册serviceprovider"><a class="header-anchor" href="#注册serviceprovider">#</a> 注册ServiceProvider</h2><p>在<code>config/app.php</code>中註冊<code>HelloWorldServiceProvider</code>。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>return [\n    ...\n\n    &#39;providers&#39; =&gt; [\n\n        ...\n\n        /*\n         * Package Service Providers...\n         */\n\n        Curder\\HelloWord\\HelloWorldServiceProvider::class,\n\n        /*\n         * Application Service Providers...\n         */\n\n        ...\n    ],\n\n    ...\n];\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>注册刚刚建立的<code>HelloWorldServiceProvider</code>。</p><h2 id="建立router"><a class="header-anchor" href="#建立router">#</a> 建立Router</h2><p>把路由文件放到<code>src/routes/</code>下，并命名为<code>web.php</code>，内容如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\n$namespace = &#39;Curder\\HelloWorld\\Http\\Controllers&#39;;\n\nRoute::group([\n    &#39;namespace&#39; =&gt; $namespace,\n    &#39;prefix&#39; =&gt; &#39;helloworld&#39;,\n], function () {\n    Route::get(&#39;/&#39;, &#39;HelloWorldController@index&#39;);\n});\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="建立view"><a class="header-anchor" href="#建立view">#</a> 建立View</h2><p>把视图文件建立在<code>src/resources/views</code>下，将其命名为<code>welcome.blade.php</code>。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;!doctype html&gt;\n&lt;html lang=&quot;{{ app()-&gt;getLocale() }}&quot;&gt;\n&lt;head&gt;\n    &lt;meta charset=&quot;utf-8&quot;&gt;\n    &lt;meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot;&gt;\n    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;\n\n    &lt;title&gt;Laravel&lt;/title&gt;\n\n    &lt;!-- Fonts --&gt;\n    &lt;link href=&quot;https://fonts.googleapis.com/css?family=Raleway:100,600&quot; rel=&quot;stylesheet&quot; type=&quot;text/css&quot;&gt;\n\n    &lt;!-- Styles --&gt;\n    &lt;style&gt;\n        html, body {\n            background-color: #fff;\n            color: #636b6f;\n            font-family: &#39;Raleway&#39;, sans-serif;\n            font-weight: 100;\n            height: 100vh;\n            margin: 0;\n        }\n\n        .full-height {\n            height: 100vh;\n        }\n\n        .flex-center {\n            align-items: center;\n            display: flex;\n            justify-content: center;\n        }\n\n        .position-ref {\n            position: relative;\n        }\n\n        .top-right {\n            position: absolute;\n            right: 10px;\n            top: 18px;\n        }\n\n        .content {\n            text-align: center;\n        }\n\n        .title {\n            font-size: 84px;\n        }\n\n        .links &gt; a {\n            color: #636b6f;\n            padding: 0 25px;\n            font-size: 12px;\n            font-weight: 600;\n            letter-spacing: .1rem;\n            text-decoration: none;\n            text-transform: uppercase;\n        }\n\n        .m-b-md {\n            margin-bottom: 30px;\n        }\n    &lt;/style&gt;\n&lt;/head&gt;\n&lt;body&gt;\n&lt;div class=&quot;flex-center position-ref full-height&quot;&gt;\n    @if (Route::has(&#39;login&#39;))\n        &lt;div class=&quot;top-right links&quot;&gt;\n            @auth\n                &lt;a href=&quot;{{ url(&#39;/home&#39;) }}&quot;&gt;Home&lt;/a&gt;\n            @else\n                &lt;a href=&quot;{{ route(&#39;login&#39;) }}&quot;&gt;Login&lt;/a&gt;\n                &lt;a href=&quot;{{ route(&#39;register&#39;) }}&quot;&gt;Register&lt;/a&gt;\n            @endauth\n        &lt;/div&gt;\n    @endif\n\n    &lt;div class=&quot;content&quot;&gt;\n        &lt;div class=&quot;title m-b-md&quot;&gt;\n            {{ $message }}\n        &lt;/div&gt;\n\n        &lt;div class=&quot;links&quot;&gt;\n            &lt;a href=&quot;https://laravel.com/docs&quot;&gt;Documentation&lt;/a&gt;\n            &lt;a href=&quot;https://laracasts.com&quot;&gt;Laracasts&lt;/a&gt;\n            &lt;a href=&quot;https://laravel-news.com&quot;&gt;News&lt;/a&gt;\n            &lt;a href=&quot;https://forge.laravel.com&quot;&gt;Forge&lt;/a&gt;\n            &lt;a href=&quot;https://github.com/laravel/laravel&quot;&gt;GitHub&lt;/a&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n&lt;/body&gt;\n&lt;/html&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br></div></div><h2 id="创建migration"><a class="header-anchor" href="#创建migration">#</a> 创建Migration</h2><p>将数据库迁移文件创建在<code>src/publishable/databases/migrations/</code>下，我们按照当前日期将其命名为：<code>2017_12_17_000000_create_package_demo_table.php</code>，内容如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nuse Illuminate\\Support\\Facades\\Schema;\nuse Illuminate\\Database\\Schema\\Blueprint;\nuse Illuminate\\Database\\Migrations\\Migration;\n\nclass CreatePackageDemoTable extends Migration\n{\n    /**\n    * Run the migrations.\n    *\n    * @return void\n    */\n    public function up()\n    {\n        Schema::create(&#39;package_demo&#39;, function (Blueprint $table) {\n            $table-&gt;increments(&#39;id&#39;);\n            $table-&gt;string(&#39;name&#39;);\n            $table-&gt;unsignedInteger(&#39;user_id&#39;);\n            $table-&gt;unsignedInteger(&#39;checklist_id&#39;);\n            $table-&gt;boolean(&#39;is_published&#39;);\n            $table-&gt;boolean(&#39;is_archived&#39;);\n            $table-&gt;timestamps();\n        });\n    }\n\n    /**\n    * Reverse the migrations.\n    *\n    * @return void\n    */\n    public function down()\n    {\n        Schema::dropIfExists(&#39;package_demo&#39;);\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><h2 id="创建配置文件"><a class="header-anchor" href="#创建配置文件">#</a> 创建配置文件</h2><p>将配置文件创建在<code>src/publishable/config/</code>下，我们将其命名为<code>helloworld.php</code>，内容如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nreturn [\n    &quot;message&quot; =&gt; &quot;Hello World&quot;,\n];\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>配置文件的文件名不允许随意定义，不要与Laravel已有的配置文件文件名冲突，后期再项目的其他地方需要引用。</p></blockquote><h2 id="建立controller"><a class="header-anchor" href="#建立controller">#</a> 建立Controller</h2><p>根据上面路由的定义，把控制器文件放到<code>src/Http/Controllers</code>下。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace Curder\\HelloWorld\\Http\\Controllers;\n\nuse App\\Http\\Controllers\\Controller;\n\nclass HelloWorldController extends Controller\n{\n    /**\n     * Display a listing of the resource.\n     *\n     * @return \\Illuminate\\Http\\Response\n     */\n    public function index()\n    {\n        $message = config(&quot;helloworld.message&quot;);\n        return view(&#39;HelloWorld::welcome&#39;, compact(&#39;message&#39;));\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="修改service-provider"><a class="header-anchor" href="#修改service-provider">#</a> 修改Service Provider</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace Curder\\HelloWorld;\n\nuse Illuminate\\Support\\Facades\\Schema;\nuse Illuminate\\Support\\ServiceProvider;\n\nclass HelloWorldServiceProvider extends ServiceProvider\n{\n    /**\n     * Bootstrap the application services.\n     *\n     * @return void\n     */\n    public function boot()\n    {\n        Schema::defaultStringLength(191);\n\n        $this-&gt;loadRoutesFrom(__DIR__ . &#39;/routes/web.php&#39; .\n            &#39;&#39;);\n        $this-&gt;loadViewsFrom(__DIR__ . &#39;/resources/views&#39;, &#39;HelloWorld&#39;);\n    }\n\n    /**\n     * Register the application services.\n     *\n     * @return void\n     */\n    public function register()\n    {\n        $this-&gt;registerPublishables();\n    }\n\n    private function registerPublishables()\n    {\n        $basePath = __DIR__;\n\n        $arrPublishable = [\n            &#39;migrations&#39; =&gt; [\n                &quot;$basePath/publishable/databases/migrations&quot; =&gt; database_path(&#39;migrations&#39;),\n            ],\n            &#39;config&#39; =&gt; [\n                &quot;$basePath/publishable/config/helloworld.php&quot; =&gt; config_path(&#39;helloworld.php&#39;),\n            ],\n        ];\n\n        foreach ($arrPublishable as $group =&gt; $paths) {\n            $this-&gt;publishes($paths, $group);\n        }\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><h2 id="执行发布命令"><a class="header-anchor" href="#执行发布命令">#</a> 执行发布命令</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan vendor:publish\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>执行完上面的命令后，就能看到如下的界面</p><p>输入<code>Curder\\HelloWorld\\HelloWorldServiceProvider</code>的内容进行发布。</p><blockquote><p>另外对于已经发布的内容如果需要覆盖，在上面的发布命令中加入 <code>--force</code> 参数。但是在执行这个命令之前请确保对修改过的数据已有备份。</p></blockquote><h2 id="访问效果"><a class="header-anchor" href="#访问效果">#</a> 访问效果</h2>',41),p=(0,a.uE)(' ## 上传到GitHub <h3 id="设定package的命名空间"><a class="header-anchor" href="#设定package的命名空间">#</a> 设定package的命名空间</h3><p>目前在本地开发的这个package由于是搭配MyPackage项目测试，所以将<code>PSR-4</code>的<code>root namespace</code>设定在<code>MyPackage</code>项目的<code>composer.json</code>。</p><p>但发布<code>package</code>之后，不可能要使用者也手动在自己项目的<code>composer.json</code>加上命名空间，所以我们要将命名空间设定在<code>package</code>自己的<code>composer.json</code>。</p><p>我们来到项目的目录下<code>packages/curder/helloworld</code>下执行如下命令，生成<code>composer.json</code>文件：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer init\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>下面是我们从上面的命令中生成的<code>composer.json</code>，添加上<code>PSR-4</code>的自动加载。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{\n    &quot;name&quot;: &quot;curder/helloworld&quot;,\n    &quot;description&quot;: &quot;A Laravel Package For Demo.&quot;,\n    &quot;license&quot;: &quot;MIT&quot;,\n    &quot;authors&quot;: [\n        {\n            &quot;name&quot;: &quot;curder&quot;,\n            &quot;email&quot;: &quot;curder@foxmail.com&quot;\n        }\n    ],\n    &quot;minimum-stability&quot;: &quot;dev&quot;,\n    &quot;require&quot;: {},\n    &quot;autoload&quot;: {\n        &quot;psr-4&quot;: {\n            &quot;Curder\\\\HelloWorld\\\\&quot;: &quot;src/&quot;\n        }\n    },\n     &quot;extra&quot;: {\n        &quot;laravel&quot;: {\n            &quot;providers&quot;: [\n                &quot;Curder\\\\HelloWorld\\\\HelloWorldServiceProvider&quot;\n            ]\n        }\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h3 id="建立本地git仓库"><a class="header-anchor" href="#建立本地git仓库">#</a> 建立本地Git仓库</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd packages/curder/helloworld\ngit init\ngit add .\ngit commit -m &quot;Initial commit.&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="建立远程git仓库"><a class="header-anchor" href="#建立远程git仓库">#</a> 建立远程git仓库</h3>',11),i=(0,a.uE)('<h3 id="推送到远程仓库"><a class="header-anchor" href="#推送到远程仓库">#</a> 推送到远程仓库</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>git remote add origin git@github.com:curder/helloworld.git\ngit push -u origin master\ngit tag -a 1.0.0 -m &quot;First version&quot;\ngit push --tags\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="上传packagist"><a class="header-anchor" href="#上传packagist">#</a> 上传Packagist</h2><h3 id="登入packagist"><a class="header-anchor" href="#登入packagist">#</a> 登入Packagist</h3>',4),c={href:"https://packagist.org/login/",target:"_blank",rel:"noopener noreferrer"},t=(0,a.Uk)("登录"),b=(0,a.Uk)("至Packagist，按右上角Submit上传package。"),o=(0,a.uE)('<h3 id="提交github网址"><a class="header-anchor" href="#提交github网址">#</a> 提交Github网址</h3><p>贴上package在Github Repository的网址。</p><h3 id="确认提交"><a class="header-anchor" href="#确认提交">#</a> 确认提交</h3><p>因为Packagist已经有很多package名字叫做helloworld，Packagist让你确认是否要上传。</p><h3 id="上传成功"><a class="header-anchor" href="#上传成功">#</a> 上传成功</h3>',5),u=(0,a.uE)('<h2 id="测试package"><a class="header-anchor" href="#测试package">#</a> 测试Package</h2><h3 id="建立测试项目"><a class="header-anchor" href="#建立测试项目">#</a> 建立测试项目</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>composer create-project laravel/laravel MyTestPackage --prefer-dist\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="安裝package"><a class="header-anchor" href="#安裝package">#</a> 安裝Package</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd MyTestPackage\ncomposer require oomusou/helloworld\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>由于Laravel5.5之后新增了包的自动发现功能，所以我们并不需要在<code>config/app.config</code>中手动引入<code>ServiceProvider</code>。</p></blockquote><h3 id="发布配置和迁移文件"><a class="header-anchor" href="#发布配置和迁移文件">#</a> 发布配置和迁移文件</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan vendor:publish\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="浏览器测试"><a class="header-anchor" href="#浏览器测试">#</a> 浏览器测试</h3>',9),d={render:function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,(0,a.Wm)("img",{src:n.$withBase("/images/packages/helloworld-source-code-path.jpg"),alt:""},null,8,["src"]),r,(0,a.Wm)("img",{src:n.$withBase("/images/packages/helloworld-browser.png"),alt:""},null,8,["src"]),p,(0,a.Wm)("img",{src:n.$withBase("/images/packages/helloworld-create-github-repository.png"),alt:""},null,8,["src"]),i,(0,a.Wm)("p",null,[(0,a.Wm)("a",c,[t,(0,a.Wm)(s)]),b]),o,(0,a.Wm)("img",{src:n.$withBase("/images/packages/helloworld-create-success.png"),alt:""},null,8,["src"]),u,(0,a.Wm)("img",{src:n.$withBase("/images/packages/helloworld-browser-test.png"),alt:""},null,8,["src"])],64)}}}}]);