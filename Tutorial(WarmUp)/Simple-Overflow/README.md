# Description

_#Warmups_<br>
_#Easy_<br>

There was once a Sensei said : "Water will spill if the bucket is too full."<br>

Can you ***overflow the buffer bucket*** to get the flag? You can find the program and source code in our Web Shell<br>

navigate to the challenge folder : `cd challenges/simple_overflow`<br>
run the program : `./overflow`

## Solution

1. Navigate to the challenge folder.<br>
   `cd challenges/simple_overflow`
2. Examine the source code.<br>
   `cat overflow.c`
3. We noiced that if there's overflow happened, we will get the flag.
4. Execute the program and input a name that more than 24 characters.<br>
   `./overflow`
5. Get the flag.
