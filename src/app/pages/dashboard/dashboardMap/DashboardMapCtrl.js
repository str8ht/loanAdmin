/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardMapCtrl', DashboardMapCtrl);

  /** @ngInject */
  function DashboardMapCtrl(baConfig, layoutPaths) {
    var layoutColors = baConfig.colors;
    var map = AmCharts.makeChart('amChartMap', {
      type: 'map',
      theme: 'Blur',
      zoomControl: { zoomControlEnabled: false, panControlEnabled: false },

      dataProvider: {
        map: 'usaLow',
        /*zoomLevel: 3.5,
        zoomLongitude: 10,
        zoomLatitude: 52, */
		colorSteps: 10,
        areas: [{
			/*{ title: 'Alabama', id: 'US-AK', color: layoutColors.primary, customData: '235', groupId: '1'},
			{ title: 'Alaska', id: 'US-AL', color: layoutColors.primary, customData: '1416', groupId: '2'},
			{ title: 'Arizona', id: 'US-AZ', color: layoutColors.primary, customData: '998', groupId: '1'},
			{ title: 'Arkansas', id: 'US-AR', color: layoutColors.primary, customData: '3149', groupId: '4'},
			{ title: 'California', id: 'US-CA', color: layoutColors.primary, customData: '17879', groupId: '18'},
			{ title: 'Colorado', id: 'US-CO', color: layoutColors.primary, customData: '2861', groupId: '3'},
			{ title: 'Connecticut', id: 'US-CT', color: layoutColors.primary, customData: '2038', groupId: '3'},
			{ title: 'Delaware', id: 'US-DE', color: layoutColors.primary, customData: '274', groupId: '1'},
			{ title: 'Florida', id: 'US-FL', color: layoutColors.primary, customData: '381', groupId: '1'},
			{ title: 'Georgia', id: 'US-GA', color: layoutColors.primary, customData: '9758', groupId: '10'},
			{ title: 'Hawaii', id: 'US-HI', color: layoutColors.primary, customData: '4261', groupId: '5'},
			{ title: 'Idaho', id: 'US-ID', color: layoutColors.primary, customData: '613', groupId: '1'},
			{ title: 'Illinois', id: 'US-IL', color: layoutColors.primary, customData: '501', groupId: '1'},
			{ title: 'Indiana', id: 'US-IN', color: layoutColors.primary, customData: '4963', groupId: '5'},
			{ title: 'Iowa', id: 'US-IA', color: layoutColors.primary, customData: '2128', groupId: '3'},
			{ title: 'Kansas', id: 'US-KS', color: layoutColors.primary, customData: '1036', groupId: '2'},
			{ title: 'Kentucky', id: 'US-KY', color: layoutColors.primary, customData: '1280', groupId: '2'},
			{ title: 'Louisiana', id: 'US-LA', color: layoutColors.primary, customData: '1328', groupId: '2'},
			{ title: 'Maine', id: 'US-ME', color: layoutColors.primary, customData: '2844', groupId: '3'},
			{ title: 'Maryland', id: 'US-MD', color: layoutColors.primary, customData: '3135', groupId: '4'},
			{ title: 'Massachusetts', id: 'US-MA', color: layoutColors.primary, customData: '386', groupId: '1'},
			{ title: 'Michigan', id: 'US-MI', color: layoutColors.primary, customData: '3249', groupId: '4'},
			{ title: 'Minnesota', id: 'US-MN', color: layoutColors.primary, customData: '2078', groupId: '3'},
			{ title: 'Mississippi', id: 'US-MS', color: layoutColors.primary, customData: '1985', groupId: '2'},
			{ title: 'Missouri', id: 'US-MO', color: layoutColors.primary, customData: '779', groupId: '1'},
			{ title: 'Montana', id: 'US-MT', color: layoutColors.primary, customData: '343', groupId: '1'},
			{ title: 'Nebraska', id: 'US-NE', color: layoutColors.primary, customData: '3483', groupId: '4'},
			{ title: 'Nevada', id: 'US-NV', color: layoutColors.primary, customData: '270', groupId: '1'},
			{ title: 'New Hampshire', id: 'US-NH', color: layoutColors.primary, customData: '642', groupId: '1'},
			{ title: 'New Jersey', id: 'US-NJ', color: layoutColors.primary, customData: '643', groupId: '1'},
			{ title: 'New Mexico', id: 'US-NM', color: layoutColors.primary, customData: '4711', groupId: '5'},
			{ title: 'New York', id: 'US-NY', color: layoutColors.primary, customData: '656', groupId: '1'},
			{ title: 'North Carolina', id: 'US-NC', color: layoutColors.primary, customData: '2006', groupId: '3'},
			{ title: 'North Dakota', id: 'US-ND', color: layoutColors.primary, customData: '10112', groupId: '11'},
			{ title: 'Ohio', id: 'US-OH', color: layoutColors.primary, customData: '4089', groupId: '5'},
			{ title: 'Oklahoma', id: 'US-OK', color: layoutColors.primary, customData: '1132', groupId: '2'},
			{ title: 'Oregon', id: 'US-OR', color: layoutColors.primary, customData: '1562', groupId: '2'},
			{ title: 'Pennsylvania', id: 'US-PA', color: layoutColors.primary, customData: '4141', groupId: '5'},
			{ title: 'Rhode Island', id: 'US-RI', color: layoutColors.primary, customData: '614', groupId: '1'},
			{ title: 'South Carolina', id: 'US-SC', color: layoutColors.primary, customData: '1692', groupId: '2'},
			{ title: 'South Dakota', id: 'US-SD', color: layoutColors.primary, customData: '275', groupId: '1'},
			{ title: 'Tennessee', id: 'US-TN', color: layoutColors.primary, customData: '2109', groupId: '3'},
			{ title: 'Texas', id: 'US-TX', color: layoutColors.primary, customData: '10508', groupId: '11'},
			{ title: 'Utah', id: 'US-UT', color: layoutColors.primary, customData: '851', groupId: '1'},
			{ title: 'Vermont', id: 'US-VT', color: layoutColors.primary, customData: '3364', groupId: '4'},
			{ title: 'Virginia', id: 'US-VA', color: layoutColors.primary, customData: '284', groupId: '1'},
			{ title: 'Washington', id: 'US-WA', color: layoutColors.primary, customData: '2719', groupId: '3'},
			{ title: 'West Virginia', id: 'US-WV', color: layoutColors.primary, customData: '1729', groupId: '2'},
			{ title: 'Wisconsin', id: 'US-WI', color: layoutColors.primary, customData: '681', groupId: '1'},
			{ title: 'Wyoming', id: 'US-WY', color: layoutColors.primary, customData: '241', groupId: '1'} */
			id: "US-AK",
			value: 235
			}, {
			id: "US-AL",
			value: 1416
			}, {
			id: "US-AZ",
			value: 998
			}, {
			id: "US-AR",
			value: 3149
			}, {
			id: "US-CA",
			value: 17879
			}, {
			id: "US-CO",
			value: 2861
			}, {
			id: "US-CT",
			value: 2038
			}, {
			id: "US-DE",
			value: 274
			}, {
			id: "US-FL",
			value: 381
			}, {
			id: "US-GA",
			value: 9758
			}, {
			id: "US-HI",
			value: 4261
			}, {
			id: "US-ID",
			value: 613
			}, {
			id: "US-IL",
			value: 501
			}, {
			id: "US-IN",
			value: 4963
			}, {
			id: "US-IA",
			value: 2128
			}, {
			id: "US-KS",
			value: 1036
			}, {
			id: "US-KY",
			value: 1280
			}, {
			id: "US-LA",
			value: 1328
			}, {
			id: "US-ME",
			value: 2844
			}, {
			id: "US-MD",
			value: 3135
			}, {
			id: "US-MA",
			value: 386
			}, {
			id: "US-MI",
			value: 3249
			}, {
			id: "US-MN",
			value: 2078
			}, {
			id: "US-MS",
			value: 1985
			}, {
			id: "US-MO",
			value: 779
			}, {
			id: "US-MT",
			value: 343
			}, {
			id: "US-NE",
			value: 3483
			}, {
			id: "US-NV",
			value: 270
			}, {
			id: "US-NH",
			value: 642
			}, {
			id: "US-NJ",
			value: 643
			}, {
			id: "US-NM",
			value: 4711
			}, {
			id: "US-NY",
			value: 656
			}, {
			id: "US-NC",
			value: 2006
			}, {
			id: "US-ND",
			value: 10112
			}, {
			id: "US-OH",
			value: 4089
			}, {
			id: "US-OK",
			value: 1132
			}, {
			id: "US-OR",
			value: 1562
			}, {
			id: "US-PA",
			value: 4141
			}, {
			id: "US-RI",
			value: 614
			}, {
			id: "US-SC",
			value: 1692
			}, {
			id: "US-SD",
			value: 275
			}, {
			id: "US-TN",
			value: 2109
			}, {
			id: "US-TX",
			value: 10508
			}, {
			id: "US-UT",
			value: 851
			}, {
			id: "US-VT",
			value: 3364
			}, {
			id: "US-VA",
			value: 284
			}, {
			id: "US-WA",
			value: 2719
			}, {
			id: "US-WV",
			value: 1729
			}, {
			id: "US-WI",
			value: 681
			}, {
			id: "US-WY",
			value: 241
			}]
      },

      areasSettings: {
        rollOverOutlineColor: layoutColors.border,
        rollOverColor: layoutColors.successLight,
        alpha: 0.8,
        unlistedAreasAlpha: 0.2,
        unlistedAreasColor: layoutColors.defaultText,
        balloonText: '[[title]]: [[value]] Loans'
      },


      legend: {
        width: '100%',
        marginRight: 27,
        marginLeft: 27,
        equalWidths: false,
        backgroundAlpha: 0.3,
        backgroundColor: layoutColors.border,
        borderColor: layoutColors.border,
        borderAlpha: 1,
        top: 362,
        left: 0,
        horizontalGap: 10,
        data: [
          {
            title: 'over 1 000 users',
            color: layoutColors.primary
          },
          {
            title: '500 - 1 000 users',
            color: layoutColors.successLight
          },
          {
            title: '100 - 500 users',
            color: layoutColors.success
          },
          {
            title: '0 - 100 users',
            color: layoutColors.danger
          }
        ]
      },
      export: {
        enabled: true
      },
      creditsPosition: 'bottom-right',
      pathToImages: layoutPaths.images.amChart
    });
  }
})();