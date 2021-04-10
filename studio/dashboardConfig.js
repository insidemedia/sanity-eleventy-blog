export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6071921bda528f0de7321eca',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-osdrqo27',
                  apiId: '47016e2a-a2fa-418f-9463-c7e8a19e3012'
                },
                {
                  buildHookId: '6071921b04183524aaf170f6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-uj57qt3b',
                  apiId: '4bc81e67-18e1-4bcf-bd8b-f8d1a5a79413'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/insidemedia/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-uj57qt3b.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
