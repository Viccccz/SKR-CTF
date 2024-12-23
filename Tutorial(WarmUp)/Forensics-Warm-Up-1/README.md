# Description

_#Warmups_<br>
_#Easy_<br>

Warm Up for Forensics Category: Can you retrieve this [zip file](../flag.zip) for me in order to determine your skill level?<br>

## Solution

1. Unzip the folder.<br>
   `unzip flag.zip`
2. Unzip again the file using 7zip.<br>
   `7z x flag.zip`

> [!TIP]
> To install the p7zip package, use `sudo apt update` and `sudo apt install p7zip-full p7zip-rar`

3. Open the image extracted and get the flag.<br>
   `eog flag.jpg`
