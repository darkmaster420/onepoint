## Deploy to CF Workers

### Create new worker
![image](https://github.com/darkmaster420/onepoint/assets/64340223/18f8e50d-1dcf-4745-bf5a-20318623f837)

Create Worker

![image](https://github.com/darkmaster420/onepoint/assets/64340223/1a5535dd-999d-4ce3-a7fe-7528e9a6239f)

Choose any name you want then click deploy

![image](https://github.com/darkmaster420/onepoint/assets/64340223/90f34022-ef81-41c8-b275-9317b11395c5)

Edit code

![image](https://github.com/darkmaster420/onepoint/assets/64340223/a990fe00-daa3-45d2-a679-a584c151ef4f)

Erase all of this

![image](https://github.com/darkmaster420/onepoint/assets/64340223/8ef94903-31c0-4f9a-bec9-c4181de7f68a)



### Code to Paste

https://github.com/darkmaster420/onepoint/blob/master/ncc/ncc_cf-worker.js

Raw file https://raw.githubusercontent.com/darkmaster420/onepoint/master/ncc/ncc_cf-worker.js

There is a lot of code and it may take some time to save, so don’t be impatient!

![image](https://github.com/darkmaster420/onepoint/assets/64340223/52a166b2-ffdc-4ea4-82e6-a2d070e35c8f)


### Now go to KV under workers & pages and create a new KV bucket with a random name.

![image](https://github.com/darkmaster420/onepoint/assets/64340223/f9767f9b-5e60-435d-b654-02e49834f8c9)
![image](https://github.com/darkmaster420/onepoint/assets/64340223/08b640bc-cb31-4d53-bb0a-e4e335f6f36e)
![image](https://github.com/darkmaster420/onepoint/assets/64340223/c1bfc5e7-b9d5-4c3f-8ac7-b296f37bc8fd)

Go back to your app in overview

![image](https://github.com/darkmaster420/onepoint/assets/64340223/99bf5ad9-cc21-4551-9ba3-b95461af1d46)


### Bind the KV bucket and set the variable name to OPCONFIG in your worker

Look for KV Namespace Bindings

![image](https://github.com/darkmaster420/onepoint/assets/64340223/5e08bee7-f06b-4f5e-9d6c-2a4a73bc36af)


### DEMO
Demo is old and might not work
https://onepoint.onesrc.workers.dev/


### DEV

If you need to modify the code, you can git clone and use ncc to package before and after modification.
