webpackJsonp([97113878278150],{545:function(n,a){n.exports={data:{site:{siteMetadata:{title:"yerevancoder",author:"Coders of Armenia"}},markdownRemark:{id:"/Users/Edgar/Repos/yerevan-coder/src/pages/2018-02-18-git-and-github/index.md absPath of file >>> MarkdownRemark",html:'<h1>Introduction to git</h1>\n<h2>What is git?</h2>\n<p>Alright, we are already familiar with javascript basics, and we might want to create some cool projects.</p>\n<p>Imagine that you and your friends are working on the same project.\nyou probably are continually writing new source code and changing the existing source code.\nIn this case, the team needs some software tools that help them manage changes to source code over time.\nVersion control software (VCS) keeps track of every modification to the code in a special kind of database.\nIf a mistake is made, developers can turn back the clock and compare earlier versions of the code to help fix\nthe mistake while minimizing disruption to all team members.\nDeveloping software without using version control is risky, like not having backups.\nn\nGit is a free, open source and the most commonly used distributed version control system (DVCS) today.</p>\n<p>Git was started by Linus Torvalds, the same person who created Linux.</p>\n<h2>What is GitHub?</h2>\n<p>GitHub is a hosting service for Git repositories.\nGitHub is a website where you can upload a copy of your Git repository.</p>\n<p>Git and Github are not the same things:\nGit is the tool, GitHub is the service for projects that use Git.</p>\n<p>GitHub provides free plans for open-source projects and paid plans offering unlimited private repositories.</p>\n<p>Before moving on to the git basics, please create your personal GitHub account.</p>\n<h2>Git basics</h2>\n<h4>Install git</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">sudo</span> <span class="token function">apt-get</span> update\n$ <span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> <span class="token function">git</span>\n$ <span class="token function">git</span> --version\n</code></pre>\n      </div>\n<h4>Create a new directory and open it</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">mkdir</span> my-directory\n$ <span class="token function">cd</span> my-directory\n</code></pre>\n      </div>\n<h4>Create some files</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">touch</span> file.js\n$ <span class="token function">touch</span> file2.js\n</code></pre>\n      </div>\n<h4>Create a new git repository.</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> init\n</code></pre>\n      </div>\n<p>The directory now has an empty repository in /.git/.</p>\n<p>The repository is a hidden directory where Git operates.</p>\n<p>Git keeps all of its files in the .git directory.</p>\n<h4>Check the hidden files</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ la\n</code></pre>\n      </div>\n<h4>Check the current state of the project</h4>\n<p>You can edit the files and check the stage of your project with the following command</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> status\n</code></pre>\n      </div>\n<h4>Add changes to the staged area</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> add <span class="token string">\' file-name \'</span>\n</code></pre>\n      </div>\n<h4>Unstage</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> reset <span class="token string">\' file-name \'</span>\n</code></pre>\n      </div>\n<p>The files listed here are in the Staging Area, and they are not in our repository yet.</p>\n<p>Staging is a step before the commit process in git.</p>\n<h4>Commit</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> commit -m <span class="token string">"a message describing what we\'ve changed"</span><span class="token keyword">.</span>\n</code></pre>\n      </div>\n<p>Now if you check the current state of the project you will see ‘nothing to commit, working directory clean’.</p>\n<h4>Undo a commit</h4>\n<p>We can refer to our most recent commit, using the HEAD pointer.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> reset Head~\n</code></pre>\n      </div>\n<h4>History</h4>\n<p>Make a few commits. and let’s browse them to see what we changed.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> log\n$ <span class="token function">git</span> log -1\n$ <span class="token function">git</span> log -2\n</code></pre>\n      </div>\n<h4>Add a remote repository</h4>\n<p>To push our local repo to the GitHub server we’ll need to add a remote repository.</p>\n<p>‘Origin’ is the default name of the remote git repository you cloned from.</p>\n<p>The URL could be your repository on GitHub.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> remote add origin <span class="token string">\' URL \'</span>\n</code></pre>\n      </div>\n<h4>Push command</h4>\n<p>push command tells Git where to put our commits.</p>\n<p>So let’s push our local changes to our origin repo (on GitHub).</p>\n<p>The name of our remote is <code>origin</code> and the default local branch name is master.</p>\n<p>The -u tells Git to remember the parameters, so next time simply run git push.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> push -u origin master\n</code></pre>\n      </div>\n<h4>Diff</h4>\n<p>The main objective of version control is to enable you to work with different versions of files.</p>\n<p>Git provides a command ‘diff’ that lets you to compare different versions of your files.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> <span class="token function">diff</span>\n</code></pre>\n      </div>\n<p>Compares working directory with index (staged area).</p>\n<p>It shows the changes that are not staged yet.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> <span class="token function">diff</span> HEAD\n</code></pre>\n      </div>\n<p>Compares working directory with the committed version.</p>\n<p>It shows the list of changes after your last commit.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> <span class="token function">diff</span> --cached\n</code></pre>\n      </div>\n<p>Compares index (staged area) with the commited version.</p>\n<p>It shows the diff between your last commit and changes to be committed next.</p>\n<p>git diff —cahched will only show changes to files in the “staged” area.</p>\n<p>git diff HEAD will show all changes to tracked files.</p>\n<p>If you have all changes staged for commit, then both commands will output the same.</p>\n<h4>Pull command</h4>\n<p>Pull command incorporates changes from a remote repository into the current branch\nWe can check for changes on our GitHub repository and pull down any new changes</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> pull origin master\n</code></pre>\n      </div>\n<h4>Branch</h4>\n<p>Branching is a feature available in most modern version control systems.</p>\n<p>Git branches are effectively a pointer to a snapshot of your changes.</p>\n<p>When you are working on a feature or bug you may want to create a copy of the code and make separate commits.</p>\n<h4>Adding a new branch</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> branch <span class="token string">\' branch-name \'</span>\n</code></pre>\n      </div>\n<h4>Check branches</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> branch\n</code></pre>\n      </div>\n<h4>Switching Branches</h4>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> checkout <span class="token string">\' branch-name \'</span>\n</code></pre>\n      </div>\n<p>when you’re done you can simply merge this branch back into the main master branch (or any other intended branch).</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> merge <span class="token string">\' branch-name \'</span>\n</code></pre>\n      </div>\n<p>And finally, you can git push.</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">$ <span class="token function">git</span> push\n</code></pre>\n      </div>\n<h2>Additional resources</h2>\n<ul>\n<li>For more information and detailed explanations visit the amazing <a href="https://github.com/susam/gitpr">Fork and Pull Request Workflow</a> repository.</li>\n<li>Practice your git skills with this interactive <a href="https://try.github.io/levels/1/challenges/1">tutorial</a>.</li>\n</ul>',frontmatter:{title:"Git",tags:"git, github",author:"Mahta Rezayazdi",date:"February 18, 2018",discussionId:"2018-02-18-git-and-github"}}},pathContext:{slug:"/2018-02-18-git-and-github/"}}}});
//# sourceMappingURL=path---2018-02-18-git-and-github-08e4d076cef323323d2f.js.map