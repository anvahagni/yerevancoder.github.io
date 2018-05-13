---
title: Graceful shutdown in NodeJS
tags: yerevancoder, tutorial, NodeJS
author: Nairi Harutyunyan
date: "2018-05-13"
description: Shutting down NodeJS server correctly
discussionId: "2018-05-13-graceful-shutdown"
---

# Graceful shutdown in NodeJS

Graceful shutdown in NodeJS

In this article I am going to show you how to do a graceful shutdown in NodeJS application, but first lets describe what does *"graceful shutdown"* means and why we need to do that in our application and what are the benefits.

## Graceful shutdown

Let’s imagine you have a http server with NodeJS which connected to a database, and every time server gets called then it send request to database to get/set a data which also will send to client by response.
Imagine you need to shutdown the server, the easiest way to do that is `<Ctrl>+C` and server will be killed, but wait, what if your server did not finish all the requests, what if some client connections is closed because server is killed and can not handle the requests.

*-That gives you point to think, right ?*

As you might guess you need to handle all requests and close all resources which are processing on data(e.e. database connections) and not take any other requests and after that you can shutdown your server with a quiet conscience.
> **Graceful shutdown** means when all your requests to the server is respond and not any data processing work left.

It’s very important to create a graceful shutdown and shutdown your server correctly because you can not know what can happen to the requests that has been made to the server if you shutdown the server immediately, you can make mistake and kill an other process `PID` which provided to the NodeJS server or some other things might happen, which could be bad for your application.

### How that works

Here is the four steps of how you can do a graceful shutdown in an easy way.

1. Handle process kill signal

1. Stop new requests from client

1. Close all data process

1. Exit from process

First of all we need to handle in the server that someone wants to shutdown, after that we need to complete all the requests and stop taking new requests from users to the server, so we can be sure that there are no any pending requests from users to the server before shutting down the server, after that we need to close all the data processing (i.e. databases, some file system workers, etc..), it depends on what you are doing in the server, and finally we can exit from the process.

Let’s create a simple NodeJS server and do all the steps that I have mentioned above which will do a graceful shutdown when we want to close the server and understand how it works.

Here is a simple NodeJS Server example using ExpressJS

```javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) throw err;
  console.log('Mongoose connected!');
});
const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  try {
    const user = new User({ name: req.body.username });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
```

Here we have a simple server which has a route that creates user in MongoDB.

We can test the server and create a user in database using this command

```
curl -d ‘{ “username”: “Narek” }’ -H “Content-Type: application/json” -X POST [http://localhost:3000/user](http://localhost:3000/user)
````

If you got Success! message then you can look the JSON data in MongoDB.

Now let’s go through the four steps and write appropriate code for that.

### 1. Handle process kill signal

First let’s understand what is a process signal.
> A **signal** is an asynchronous notification sent to a **process** or to a specific thread to notify an event that occurred.

Signal events will be emitted when the NodeJS process receives a signal.
Each signal have name(i.e. `'SIGINT'`, `'SIGTERM'`, etc.), more about that in NodeJS [here](https://nodejs.org/api/process.html#process_signal_events).

* `'SIGINT'` generated with `<Ctrl>+C` in the terminal.

* The `'SIGTERM'` signal is a generic signal used to cause program termination. Unlike `'SIGKILL'`, this signal can be blocked, handled, and ignored. It is the normal way to politely ask a program to terminate.

* The shell command kill generates `'SIGTERM'` by default.

You can read more about **Termination Signals** [here](https://www.gnu.org/software/libc/manual/html_node/Termination-Signals.html).

As you guess we need to add handler which will receive `'SIGTERM'` signal.

Here is the next example built on previous example which handles the signal.

```javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) throw err;
  console.log('Mongoose connected!');
});
const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  try {
    const user = new User({ name: req.body.username });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  }
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
});
```

Now let’s try and test it.
Run the server, after that you need to get `PID` number of process, you get that using ps command, so now you have the number and you can try to kill the server using this command `kill [PID_number]` or just `killall node` which will send signal all node servers, after running this command you will get this log from node outputs

```
SIGTERM signal recived.
```

If you will try again you will get the same log

```
SIGTERM signal recived.
```
*-Hmmm, why the process has not been killed?*

Because you handled the signal and ignored it.

So, first step is done, let’s move to the next step.

### 2. Stop new requests from client

Now we need to stop http server and stop accepting new requests.
It can be done using server.close function to get more information about that you can have a look also in [NodeJS doc](https://nodejs.org/api/http.html#http_server_close_callback).

So, the code will look like this

```javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) throw err;
  console.log('Mongoose connected!');
});
const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  try {
    const user = new User({ name: req.body.username });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  }
});

const server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
  });
});
```

It will stop accepting new connections to server and if you will try to call the server your request will fail.

### 3. Close all data process

In this example the point is to close MongoDB connection because not any requests left to the database.

So it can be done with this code

```javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) throw err;
  console.log('Mongoose connected!');
});
const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  try {
    const user = new User({ name: req.body.username });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  }
});

const server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
    });
  });
});
```

*-Hmmmmmmm, why node server exits after db connection close.*

It’s very interesting question, you can try to understand that point by yourself, but if you can’t or don’t want I will describe it in next chapter.

### 4. Close all data process

As you have seen our application exits close database connection.

*What is the cause?* - EventLoop

As we know NodeJS will exit when EventLoop queue is empty and nothing left to do.

But sometime your application can have more functions and will not exit automatically, in this point comes our last work to do.
We need to exit from process using process.exit function.

And final graceful shutdown server example will look like this

```javascript
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());

mongoose.connect('mongodb://localhost/test', (err) => {
  if (err) throw err;
  console.log('Mongoose connected!');
});
const User = mongoose.model('User', { name: String });

app.post('/user', async (req, res) => {
  try {
    const user = new User({ name: req.body.username });
    await user.save();
    res.send('Success!').status(201);
  } catch (err) {
    res.send(err.message).status(500);
  }
});

const server = app.listen(3000, () => console.log('Example app listening on port 3000!'));

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  console.log('Closing http server.');
  server.close(() => {
    console.log('Http server closed.');
    // boolean means [force], see in mongoose doc
    mongoose.connection.close(false, () => {
      console.log('MongoDb connection closed.');
      process.exit(0);
    });
  });
});
```

Argument `0` means exit with a *“success”* code.
To exit with a *“failure”* code use `1`.

To get this exit code after shutdown run this command in terminal where you run your node server i seen logs

```
echo $?
```

By default NodeJS exits with process code `0` if EventLoop is empty.

That’s it!

## Summary

It’s not the only way to shutdown server correctly, this will work fine on small projects and can be written easily, but I am not saying in big projects, it’s not needed. In big projects more likely using server balancing (i.e. Nginx) you can balance the load and not send any request to that server and shutdown it.
You can find articles or tutorials about *“graceful shutdown”* and *“health checks*” where else can be examples like this.

Thank you for reading this article, feel free to ask any questions or tweet me [@nairhar](https://twitter.com/nairihar).
