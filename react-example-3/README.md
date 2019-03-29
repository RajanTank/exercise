## Video Search App

It Will search video in youtube

In which **Youtube Api** is used to get youtube videos, refer [Youtube Api!](https://developers.google.com/youtube/v3/getting-started) for more information.


[Axios!](https://github.com/axios/axios) Library is used for getting response from youtube 
    
```
axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3',
      params: {
         part : 'snippet',
         maxResults: 5,
         key: KEY
   }
```
![Video Search](demo-image.png)