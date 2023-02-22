
const URL = '/api/fpac-design-system-navigation.json';
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

export const navigationService = {
  
  isLoaded: false,

  getNavigation: async (callback) => {
    const response = await fetch(REQ);
    try{
      let res = await response.json();
      navigationService.requestNext( res, callback, 'getNavigation' ); 
    } catch(e){
      console.log( 'getNavigation' + ' Navigation SERVICE ERROR', e)
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



/////// FAKE API - NOT BEING USED ///////
/////// KEEP FOR EXAMPLE ///////
const apiData = {
  main: [
    {
      uid: "home-id",
      label: "Home",
      path: "/",
      hasChild: "false",
      columnClass: ""
    },
    {
      uid: "users-id",
      label: "Users Demo",
      path: "/users",
      hasChild: "false",
      columnClass: ""
    },
    {
      uid: "website-id",
      label: "Web Site Example",
      path: "/web",
      hasChild: "false",
      columnClass: ""
    },
    {
      uid: "component-demos-id",
      label: "Component Demos",
      path: "/demos",
      hasChild: "true",
      columnClass: "fds-nav-global__list-item--multi-column",
      hasHeaders: "false",
      children: [
        {
          uid: "modal-growl-id",
          label: "Modal and Growl",
          path: "/demos/modal-growl",
          hasChild: "false",
        },
        {
          uid: "table-pagination-id",
          label: "Table and Pagination",
          path: "/demos/table",
          hasChild: "false",
        },
        {
          uid: "stepped-demo-id",
          label: "Stepped Demo",
          path: "/demos/stepped",
          hasChild: "false",
        },
        {
          uid: "timeline-id",
          label: "Timeline",
          path: "/demos/timeline",
          hasChild: "false",
        },
        {
          uid: "search-demo-id",
          label: "Search wtih RxJS",
          path: "/demos/search",
          hasChild: "false",
        },
        {
          uid: "investment-placement",
          label: "Investment Placement",
          path: "/reports/investment-placement",
          hasChild: "false",
        },
        
        {
          uid: "performance-management-id",
          label: "Performance Management",
          path: "/reports/performance-management",
          hasChild: "false",
        },
        {
          uid: "budgetary-max-funding-id",
          label: "Budgetary Max Funding",
          path: "/reports/budgetary-max-funding",
          hasChild: "false",
        },
        {
          uid: "premium-exposure-drive-id",
          label: "Premium Exposure Drive",
          path: "/reports/premium-exposure-drive",
          hasChild: "false",
        },
        {
          uid: "technology-plans-id",
          label: "Technology Plans",
          path: "/reports/technology-plans",
          hasChild: "false",
        },
        {
          uid: "unilateral-placement-shift-id",
          label: "Unilateral Placement Shift",
          path: "/reports/unilateral-placement-shift",
          hasChild: "false",
        },
        {
          uid: "investment-placements-id",
          label: "Investment Placements",
          path: "/reports/investment-placements",
          hasChild: "false",
        },
        {
          uid: "burden-investments-id",
          label: "Burden Investments",
          path: "/reports/burder-investments",
          hasChild: "false",
        },
        {
          uid: "performance-managements-id",
          label: "Performance Managements",
          path: "/reports/performance-managements",
          hasChild: "false",
        },
        {
          uid: "budgetary-max-fundings-id",
          label: "Budgetary Max Fundings",
          path: "/reports/budgetary-max-fundings",
          hasChild: "false",
        },
        {
          uid: "premium-exposure-drives-id",
          label: "Premium Exposure Drives",
          path: "/reports/premium-exposure-drives",
          hasChild: "false",
        },
        {
          uid: "technology-planner-id",
          label: "Technology Planner",
          path: "/reports/technology-planner",
          hasChild: "false",
        },
        {
          uid: "unilateral-placement-shifts-id",
          label: "Unilateral Placement Shifts",
          path: "/reports/unilateral-placement-shifts",
          hasChild: "false",
        },
      ],
    },
    {
      uid: "reports-id",
      label: "Reports",
      path: "/reports",
      hasChild: "true",
      columnClass: "fds-nav-global__list-item--multi-column",
      hasHeaders: "true",
      children: [
        {
          uid: "reports-overview-id",
          header: "Cyclical Purchasing",
          group: [
            {
              uid: "cyclical-purchasing-overview-id",
              label: "Overview",
              path: "/reports/overview",
              hasChild: "false",
            },
            {
              uid: "rps-investment-placement-id",
              label: "Investment Placement",
              path: "/reports/investment-placement",
              hasChild: "false",
            },
            {
              uid: "cp-premium-exposure-drive-id",
              label: "Premium Exposure Drive",
              path: "/transaction/premium-exposure-drive",
              hasChild: "false",
            },
          ]
        },
        {
          uid: "overage-charge-stream-id",
          header: "Overage Charge Stream",
          group: [
            {
              uid: "overage-charge-stream-overview-id",
              label: "Overview",
              path: "/transaction/ocs-overview",
              hasChild: "false",
            },
            {
              uid: "ocs-budgetary-max-funding-id",
              label: "Reporting Configuration",
              path: "/transaction/ocs-reporting-configuration",
              hasChild: "false",
            },
            {
              uid: "ocs-investment-placement-id",
              label: "Investment Placement",
              path: "/transaction/ocs-investment-placement",
              hasChild: "false",
            },
            {
              uid: "ocs-burden-investment-id",
              label: "Burden Investment",
              path: "/transaction/ocs-burden-investment",
              hasChild: "false",
            },
            {
              uid: "ocs-performance-management-id",
              label: "Performance Management",
              path: "/transaction/ocs-performance-management",
              hasChild: "false",
            },
            {
              uid: "ocs-drive-texture-mechanics-id",
              label: "Drive Texture Mechanics",
              path: "/transaction/ocs-drive-textrure-mechanics",
              hasChild: "false",
            },
          ]
        },
        {
          uid: "fiscal-unit-development",
          header: "Fiscal Unit Development",
          group: [
            {
              uid: "fud-cyclical-purchasing-overview-id",
              label: "fud-Overview",
              path: "/transaction/fud-overview",
              hasChild: "false",
            },
            {
              uid: "fud-budgetary-max-funding-id",
              label: "Budgetary Max Funding",
              path: "/transaction/fud-budgetary-max-funding",
              hasChild: "false",
            },
            {
              uid: "fud-premium-exposure-drive-id",
              label: "Premium Exposure Drive",
              path: "/transaction/fud-premium-exposure-drive",
              hasChild: "false",
            },
            {
              uid: "fud-technology-plans-id",
              label: "Technology Plans",
              path: "/transaction/fud-technology-plans",
              hasChild: "false",
            },
          ]
        },
        {
          uid: "lorem-ipsum-dolor-id",
          header: "Lorem Ipsum Dolor",
          group: [
            {
              uid: "lorem-ipsum-dolor-id",
              label: "Overview",
              path: "/transaction/lid-overview",
              hasChild: "false",
            },
            {
              uid: "lid-budgetary-max-funding-id",
              label: "Budgetary Max Funding",
              path: "/transaction/lid-budgetary-max-funding",
              hasChild: "false",
            },
            {
              uid: "lid-premium-exposure-drive-id",
              label: "Premium Exposure Drive",
              path: "/transaction/lid-premium-exposure-drive",
              hasChild: "false",
            },
          ]
        }
      ]
    },
    {
      uid: "settings-id",
      label: "Settings",
      path: "/settings",
      hasChild: "false",
      columnClass: ""
    }
  ],
  side: [
    {
      uid: "help-id",
      label: "Help",
      path: "/help",
      hasChild: "false",
      columnClass: "",
      icon: {
        class: "fds-icon fds-icon--size-1",
        path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
      }
    }
  ]
};