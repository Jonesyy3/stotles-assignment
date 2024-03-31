# Stotles work sample assignment

Some considerations for potential future enhancements to the search feature, some of these might only be applicable with more data - to get a more precise record search:
    - Filter Open/Closed procurements (maybe also a date range filter)
    - Filter for only Tender/Contracts
    - Filter on the value of a contract/tender (greater than x, less than y etc)
    - A sort by feature (next to each column to ascend decend in order)
    - The buyer.country is not currently used at all or have any purpose currently, so this could maybe also be used to display if some organisations can only sell to some countries (again i'm not sure on the whole use case)

    - Slightly different, but depending on the use case... If being used by companies to find
        what organisation bought what contract. Then maybe some extra data on the contract for relevant field e.g. agriculture, housing, commerical.
        This could also then be used if no results for your search (or additional) a few records below for 'you might be interested in...'


## Getting started

This sample codebase consists of a separate client & server code.

It's set up in a simple way to make it as easy as possible to start making changes,
the only requirement is having recent versions of `node` & `npm` installed.

This is not a production ready configuration (nor production ready code),
it's only set up for easy development, including live reload.

To run the client bundler:

```
cd client
npm install
npm run dev
```

The processed code will be available at http://localhost:3001

To start the server:

```
cd server
npm install
npm run dev
```

The server will be available at http://localhost:3000 - the page is automatically configured
to use the assets served by vite on port 3001.

You should see something similar to this page:

![Search page](./screenshot.png)

### Disabling/Enabling TypeScript

If you prefer to completely disable TypeScript for a file, add `// @ts-nocheck` on the first line.
If on the other hand you'd like to enable strict type checking, modify `tsconfig.json` according to your needs.

Note that you can import plain JavaScript files that won't be fully typechecked.

### Browsing the database

You should start by looking at the migration in `./migrations` folder.
If you prefer to browse the DB using SQL, you can use the sqlite command line (just run `sqlite3 ./db.sqlite3`)
or any other SQL client that supports sqlite.

If for any reason the database becomes unusable, you can rebuild it using `./reset_db.sh` script`.

## The task

All the instructions are available [here](https://www.notion.so/stotles/Full-stack-software-engineer-work-sample-assignment-ae7c64e08f2a42a097d16cee4bc661fc).
