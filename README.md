# The Sanity studio for managing a Metalsmith website

**Features:**

- Structured content models
- Types for pages, navigation, and other content
- Deploys on Netlify

Based on the simple [Sanity Studio](https://github.com/sanity-io/sanity-template-website-studio/tree/e0bc165fe915b554edeabfa911c8a82c95b51f79) template.

## Quick start

1. Clone this repository
2. `cd studio`
3. `sanity install` in the studio folder on local (and `npm i -g @sanity/cli` if you don't have the CLI)
4. `sanity start` to start the studio
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
5. `sanity build` to build to production locally

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).
