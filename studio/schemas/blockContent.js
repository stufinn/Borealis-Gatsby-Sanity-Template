import React from 'react';
import { MdInsertLink } from 'react-icons/md';
import { RiExternalLinkLine, RiNewspaperLine } from 'react-icons/ri';

// A default schema for a custom block content editor
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Marks let you mark up inline text in the block editor.
      // Styles let you set what your user can mark up blocks with. These
      // corrensponds with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.

      //  Specifies which block text styles to use
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H1', value: 'h1' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },

        { title: 'Quote', value: 'blockquote' },
      ],
      marks: {
        // specifies which of the default text decorators to use, as well as custom ones
        // The default configurations are strong, emphasis, code, underline and strikethrough.
        // "https://www.sanity.io/docs/configuration#decorators-c88e9a7fb8ab"
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strikethrough', value: 'strike-through' },
        ],

        // Annotations can be any object structure – e.g. a link or a footnote.
        annotations: [
          {
            title: 'Web Address',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link or Email Address',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.required().uri({
                    scheme: ['http', 'https', 'mailto'],
                  }),
                description:
                  'Web addresses must be preceded by http:// or https:// (e.g. https://google.ca). Email addresses must be preceded by "mailto:" (e.g. mailto:stu@borealisweb.ca).',
              },
              {
                title: 'Open in new window',
                name: 'blank',
                type: 'boolean',
              },
            ],

            blockEditor: {
              // How to render this in the editor
              render: ({ children }) => {
                return (
                  <span>
                    {children}&nbsp;
                    <RiExternalLinkLine />
                  </span>
                );
              },
              // Icon for Studio Editor
              icon: () => <MdInsertLink className="text-xl" />,
            },
          },
          // // This wasn't working for me.
          // {
          //   name: 'internalPostLink',
          //   title: 'Link to Custom Page',
          //   type: 'object',
          //   fields: [
          //     {
          //       type: 'reference',
          //       name: 'item',
          //       to: [{ type: 'customPages' }, { type: 'blogPost' }],
          //       validation: (Rule) => Rule.required(),
          //     },
          //   ],
          //   blockEditor: {
          //     icon: () => <RiNewspaperLine />,
          //   },
          // },
          {
            name: 'linkToBlogPost',
            title: 'Link to Blog Post',
            type: 'object',
            fields: [
              {
                type: 'reference',
                name: 'item',
                to: [{ type: 'blogPost' }],
                validation: (Rule) => Rule.required(),
              },
            ],
            blockEditor: {
              icon: () => <RiNewspaperLine />,
            },
          },
        ],
      },
    },
    // 	Custom block content type to add to editor
    { type: 'inlineImage' },
  ],
};
