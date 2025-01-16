# Description

_#Binary_<br>
_#Easy_<br>

Can you authenticate me ***without login***?  

You can find the program and source code in our Web Shell: `cd challenges/auth_me`  
Run the program: `./auth`

## Solution

First, we open the provided webshell and navigate to the auth_me folder using the command `cd challenges/auth_me`. Next, I executed the program by typing `./auth`.

![image](https://github.com/user-attachments/assets/ea35a568-9dca-458e-bdc7-55aeadd7abdb)<br>
**The output is displayed when entering the username in the program.*

I then tried a few inputs to observe the output. It appears that the program only displays the input without providing the flag or proceeding further. So, I navigated to the auth_me folder to check if any files existed.

![image](https://github.com/user-attachments/assets/2f782982-68d0-445e-93fa-f53bc50a4681)<br>
**Aside from the program file, there are two additional files.*

I then first open the flag.txt using the command `cat flag.txt` to get the flag, However, the permission is denied to access the flag.txt.

![image](https://github.com/user-attachments/assets/e8d700cc-9691-4844-83a0-4d988677f2d2)<br>
**Permission is denied to access flag.txt.*

I attempted to read the auth.c file again using the command `cat auth.c` to examine the program's structure. Upon reviewing the source code, I noticed that the username field lacks input sanitization, and the flag size is set to 64. Based on the provided source code, obtaining the flag from flag.txt requires exploiting the system through a buffer overflow.

![image](https://github.com/user-attachments/assets/b9e5a25b-4f85-4340-a967-c2b1c5d3fdd7)<br>
**The source code.*

Therefore, I decided to perform a buffer overflow by entering as many a as possible into the username field. As a result, the output displayed a message stating 'segmentation fault,' indicating an issue with memory allocation and that the previous input was not processed. At this point, we can attempt a second input to further exploit the buffer overflow and retrieve the flag.
