module.exports = {
  documentation_url: 'https://github.com/seanberrie/Personal-API',
  endpoint: [
    {
      method: 'GET',
      path: '/api',
      description: 'describes all available end points'
    },
    {
      method: 'GET',
      path: '/api/profile',
      description: 'Its all about me'
    },
    {
      method: 'GET',
      path: '/api/projects',
      description: 'index of projects'
    },
    {
      method: 'POST',
      path: '/api/projects',
      description: 'describes all available end points'
    },
    {
      method: 'PUT',
      path: '/api/projects/:id',
      description: 'update a specific project'
    },
    {
      method: 'DELETE',
      path: '/api/projects/:id',
      description: 'Destroy a project'
    }
  ]
}
