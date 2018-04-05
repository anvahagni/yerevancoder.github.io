webpackJsonp([0xf6f34dd72ff],{670:function(a,n){a.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-02-10-js-boolean-expressions-and-conditionals/index.md absPath of file >>> MarkdownRemark",html:'<h1>Primitives 2</h1>\n<p>This blog post is part of the posts series done for iterate hackerspace, explaining some of basic programming concepts implemented in JavaScript.</p>\n<h5>Table of contents</h5>\n<p><a href="#logical-operators">Logical Operators</a></p>\n<ul>\n<li><a href="#and-ampamp">AND</a></li>\n<li><a href="#or-">OR</a></li>\n<li><a href="#not-">NOT</a></li>\n<li><a href="#truthy-falsey">Truthiness and Falsiness</a></li>\n<li><a href="#short-circuit">Short-circuit evaluation</a></li>\n</ul>\n<p><a href="#if-else"><code class="language-text">if</code> statements</a>\n<a href="#switch">Switch</a>\n<a href="">Further reading</a></p>\n<h2>Logical Operators</h2>\n<p>In programming as in real life, you will usually find yourself in a situation when some decision\nchanges the flow of things. The program may do something instead of doing something else depending\non some <code class="language-text">condition</code>. Usually those conditions are evaluated to a <code class="language-text">boolean</code> value either <code class="language-text">true</code> or\n<code class="language-text">false</code> Let’s think of a real life example to understand this. Let’s say you want to wear your short\nsleeve T-shirt today. As you don’t want to catch cold or something you will probably wear it only\n<code class="language-text">if</code> the temperature outside is greater than 10 degrees celsius. Otherwise you will wear your hoodie\ninstead. In this case the condition is the following.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Temperature &gt;= 10</code></pre>\n      </div>\n<p>This will be either true or false, depending on the temperature. In programming terminology these\ndecisions, depending on some values are called <code class="language-text">logical expressions</code> or <code class="language-text">boolean expressions</code>. As we\nmentioned before, those expressions will evaluate to a <code class="language-text">Boolean</code> - <code class="language-text">true</code> or <code class="language-text">false</code>.</p>\n<p>Now let’s take the same example and make it a little bit more complicated. Suppose you also want to\nwear sunglasses to look cooler. Now, if you wear sunglasses when it’s rainy it may make you look\ncooler but a little bit strange instead :laughing: So that’s why you may want to wear sunglasses\nonly if there’s sunny weather.</p>\n<p>Now the question. In which case you may want to wear <strong>both</strong> your favorite T-Shirt and\nsunglasses. The answer is</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Temperature &gt;= 10 AND Weather === &quot;Sunny&quot;</code></pre>\n      </div>\n<p>As you might have guessed already, those <strong><em>connecting</em></strong> operators, such as AND, OR and so on, also\nhave a special name. Those are called <code class="language-text">logical operators</code> or sometimes referred as <code class="language-text">boolean operators</code>. We will learn about three of them - AND <strong>(&#x26;&#x26; in JS)</strong>, OR <strong>(|| in JS)</strong> and NOT <strong>(!\nin JS)</strong>. Those notations are usually the same for the majority of languages but it is subject of\nchange depending on the language</p>\n<p>Before diving into code, let’s bring some other examples to make this clearer. Most people know,\nthat computers do calculation by adding bunch of 0s and 1s. It’s like having a room full of people,\nwhere each person evaluates only one value, giving one result, <code class="language-text">true</code> or <code class="language-text">false</code>. Having only one\nperson doing this is not quiet usefull, but add more people, and the ‘computational power’ of the\nroom will grow exponentially. Moreover, assign a person a specific way of evaluation, and you will\nhave powerful, yet simple way of calculating different results. This lays in the basis of computer\narchitecture and is based on so called <code class="language-text">boolean algebra</code>.</p>\n<p>We do this kind of comparisons every day. For example, when searching for a hotel, we filter results\nby certain criteria, like we want the hotel to have 5 <code class="language-text">or</code> 4 stars, <code class="language-text">not</code> to allow smoking<code class="language-text">and</code> be\nkid-friendly. The search result will give all 5 and 4 star hotels, will include kid friendly hotels,\nbut won’t show hotels where smoking is allowed. Now let’s take a look at how these logical\noperations are represented and implemented in JavaScript.</p>\n<h3>AND (&#x26;&#x26;)</h3>\n<p>AND operator returns <code class="language-text">true</code> only if both operands are true, otherwise, it returns <code class="language-text">false</code>.</p>\n<table>\n<thead>\n<tr>\n<th align="left">Value 1</th>\n<th align="left">Value 2</th>\n<th align="left">Returns</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">true</td>\n<td align="left">true</td>\n<td align="left"><code class="language-text">t &amp;&amp; t</code>\n - true</td>\n</tr>\n<tr>\n<td align="left">true</td>\n<td align="left">false</td>\n<td align="left"><code class="language-text">t &amp;&amp; f</code>\n - false</td>\n</tr>\n<tr>\n<td align="left">false</td>\n<td align="left">false</td>\n<td align="left"><code class="language-text">f &amp;&amp; f</code>\n - false</td>\n</tr>\n<tr>\n<td align="left">false</td>\n<td align="left">(3 > 5 )</td>\n<td align="left"><code class="language-text">f &amp;&amp; f</code>\n - false</td>\n</tr>\n<tr>\n<td align="left">‘str1’</td>\n<td align="left">‘str2’</td>\n<td align="left"><code class="language-text">t &amp;&amp; t</code>\n - str2 (weird JS)</td>\n</tr>\n<tr>\n<td align="left">‘str’</td>\n<td align="left">false</td>\n<td align="left"><code class="language-text">t &amp;&amp; f</code>\n - false</td>\n</tr>\n</tbody>\n</table>\n<h3>OR (||)</h3>\n<p>OR operator <code class="language-text">true</code> in all cases of comparing boolean operands except <code class="language-text">false &amp;&amp; false</code>.</p>\n<table>\n<thead>\n<tr>\n<th align="left">Value 1</th>\n<th align="left">Value 2</th>\n<th align="left">Returns</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">true</td>\n<td align="left">true</td>\n<td align="left"><code class="language-text">t || t</code>\n - true</td>\n</tr>\n<tr>\n<td align="left">true</td>\n<td align="left">false</td>\n<td align="left"><code class="language-text">t || f</code>\n - true</td>\n</tr>\n<tr>\n<td align="left">false</td>\n<td align="left">false</td>\n<td align="left"><code class="language-text">f || f</code>\n - false</td>\n</tr>\n<tr>\n<td align="left">false</td>\n<td align="left">(3 > 5 )</td>\n<td align="left"><code class="language-text">f || f</code>\n - false</td>\n</tr>\n<tr>\n<td align="left">‘str1’</td>\n<td align="left">‘str2’</td>\n<td align="left"><code class="language-text">t || t</code>\n - str1</td>\n</tr>\n<tr>\n<td align="left">false</td>\n<td align="left">‘str’</td>\n<td align="left"><code class="language-text">t || f</code>\n - ‘str’</td>\n</tr>\n<tr>\n<td align="left">‘str’</td>\n<td align="left">true</td>\n<td align="left"><code class="language-text">t || t</code>\n - ‘str’</td>\n</tr>\n</tbody>\n</table>\n<h3>NOT (!)</h3>\n<p>NOT operator returns <code class="language-text">true</code> in all cases, except the case if its single operand can be converted to <code class="language-text">true</code>.</p>\n<p><code class="language-text">!true</code> - returns <code class="language-text">false</code>\n<code class="language-text">!false</code> - returns <code class="language-text">true</code>\n<code class="language-text">!&#39;str&#39;</code> - returns <code class="language-text">false</code></p>\n<h3>Truthiness and Falsiness</h3>\n<p>In case of <code class="language-text">NOT</code> operand we saw a weird thing. We called !‘str’ and got the value <code class="language-text">false</code>. This may\nsuggest, that there is a “hidden” boolean value connected to ‘str’. How can you get that using !\noperator? You can use it twice, to negate the opposite boolean value given by !‘str’. So, in case of\n‘str’ it’s “hidden” boolean value is true. How does this happen? It’s because JS <code class="language-text">!</code> operator\n<code class="language-text">converts</code> the type of it’s <code class="language-text">operand</code> to Boolean and then negates that resulting value. That’s why\nsome of values in JS are <code class="language-text">truthy</code>, which means they are corresponding to boolean value <code class="language-text">true</code> and\nsome of them are <code class="language-text">falsy</code>. Usually, emptiness corresponds to <code class="language-text">false</code> while any other value\ncorresponds to <code class="language-text">true</code>. Let’s look at some examples.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token operator">!</span><span class="token operator">!</span><span class="token string">\'\'</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// \'\' is falsy</span>\n<span class="token operator">!</span><span class="token operator">!</span><span class="token string">\'a\'</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// \'a\' is truthy</span>\n<span class="token operator">!</span><span class="token operator">!</span><span class="token number">0</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 0 is falsy</span>\n<span class="token operator">!</span><span class="token operator">!</span><span class="token operator">-</span><span class="token number">4</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// -4 is truthy, even if it\'s negative, because it\'s not empty</span>\n<span class="token operator">!</span><span class="token operator">!</span><span class="token number">NaN</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// NaN is falsy</span>\n<span class="token operator">!</span><span class="token operator">!</span><span class="token keyword">null</span> <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// null is falsy</span>\n<span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// null means emptiness, the absence of the object, while empty object is still an object. it\'s just empty.</span>\n<span class="token operator">!</span><span class="token operator">!</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// This can be more treated like {}</span>\n<span class="token operator">!</span><span class="token operator">!</span>undefined <span class="token operator">===</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// Not defined, not there => falsy</span>\n</code></pre>\n      </div>\n<p>So as you see, usually the values that are used to describe the absence are falsy and the others are\ntruthy. It’s a bit philosophical and this is how programming is beautiful. :smile:</p>\n<p>_NOTE::: The return values of the <code class="language-text">&amp;&amp;</code> and <code class="language-text">||</code> operators are <strong>not</strong> necessarily <code class="language-text">Boolean</code> values,\nas they can be used with operands that are not booleans, however they can still be considered\n<code class="language-text">Boolean</code> operators since their return values can always be converted to <code class="language-text">truthy/falsey</code> values.</p>\n<p>This means that in some cases we may use &#x26;&#x26; but get results of other type. Some examples are_</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token boolean">false</span> <span class="token operator">||</span> <span class="token string">\'I will be evaluated\'</span><span class="token punctuation">;</span>\n<span class="token boolean">true</span> <span class="token operator">&amp;&amp;</span> <span class="token string">\'I will be evaluated\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Short-circuit evaluation</h3>\n<p>Let’s suppose we have a long chain of boolean operators combined.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Condition1 &amp;&amp; Condition2 &amp;&amp; Condition3 &amp;&amp; ... &amp;&amp; Condition N</code></pre>\n      </div>\n<p>As you know already, <code class="language-text">AND</code> evaluates to true if and only if both values are true. It’s easy to\nunderstand that in the general case, like the one shown above, that means that the expression will\nevaluate to <code class="language-text">true</code> if and only if <strong>ALL</strong> the presented boolean values are true. Let’s again bring a\nreal life analog for this.</p>\n<p>Suppose a kid is happy if a kid has got a candy. Now suppose we have N kids in a row and we want to\nknow if all of them are happy. What will you do as a human? You will go one by one starting from the\nfirst and ask if the current kid has a candy. What if you noticed a kid in the middle somewhere with\nno candy? Does it have any meaning to continue with the other kids or seeing just this one with no\ncandy means that our assumption of all kids having a candy is wrong (or, as programmers may say,\nevaluated to <code class="language-text">false</code>).</p>\n<p>So seing just 1 kid not having a candy is already enough to end the search. This is exactly how the\nprogram will evaluate the long chain of boolean values connected with <code class="language-text">&amp;&amp;</code>-s. It may as well just\nstop searching as soon as it sees some <code class="language-text">falsy</code> value in the chain and return that <code class="language-text">falsy</code> value. If\nthere is no any <code class="language-text">falsy</code> value it will evaluate to the last value presented in chain. Let’s take a\nlook at some code to get this clearer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">true &amp;&amp; true &amp;&amp; true &amp;&amp; false &amp;&amp; true &amp;&amp; true // returns false, stops evaluation as soon as sees the false value\n&#39;Truthy value&#39; &amp;&amp; 0 &amp;&amp; true // returns 0 because it&#39;s falsey\nundefined &amp;&amp; null &amp;&amp; 1 &amp;&amp; 0 &amp;&amp; &#39;xoxo&#39; // stops as soon as sees the very first undefined, look how the all unnecessary long calculation is left behind.</code></pre>\n      </div>\n<p>Now your turn!</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">true &amp;&amp; true &amp;&amp; &#39;&#39; &amp;&amp; true &amp;&amp; true\n&#39;I am the first&#39; &amp;&amp; &#39;I am the second&#39; &amp;&amp; &#39;Latter the greater&#39;\n&#39;Some string&#39; &amp;&amp; 5 &amp;&amp; null &amp;&amp; undefined\n10 &amp;&amp; 9 &amp;&amp; 8 &amp;&amp; 7 &amp;&amp; 6 &amp;&amp; 5 &amp;&amp; 4 &amp;&amp; 3 &amp;&amp; 2 &amp;&amp; 1 &amp;&amp; 0\n10 &amp;&amp; 9 &amp;&amp; 8 &amp;&amp; 7 &amp;&amp; 6 &amp;&amp; 5 &amp;&amp; 4 &amp;&amp; 3 &amp;&amp; 2 &amp;&amp; 1\n0 &amp;&amp; 9 &amp;&amp; 8 &amp;&amp; 7 &amp;&amp; 6 &amp;&amp; 5 &amp;&amp; 4 &amp;&amp; 3 &amp;&amp; 2 &amp;&amp; 1 &amp;&amp; 0</code></pre>\n      </div>\n<p>The same logic applies to OR operator, as it evaluates to true if <strong>at least one</strong> of the <code class="language-text">operands</code>\nis true. Can you explain how will OR work? Can you also answer those correctly?</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">false || undefined || &#39;Haha&#39; || 0\n&#39;false&#39; || &#39;Don&#39;t be tricked&#39; || 0 || undefined || &#39;many others&#39;\n&#39;I am the first&#39; || &#39;I am the second&#39; || &#39;Latter the greater?&#39;\n0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10\n1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 10 || 0</code></pre>\n      </div>\n<h3>if statements</h3>\n<p>Now, after we got so far with boolean expressions, we can put them into usage in the actual\ncode. Remember the example of wearing a T-Shirt and sunglasses. You may notice that with the two\nconditions we have we can create different <code class="language-text">boolean expressions</code> and change the flow of the program\ndepending on those. One question remaining is where to put those boolean expressions exactly. There\nare several places where you need to insert boolean expressions and the simplest two of them are\n<code class="language-text">if</code> and <code class="language-text">switch</code> <code class="language-text">statements</code>.</p>\n<p>Let’s start with <code class="language-text">if</code> statements. It’s as simple as you may guess.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">if (Some boolean expression here) {\n    // Things that need to be done if the expression evaluates to true\n}</code></pre>\n      </div>\n<p>So we use the keyword <code class="language-text">if</code> and then after it we put parantheses and write our boolean expression\nthere. Then we open the body of the statement with <code class="language-text">{</code> and close it with <code class="language-text">}</code>. In case of our T-Shirt\nsunglass example it will be something like:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>temperature <span class="token operator">>=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> weather <span class="token operator">===</span> <span class="token string">\'sunny\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>cool_tshirt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>sunglasses<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Now, this is too limited. Usually you make decision for both cases, not only if the condition is\ntrue. You do something <code class="language-text">else</code> if the condition is not true. In case of JS, you can do this by using\nthe word? <code class="language-text">else</code> :smile: So now we can make the example more complete including the case of wearing\nhoodie.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>temperature <span class="token operator">>=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> weather <span class="token operator">===</span> <span class="token string">\'sunny\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>cool_tshirt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>sunglasses<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>warm_hoodie<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Okay, this is cool but it’s also limited. What if I want to make more than 2 choices depending on\nthe conditions. What if it’s below -15 outside? Warm hoodie is not enough to not freeze in that\nsituation. We need some other case. How to do it? Just add onther if after else to get <code class="language-text">else .. if</code>\nstatement. Using <code class="language-text">else .. if</code> we can specify as many cases as we want.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>temperature <span class="token operator">>=</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> weather <span class="token operator">===</span> <span class="token string">\'sunny\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>cool_tshirt<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>sunglasses<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>temperature <span class="token operator">&lt;=</span> <span class="token operator">-</span><span class="token number">15</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>warm_coat<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>warm_hoodie<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>scarf<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>hat<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>warm_socks<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Granny was here :)</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  <span class="token function">wear</span><span class="token punctuation">(</span>warm_hoodie<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Okay, let’s take a look at another example. You remember Teenage Mutant Ninja Turtles right? Now we\nwant to write a program that will output the corresponding Turtle name given the color of its\nmask. For those who don’t know Teenage Mutant Ninja Turtles, here is the list.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">Leonardo is wearing a blue mask\nRaphael is wearing a red mask\nMichelangelo is wearing an orange mask\nDonatello is wearing a purple mask</code></pre>\n      </div>\n<p>Okay let’s do this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token string">\'blue\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Leonardo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token string">\'red\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Raphael\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token string">\'orange\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Michelangelo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Donatello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This code works, but it has a small bug. Can you spot it? The more correct code would be.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token string">\'blue\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Leonardo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token string">\'red\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Raphael\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>color <span class="token operator">===</span> <span class="token string">\'orange\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Michelangelo\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Donatello\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This piece of code is long and hard to read. That’s why we have <code class="language-text">switch</code> statement, which is used exactly for cases like this one.</p>\n<h3>Switch</h3>\n<p>So, as we’ve already said, <code class="language-text">switch</code> provied a better way to write the better readable code doing\nthe same thing as the example above does. <code class="language-text">switch</code> is useful when you have some variable and for\neach <code class="language-text">case</code> of the value you want to do something. It won’t work with and or anything, it’s used to\nbranch the program depending just on a value of a single variable. Look how much the readability is\nincreased, keeping the same functionality as the above code.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">switch</span><span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n   <span class="token keyword">case</span> <span class="token string">\'blue\'</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Leonardo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n   <span class="token keyword">case</span> <span class="token string">\'red\'</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Raphael\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n   <span class="token keyword">case</span> <span class="token string">\'orange\'</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Michelangelo\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n   <span class="token keyword">case</span> <span class="token string">\'purple\'</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>\'Donatello<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n   <span class="token keyword">default</span><span class="token punctuation">:</span>\n       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Have you even seen TMNT???\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n       <span class="token keyword">break</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Let’s see what’s new in this code.</p>\n<ol>\n<li>Keyword switch - we put the keyword and then again open parantheses. This time in paranteses we specify the <code class="language-text">variable</code> for which we will switch the cases.</li>\n<li>Keyword case - in the body of the switch (the block starting with <code class="language-text">{</code> and ending with <code class="language-text">}</code>) we see multiple <code class="language-text">case</code> statements. We use <code class="language-text">case</code> to specify a certain probable value, a guess of the value of the variable.</li>\n<li>Logic after the case - after the case value is specified, we put <code class="language-text">:</code> and start to write the logic of the things that needs to be done if the value of the variable matches with that certain case.</li>\n<li>break statement - The thing is that JS kinda does not differentiate the cases, so whenever some cases matches, it will start to execute the code of <strong>ALL</strong> the cases below the match case (You are adviced now to try to delete the break-s and see what happens). To prevent this we use <code class="language-text">break</code> keyboard to exit the switch statement. Sometimes that auto-executing thing may be useful, sometimes it creates problems. We will see a case when it’s useful a little bit later.</li>\n<li>default case - This is a special case using the keyword <code class="language-text">default</code> that will handle the case when none of the “guesses” of the value were right. In this case, if the color is something else than ‘red’, ‘blue’, ‘orange’ or ‘purple’, it will execute the code inside default case.</li>\n</ol>\n<p>It may happen that you want to do the same thing in multiple cases. Let’s say we get the name of the\nmonth and we want to output the weather of that month. So ‘july’ will output ‘summer’, ‘december’\nwill output ‘winter’ and so on. Instead of writing 12 case bodies, we can take advantage of that\nauto-execution of cases and write just 4 like this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">switch</span><span class="token punctuation">(</span>monthName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">case</span> <span class="token string">\'December\'</span><span class="token punctuation">:</span>\n    <span class="token keyword">case</span> <span class="token string">\'January\'</span><span class="token punctuation">:</span>\n    <span class="token keyword">case</span> <span class="token string">\'February\'</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'It\'</span>s winter\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'March\'</span><span class="token punctuation">:</span>\n    <span class="token keyword">case</span> <span class="token string">\'April\'</span><span class="token punctuation">:</span>\n    <span class="token keyword">case</span> <span class="token string">\'May\'</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'It\'</span>s spring\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'June\'</span><span class="token punctuation">:</span>\n    <span class="token keyword">case</span> <span class="token string">\'July\'</span><span class="token punctuation">:</span>\n    <span class="token keyword">case</span> <span class="token string">\'August\'</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'It\'</span>s summer\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">case</span> <span class="token string">\'September\'</span><span class="token punctuation">:</span>\n    <span class="token keyword">case</span> <span class="token string">\'October\'</span><span class="token punctuation">:</span>\n    <span class="token keyword">case</span> <span class="token string">\'November\'</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'It\'</span>s autumn\'<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">break</span><span class="token punctuation">;</span>\n    <span class="token keyword">default</span><span class="token punctuation">:</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'There is no such month!\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>So this is the basics of branching the program. Next time we will learn about loops, one of the most\npowerful things that computer and programming languages provide.</p>',
frontmatter:{title:"JavaScript. Boolean expressions, conditionals and more.",tags:"javascript, development",author:"Robert Gevorgyan",date:"February 10, 2018",discussionId:"2018-02-10-js-boolean-expressions-and-conditionals"}}},pathContext:{slug:"/2018-02-10-js-boolean-expressions-and-conditionals/"}}}});
//# sourceMappingURL=path---2018-02-10-js-boolean-expressions-and-conditionals-54ce895c5e14f2e619e3.js.map