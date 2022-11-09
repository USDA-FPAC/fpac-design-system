import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';

export function useSelectionControls() {

  const getStates = () => {
    let states = [
      {
        val: 0,
        label: 'Select a state',
        isDisabled: true,
        isSelected: true
      },
      {
        val: '06',
        label: 'California'
      },
      {
        val: '12',
        label: 'Florida'
      },
      {
        val: '45',
        label: 'South Carolina'
      },
      {
        val: '46',
        label: 'South Dakota'
      },
      {
        val: '53',
        label: 'Washington'
      },
      {
        val: '01',
        label: 'Alabama'
      },
      {
        val: '02',
        label: 'Alaska'
      },
      {
        val: '60',
        label: 'American Samoa'
      },
      {
        val: '04',
        label: 'Arizona'
      },
      {
        val: '05',
        label: 'Arkansas'
      },
      {
        val: '08',
        label: 'Colorado'
      },
      {
        val: '09',
        label: 'Connecticut'
      },
      {
        val: '10',
        label: 'Delaware'
      },
      {
        val: '11',
        label: 'District of Columbia'
      },
      {
        val: '64',
        label: 'Federated States of Micronesia'
      },
      {
        val: '13',
        label: 'Georgia'
      },
      {
        val: '14',
        label: 'Guam'
      },
      {
        val: '15',
        label: 'Hawaii'
      },
      {
        val: '16',
        label: 'Idaho'
      },
      {
        val: '17',
        label: 'Illinois'
      },
      {
        val: '18',
        label: 'Indiana'
      },
      {
        val: '19',
        label: 'Iowa'
      },
      {
        val: '20',
        label: 'Kansas'
      },
      {
        val: '21',
        label: 'Kentucky'
      },
      {
        val: '22',
        label: 'Louisiana'
      },
      {
        val: '23',
        label: 'Maine'
      },
      {
        val: '24',
        label: 'Maryland'
      },
      {
        val: '25',
        label: 'Massachusetts'
      },
      {
        val: '26',
        label: 'Michigan'
      },
      {
        val: '27',
        label: 'Minnesota'
      },
      {
        val: '28',
        label: 'Mississippi'
      },
      {
        val: '29',
        label: 'Missouri'
      },
      {
        val: '30',
        label: 'Montana'
      },
      {
        val: '31',
        label: 'Nebraska'
      },
      {
        val: '32',
        label: 'Nevada'
      },
      {
        val: '33',
        label: 'New Hampshire'
      },
      {
        val: '34',
        label: 'New Jersey'
      },
      {
        val: '35',
        label: 'New Mexico'
      },
      {
        val: '36',
        label: 'New York'
      },
      {
        val: '37',
        label: 'North Carolina'
      },
      {
        val: '38',
        label: 'North Dakota'
      },
      {
        val: '69',
        label: 'Northern Mariana Islands'
      },
      {
        val: '39',
        label: 'Ohio'
      },
      {
        val: '40',
        label: 'Oklahoma'
      },
      {
        val: '41',
        label: 'Oregon'
      },
      {
        val: '42',
        label: 'Pennsylvania'
      },
      {
        val: '72',
        label: 'Puerto Rico'
      },
      {
        val: '44',
        label: 'Rhode Island'
      },
      {
        val: '47',
        label: 'Tennessee'
      },
      {
        val: '48',
        label: 'Texas'
      },
      {
        val: '49',
        label: 'Utah'
      },
      {
        val: '50',
        label: 'Vermont'
      },
      {
        val: '52',
        label: 'Virgin Islands of the U.S.'
      },
      {
        val: '51',
        label: 'Virginia'
      },
      {
        val: '54',
        label: 'West Virginia'
      },
      {
        val: '55',
        label: 'Wisconsin'
      },
      {
        val: '56',
        label: 'Wyoming'
      }
    ];
    states.forEach((o)=>{
      o.name = "statesGroup";
      o.id = uuidv4()
    })

    return states;
  }

  const getCounties = () => {
    let counties = [
      {
        val: 0,
        label: 'Select a county',
        isDisabled: true,
        isSelected: true
      },
      {
        val: '043',
        label: 'Mariposa (A)'
      },
      {
        val: '047',
        label: 'Merced (A)'
      },
      {
        val: '001',
        label: 'Alameda'
      },
      {
        val: '003',
        label: 'Alpine'
      },
      {
        val: '005',
        label: 'Amador'
      },
      {
        val: '007',
        label: 'Butte'
      },
      {
        val: '009',
        label: 'Calaveras'
      },
      {
        val: '011',
        label: 'Colusa'
      },
      {
        val: '013',
        label: 'Contra Costa'
      },
      {
        val: '015',
        label: 'Del Norte'
      },
      {
        val: '017',
        label: 'El Dorado'
      },
      {
        val: '019',
        label: 'Fresno'
      },
      {
        val: '021',
        label: 'Glenn'
      },
      {
        val: '023',
        label: 'Humboldt'
      },
      {
        val: '025',
        label: 'Imperial'
      },
      {
        val: '027',
        label: 'Inyo'
      },
      {
        val: '029',
        label: 'Kern'
      },
      {
        val: '031',
        label: 'Kings'
      },
      {
        val: '033',
        label: 'Lake'
      },
      {
        val: '035',
        label: 'Lassen'
      },
      {
        val: '037',
        label: 'Los Angeles'
      },
      {
        val: '039',
        label: 'Madera'
      },
      {
        val: '041',
        label: 'Marin'
      },
      {
        val: '045',
        label: 'Mendocino'
      },
      {
        val: '049',
        label: 'Modoc'
      },
      {
        val: '051',
        label: 'Mono'
      },
      {
        val: '053',
        label: 'Monterey'
      },
      {
        val: '055',
        label: 'Napa'
      },
      {
        val: '057',
        label: 'Nevada'
      },
      {
        val: '059',
        label: 'Orange'
      },
      {
        val: '061',
        label: 'Placer'
      },
      {
        val: '063',
        label: 'Plumas'
      },
      {
        val: '065',
        label: 'Riverside'
      },
      {
        val: '067',
        label: 'Sacramento'
      },
      {
        val: '069',
        label: 'San Benito'
      },
      {
        val: '071',
        label: 'San Bernardino'
      },
      {
        val: '073',
        label: 'San Diego'
      },
      {
        val: '077',
        label: 'San Joaquin'
      },
      {
        val: '079',
        label: 'San Luis Obispo'
      },
      {
        val: '081',
        label: 'San Mateo'
      },
      {
        val: '083',
        label: 'Santa Barbara'
      },
      {
        val: '085',
        label: 'Santa Clara'
      },
      {
        val: '087',
        label: 'Santa Cruz'
      },
      {
        val: '089',
        label: 'Shasta'
      },
      {
        val: '091',
        label: 'Sierra'
      },
      {
        val: '093',
        label: 'Siskiyou'
      },
      {
        val: '095',
        label: 'Solano'
      },
      {
        val: '097',
        label: 'Sonoma'
      },
      {
        val: '099',
        label: 'Stanislaus'
      },
      {
        val: '101',
        label: 'Sutter'
      },
      {
        val: '103',
        label: 'Tehama'
      },
      {
        val: '105',
        label: 'Trinity'
      },
      {
        val: '107',
        label: 'Tulare'
      },
      {
        val: '109',
        label: 'Tuolumne'
      },
      {
        val: '111',
        label: 'Ventura'
      },
      {
        val: '113',
        label: 'Yolo'
      },
      {
        val: '115',
        label: 'Yuba'
      }
    ];
    counties.forEach((o)=>{
      o.name = "countiesGroup";
      o.id = uuidv4()
    })
    return counties;
  }

  return {
    getStates,
    getCounties
  }

}