# Public CTF4Hire website

This repo contains the react source code for the CTF4Hire website hosted by github pages on the `gh-pages` branch with the domain `ctf4hire.com`. 

There are two important branches:

1. `master` This contains the source code of the react application.
2. `gh-pages` This containes the `/build` directory generated by `yarn build` in a github action

## CI/CD

Github actions have been set up to take care of automatically building (`yarn build`) and deploying the `/build` directory  to the `gh-pages` branch. This means the `/build` directory does not need to be pushed to the repo.

## Workflow

1. Clone the repo
2. Create a new branch for your new feature.
3. You can run the website locally running `yarn start` or `npm start`.
4. Push your changes to a branch and open a PR to `master` (if possible get it reviewed by someone)
5. Once the PR is merges github actions will build and release the website.

Although it is possible to push to `master` directly this is not the best practice. But not having github enterprise limits the features of branch protection.
