# LongLink documentation

### How to install

## How to develop

To run development

```bash
npm run dev
```

To clean docz cache

```bash
npm run clean
```

! Work only in powershell (visual studio terminal), to clean manually:
Delete the folder `.docs/.cache`

## How to use

Under the `docs` folder indert each documentation in markdown syntax under the specific folder.
Inside the markdown place this template

```
---
menu: [Title]
route: [Route]
name: [Subtitle]
---

### [Subtitle]

Body in markdown syntax
```

-   [Title]: is the name of the folder where the file is created
-   [Route]: nice route for the domanin to get that file
-   [Subtitle]: Subtile for the menù bar

Once a new component is generate, run the clean command and restart the development.
This is not necessary in case of editing the markdown of a file
