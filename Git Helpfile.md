# Git Helpfile 
_For dummy-dum-dums._

**The original repo exists on GitHub.**

## Pushing to your fork
1.  You fork the repo *[siddharthkoli/REPO_NAME]* on the website.
2.  Create a folder and `git init`
3.  `git clone [siddharthkoli/REPO_NAME]`

    At this stage, path should be *[New Folder/REPO_NAME/]*
4.  origin master gets automatically added by step (3) as origin *[siddharthkoli/REPO_NAME]*

    To cross-check, `git remote -v` origin should be added inside *REPO_NAME* and using same command outside would output blank.
5.  `git remote add upstream [REPO_OWNER/REPO_NAME]`
6.  Make changes.
7.  When ready to add, make sure your path is *[New Folder/REPO_NAME/]*. 

    **MAKE SURE STEPS (8, 9, 10) ARE STRICTLY EXECUTED IN THE ABOVE MENTIONED PATH.**

    **FAILURE TO DO SO WILL RESULT IN AN ERROR MESSAGE.**
8.  `git add .`
9.  `git commit -m`
10. `git push origin master` &nbsp; *(gets pushed to [siddharthkoli/REPO_NAME])*
11. Create a pull request on the website.

###################################################################

## To sync your fork with original repo.

1.  #### Make sure your path is *[New Folder/REPO_NAME/]*. 
    Cross-check `git remote -v` 
    
    Origin should be added inside *REPO_NAME* and using same command outside would output blank.
2.  `git fetch upstream` &nbsp;&nbsp;&nbsp; 
    There should be no new files added anywhere and no changes made by *REPO_OWNER* will be seen to any files.
3.  From the same directory as above &nbsp; **-** &nbsp; `git merge upstream/master`
4.  Changes should be properly seen.

################################################################### 

© Siddharth Koli <br>
*23:20 03-04-2020*

