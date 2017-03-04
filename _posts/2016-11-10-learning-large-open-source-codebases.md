---
layout:     post
title:      How To Learn Large Open-Source Codebases
date:       2016-11-10
summary:    Swallowing large open-source codebases one bite at a time.
categories: github open-source how-to
---

If you are wanting to make contributions to significant open-source projects, you're going to need to digest large codebases. Here's my way of digging in.

### Getting Started

Reading 10s of thousands, or 100s of thousands of lines is a large and often daunting task, especially for 'green' developers like me. There's some articles and forum answers around that also speak on this problem, but I have found them to be (whilst still informative) high-level and broad. The following is a stepwise, practical, and detail oriented approach that I have so far fashioned, and continue to improve. I should note that I am very much focused on the [Github](https://github.com/) open-source ecosystem.

### 1. Fork, Build, and Run

Obvious yes, but get this out of the way before starting. [Fork](https://help.github.com/articles/fork-a-repo/) the repository for the codebase/project you are looking to learn and contribute to. You now have a copy of it which can track the original, whilst still being a sandbox for your learning. Next follow the build and run steps which should hopefully be included in some documentation. Building and running the software itself will show you a part of how the code works, but more so it is vital for continued learning.

### 2. Become Confident Using The Codebase

Understanding the functionality and usage of a codebase is a catalyst for understanding the source. The features of the codebase are *the reason* for the all those developer hours. They are goals already achieved which will point you in the direction for your own work. This is the easy part, the fun part, go and become an expert in the codebase you admire and enjoy so much that you decided to work on it.

### 3. The First Pass

Now go ahead and *read* code. This is called a 'first pass' because it is not the last time you will read the source code. In the first pass you shouldn't be reading carefully or deeply, but rather scanning over everything just trying to get a sense of what *style*, *patterns*, *language features*, *architectures* and idiosyncrasies are being used in the code. Anything notable, or interesting to you should be **noted down**, either with pen and paper or some [Markdown](https://en.wikipedia.org/wiki/Markdown) documents kept in a folder like `\Notes` in the forked repo.

The main things that I tend to pick out are:

* the codebase's language specific libraries or syntax that I am not familiar with
* codebase 'critical files' where a lot of important code seems to be contained
* How the codebase's style and conventions conflict with my own personal coding style for that language

### 4. Read The Documentation

Any significant open-source project worth its salt should have thorough and well presented documentation. Now that you've taken the time to get into the source code *first*, it's a good idea to work through the docs. You are probably already well aware of the value of documentation, so I won't go into further details about how it improves your knowledge of a code base.

### 5. A Branch For Personal Comments

When reading and re-reading through unfamiliar code I have found it really useful to fill a version of the codebase's files with personal comments to support my own understanding. It's not enough to just read the code, because you'll often have forgotten things about the first files you read through by the time you reach the last. To keep everything clear and organised, I like to keep two *git branches* in my fork.

So from the base folder of your local fork, use the command `git branch comments` to create the `comments` branch and use `git checkout comments` to switch to it. From this branch, you are free to fill the codebase with your own comments, and whenever you want use `git checkout master` to switch back to the comment-free, 'clean' codebase.

Something else that I do is mark out my own comments from the existing comments with 'tags'. By doing this I can spot at a glance which comments are my own, and also use [regex](https://en.wikipedia.org/wiki/Regular_expression) to pull out my comments from the source code bulk. For example:

{% highlight python %}

// %^thundercomment^%
// This is a comment which could be talking about the code around it,
// or just maybe recording a thought on just the function below it.
// Notice it is delimited by a beginning and ending tag.
// %^endcomment^%

def Deserializer(stream_or_string, options):
    """
    Deserialize a stream or string of YAML data. <-- Here is existing function documentation
    """
    if isinstance(stream_or_string, bytes):
        stream_or_string = stream_or_string.decode('utf-8')
    if isinstance(stream_or_string, six.string_types):
        stream = StringIO(stream_or_string)
    else: // %^thundercomment^% <-- here is an inline source code comment. Also tagged for differentiation
        stream = stream_or_string
    try:
        for obj in PythonDeserializer(yaml.load(stream, Loader=SafeLoader), options):
            yield obj
    except GeneratorExit:
        raise
    except Exception as e:
        # Map to deserializer error
        six.reraise(DeserializationError, DeserializationError(e), sys.exc_info()[2])

// %^thundercomment^% Here is another comment in the source. You might find my tags to be
// a little long, but you can make yours shorter. Another I might use is ^%JIB^, followed by
// ^%BIJ^. %^endcomment^%

{% endhighlight %}

If I want to add some documentation that I intend to submit in a [pull-request](https://help.github.com/articles/about-pull-requests/), I may use a separate tag like `^%doc%^`.

You can quickly pull out comments that you've made and tagged like this using the following command on Linux.

 `cat -n example_file.py | sed -n /%^thundercomment^%/,/%^endcomment^%/p`

It's reasonably clear what this command is doing. `cat` is a common command to read contents of file and view them, and which contents will be output for viewing are being restricted using the stream editor `sed`. The `-n` flags are used to output line numbers, which are handy for seeing that comments being returned to you are not necessarily close together.

### 6. Working Through The Code

Ok so if you've faithfully tracked along with me, you are probably ready to get parts of the codebase running. I generally do one of two things. The first method is to jump into an IDE's debugger or another type of debugging tool (like [pdb](https://docs.python.org/2/library/pdb.html)) and set a breakpoint at an important 'jumping off point' in the code. An intelligently placed breakpoint will set you going through a part of the codebase revealing much about how that codebase works.

The second method is to try and break a part of the code in a calculated way. By reading through the code, your will form ideas about what the code is and what the code does. Challenge these ideas that you've formed by forming an expectation of what certain changes will do, and then break/manipulate/change the code to try and do that.

### 7. Another Pass

By now you chewed through much of the codebase, note-taking and tinkering. Go back to basics again, and read over the source code 'cover to cover'. You'll look on it with new eyes and be able see more into the detail and intricacies.

### 8. Lock Into Your Area Of Interest

This is the stuff you do once you have a solid understanding of the codebases subsystems. From the start, you may have found a particular part of the codebase interesting and wanted to contribute specifically in that area. Now you should be ready to drill into that area and build yourself into a position of confidence.

### And There We Go

That's how I'm reading large open-source codebases. I'll be hopefully updating this with more specific and practical tips in future, and will also modify the content if my approach changes to something I consider more effective. For now, thanks for reading.
