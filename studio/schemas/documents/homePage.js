export default {
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  // prevents creating and updating of new home pages in studio
  __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page title',
      description: 'Max 50 characters',

      validation: (Rule) => Rule.required(),
    },
  ],
};
