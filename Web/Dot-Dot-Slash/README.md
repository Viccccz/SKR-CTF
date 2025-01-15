# Description

_#Web_<br>
_#Easy_<br>

My friend Godam made a static website called ***Dot-Dot-Slash***, he also provide the source code below. What could possibly go wrong?<br>

*Note: Please use the ***second link***, because first link uses reverse proxy so the solution is not intended for first link.*

## Solution

Initially, we examined the page source and used inspect mode to search for any valuable cookies or information. Unfortunately, we found nothing.

Next, I tried a different approach by directly interacting with the directories and folders instead of using the command prompt. While exploring the provided zipped folder, I executed a file named setup.sh, which generated an output file called flag.txt. However, the flag.txt file did not contain the flag.

![image](https://github.com/user-attachments/assets/dcfa72f7-c84b-4005-a61d-dc00af53a1a8)<br>
**The output for flag.txt.*

After conducting some research on past CTF challenges online, I discovered that "Dot Dot Slash" is another term for a directory traversal attack. To exploit the site using this method, we need to navigate beyond the current directories to locate the flag.txt file.

> [!NOTE]
> Extra information for [Dot Dot Slash](https://brightsec.com/blog/directory-traversal/#:~:text=Simple%20Directory%20Traversal%20(dot%2Ddot%2Dslash%20Attack),-The%20simplest%20example&text=If%20the%20application%20does%20not,access%20the%20protected%20passwd%20file.).

Then, I attempted to use `../` in the site path to traverse directories and retrieve the flag file. However, this approach failed, likely due to input sanitization. To bypass this restriction and successfully perform the directory traversal attack, I used the encoded slash `..%2f`, which allowed me to navigate the site path and bypass the web system’s defenses.

![image](https://github.com/user-attachments/assets/160dae5b-f880-4b3d-861d-4534d90f47bd)<br>
**Th flag is shown.*
