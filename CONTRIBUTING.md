# Contributing

Whether it's helping out with code or just testing and reporting issues, contributors to  Crosswinds Blocks are always welcome. Here's how you can help contribute to the project.

## Testing
Testing and reporting issues is the easiest way you can help out with Crosswinds Blocks. Here's how you can help report issues with the theme.

- Create a new issue in the GitHub repository.
- Fill out the issue description as fully as you can. Please be as descriptive as possible to help others find and fix the issue.
- Attach any screenshots you have of the issue and describe the steps to reproduce the error.
- Add any relevant labels to the issue.
- Set the milestone as "Awaiting Review".
- Hit submit.

## Code
1. Set up a local development environment with a WordPress site running on your computer.
1. Fork the Crosswinds Blocks repository.
1. Clone the forked repository to your computer.
1. Run `npm install && composer install` on the plugin directory.
1. Run `cd blocks && npm install && npm run build` to install the dependencies and build the blocks.
1. Run `cd block-customizations && npm install && npm run build` to install the dependencies and build the blocks.
1. Create a new branch for your changes.
1. Run the Crosswinds Blocks plugin as you normally would.
1. Make code changes as necessary.
1. Commit changes within the new branch.
1. Push the new branch to your forked repository.
1. Submit a Pull Request to the Crosswinds Blocks repository explaining your changes and referencing any related issues.

## Guidelines for pull requests
Keep pull requests as concise as possible. If you're addressing a bug, only submit the fixes for that bug.

## Branch naming convention
Name your branches with prefixes and descriptions: [type]/[change]. Examples:

add/ = add a new feature  
hot-fix/ = a fix that needs to be implemented right away (to fix a breaking change)  
fix/ = a fix to a bug that can wait until the next release cycle  
try/ = experimental feature, testing out an idea  