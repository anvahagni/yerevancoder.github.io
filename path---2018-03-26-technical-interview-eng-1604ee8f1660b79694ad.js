webpackJsonp([37344793613958],{

/***/ 507:
/***/ (function(module, exports) {

	module.exports = {"data":{"site":{"siteMetadata":{"title":"yerevancoder","author":"Coders of Armenia"}},"markdownRemark":{"id":"/Users/qz1llg/Repos/yerevancoder.github.io/src/pages/2018-03-26-technical-interview-eng/index.md absPath of file >>> MarkdownRemark","html":"<p><a href=\"../2018-03-26-technical-interview-arm/\">Հայ</a> | Eng</p>\n<h6><strong>Description</strong>: This document is a definition of “Technical interview”, forms of implementation, methods of application, importance and includes general advice.<br /></h6>\n<h6><strong>Note</strong>: The material is formed based on my experience of more than 100 technical interviews I have conducted and on feedback from applicants.</h6>\n<hr>\n<h1>Contents</h1>\n<ul>\n<li><a href=\"#definition\">Definition</a></li>\n<li>\n<p><a href=\"#interviewing-methods\">Interviewing methods</a></p>\n<ul>\n<li><a href=\"#oral-technical-interview\">Oral Technical Interview</a></li>\n<li><a href=\"#appropriate-environment\">Appropriate environment</a></li>\n<li><a href=\"#the-correct-sequence-of-technical-questions\">The correct sequence of technical questions</a></li>\n<li><a href=\"#common-questions\">Common questions</a></li>\n<li><a href=\"#the-last-question\">The “last” question</a></li>\n<li><a href=\"#quiz\">Quiz</a></li>\n<li><a href=\"#task\">Task</a></li>\n<li><a href=\"#comparison\">Comparison</a></li>\n</ul>\n</li>\n<li><a href=\"#the-importance-of-technical-interview\">The importance of Technical Interview</a></li>\n<li><a href=\"#disclaimer\">Disclaimer</a></li>\n<li><a href=\"#notes\">Notes</a></li>\n</ul>\n<hr>\n<h1>Definition</h1>\n<p>The technical interview as a process pursues the following purpose:<br>\n<strong>To estimate applicant’s technical knowledge maximum objectively at a given time and possible potential at the upcoming time period.</strong></p>\n<hr>\n<h1>Interviewing methods</h1>\n<p>The main techniques for conducting a technical interview are “Oral”, “Test Quiz” and “Technical Task”. Each method has its purpose and order form of conduct. The above mentioned can be conducted as separate stages in different orders. Depending on company requirements “Test Quiz” and “Technical Task” may be missed.<br>\nThe main stages are considered the “Oral” method, which is as a rule essential and minimal consisting part of the interview and “Technical Task”.</p>\n<h3>Oral Technical Interview</h3>\n<h4>Appropriate Environment</h4>\n<p>Based on the above definition the main purpose of the tech. specialist is the estimation of the applicant’s technical knowledge maximum objectively, that is to say, first of all, to create an appropriate environment for the applicant to be psychologically balanced, otherwise the result can not be considered an objective estimation.\nApplicant’s tension can have an impact on his answers and self-expression.</p>\n<p>To create a comfortable environment.</p>\n<ul>\n<li>It is desirable to conduct a technical interview with one or two tech. specialist, but not more <a href=\"#note-1\">(1)</a>.</li>\n<li>Do not immediately start with technical questions.</li>\n</ul>\n<details>\n  <summary>For example: </summary>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Tech. specialist</strong></td>\n<td>- Hello! :)</td>\n</tr>\n<tr>\n<td><strong>Applicant</strong></td>\n<td>- Hello!</td>\n</tr>\n<tr>\n<td><strong>Tech. specialist</strong></td>\n<td>- My name is John.</td>\n</tr>\n<tr>\n<td><strong>Applicant</strong></td>\n<td>- Pleasant, Jack.</td>\n</tr>\n<tr>\n<td><strong>Tech. specialist</strong></td>\n<td>- It’s nice Jack, how are you?</td>\n</tr>\n<tr>\n<td><strong>Applicant</strong></td>\n<td>- Good, thanks, and how are you?</td>\n</tr>\n<tr>\n<td><strong>Tech. specialist</strong></td>\n<td>- Good, thank you. Аre you in a good mood?</td>\n</tr>\n<tr>\n<td><strong>Applicant</strong></td>\n<td>- In fighting mood:)</td>\n</tr>\n<tr>\n<td><strong>Tech. specialist</strong></td>\n<td>- Ok, Jack, it will be technical interview, mostly from JavaScript, but before I go through formal inquiries, I want some information about you, ok? Tell a little about yourself, education, experience and more.</td>\n</tr>\n<tr>\n<td><strong>Applicant</strong></td>\n<td>- …</td>\n</tr>\n</tbody>\n</table>\n</details>  \n<ul>\n<li>Maximally avoid denying the applicant’s thoughts during the interview (<strong>“You are wrong”</strong>, <strong>“The claim was not correct”</strong>, etc.). At the end of the interview you can go through all his mistakes, give advice, etc, if the applicant wishes. <a href=\"#note-2\">(2)</a>. At the same time, the interview should not present one-sided questions. For example:  </li>\n</ul>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td><strong>Tech. specialist</strong></td>\n<td>- Please introduce JavaScript as a programming language in your own words</td>\n</tr>\n<tr>\n<td><strong>Applicant</strong></td>\n<td>- Well, Javascript is a scripting language, faster, used in the browser as well as on BackEnd, etc.</td>\n</tr>\n</tbody>\n</table>\n<p>The answer above is inaccurate, insufficient from the technical aspect. Desirable, relatively more professional and anticipated answer could be the following:</p>\n<p>- JavaScript is a multi-paradigm, interpreted, single threaded and dynamic typed programming language.</p>\n<p>The difference between the applicant’s answer and the supposed correct answer is still insufficient to suppose that the applicant does not know about such ideas as “multi-paradigm”, ”interpreted”, ”single threaded”, ”dynamic typed”, etc. The next question:</p>\n<p>- Look, almost all the programming languages have common characteristics: are they dynamic or static, single threaded or multi threaded, interpreted or compiled, etc? Let’s try to answer the following questions considering JavaScript as the target of the conversation. Let’s start from the first question - dynamic or static?  </p>\n<h4>The correct sequence of technical questions</h4>\n<p>The correct sequence of technical questions (from the perspective of complexity) enables accurate assessment of the applicant’s knowledge. Usually a problem arises not learning whether the applicant knows or doesn’t know the given problem, but how much percentage he covers. In such cases it is necessary to be able to accurately estimate the percentage ratio which the issues related to the problem should be arranged for in terms of ascending complexity, and the starting point or the next step of the transition is determined from the applicant’s technical level (junior, middle, senior, etc.).</p>\n<p>Often encountered problem:<br>\nUsually, a lower-level specialist is given a complicated question without answering it, the applicant’s knowledge of the given problem may be estimated 0, whereas the applicant had some understanding and knowledge about the problem.</p>\n<p>To illustrate the organization of the correct sequence of technical questions, we should divide questions into two groups:</p>\n<ol>\n<li>Questions related to the concrete topic and classification of these questions by complexity.</li>\n</ol>\n<p>Example (as an example setTimeout from WebAPIs will be considered).<br>\nPossible questions related to setTimeout in the correct order.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>- Describe setTimeout as a function.\n<br/>\n*\n Not important questions: \n<br/>\n1. Can the first argument of setTimeout not be a function? \n<br/>\n2. Is there a third argument for setTimeout, if yes, what does it represent and does it have limitations? If yes, then what kind of limitations?</td>\n</tr>\n<tr>\n<td>2</td>\n<td>- Give a mathematical claim for the second argument of setTimeout.</td>\n</tr>\n<tr>\n<td>3</td>\n<td>- Detailed description of setTimeout work.</td>\n</tr>\n<tr>\n<td>4</td>\n<td>- Recursive setTimeout and setInterval.</td>\n</tr>\n<tr>\n<td>5</td>\n<td>- setTimeout (fn, 0) as an exception.</td>\n</tr>\n<tr>\n<td>6</td>\n<td>- Dom minimum timeout value.</td>\n</tr>\n<tr>\n<td>7</td>\n<td>- setImmediate, setImmediate polyfill, polyfill implementation.</td>\n</tr>\n<tr>\n<td>8</td>\n<td>- process.nextTick, Promise.resolve(). Compare with setTimeout()</td>\n</tr>\n<tr>\n<td>9</td>\n<td>- Task, MicroTask, differences, execution order, implementation in different browsers.</td>\n</tr>\n<tr>\n<td>10</td>\n<td>- setTimeouts’ execution order - FIFO, LIFO, random</td>\n</tr>\n</tbody>\n</table>\n<p>Let’s consider we do not set the correct sequence and start talking about setTimeout from Question 6 or its specific case, for example:<br>\n- Please enter DOM<em>MIN</em>TIMEOUT<em>VALUE or DOM</em>CLAMP<em>TIMEOUT</em>NESTING_LEVEL in Google Chrome and FireFox.<br>\nIn that case the wrong answer to the question or the lack of the response can not give information about the applicant’s setTimeout knowledge.</p>\n<p><strong>Use the right sequence of questions.</strong></p>\n<ol start=\"2\">\n<li>Topics that you can address only if the applicant is in line with that level.</li>\n</ol>\n<p>Example - Questions related to engine.</p>\n<ul>\n<li>\n<p>Parsing</p>\n<ul>\n<li>Lazy Parsing</li>\n<li>Pre parsing</li>\n<li>Full parsing</li>\n</ul>\n</li>\n<li>Tockenazing/Lexing</li>\n<li>AST ( Abstract Syntax Tree )</li>\n<li>\n<p>JIT (Just in Time compiler)</p>\n<ul>\n<li>Compile + Optimization</li>\n<li>Re-optimization / De-optimization</li>\n</ul>\n</li>\n<li>\n<p>Automate Memory Management - GC</p>\n<ul>\n<li>Comparison with manual memory management</li>\n<li>advantages / disadvantages</li>\n</ul>\n</li>\n</ul>\n<p>Questions related to Web Assemble.</p>\n<ul>\n<li>\n<p>toolchain</p>\n<ul>\n<li>emscripten</li>\n<li>clang</li>\n<li>llvm</li>\n</ul>\n</li>\n<li>Detailed description of webassembly work.</li>\n<li>etc.</li>\n</ul>\n<h4>Common questions</h4>\n<p>The main questions are given separately (before or after) from the questions of the considered position, can also be held as a separate stage. The common questions, in their turn, are divided into two groups.</p>\n<ol>\n<li>\n<p>Common IT development questions.</p>\n<ul>\n<li>Algorithms Theory</li>\n<li>Turing Machine</li>\n<li>Finite-State Machine (FSM), Finite-State Automata (FSA), Finite Automation</li>\n<li>“Divide and Conquer”</li>\n<li>Sorting Algorithms</li>\n<li>…</li>\n<li>Operating Systems</li>\n<li>Graph Theory</li>\n<li>Graph</li>\n<li>Tree</li>\n<li>\n<p>Search Algorithms</p>\n<ul>\n<li>DFS - Depth-First Search</li>\n<li>BFS - Breadth-First Search</li>\n</ul>\n</li>\n<li>Shortest Path</li>\n<li>Minimum Spanning Tree</li>\n<li>…</li>\n<li>Data Structure</li>\n<li>Queue</li>\n<li>Stack</li>\n<li>List</li>\n<li>B-tree</li>\n<li>…</li>\n<li>Data Bases</li>\n<li>Probability Theory</li>\n<li>Theory of Games</li>\n<li>Discrete Mathematics</li>\n<li>Functional Programming Basics</li>\n<li>Classifications / Forecasting and Prediction Algorithms - Machine Learning</li>\n</ul>\n<p><strong>Note:</strong> * This questionnaire can be changed depending on company requirements, considered position and the technical level of the applicant.</p>\n</li>\n<li>\n<p>Questions related to the applicant’s IT preferences</p>\n</li>\n</ol>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>- Preferred Operating system</td>\n</tr>\n<tr>\n<td>2</td>\n<td>- Preferred text editor or IDE</td>\n</tr>\n<tr>\n<td>3</td>\n<td>- In addition to your basic programming language mention other languages you are interested in or want to work on.</td>\n</tr>\n<tr>\n<td>4</td>\n<td>- How do you follow news? What resources do you use?</td>\n</tr>\n<tr>\n<td>5</td>\n<td>- What goals does your GitHub account serve for (if you have any)?</td>\n</tr>\n</tbody>\n</table>\n<p><strong>Note:</strong> Any question of this questionnaire as a separate question may not provide sufficient information about the applicant. However, the answer to all questions, as a whole, may allow you to understand the applicant’s world outlook in IT. For example: let’s review the answers of two different applicants.</p>\n<p>Option 1.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>- Windows</td>\n</tr>\n<tr>\n<td>2</td>\n<td>- Microsoft Visual Studio, WebStorm, Notepad++</td>\n</tr>\n<tr>\n<td>3</td>\n<td>- C#, Visual Basic, PHP</td>\n</tr>\n<tr>\n<td>4</td>\n<td>- Looking for what I need in Google. I read Toster.ru and, in general, watch screencasts on Youtube.com</td>\n</tr>\n</tbody>\n</table>\n<p>Option 2.</p>\n<table>\n<thead>\n<tr>\n<th></th>\n<th></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>1</td>\n<td>- Linux, Unix-like operating systems.</td>\n</tr>\n<tr>\n<td>2</td>\n<td>- Vim, Sublime Text or other text editor, but not IDE</td>\n</tr>\n<tr>\n<td>3</td>\n<td>- C/C++, Rust, OCaml, Elixir (Erlang/OPT), Python</td>\n</tr>\n<tr>\n<td>4</td>\n<td>- Medium, Hackernoon, Habr, Twitter… I am subscribed in Google and Mozilla Youtube channels</td>\n</tr>\n</tbody>\n</table>\n<p>Note … * Examples are from real life.  </p>\n<h4>The “last” question</h4>\n<p><strong>- Please rate your technical knowledge from 0 to 10.</strong></p>\n<p>During the interview the tech. specialist will form an assessment that will be considered an alleged objective assessment and it is also important to get an assessment by the applicant. Additional assumptions may be made from the comparison of the two estimations.</p>\n<h3>Task</h3>\n<p>The technical task presents technical issue representation corresponding to the considered position. The purpose of this method is to estimate the applicant’s technical knowledge from the point of view of the implementation of practical tasks.<br>\nThe view points can be:</p>\n<ul>\n<li>Code quality</li>\n<li>Coding style</li>\n<li>Code architecture</li>\n<li>Naming convention</li>\n<li>File/Folder structure</li>\n<li>…</li>\n</ul>\n<h5>Important points</h5>\n<ul>\n<li>The estimation of the problem should be left to the applicant’s discretion. The assessment of the complexity of his problem and the time/quality ratio may serve as additional information.</li>\n<li>The complexity of the task is not the main goal, and is mainly lower than the applicant’s technical level.</li>\n<li>Task responses are desirable to be checked by several technical experts for more objective assessment.</li>\n<li>The task must have functional and technical specification and requirements.</li>\n</ul>\n<h3>Quiz</h3>\n<p>Quiz or test work is a sequence of questions with possible answers. This method can be used for filtration of the preceding stages or as additional information in the main stages.</p>\n<h3>Comparison</h3>\n<ul>\n<li>Quiz</li>\n<li>Advantage<br>\nMinor effort.</li>\n<li>Disadvantage<br>\nAnswering frequently asked questions and lack of oral conversation may be not an objective assessment.</li>\n<li>Task</li>\n<li>Advantage<br>\nOpportunity to estimate practical work.</li>\n<li>Disadvantage<br>\nUsually, “technical task” is done remotely, and lack of control and the availability of extra assistance affects the validity of the work estimation.</li>\n<li>Oral</li>\n<li>Advantage<br>\nAn objective assessment of theoretical knowledge, existence of oral conversation.</li>\n<li>Disadvantage<br>\nIn some cases, it is difficult to estimate the applicant’s knowledge from his/her oral speech or self-reported problems.</li>\n</ul>\n<hr>\n<h1>The Importance of Technical Interview</h1>\n<p>Any technical interviewing course unequivocally shows the technical level of the company.<br>\n<br />\nBased on the assessment of the tech. specialist, the company may employ the applicant. An incorrect assessment of the tech. specialist may cause problems later on.</p>\n<hr>\n<h1>Disclaimer</h1>\n<p>The document does not aim to compile an ordered process of technical interview or interviewing stages for specific programming language, technology or company. The above mentioned points are the main clauses for technical interviews in IT. JavaScript is just an example. (For more detailed JavaScript questionnaire please refer the following <a href=\"https://github.com/SurenAt93/Technical-Interview/blob/master/javascript.md\">file</a> as an interview guide). The author tried not to define the stages of technical interview for keeping the document flexibility. The number and sequence of interview stages may vary depending on the programming language, the technology, the applicant’s technical level, the company requirements and resources. The above mentioned points will be considered accurate also for the interviews related to specific libraries or frameworks. For example:</p>\n<p>JavaScript - ReactJs / NodeJs and etc.<br>\nPython - Django and etc.<br>\nRust - Exonum and etc.<br>\n…</p>\n<hr>\n<h1>Notes</h1>\n<h6>Note 1</h6>\n<p>The presence of more than two tech․ specialists in the room (in which the interview will be conducted) can create an overwhelming atmosphere. The presence of a second tech. specialist is desirable for making more objective opinion. However, if tech. specialist is experienced and can conduct the interview alone, then the presence of one tech. specialist will be more optimal.</p>\n<h6>Note 2</h6>\n<p>At the end of the interview, regardless of the applicant’s assessment or his / her potential mentor, give 5 minutes for the consultation, note mark the mistakes, give advice, guide and show the gaps in the technical knowledge. Send relevant links to articles, books or other resources to fill in the gaps. ( Make the world a little bit better :) )</p>\n<p>Thank you.</p>\n<hr>\n<h6>This post in <a href=\"https://github.com/SurenAt93/Technical-Interview\">GitHub</a></h6>","frontmatter":{"title":"Technical Interview - English","tags":"technical interview","author":"Suren Atoyan","date":"March 26, 2018","discussionId":"2018-03-26-technical-interview-eng"}}},"pathContext":{"slug":"/2018-03-26-technical-interview-eng/"}}

/***/ })

});
//# sourceMappingURL=path---2018-03-26-technical-interview-eng-1604ee8f1660b79694ad.js.map