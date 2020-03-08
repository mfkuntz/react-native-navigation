module.exports = {
  docs: {
    'Getting Started': [
      'before-you-start',
      'installing',
      'minimalSetup',
      'showcases'
    ],
    'Using the app': [
      'app-launch',
      'basic-navigation',
      'advance-navigation',
      'screen-lifecycle',
      'passing-data-to-components',
    ],
    Layouts: [
      'stack-doc',
      'bottomTabs-docs',
      'side-menu',
      'external-component',
    ],
    Hierarchy: [
      'root',
      'modal-docs',
      'overlay-docs'
    ],
    Styling: [
      'theme',
      'statusBar-docs',
      'orientation',
      'screen-animations',
      'fonts',
      'constants-docs'
    ]
  },
  API: [
    {
      type: 'category',
      label: 'Navigation',
      items: [
        'root-api',
        'stack-api',
        'modal-api',
        'overlay-api'
      ]
    },
    {
      type: 'category',
      label: 'Layouts',
      items: [
        'layout',
        'container-layout',
        'component',
        'stack',
        'bottomTabs',
        'sideMenu',
        'splitView'
      ]
    },
    {
      type: 'category',
      label: 'Options',
      items: [
        'options-api',
        'options-root',
        'bottomTabs-options',
        'bottomTab-options',
        {
          'type': 'category',
          'label': 'Stack',
          'items': [
            'stack-options',
            'title-options',
            'subtitle-options',
            'background-options',
            'backButton-options',
            'button-options',
            'iconInsets-options',
            'largeTitle-options'
          ]
        },
        'statusBar-options',
        'layout-options',
        'sideMenu-options',
        'sideMenuSide-options',
        'splitView-options'
      ]
    },
    'events-api'
  ]
};

// {
//   'docs': {
//     'Installation': [
//       {
//         'type': 'subcategory',
//         'label': 'iOS',
//         'ids': [
//           'iosManual',
//           'iosCocoaPods'
//         ]
//       },
//       {
//         'type': 'subcategory',
//         'label': 'Android',
//         'ids': [
//           'installingAndroid'
//         ]
//       }
//     ],
//     'Getting Started': [
//       'displayTheAppRoot',
//       'showcases'
//     ],
//     'Layouts2': {
//       'type': 'category',
//       'label': 'Layouts2',
//       'items': [
//         {
//           'type': 'category',
//           'label': 'Stack',
//           'items': [
//             'stack-api',
//             'stack-examples',
//             'stack-options',
//             'stack-buttons'
//           ]
//         }
//       ]
//     },
//     'Layouts': [
//       {
//         'type': 'category',
//         'label': 'Stack',
//         'items': [
//           'stack-api',
//           'stack-examples',
//           'stack-options',
//           'stack-buttons'
//         ]
//       },
//       {
//         'type': 'subcategory',
//         'label': 'BottomTabs',
//         'ids': [
//           'bottomTabs-selecting',
//           'bottomTabs-visibility',
//           'bottomTabs-dynamic-options',
//           'bottomTabs-options'
//         ]
//       },
//       {
//         'type': 'subcategory',
//         'label': 'SideMenu',
//         'ids': [
//           'sideMenu-openProgrammatically',
//           'sideMenu-disable'
//         ]
//       },
//       {
//         'type': 'subcategory',
//         'label': 'ExternalComponent',
//         'ids': [
//           'externalComponent-viewGroup',
//           'externalComponent-fragment',
//           'externalComponent-viewController'
//         ]
//       }
//     ],
//     'Hierarchy': [
//       'root'
//     ]
//   },

// }