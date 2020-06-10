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
                  buildHookId: '5ee11b750fe159c125993356',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-btjcgaa2',
                  apiId: '41993cb1-d5a6-47f9-aa7f-365332f8b7e4'
                },
                {
                  buildHookId: '5ee11b75bf198b984d8d2108',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qusztp2c',
                  apiId: 'b601a727-0463-45ff-ba8e-689daac88260'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jrelgin/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qusztp2c.netlify.app', category: 'apps' }
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
