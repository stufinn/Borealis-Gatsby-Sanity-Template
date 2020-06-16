export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'websiteTitle',
      title: 'Website Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logoImage',
      title: 'Default logo for navbar',
      type: 'miscImage',
    },
  ],
};
