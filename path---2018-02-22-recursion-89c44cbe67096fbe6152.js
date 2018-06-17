webpackJsonp([183018687124],{

/***/ 499:
/***/ (function(module, exports) {

	module.exports = {"data":{"site":{"siteMetadata":{"title":"yerevancoder","author":"Coders of Armenia"}},"markdownRemark":{"id":"/Users/qz1llg/Repos/yerevancoder.github.io/src/pages/2018-02-22-recursion/index.md absPath of file >>> MarkdownRemark","html":"<h1>Using the function inside itself.</h1>\n<p>This blog post is part of the posts series done for iterate hackerspace, explaining some of basic programming concepts implemented in JavaScript.</p>\n<h5>Table of contents</h5>\n<p><a href=\"#intro-recursion\">Introduction to recursion</a>\n<a href=\"#practical\">Practical examples</a></p>\n<ul>\n<li><a href=\"#factorial\">Factorial</a></li>\n<li><a href=\"#fibonacci\">Fibonacci</a></li>\n<li><a href=\"#triangle\">Triangle example</a></li>\n</ul>\n<h2>Introduction to recursion.</h2>\n<p>Today we have only one topic to talk about, however this topic is very important to understand. I don’t want to scare you but it’s also kinda scary. Just listen carefully and I am sure you will get it.</p>\n<p>So we talked about loops and running the same code repeteadly many times. We know at least 3 ways of doing so. However there is one cooler way to do it.</p>\n<p>The most primitive example to start from is factorial. What is factorial of five? It’s the product of all number up until 5.</p>\n<div class=\"gatsby-highlight\" data-language=\"javascript\">\n      <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token function\">factorial</span><span class=\"token punctuation\">(</span><span class=\"token number\">5</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token number\">1</span> <span class=\"token operator\">*</span> <span class=\"token number\">2</span> <span class=\"token operator\">*</span> <span class=\"token number\">3</span> <span class=\"token operator\">*</span> <span class=\"token number\">4</span> <span class=\"token operator\">*</span> <span class=\"token number\">5</span><span class=\"token punctuation\">;</span></code></pre>\n      </div>\n<p>Now if you notice, this product can be represented as</p>\n<div class=\"gatsby-highlight\" data-language=\"javascript\">\n      <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token function\">factorial</span><span class=\"token punctuation\">(</span><span class=\"token number\">5</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token function\">factorial</span><span class=\"token punctuation\">(</span><span class=\"token number\">4</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> <span class=\"token number\">5</span><span class=\"token punctuation\">;</span></code></pre>\n      </div>\n<p>So what’s this? We used factorial to define factorial. It may not make sense, but in programming this is an important notion called recursion.</p>\n<p>Let’s just Google recursion. What do you see? This is just a small example of recursion.</p>\n<p>Another cool example. So GNU is the developer community thanks to which we have free Linux distributions. Now try to find out what acronym GNU stands for. It stand’s for “GNU’s Not Unix”.</p>\n<p>This is a cool and wit example of recursion, we use the term to describe that term.</p>\n<p>Here is also a graphical recursion.</p>\n<p><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/b3/Screenshot_Recursion_via_vlc.png\" alt=\"Recursive Image\" title=\"Recursion\"></p>\n<p>Here are also recursion memes to make it more clear and funny :smile:</p>\n<p><img src=\"https://i.redd.it/md4l7yy3rgly.jpg\" alt=\"Drake Recursion\" title=\"Drake recursion\">\nAaaand another one</p>\n<p><img src=\"https://pics.me.me/dad-there-is-a-recursion-under-my-bed-oad-there-29924251.png\" alt=\"Recursion under my bed\" title=\"Recursion under my bed\"></p>\n<p>3D printer printing 3D printer</p>\n<p><img src=\"http://wiki.secretgeek.net/Image/3d_printer_factory.jpg\" alt=\"3D Printer\"></p>\n<p>So now you know that for understanding recursion you need to know what recursion is. It is main event time! Let’s write some code.</p>\n<h2>Practical examples.</h2>\n<p>As you see in those programs, recursions are infinite. What do you think will happen if you do something like this in JS? It will go on forever, or cause an error like “I don’t have memory for doing all this stuff”. Now let’s find out how to avoid this in an actual example.</p>\n<h3>Factorial</h3>\n<p>Let’s start with the most famous example — factorial. It’s just a function inside of which we call a function. Forget that it’s the function we are going to call is the function we are defining.</p>\n<div class=\"gatsby-highlight\" data-language=\"javascript\">\n      <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">factorial</span> <span class=\"token operator\">=</span> n <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>n <span class=\"token operator\">&lt;=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token function\">factorial</span><span class=\"token punctuation\">(</span>n <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">*</span> n<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre>\n      </div>\n<p>So how this code works exactly. First we define the <strong><em>termination case</em></strong>. We need at least one of those so the recurison won’t go on forever. For this current case we say that it should stop the recursion and return just a number <code class=\"language-text\">1</code> if n reaches 1 or 0. Can you say why?</p>\n<p>So this means that the recursion will stop when it’s called with n being 1 or 0. This means we were able to stop the infinite recursion monster!</p>\n<p>After the termination case we have the <strong><em>recursive definition</em></strong> of factorial. We say that it’s the factorial of the number preceding our number times the current number.</p>\n<p>So let’s visualize the stuff JS will do to get the factorial(6) for example.</p>\n<p><img src=\"http://1.bp.blogspot.com/-ezSpp0vDQSo/VerVHxsgY8I/AAAAAAAADtg/VAKkf_HYJdk/s1600/factorial%2Bin%2BJava.gif\" alt=\"Recursion explained\"></p>\n<h3>Fibonacci game</h3>\n<p>Now let’s play a little game. Let’s assign numbers to you and recursively compute the Fibonacci numbers! People who will be assigned numbers bigger than 0 and 1 know just 1 fact — they need to call the people with numbers <code class=\"language-text\">n - 2</code> and <code class=\"language-text\">n - 1</code>, wait them to get the numbers, and then shout out the sum of those two numbers.</p>\n<p>Try to manage your “calls” to do this in a managed way.</p>\n<p>Now, help me to write the code calculating fibonacci numbers.</p>\n<div class=\"gatsby-highlight\" data-language=\"javascript\">\n      <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">fib</span> <span class=\"token operator\">=</span> n <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>n <span class=\"token operator\">&lt;=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token function\">fib</span><span class=\"token punctuation\">(</span>n <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token function\">fib</span><span class=\"token punctuation\">(</span>n <span class=\"token operator\">-</span> <span class=\"token number\">2</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre>\n      </div>\n<h3>Triangle example</h3>\n<p>Do you remember the triangle example? Let’s also implement it using recursion. Before writing the code let’s analyze the problem.</p>\n<p>So on every call we have the triangle with 1 less width plus a newline character (As you may remember it’s <code class=\"language-text\">&#39;\\n&#39;</code>) and a line of <code class=\"language-text\">n</code> asterisks. So we know we should have something like.</p>\n<div class=\"gatsby-highlight\" data-language=\"javascript\">\n      <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token function\">stars</span><span class=\"token punctuation\">(</span>n<span class=\"token punctuation\">)</span> <span class=\"token operator\">===</span> <span class=\"token function\">stars</span><span class=\"token punctuation\">(</span>n <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> line<span class=\"token punctuation\">;</span></code></pre>\n      </div>\n<p>What about the termination case? Can you say a termination case for stars function?</p>\n<p>Now as you can see, only the line part remains. Can you write a recursive function that prints n asterisks side by side and returns that line?</p>\n<div class=\"gatsby-highlight\" data-language=\"javascript\">\n      <pre class=\"language-javascript\"><code class=\"language-javascript\"><span class=\"token keyword\">const</span> <span class=\"token function-variable function\">printStarLine</span> <span class=\"token operator\">=</span> n <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>n <span class=\"token operator\">===</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token string\">'*'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token function\">printStarLine</span><span class=\"token punctuation\">(</span>n <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token string\">'*'</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> <span class=\"token function-variable function\">stars</span> <span class=\"token operator\">=</span> n <span class=\"token operator\">=></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">if</span> <span class=\"token punctuation\">(</span>n <span class=\"token operator\">===</span> <span class=\"token number\">0</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">return</span> <span class=\"token string\">'\\n'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n  <span class=\"token keyword\">return</span> <span class=\"token function\">stars</span><span class=\"token punctuation\">(</span>n <span class=\"token operator\">-</span> <span class=\"token number\">1</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token function\">printStarLine</span><span class=\"token punctuation\">(</span>n<span class=\"token punctuation\">)</span> <span class=\"token operator\">+</span> <span class=\"token string\">'\\n'</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span></code></pre>\n      </div>\n<iframe height=\"400px\" width=\"100%\" src=\"https://repl.it/@fxfactorial/ShabbyCutePixel?lite=true\" scrolling=\"no\" frameborder=\"no\" allowtransparency=\"true\" allowfullscreen=\"true\" sandbox=\"allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals\"></iframe>\n<p>So this is it for today. This topic is not for explaining a lot, as you can see I just showed a bunch of examples. It’s more about questions and experience, which means that you need to ask your questions now and do the tasks so you can grasp this topic better.</p>","frontmatter":{"title":"JavaScript, Recursion","tags":"javascript, development","author":"Robert Gevorgyan","date":"February 22, 2018","discussionId":"2018-02-22-recursion"}}},"pathContext":{"slug":"/2018-02-22-recursion/"}}

/***/ })

});
//# sourceMappingURL=path---2018-02-22-recursion-89c44cbe67096fbe6152.js.map