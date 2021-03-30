(self.webpackChunklaravel_study=self.webpackChunklaravel_study||[]).push([[5486],{7585:(n,s,e)=>{"use strict";e.r(s),e.d(s,{data:()=>a});const a={key:"v-26bee19c",path:"/others/how_to_use_service_mode.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何使用 Service 模式",slug:"如何使用-service-模式",children:[{level:3,title:"Laravel 框架版本",slug:"laravel-框架版本",children:[]}]},{level:2,title:"业务逻辑",slug:"业务逻辑",children:[]},{level:2,title:"Service",slug:"service",children:[{level:3,title:"牵涉到外部的行为",slug:"牵涉到外部的行为",children:[]},{level:3,title:"使用 PHP 写的逻辑",slug:"使用-php-写的逻辑",children:[]},{level:3,title:"结束",slug:"结束",children:[]}]}],filePathRelative:"others/how_to_use_service_mode.md",git:{updatedTime:1617072411e3,contributors:[]}}},77:(n,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>r});const a=(0,e(6252).uE)('<h2 id="如何使用-service-模式"><a class="header-anchor" href="#如何使用-service-模式">#</a> 如何使用 Service 模式</h2><p>若将数据库逻辑都写在 Controller 里，会造成 Controller 代码的臃肿难以维护，基于 SOLID 原则，我们应该使用 <strong>Service</strong> 模式辅助 Controller，将相关的业务逻辑封装在不同的 Service，方便项目的后期维护。</p><h3 id="laravel-框架版本"><a class="header-anchor" href="#laravel-框架版本">#</a> Laravel 框架版本</h3><p>Laravel 5.4.17</p><h2 id="业务逻辑"><a class="header-anchor" href="#业务逻辑">#</a> 业务逻辑</h2><p>业务逻辑中，常见的如：</p><ul><li><p>牵涉到外部行为： 如 <code>发送 Email 邮件</code>，<code>使用外部API</code> ..</p></li><li><p>使用 PHP 写的逻辑： 如 <code>根据购买的数量，给予不同的折扣</code></p></li></ul><h2 id="service"><a class="header-anchor" href="#service">#</a> Service</h2><h3 id="牵涉到外部的行为"><a class="header-anchor" href="#牵涉到外部的行为">#</a> 牵涉到外部的行为</h3><p>如 <code>发送Email</code>，常常会在 Controller 中直接调用 <code>Mail::queue()</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> /**\n * @param \\Illuminate\\Http\\Request $request\n */\npublic function store(Request $request)\n{\n    \\Mail::queue(&#39;email.index&#39;, $request-&gt;all(), function (Message $message) {\n        $message-&gt;sender(env(&#39;MAIL_USERNAME&#39;));\n        $message-&gt;subject(env(&#39;MAIL_SUBJECT&#39;));\n        $message-&gt;to(env(&#39;MAIL_TO_ADDR&#39;));\n    });\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>在中大型的项目中，会有几个问题：</p><ul><li><p>将牵涉到外部行为的逻辑写在 Controller，造成 Controller 代码臃肿难以维护</p></li><li><p>违反 SOLID 的单一职责原则：外部行为不应该写在 Controller</p></li><li><p>Controller 直接相依于外部行为，使得我们无法对 Controller 做单元测试</p></li></ul><p>比较好的方式是使用 Service，使用的步骤如下：</p><ul><li><p>将外部行为注入到 Service</p></li><li><p>在 Service 使用外部行为</p></li><li><p>将 Service 注入到 Controlelr</p></li></ul><p><code>app\\Services\\EmailService.php</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App\\Services;\nuse Illuminate\\Mail\\Message;\nuse Mail;\n\n/**\n * Class EmailService\n *\n * @package \\App\\Services\n */\n/**\n * Class EmailService\n *\n * @package App\\Services\n */\nclass EmailService\n{\n    /**\n     * @var \\Mail\n     */\n    protected $mailer;\n\n    /**\n     * 将相依的 Mailer 注入到 EmailService\n     * EmailService constructor.\n     *\n     * @param $mailer\n     */\n    public function __construct(Mail $mailer)\n    {\n        $this-&gt;mailer = $mailer;\n    }\n\n    /**\n     * 发送 Email的逻辑写在 send() 不是使用 Mail Facade，而是使用 $this-&gt;mailer\n     * @param array $request\n     */\n    public function send(array $request)\n    {\n        $this-&gt;mailer-&gt;queue(&#39;email.index&#39;,$request,function(Message $message){\n            $message-&gt;sender(env(&#39;MAIL_USERNAME&#39;));\n            $message-&gt;subject(env(&#39;MAIL_SUBJECT&#39;));\n            $message-&gt;to(env(&#39;MAIL_TO_ADDR&#39;));\n        });\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br></div></div><p><code>app\\Controllers\\UserController.php</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Services\\EmailService;\nuse Illuminate\\Http\\Request;\n\n/**\n * Class UserController\n *\n * @package App\\Http\\Controllers\n */\nclass UserController extends Controller\n{\n    /**\n     * @var \\App\\Services\\EmailService\n     */\n    protected $emailService;\n\n\n    /**\n     * @param \\Illuminate\\Http\\Request $request\n     */\n    public function store(Request $request)\n    {\n        $this-&gt;emailService-&gt;send($request-&gt;all());\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p>从原本相依于 <code>Mail Facade</code> ，改成相依于注入的 <code>EmailService</code>。</p><p>改用这种写法有几个优点，如下：</p><ul><li><p>将外部行为写在 Service，解决了 Controller 代码臃肿的问题。</p></li><li><p>符合 SOLID 的单一职责原则： 外部行为写在　Service ，没写在 Controller。</p></li><li><p>符合 SOLID 的依赖反转原则：Controller 并非直接相依于 Service，而是将 Service 依赖注入进 Controller。</p></li></ul><h3 id="使用-php-写的逻辑"><a class="header-anchor" href="#使用-php-写的逻辑">#</a> 使用 PHP 写的逻辑</h3><p>如 <code>根据用户购买数量，给予同步的折扣</code>，可能我们会在 Controller 直接写 <code>if () { ... } else { ... }</code> 逻辑。如下<code>app\\Controllers\\UserController.php</code>：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public function index(Request $request)\n{\n    $number = $request-&gt;input(&#39;number&#39;);\n    $price = 500;\n    $discount = 1;\n    if ($number == 1) {\n        $discount = 1;\n    } elseif ($number == 2) {\n        $discount = 0.9;\n    } elseif ($number == 3) {\n        $discount = 0.8;\n    } else {\n        $discount = 0.7;\n    }\n    $total = $price * $number * $discount;\n\n    return $total;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>在中大型项目中，会有几个问题：</p><ul><li><p>将 PHP 写的业务逻辑直接写在 Controller ，造成 Controller 的代码臃肿难以维护</p></li><li><p>违反了 SOLID 的单一职责原则：业务逻辑不应该写在 Controller</p></li><li><p>违反了 SOLID 的单一职责原则：若未来想要改变折扣的写算法，都需要用到此 Method，也也就是说这个 Method 同时包含了计算折扣于计算加总的职责，因此违反了 SOLID 的单一职责原则</p></li><li><p>直接写在 Controller 的逻辑无法被其他 Controller 使用</p></li></ul><p><code>app\\Services\\OrderService.php</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App\\Services;\n\n/**\n * Class OrderService\n *\n * @package App\\Services\n */\n/**\n * Class OrderService\n *\n * @package App\\Services\n */\nclass OrderService\n{\n    /**\n     * 计算折扣\n     *\n     * @param $number\n     *\n     * @return float\n     */\n    public function getDisCount($number)\n    {\n        switch ($number) {\n            case 1:\n                return 1.0;\n                break;\n            case 2:\n                return 0.9;\n                break;\n            case 3:\n                return 0.8;\n                break;\n            default:\n                return 0.7;\n        }\n    }\n\n    /**\n     * 计算最后价格\n     *\n     * @param $number\n     * @param $discount\n     *\n     * @return int\n     */\n    public function getTotal($number, $discount)\n    {\n        return 500 * $number * $discount;\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br></div></div><p>在 Controller 中调用代码，如下：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;?php\n\nnamespace App\\Http\\Controllers;\n\nuse App\\Services\\OrderService;\nuse Illuminate\\Http\\Request;\n\n/**\n * Class UserController\n *\n * @package App\\Http\\Controllers\n */\nclass UserController extends Controller\n{\n    /**\n     * @var \\App\\Services\\EmailService\n     */\n    protected $orderService;\n\n    /**\n     * UserController constructor.\n     *\n     * @param \\App\\Services\\OrderService $orderService\n     */\n    public function __construct(OrderService $orderService)\n    {\n        $this-&gt;orderService = $orderService;\n    }\n    \n    /**\n     * @param \\Illuminate\\Http\\Request $request\n     *\n     * @return int\n     */\n    public function index(Request $request)\n    {\n        $number = $request-&gt;input(&#39;number&#39;);\n        $discount = $this-&gt;orderService-&gt;getDisCount($number);\n        return $this-&gt;orderService-&gt;getTotal($number, $discount);\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><p>将原本的 <code>if () { .. } else { .. }</code> 逻辑改写成使用 <code>OrderService</code>，Controller 变得非常感觉，也达成原来 Controller 接受 Http Request，调用其他 Class 的责任。</p><p>改用这种写法的几个优点：</p><ul><li><p>将 PHP 写的业务逻辑写在　Service ，解决了 Controller 代码臃肿的问题</p></li><li><p>符合 SOLID 的单一职责原则： 业务逻辑写在 Service，没写在 Controller</p></li><li><p>符合 SOLID 的单一职责原则：计算折扣与计算加总分开在不同的 Method，且归属于 <code>OrderService</code>，而非 <code>Controller</code></p></li><li><p>符合 SOLID 的依赖反转原则： Controller 并非直接相依于 Service，而是将 Service 依赖注入进 Controller</p></li><li><p>其他 Controller 也可以重复使用这段业务逻辑</p></li></ul><h3 id="结束"><a class="header-anchor" href="#结束">#</a> 结束</h3><ul><li><p>实际上会有很多 Service ，需要自行依照 SOLID 原则去判断是否该建立 Service</p></li><li><p>Service 使得业务逻辑从 Controller 中解放，不仅更容易维护、更容易拓展、更容易重复使用且更容易测试</p></li></ul>',36),r={render:function(n,s){return a}}}}]);