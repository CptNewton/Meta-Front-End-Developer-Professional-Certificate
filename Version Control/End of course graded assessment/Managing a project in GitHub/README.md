# Instructions

**Step 1**: Open the Terminal and authenticate using gh (Github CLI):

```
gh auth login
```

**Step 2**: Create an authentication token in your Github account with specified scopes given in the terminal. Copy it from Github and paste it. Verify authorization was successful.

**Step 3**: Visit the class repo and click the fork button.

**Step 4**: Clone the repository using the GitHub CLI command.

```
gh repo clone <YOUR USERNAME>/<REPOSITORY-NAME>
```

**Step 5**: Move to the repo directory by using "cd <REPOSITORY-NAME>"

**Step 6**: Open the file named `class.txt`.

**Step 7**: Replace the content of the file with the contents below.

```
Crimson
Orange
Blue
Cyan
Yellow
Charcoal
Khaki
Coral
Silver
Fuchsia
Purple
Brown
Red
```

**Step 8**: Save the file.

**Step 9**: Using the diff command, note which lines were deleted and which lines were added.

```
git diff
```

**Step 10**: Add the file and commit it to the repository with a message.

```
git add class.txt
git commit
```

**Step 11**: Push the commit to the forked repository.

```
git push
```
