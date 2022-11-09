
const URL = '/api/fpac-design-system-content.json';
const HEADERS = new Headers();
HEADERS.append(
  "Authorization",
  "api_key"
);
const REQ = new Request( URL,
  {
    method: "GET",
    //HEADERS,
    mode: "cors",
    cache: "default"
  }
);

export const contentService = {
  
  isLoaded: false,

  getContent: async (callback) => {
    const response = await fetch(REQ);
    try{
      let res = await response.json();
      contentService.requestNext( res, callback, 'getContent' ); 
    } catch(e){
      console.log( 'getContent' + ' content SERVICE ERROR', e)
    }
  },

  requestNext: (res, callback, methodCalled) => {
    if(res.errors){
      callback({ status: false, errors: res.error });
    } else {
      callback({ status: true, data: res });
    }
  } 
}

