---
title: Getting Started with devoss
author: USKhokhar
project_repo: https://github.com/USKhokhar/devoss
author_github: USKhokhar
level: Beginner
description: This guide takes you through contributing to devoss.tech and making your first open source contribution.
---

Creating a New Post
=================================================

> Before proceeding with this post, I recommend reading the [CONTRIBUTION GUIDELINES](https://github.com/USKhokhar/devoss/blob/master/CONTRIBUTING.md) to get a complete overview of contributing to devoss.tech. This guide is specifically for contributing in the form of posts.


Setting Up Locally ⬇️
---------------------

To contribute to devoss.tech, follow these steps to set up the project on your local machine:

1.  Fork the [devoss repository](https://github.com/USKhokhar/devoss) to your GitHub account.

![Fork Image](https://i.imgur.com/ISX7B3x.png)

2.  Clone (or download) your forked repo to your local machine.

```
git clone https://github.com/{YOUR_GITHUB_USERNAME}/devoss.git
``` 

> You can now open the devoss repository on your local machine.

3.  Open the terminal in the same path as the project, and run the following commands⚛️:

```
# Move to the devoss directory 
cd devoss  

# Install all the required dependencies 
npm install  

# Run the project on your local server 
npm run dev
```

Now you can access your app at [localhost:3000](http://localhost:3000).

Setting Up New Post
-------------------

To add a new post to devoss.tech, it is recommended to first create an issue. Follow these steps:

1.  Go to the issues section of the devoss repository:

![ISSUE](https://i.imgur.com/Dy8SJvd.png)

2.  Choose the **ADD POST** issue, and fill out the details as asked:

![ADD POST](https://i.imgur.com/BkLqxQC.png)

![ISSUE FORM](https://i.imgur.com/gp2PpHZ.png)

3.  After creating the issue, you will be assigned to it, and then you can continue with the following steps to add your post.
    
4.  To set up a new post for contribution, devoss uses a Command Line Interface (CLI) to automate the entire process and make it easy for contributors.
    
5.  In order to create a new post, open a new terminal session in the **devoss directory**.
    
6.  In the new terminal session, run:
    

```
npm install -g devoss-cli
```

This will set up the devoss-cli locally. After that, run:

```
npx devoss-contribute
``` 

This will prompt you with certain questions regarding your post. Something like this:

![CONTRIBUTION CLI](https://i.imgur.com/7TikXFD.png)

7.  Once you have filled in all the prompts, your post file will be created in the `/post` directory. Your terminal should look like this:

![CONTRIBUTION CLI](https://i.imgur.com/OuumxWB.png)

Finishing Up 🧹
---------------

Your post is now created in a markdown file under the `/post` directory. For example, if you gave your post the title of "Example Post For Devoss," your file will be /post/example-post-for-devoss.md`.

> If you are using VSCode, I suggest using the shortcut <kbd>CTRL + P</kbd> to access your file.

The frontmatter of your markdown file is already managed by the responses given in the command line. You can change the frontmatter accordingly if needed.

This is how your file should look like:

![POST INTRO](https://i.imgur.com/wf64Rm8.png)

Now you can simply start adding the content of your post/guide. You can see the changes being reflected at [localhost:3000](http://localhost:3000).

Once you are done with the post setup, review everything, and you are good-to-go to make your contribution!

For more details on contribution, read the [CONTRIBUTION GUIDELINES](https://github.com/USKhokhar/devoss/blob/master/CONTRIBUTING.md). Happy writing and contributing!