export default {
  title: 'Files',
  name: 'files',
  type: 'array',
  of: [
    {
      name: 'file',
      type: 'file',
      options: {
        accept: 'application/pdf, image/*, application/msword',
      },
      title: 'Uploads',
    },
  ],
  description:
    'File types accepeted include: PDF files, image files, and MS Word documents. ',
};
