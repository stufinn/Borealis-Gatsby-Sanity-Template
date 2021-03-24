# Getting started with the Borealis Gatsby Sanity Template

Initialize Gatsby

1. Clone repo to your local machine
2. Open in VSCode / Code Editor
3. In `/web` directory, run: `npm install`

## Initialize Sanity

1. Make sure you have the latest version of the Sanity CLI installed globally
   `npm install -g @sanity/cli`
2. Log in to Sanity via the CLI
   `sanity login`
3. ::Remind Stu to “add” you to the Sanity project in question for write & deploy privileges::

### If Creating a Brand New Project

1. Run `sanity init` from the ::/studio:: directory and follow the prompts to create a new sanity project and follow the prompts
2. Once initialized but before committing, run `sanity start` to make sure the studio runs successfully.
3. Create two new files called ::.env.production:: and ::.env.development:: in the ::/studio:: directory. It’s important that you have BOTH of these files, with the following values:

```
SANITY_STUDIO_API_PROJECT_ID="<PROJECT ID>"
SANITY_STUDIO_API_DATASET="production"
```

4. If you mark your dataset as private, via the Sanity web GUI, you will need to include `SANITY_STUDIO_TOKEN=“” `as well
5. Once the files are populated with the correct info, remove the project id and dataset from sanity.json, leaving empty strings, i.e.

6. Later, but before you can pull the data into Gatsby develop, you will have to deploy the sanity GraphQL api using `sanity graphql deploy`. Whenever you modify the schemas, you will need to run this again.

### If Working on an Existing Project

1. Run `sanity install` in ::/studio::
   - note that Sanity uses ::Yarn:: and not npm as a package manager
2. Create two new files in the /studio directory called ::.env.production:: and ::.env.development:: in the ::/studio:: directory. It’s important that you have BOTH of these files, with the following values:

```
SANITY_STUDIO_API_PROJECT_ID="<PROJECT ID>"
SANITY_STUDIO_API_DATASET="production"
```

- Stu can provide you with the studio project ID.
  ::- Remind Stu to “add” you to the Sanity project in question for write/deploy priveleges::

**Note:** When running your studio locally, Sanity will read the values from the ::.env.development:: file. For now, keep the values the same in both files, but keep in mind that we can configure a development-only dataset to use as well.

3. Once that file is created, run `sanity start`
   Common issues:

- check that your `.env.production` file is in the root of the `/studio` directory
- if this is a new project, you may need to deploy your sanity GraphQL API first; to do so run `sanity GraphQL deploy —playground`

## Connect Gatsby to Sanity

1. In the /web directory, create **both** a ::.env.development:: and ::.env.production:: file
2. Populate it with the following information:

```
GATSBY_SANITY_ID=""
GATSBY_SANITY_DATASET=""
// only need token if dataset is private
SANITY_TOKEN=""
```

- FYI - If there is a value for SANITY_TOKEN unnecessarily, there will be an error “Session not found”. Either leave as empty string or remove entirely.
- A token is only necessary if the dataset it marked as private. Check with Stu (it likely is).



========

To configure Netlify dev, run "netlify init" from the root directory (i.e. not /web or /studio) and follow the prompts there
