import { config, list } from "@keystone-6/core";
import { text, timestamp } from "@keystone-6/core/fields";
import { document } from '@keystone-6/fields-document';
// import type { GraphQLConfig } from '@keystone-6/core/types';

const experience = list({
  fields: {
    name_of_company: text({ validation: { isRequired: true } }),
    role: text({ validation: { isRequired: true } }),
    start_date: text({ validation: { isRequired: true } }),
    end_date: text({ validation: { isRequired: true } }),
    content: document({ formatting: true })
  },
});

const contactMe = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ validation: { isRequired: true } }),
    message: text({ validation: { isRequired: true } }),
    content: document({ formatting: true })
  }
});


export default config({
  db: {
    provider: 'sqlite',
    url: 'file:./app.db',
    idField: { kind: 'uuid' },
  },

  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },

  lists: { experience, contactMe },

  server: {
    cors: { origin: ['http://localhost:7777'], credentials: true },
    port: 8000,
    maxFileSize: 200 * 1024 * 1024,
    healthCheck: true,
  },

  graphql: {
    debug: process.env.NODE_ENV !== 'production',
    queryLimits: { maxTotalResults: 100 },
    path: '/api/graphql',
    apolloConfig: {
      debug: true,

    }
  }
});