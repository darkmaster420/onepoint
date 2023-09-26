# OnePoint

A lightweight, multi-platform, multi-network disk file directory indexing (and management) tool.

Repo Link：https://github.com/darkmaster420/onepoint

## Tutorials

Link: tutorials/README.md

## Features

Lightweight, multi-platform, multi-network disk

## Supported cloud drives

- onedrive
  
  Official Site：https://office.com/
  
  There are many drives in office.
  For the sake of unification, they are all placed in this module, including international version, 21Vianet version, and shared link.
  You can complete the form according to the prompts during configuration.
  
- googledrive

  Official Site：http://drive.google.com/

  Limited by API, all downloads will be completed by local transfer.
  
- coding

  Official Site：https://coding.net/

  There are too few public API functions, and all functions are completed based on cookies.
  
- teambition

  Official Site：https://teambition.com/

  There is no public API.
  All functions are implemented through cookies.
  Cookies are not very stable.
  This part does not implement file management functions.
  
- node_fs

  Official Site：http://nodejs.org/

  Completed based on nodejs's own fs api, only used to mount local files

- alidrive

  Official Site：https://www.aliyundrive.com/drive/

  Access via refresh_token

## Local Deployment

### github beta version (2.0.0)

~~~
git clone https://github.com/darkmaster420/onepoint.git
cd onepoint && npm install

npm start
# pm2 lib/starters/node-http.js
~~~

## cloudflare Workers

Link：worker/README.md

## Demo

Demo is old and might not work
https://onepoint.onesrc.workers.dev/

## Release Notes

### 210620

zero dependencies,

Axios and cookie dependencies are removed, and the project can be packaged using the ncc tool, improving readability and simplicity.

You no longer need to enter a password to log in when you install it for the first time. You can customize the username, salt and password.

The cloudflare worker project packaging tool is completed using ncc instead.

### 210425

Added Alibaba cloud disk, supporting page turning and ID

Optimized the onedrive module, deleted the code function, and only retained refresh_token and share_url

Optimized the googledrive module, deleted the code function, only retained refresh_token, and supported custom client api

Deleted art-template and instead used art's compiled js file to generate html

System paging has been deleted, leaving only the paging function of the cloud disk module itself.

Fixed the bug of file download link expiration caused by cache

Optimized the w.w theme, which looks more harmonious. Thanks to naicfeng for providing the demo.

### 210413

Optimistic locking is added, which is effective when modifying the configuration to prevent multiple modifications.

Rewrite the front-end code of the management page to support multi-picture and multi-audio preview functions. It is highly recommended to update~

## Thanks to

[oneindex](https://github.com/donwa/oneindex)
[OneManager](https://github.com/qkqpttgf/OneManager-php)

## License

MIT