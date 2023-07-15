---
title: Getting Started with devoss
author: USKhokhar
project_repo: https://github.com/USKhokhar/devoss
author_github: USKhokhar
level: Beginner
description: This guide takes you through contributing to devoss.tech and making your first open source contribution.
---

In order to get a complete overview of contributing to devoss.tech, I suggest you to read the [CONTRUBUTION GUIDELINES](https://github.com/USKhokhar/devoss/blob/master/CONTRIBUTING.md) before continuing with this post. This guide is specifically for contributing in form of posts.

In this, I will take you through creating a new post (this post 🙃).

### Setting Up Locally ⬇️
---

- Fork the [devoss repository](https://github.com/USKhokhar/devoss) to your GitHub account.

![Fork Image](https://i.imgur.com/ISX7B3x.png)

- Clone (or download) your forked repo to your local machine.

![Clone Image](https://i.imgur.com/URg6eku.png)
![Clone CLI Image](https://i.imgur.com/ImSi5ag.png)

> You can now open the devoss repository on your local machine.

- Open terminal in same path as the project, and run following commands⚛️:

```bash
# To move to the devoss directory
cd devoss

# To install all the required dependencies
npm install

# To run it on your local server
npm run dev
```

> Now you can access your app on localhost:3000

### Setting Up New Post
---

To set up a new post for contribution, devoss uses a Command Line for automating the entire process and making it easy for contributors.

- In order to create a new post, open a new terminal session in **devoss directory**. 

- In the new terminal session, run: 

```bash
npm install -g devoss-cli
```

- This will set up the devoss-cli locally, after that run: 

```bash
npx devoss-contribute
```

- This will prompt you with certain questions regarding your project. Something like this: 

![CONTRIBUTION CLI](https://i.imgur.com/7TikXFD.png)

- Once you have filled all your prompts, your post file is created in the ```/post``` directory. Your terminal should look like this: 

![CONTRIBUTION CLI](https://i.imgur.com/OuumxWB.png)

### Finishing Up 🧹
---

Your post is created in a markdown file under ```/post``` directory. For example, if you gave your post a title of ```Example Post For Devoss```, your file will be ```/post/example-post-for-devoss.md```.

> If you are using VSCode, I will suggest you to use the shortcut <kbd>CTRL + P</kbd>, and then access your file.

The frontmatter of your markdown file is already managed by the responses given in the command line. (You can change the frontmatter accordingly, if needed).

This is how your file should look like:

![POST INTRO](https://i.imgur.com/wf64Rm8.png)

> Notice the file path in the above image.

Now you can simply start adding the content of your post/guide. You can see the changes being reflected in localhost:3000


---

Once you are done with post setup, review everything and you are good-to-go to make contribution!

Read the [CONTRUBUTION GUIDELINES](https://github.com/USKhokhar/devoss/blob/master/CONTRIBUTING.md) for more details on contribution.

