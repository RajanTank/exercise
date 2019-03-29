import axios from 'axios';


const KEY ='AIzaSyBmctwBX84fmmweUPTCeiCJ87omLGGWB30';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part : 'snippet',
      maxResults: 5,
      key: KEY
   }

});