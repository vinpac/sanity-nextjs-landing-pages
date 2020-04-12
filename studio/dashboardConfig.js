export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e925fb21694d95e10a56f8a',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wrwyx3b3',
                  apiId: '9cbf539b-4283-4915-a342-b5fa9cd36bc6'
                },
                {
                  buildHookId: '5e925fb2fdd5cf1d3c2189ca',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-18vdhzjm',
                  apiId: 'b427ebf0-6134-4327-a8a0-0d9ff591c641'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vinpac/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-18vdhzjm.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
