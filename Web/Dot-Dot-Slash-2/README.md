# Description

_#Web_<br>
_#Easy_<br>

Looks like someone found a bug that can read the server's files...<br>
My friend already fix this, is secure now! 🙂<br>

*Note: Please use the ***second link***, because first link uses reverse proxy so the solution is not intended for first link.*

## Solution

At first glance, I recognized that the challenge revolved around a directory traversal attack. After reviewing the provided hint, I realized that a nested Dot Dot Slash attack was required to retrieve the flag from the site.

Understanding the structure of the source code was crucial, so I navigated to a file named main.py. There, I found a statement explaining the path sanitization process. The code indicated that any ../ found in the site path input would be sanitized and replaced with an empty string ("").

![image](https://github.com/user-attachments/assets/ffb8b5a9-cf6a-4c5c-b529-17773b4ac26b)<br>
**The source code line.*

To bypass this restriction and exploit the site, we could use `....//` to retrieve the flag from the server. When processed, the site would interpret it as `.. /` and effectively ignore the additional `../`. This approach allowed us to achieve the desired directory traversal and access the flag.

![image](https://github.com/user-attachments/assets/cca0d1f6-9434-4840-bdf5-16e55de674e9)<br>
**The flag obtained.*
