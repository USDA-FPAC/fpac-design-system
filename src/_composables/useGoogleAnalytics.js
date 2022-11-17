
export function useGoogleAnalytics() {

  let trackerName = 'Generic';
  let id = '';
  let onProduction = true;
  let trackingScroll = false;
  let currentScrollPercent = 0;
  let io = {};
  let headerList = [];

  const setTrackerName = ( str ) => {
    trackerName = str;
  }

  const getTrackerName = () =>{
    return trackerName;
  }

  const trackAction = (trackerName, action, label) =>{
    sendToGA(action, trackerName, label);
  }

  const trackScrollDepth = (trackerName, perc) =>{
    sendToGA('Scroll Percent', trackerName, perc);
  }

  const  trackViewport = (elem) =>{
    let target = elem[0].target;
    let label = target.textContent
    if(!headerList.includes(label)){
       headerList.push(label);
       sendToGA('Scroll', 'Viewed Content', getPageName() + ' - ' + label)
    }
  }

  const startScrollTracking = () => {

    let options = { threshhold: 0.75 };
    io = new IntersectionObserver( trackViewport, options );
    let h2s = document.getElementsByTagName('h2');
    if(h2s.length>0){
      io.POLL_INTERVAL = 300; //milliseconds
      for(let elem of h2s){
        io.observe(elem)
      }
    }
  }

  /*
    Get current browser viewpane heigtht
  */
  const getWindowHeight = () => {
    return window.innerHeight || 
      document.documentElement.clientHeight ||
      document.body.clientHeight || 0;
  }
  
  /*
    Get current absolute window scroll position
  */
  const getWindowYScroll = () => {
    return window.pageYOffset || 
      document.body.scrollTop ||
      document.documentElement.scrollTop || 0;
  }
  
  /*
    Get current absolute document height
  */
  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight || 0, 
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0, 
      document.documentElement.offsetHeight || 0,
      document.body.clientHeight || 0, 
      document.documentElement.clientHeight || 0
    );
  }

  const trackReturnToTop = () => {
    sendToGA('Return To Top', 'Viewed Content');
  }

  const getPageName = () => {
    let pageName = window.location.href.split('fpac-design-system/')[1];
    if(pageName == 'index.html' || pageName == '') pageName = 'home';
    return pageName;
  }

  const sendToGA = (typ, cat='', lab='') => {
    if( checkOnProd() ){
      let eventObject = {};
      if(cat!='') eventObject['event_category'] = cat;
      if(lab!='') eventObject['event_label'] = lab;
      gtag('event', typ, eventObject);
      console.log('PROD GA TRACKING: ' + typ + " | " + cat + " | " + lab)
      //gtag('event', typ, { 'event_category': cat, 'event_label': lab });
    } else {
      console.log('DEV GA TRACKING: ' + typ + " | " + cat + " | " + lab)
    }
  }

  const checkOnProd = () => {
    return ((window.location.href.indexOf('localhost:') > -1) || (window.location.href.indexOf('127.0.0.1:') > -1)) ? false : true;
  }
  
  const init = (gaId) => {
    id = gaId;
    onProduction = ((window.location.href.indexOf('localhost:') > -1) || (window.location.href.indexOf('127.0.0.1:') > -1)) ? false : true;
  }

  return {
    init,
    sendToGA,
    setTrackerName,
    getTrackerName,
    trackAction,
    trackScrollDepth,
    startScrollTracking,
    trackReturnToTop,
    getPageName,
  }
}