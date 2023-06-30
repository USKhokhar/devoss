# CONTRIBUTION GUIDELINES
---

Thank you for considering contributing to **devoss.tech**! This guide will provide you with the necessary information and instructions to make the contribution process smooth and effective.

### Overview
---

**devoss.tech** is an open-source project that aims to provide a collection of project guides, blogs and documentation on various tech paradigms. What makes blogging and writing documentations on **devoss.tech** different than other major platforms is that every blog you submit is your contribution to open-source. devoss.tech makes it extremely simple and easy for beginners to get started with open source.

Not just that, by contributing, you can help improve existing guides, add new project ideas, enhance documentation, and engage in the open-source community. All in all, contributing towards fostering a better generation of programmers and tech geeks!

### Types of contributions
---

You can contribute to devoss.tech in following ways: 
- **Documentation/Blog:** If you are someone who is just getting started with open-source, or someone who loves to document their projects and knowledge, then we highly ecourage you to submit your blogs and documentations to devoss.tech to help learners!
- **Code:** Submitting bug fixes, implementing new features, or improving existing functionality.
- **Bug Reports:** Reporting bugs by creating detailed issue reports with clear steps to reproduce.

### Requirements
---

- Git
- Node
- Npm

*yup, that's it* ✌ 


### Contribution Process
---

*to get a better idea of contribution to devoss.tech we recommend you to read [Getting Started with devoss](https://www.devoss.tech/posts/getting-started-with-devoss)*

#### Step 1 : Forking 🍴 

- Fork the [devoss repository](https://github.com/USKhokhar/devoss) to your GitHub account.

#### Step 2 : Cloning 👬

- Clone (or download) your forked repo to your local machine. In your terminal, run:

```bash
git clone https://github.com/{YOUR_GITHUB_USERNAME}/devoss.git 
```

- The above command will clone the repository in your local machine. It will create a **devoss** directory.

### Step 3 : Setting Up & Installing Deps ⚛

- Since devoss is built using [Nextjs](https://nextjs.org), [Tailwind](https://tailwindcss.com/) and [Shadcn/ui](https://ui.shadcn.com), you need to install and setup all the dependencies which are required to run devoss locally. Luckily, it's just a matter of two lines of code. In your terminal, run:

```bash
# To move to the devoss directory
cd devoss

# To install all the required dependencies
npm install
```

### Step 4 : Starting out
- It is best practice to create a separate branch for each new feature, bug fix, or contribution. This keeps the changes isolated and makes it easier to manage and review the code.

- To create a new branch, run:

```bash
git checkout -b my-branch-name
```

> replace `my-branch-name` which a suitable branch name. Our suggestion would be something like `your_username --> your-changes-or-contributions`

### Step 5 : Contributing ⚒

- If you are someone who is contributing to the codebase, or directly improving the UI or other features. Then you can do those changes accordingly and skip this step and go directly to step 5. (After doing changes, of course).

- If you are contributing in form of documentation and blog, then follow the following steps carefully. 

> devoss has its own CLI tool to automate your task for writing down the frontmatter of your markdown file. It does so to make your contributing process easier so that you can focus more on the content of your document.

- In your terminal, run:


```bash
npm install -g devoss-cli 
```
> Installing the cli globally is a one-time process, unless there are some new updates to it. If there are no updates

- Once you install the devoss-cli globally on your system, you can run the following command: 

```bash
npx devoss-contribute
```

> Make sure you run the `devoss-contribute` command in the `devoss` directory.

- After running the contribution command, you will be prompted with certain questions, answer them correctly.

> For more detailed structure of contribution process,read [Getting Started with devoss](https://www.devoss.tech/posts/getting-started-with-devoss)

- Once you are done answering, you should be prompted with a success message in green text. If yes, then that means your file/doc has been successfully created that too with proper front matter. 

- Now you can start writing your content in your markdown file. You can use shortcuts of your code editor to find your file with ease. For example, if you are using VScode, then after successfully running the command, press  <kbd>CTRL</kbd>  <kbd>+</kbd>  <kbd>P</kbd> and search your file by the title you gave it.

### Step 6 : Almost done 🛫 

- Once you are done with implementing all the desired changes, test them locally by running:

```bash
npm run dev
``` 

- This will start the dev server with your changes on `localhost:3000`. Check all the changes you made, and all other functionalities.

> Also run `npm run build` in order to test any other errors which might come during deployment.

- Once you are done checking everything, it is time to get your code to the main codebase. And the first step towards that is staging all your changes. In the root directory of the project, run:

```bash
# stage all your changes 
git add .

# commit your changes with an appropriate commit message, similar to the branch name

git commit -m "your-commit-message"

```

- Once all your changes are staged and committed, it is time to push your work to your remote repository. To do so, run:

```bash
# Push the changes to your branch
git push -u origin my-branch-name 
```

### Step 7 : Finishing up 💅

- Finally, go to your repository in the browser and click on `compare and pull requests. Then add a title and description to your pull request that explains your precious effort.

- A pull request allows you to propose your changes to the original repository. It initiates a discussion and review process before merging the changes.

> Provide a descriptive title and detailed description of your changes.

- Submit the pull request and wait for it to get approved and merged.

Once that's done... Congratulations on your successful contribution towards open-source and fostering a healthy learning environment in the tech community.

---
### MISC.

Remember to regularly sync your forked repository with the original repository to stay up to date with any changes made by others. To sync your fork, use the following command:

```bash
git remote add upstream https://github.com/USKhokhar/devoss.git
git fetch upstream
git checkout master
git merge upstream/master
```