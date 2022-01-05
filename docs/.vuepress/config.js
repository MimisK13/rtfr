module.exports = {
  lang: 'en-US',
  title: 'RTFR',
  description: 'Read The Fucking Rider',
  home: false,
  
  base: '/',
  theme: '@vuepress/theme-default',
  themeConfig: {
	logo: 'https://vuejs.org/images/logo.png',
	darkMode: true,
    navbar: [
      { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },  
      { text: 'About', link: '/about/' },  
    ],
	
    // sidebar: [      
      // ['/audio/foh', 'Front of House'],
      // ['/audio/monitor', 'Monitor'],
      // ['/audio/input_list', 'Input List'],
      // ['/audio/backline', 'Backline'],
	  // ['/audio/stage_plan', 'Stage Plan'],
      // ['/lights/', 'Lights'],	  
	  // ['/hospitality/', 'Hospitality']
    // ],
		
	sidebar: [
      {
        text: 'Front Of House',
        link: '/audio/foh'		
      },
	  {
		text: 'Monitor',
        link: '/audio/monitor'		
      },
	  {
		text: 'Input List',
        link: '/audio/input_list'	
      },
	  {
		text: 'Backline',
        link: '/audio/backline'		
      },
	  {
		text: 'Stage Plan',
        link: '/audio/stage_plan'		
      },
	  /*
	  {
        text: 'Lights',
        link: '/lights/',
		collapsible: false,
        children: [          
          {
            text: 'Plot',
            link: '/lights/plot.md',
            children: [],
          },
        ],
      },
	  {
        text: 'Video',
        link: '/video/',
		collapsible: false,
        children: [],
      },
	  {
        text: 'Hospitality',
        link: '/hospitality/',
		collapsible: true,
        children: [
		  {
            text: '2',
            link: '/lights/plot.md',
            children: [
			  {
				text: '3',
				link: '/lights/plot.md',
				children: [],
			  },
			],
          },
		],
      }
	  */
    ],
	
	sidebarDepth: 2,
	displayAllHeaders: true,
	//ExtractHeadersPluginOptions: false,
	smoothScroll: true,
	lastUpdated: 'Last Updated',
	searchPlaceholder: 'Search...',
	plugins: [
		['@vuepress/back-to-top', true],
		['@vuepress/active-header-links', true],
		['@vuepress/medium-zoom', true],
		['@vuepress/nprogress', true],
		['@vuepress/last-updated', true],
		['@vuepress/plugin-search', true]
	]
  }
}
