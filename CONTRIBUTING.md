CONTRIBUTION GUIDELINES
=======================

Thank you for considering contributing to **devoss.tech**! This guide will provide you with the necessary information and instructions to make the contribution process smooth and effective.

Overview
---

**devoss.tech** is an open-source project that aims to provide a collection of project guides, blogs, and documentation on various tech paradigms. By contributing to **devoss.tech**, you can help improve existing guides, add new project ideas, enhance documentation, and engage in the open-source community, fostering a better generation of programmers and tech geeks.

Types of Contributions
---

You can contribute to devoss.tech in the following ways:

*   **Documentation/Blog:** Submit blogs and documentations to help learners and share your knowledge.
*   **Code:** Submit bug fixes, implement new features, or improve existing functionality.
*   **Bug Reports:** Report bugs by creating detailed issue reports with clear steps to reproduce.

Requirements
---

To contribute to **devoss.tech**, you will need the following:

*   Github Account
*   Git
*   Node
*   NPM

Contribution Process
---

To contribute to **devoss.tech**, follow the steps below:

### Step 1: Fork the Repository

1.  Fork the [devoss repository](https://github.com/USKhokhar/devoss) to your GitHub account.

### Step 2: Clone the Repository

1.  Clone (or download) your forked repo to your local machine by running the following command in your terminal:
    
    
    ```bash
    git clone https://github.com/{YOUR_GITHUB_USERNAME}/devoss.git
    ```
    

### Step 3: Set Up and Install Dependencies

1.  Navigate to the `devoss` directory in your terminal:
    
    ```bash
    cd devoss
    ```
    
2.  Install all the required dependencies by running the following command:
    
    ```bash
    npm install
    ```
    

### Step 4: Create a New Branch

1.  Create a new branch for your contribution. It is recommended to use a separate branch for each new feature, bug fix, or contribution. Run the following command to create a new branch:
    
    ```bash
    git checkout -b my-branch-name
    ```
    
    Replace `my-branch-name` with a suitable branch name, such as `your-username` or `your-changes-or-contributions`.

### Step 5: Make Contributions

If you are contributing to the codebase or directly improving the UI or other features, make the desired changes and skip to step 6.

If you are contributing in the form of documentation and blogs, follow these steps and for a more detailed overview of contributing as posts, refer the [Getting Started with devoss](https://www.devoss.tech/posts/getting-started-with-devoss) post, which takes you to detailed, step-by-step procedure of adding/editing posts on devoss:

1.  Install the `devoss-cli` globally on your system by running the following command:
    
    ```bash
    npm install -g devoss-cli
    ```
    
2.  Once installed, run the following command in the `devoss` directory:
    
    ```bash
    npx devoss-contribute
    ```
    
    Answer the prompted questions to create the frontmatter for your markdown file.
    
3.  After running the command, a markdown file with the proper frontmatter will be created. Use your preferred code editor to start writing the content in the file.
    

### Step 6: Test Your Changes

1.  To test your changes locally, run the following command in the root directory of the project:
    
    ```bash
    npm run dev
    ```
    
    This will start the development server with your changes on `localhost:3000`. Verify all the changes you made and test other functionalities.

### Step 7: Commit and Push Your Changes

1.  Stage all your changes by running the following command in the root directory of the project:
    
    ```bash
    git add .
    ```
    
2.  Commit your changes with an appropriate commit message, similar to the branch name:
    
    ```bash
    git commit
    ```

    This will open your default editor (Vim, Nano, etc). We suggest you to be as descriptive about your commits as you can. Use proper heading and body for commits.
    
3.  Push your changes to your remote repository using the following command:

    ```bash
    git push -u origin my-branch-name
    ```
    
    Replace `my-branch-name` with the name of your branch.
    

### Step 8: Create a Pull Request

1.  Go to your repository on GitHub in the browser and click on "Compare and pull requests".
    
2.  Add a title and description to your pull request, explaining your changes and the purpose of your contribution.
    
3.  Submit the pull request and wait for it to be reviewed and merged.
    

Congratulations on your successful contribution towards open source and fostering a healthy learning environment in the tech community!

Miscellaneous
---

Remember to regularly sync your forked repository with the original repository to stay up to date with any changes made by others. To sync your fork, use the following command:

```bash
git remote add upstream https://github.com/USKhokhar/devoss.git 

git fetch upstream 

git checkout master 

git merge upstream/master
```
