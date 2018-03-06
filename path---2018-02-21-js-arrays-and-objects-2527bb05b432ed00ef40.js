webpackJsonp([60759358512379],{546:function(n,a){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-02-21-js-arrays-and-objects/index.md absPath of file >>> MarkdownRemark",html:'<h1>A lists of things</h1>\n<p>This blog post is part of the posts series done for iterate hackerspace, explaining some of basic programming concepts implemented in JavaScript.</p>\n<h5>Table of contents</h5>\n<p><a href="#intro-array">Introduction to arrays</a>\n<a href="#array-operations">Basic array operations</a></p>\n<ul>\n<li><a href="#we-knew">The ways we know</a></li>\n<li><a href="#push">Push</a></li>\n<li><a href="#pop">Pop</a></li>\n<li><a href="#map">Map</a></li>\n<li>\n<p><a href="#others">Other methods</a>\n<a href="#intro-obj">Introduction to objects</a>\n<a href="#obj-operations">Iterating over objects</a></p>\n<ul>\n<li><a href="#we-knew">The ways we know</a></li>\n<li><a href="#keys">Object,keys()</a></li>\n<li><a href="#values">Object,values()</a></li>\n<li><a href="#others">Others</a>\n<a href="#bugs">Some fun stuff: Bugs </a>\n<a href="#aftermath">Aftermath </a></li>\n</ul>\n</li>\n</ul>\n<h2>Introduction to arrays</h2>\n<p>Allrighty then, we already know the primitive data types such as <code>numbers</code>, <code>booleans</code>, <code>strings</code> etc. Usually though, we need not only one of them, but a whole list in a certain order. Like, for example, when you have average wind speed data by days and you want to make some statistical analyze. Obviously, having data about only just 1 day is not enough, you will need at least the data of 1 month, which is 30-31 numbers in a list, in a specific order. In JavaScript, those lists are called <strong><em>arrays</em></strong>. Here’s how you declare an array;</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">49</span><span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can have as many elements as you want. Those elements will be given indices. Every element will have an index, starting from 0. So to get the data of the first <code>member</code> of the array you write.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>In the same manner, to get the data of the 4th <code>member</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">a<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>You can do a lot of stuff with arays, and some of the operations will be discussed now.</p>\n<h2>Basic array operations</h2>\n<h3>The ways we know</h3>\n<p>Usually, you will not only need data, but also need to do some specific things for every item of the array. Of course, we already know some ways to do it, as Array type is also Iterateable (has countable, discrete items). We can use <code>for loops</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> a<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>OR</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>OR</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Let’s talk a little about this code. The first unknown thing here is <code>a.length</code>. However, as common sense may suggest, it just gives back the <code>length</code> of the array. Second thing is that in case of <code>for .. of</code> loop we just logged <code>i</code> but in case of <code>for .. in</code> we logged <code>a[i]</code>. Can you answer why?</p>\n<h3>The ways that are better</h3>\n<p>See, we know some ways already to deal with arrays. Bud do we usually need those ways in case of some common operations, like finding a specific item that satisfies the condition, or doing some operation on every item of the array and so on.\n<strong><em>The answer is no</em></strong>\nWhy? Because kind people working on improving JS have created a bunch of <code>methods</code> (special synonym for the word <code>function</code>, in case that those collection of functions are specified for in conjuction with a certain data type), which will do almost everything you need for you. Let’s take a look at some array <code>methods</code></p>\n<h4>1. Push</h4>\n<p>You can use push to append one or many elements at the end of the array. Try it yourselves.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\na<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>As you may notice, the a is now <code>[1, 2, 3, 5, 6]</code>. Remember: You can add one or more items using push.</p>\n<h4>2. Pop</h4>\n<p>This is the reverse of <code>push</code>. It takes out the last element of the array. Try it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// will log 5;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// a is now [1, 2, 3]</span>\n</code></pre>\n      </div>\n<p><strong><em>Warning</em></strong>: Using pop in some places may cause bugs and loss of data; If you need to access just the data without removing the item use:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">a<span class="token punctuation">[</span>a<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// Gets the last element of the array w/out removing</span>\n</code></pre>\n      </div>\n<h4>3. Map</h4>\n<p>We reached the interesting part :smiley:</p>\n<p>The function <code>map</code> is used to do something on every item of the array. It gets 1 argument — a function which will be applied on the every element. It will return a new array — the resultant array without changing anything in the original one. The function that map will get has 3 arguments.</p>\n<ol>\n<li>The current item</li>\n<li>The index of the current item</li>\n<li>The whole array.</li>\n</ol>\n<p>We usually don’t need the 3rd one though, we can just leave it missing.\nLet’s check out an example.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>currentItem<span class="token punctuation">,</span> currentItemIndex<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>currentItem<span class="token punctuation">,</span> currentItemIndex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> currentItem <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3>Other functions.</h3>\n<p>Let’s take a look at <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">MDN</a> to see some other functions. Also you can use <a href="https://sdras.github.io/array-explorer/">Sarah Drassner’s array explorer</a> which is probably the easiest way to find the method you want to use.</p>\n<h2>Introduction to Objects.</h2>\n<p>Okay, now we know about arrays. They are used when we have a lot of things of the same types. But let’s imagine for example the table. Can you name some characteristics of the table? Do they all have the same type? Do, for example, color and width both have the same type? No, because one of them is a color name — a string and the other one is a number.</p>\n<p>This example shows that we don’t only need primitive data types and arrays, we also need some containers to keep different kinds of data about the same object in one place.</p>\n<p>That’s why we have <code>objects</code>. You may remember them from the lecture about loops, where we had a row of people each memorising a number.</p>\n<p>Let’s take a look at some object.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> table <span class="token operator">=</span> <span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> material<span class="token punctuation">:</span> <span class="token string">\'wood\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>As you can see, we have some correspondence. There is a <code>key</code> and corresponding <code>value</code>. Multiple of those pairs are divided from each other by commas. So this is the data about a wooden table with width 15, height 10 and length 30.</p>\n<p>What if we want to know it’s height given the object?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>table<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The <code>.</code> is called <code>property accessor operator</code>, because <code>height</code> is the property of the table (makes sense in English right?).</p>\n<p>Let’s do some brain damage! We can have objects inside objects. Let’s say we have a box and inside it we have some glove.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> box <span class="token operator">=</span> <span class="token punctuation">{</span>\n  height<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span>\n  width<span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span>\n  glove<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    material<span class="token punctuation">:</span> <span class="token string">\'silk\'</span><span class="token punctuation">,</span>\n    fingers<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n    beautiful<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>So the glove is the property of the box, but glove has its own properties. Now how do we know if the glove is beautiful or not?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>box<span class="token punctuation">.</span>glove<span class="token punctuation">.</span>beautiful<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is just getting the property of the property.</p>\n<h3>Iterating over the Objects.</h3>\n<h4>The ways we know</h4>\n<p>We already know that we can use ‘for .. in’ loop to iterate over the object. In that case, the iterator variable will have the key in it.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> someObj <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">in</span> someObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> someObj<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Do you see something strange here? We used another syntax other than the <code>property accessor operator</code> to get the value associated with the current key. That’s because in case of writing\n<code>someObj.i</code> JS will literally try to find the property <code>i</code>. It won’t understand that <code>i</code> is a\nvarable and that it needs to change that <code>i</code> with the key value. So we use array like syntax to get\nthe value associated with the key. In this case, whatever is inside <code>[]</code> is treated like a\nstring. So we could do something like.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> table <span class="token operator">=</span> <span class="token punctuation">{</span> width<span class="token punctuation">:</span> <span class="token number">15</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">,</span> length<span class="token punctuation">:</span> <span class="token number">30</span><span class="token punctuation">,</span> material<span class="token punctuation">:</span> <span class="token string">\'wood\'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>table<span class="token punctuation">[</span><span class="token string">\'width\'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>This is a legal syntax, but it is usually used only in cases when the name of the property is stored\nin the variable and the <code>.</code> operator can’t be used.</p>\n<p>Getting back to the topic. Using <code>for .. in</code> loop we can iterate over the object, but just like in\ncase of the arrays, we can use some methods and make our code cleaner and the job of others easier.</p>\n<p>There are 2 main methods that we will need, if we need to iterate over the object. Those 2 will give\nback an array given the object. Let’s take a look.</p>\n<h4>The ways that are better.</h4>\n<h5>Object.keys()</h5>\n<p>This method will give back the keys of the object in the array. The argument of this <code>method</code> should be an object. Here’s an example</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> someObj <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>someObj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>Now, after having an array we can use <code>any</code> array method. On the object. Try experimenting with this at home.</p>\n<h5>Object.values()</h5>\n<p>Guess what this method does?</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> someObj <span class="token operator">=</span> <span class="token punctuation">{</span> a<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> b<span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> c<span class="token punctuation">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>someObj<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p><em>NOTE: The order of the properties is not guaranteed. This means that if you have the object created\nlike <code>{a: 1, b: 2, c: 3}</code>, those methods won’t necessarily return <code>["a", "b", "c"]</code> or <code>[1, 2, 3]</code>. It can be <code>["b", "a", "c"]</code> or <code>[3, 1, 2]</code> or any other order.</em></p>\n<h5>Other methods</h5>\n<p>Again, our best friend <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object">MDN</a> will come to help. By the way Sarah also has created the <a href="https://sdras.github.io/array-explorer/">Object explorer</a>, so you can use it too.</p>\n<h2>Some fun stuff: Bugs</h2>\n<p>Try this in some interpreter.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\na<span class="token punctuation">[</span><span class="token string">\'lol\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">\'haha\'</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>The result is something that is out of logic. This is a somewhat bug, because in JS <code>Arrays</code> and <code>Objects</code> are almost the same. This is a proof of it.</p>\n<p>Now try this.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>What do you see? Do you like the result?</p>\n<p>Challenge. Try to make the resulting string have a comma between 3 and 4.</p>\n<p>It won’t work if you add a comma after the 3, because the comma of the last element is ignored by the JS interpreter, just like the semicolons for example.</p>\n<h2>Aftermath</h2>\n<p>This is probably just 10% of all the things connected with Arrays and Objects. Talking about everything connected with them will take a lot of time, and makes no sense. The lot of stuff that will be needed can be Googled. The other 90% is on you, and on experience, as you will learn them on the go, when you will need them.</p>',frontmatter:{title:"JavaScript Objects and Arrays",date:"February 21, 2018",discussionId:"2018-02-21-js-arrays-and-objects"}}},pathContext:{slug:"/2018-02-21-js-arrays-and-objects/"}}}});
//# sourceMappingURL=path---2018-02-21-js-arrays-and-objects-2527bb05b432ed00ef40.js.map