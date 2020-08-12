export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f33f1a3127ede9b4328d733',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-4neqgufj',
                  apiId: '2b5f2a35-4c96-4eab-a578-d75bb70c68f7'
                },
                {
                  buildHookId: '5f33f1a327efd29fe7c3c73b',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-m4qi5key',
                  apiId: '02f38deb-d212-48b2-ba01-8df25c5c53e8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/felixhaeberle/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-m4qi5key.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
