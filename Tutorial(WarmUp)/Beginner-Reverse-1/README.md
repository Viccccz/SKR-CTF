# Description

_#Warmups_<br>
_#Beginner_<br>

Warm Up for Reverse Engineering Category: Find the password to get the flag!<br>
The c source file is [here](../beginner.c).

## Solution

1. Open and examine the source code.
2. The password is somewhere in the source code.<br>

   ![image](https://github.com/user-attachments/assets/b93edd98-15ef-4870-b40a-ea201d81368a)

3. Compile the c file and execute it.<br>
   `gcc beginner.c -o output` and `./output`

> [!TIP]
> 1. To install gcc in kali: `sudo apt update`, `sudo apt install gcc`<br>
> 2. To compile source code: `gcc program.c -o output`<br>
>    - -o: filename to output
   
4. Input the password and get the flag.
