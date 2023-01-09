# Exercise: Make and change directories and files

## Tasks:

1. Open Terminal in your VS code editor.

2. Type the command `mkdir lab` and press Enter.

3. Change to the lab directory by typing `cd lab` and pressing Enter.

4. Type the command `touch file1.txt` and press Enter to create a file named file1.txt.

5. Type the command `mkdir dir1` and press Enter.

6. Type the command `mv file1.txt dir1/` and press Enter to move file1.txt to the dir1 directory.

7. Type the command `touch file2.txt` and press Enter to create a file named file2.txt

8. Type the command `mkdir -p dir2/dir3` and press Enter. We're using the `-p` flag to create the parent directories if they do not exist. In this case it will create the dir2 directory and then create the dir3 directory inside of dir2.

9. Type the command `mv file2.txt dir2/dir3/` and press Enter to move file2.txt to the dir3 directory.

10. Change to the dir2 directory by typing `cd dir2`.

11. Type the command `touch file3.txt` and press Enter to create a file named file3.txt

12. Type the command `mv file3.txt ../` and press Enter to move file3.txt to the lab directory.

13. Type the command `cd ..` and press Enter to navigate back to the lab directory.

14. Type the command `cd dir1` and press Enter.

15. Type the command `ls -l` and press Enter. Note how many files and directories are in the dir1 directory.

16. Type the command `cd ../dir2` and press Enter.

17. Type the command `ls -l` and press Enter. Note how many files and directories are in the dir2 directory.

18. Type the command `cd dir3` and press Enter.

19. Type the command `ls -l` and press Enter. Note how many files and directories are in the dir3 directory.
