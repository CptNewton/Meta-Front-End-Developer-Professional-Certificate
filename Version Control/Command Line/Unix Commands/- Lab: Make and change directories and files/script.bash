mkdir lab
cd lab
touch file1.txt
mkdir dir1
mv file1.txt dir1/
touch file2.txt
mkdir -p dir2/dir3
mv file2.txt dir2/dir3
cd dir2
touch file3.txt
mv file3.txt ../
cd ..
cd dir1
ls -l
cd ../dir2
ls -l 
cd dir3
ls -l
