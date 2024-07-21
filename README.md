# Organization eslint-config

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

## Description

The current repository, `eslint-config-organization`, provides an ESLint configuration that extends the popular Airbnb ESLint config. This configuration aims to standardize code quality, readability, and predictability in your projects. By using this config, you can ensure consistent coding practices and catch potential issues early on.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with this project, first clone the repository to your local machine using git clone [eslint-config-organization](https://github.com/rogiervanstraten/eslint-config-organization). Next, open the project directory and start customizing the ESLint configuration by renaming the organization scope in the package.json file to reflect your specific organization, such as changing it from `eslint-config-organization` to `@[abc-company]/eslint-config-[abc-company]`. For your convenience, a devcontainer is included in the project to help you get up and running immediately.

Simply open the project in a compatible editor like Visual Studio Code, and the devcontainer will set up the development environment for you.

## Usage

To use the `@[abc-company]/eslint-config-[abc-company]` in your projects, follow these steps:

1. **Install the Package**: First, install the ESLint configuration package via npm or yarn:

   ```bash
   npm install @[abc-company]/eslint-config-[abc-company] --save-dev
   # or
   yarn add @[abc-company]/eslint-config-[abc-company] --dev
   ```

2. **Create/Update ESLint Configuration**: In your project root, create or update your `.eslintrc` file.

3. **Import and Extend Configuration**: Inside `.eslintrc`, import the configuration and extend it as needed. Here’s a basic example:

   ```json
   {
   	"extends": "@[abc-company]/eslint-config-[abc-company]"
   }
   ```

4. **Run ESLint**: Finally, run ESLint to lint your project files:
   ```bash
   npx eslint .
   ```

This setup ensures your project adheres to the coding standards defined by `[abc-company]`, with the flexibility to add or override rules as necessary.

## Releasing

To manage releases through Release Please, begin by opening a pull request (PR) to the main branch. Ensure that the main branch is locked from direct pushes to enforce this process. The merging of the PR will trigger Release Please, which will automatically create a new semantic version based on the changes included. Upon merging, Release Please will handle the automatic publishing of the package, generate a changelog, and create a GitHub release. This streamlined workflow ensures that versioning, changelog updates, and release management are handled consistently and efficiently.

## Contributing

1. Create a Branch: Create a new branch for your changes (git checkout -b feature/your-feature).
2. Make Changes: Implement your changes while adhering to the project's coding standards.
3. Run Tests: Verify that all tests pass before committing.
4. Commit and Push: Commit your changes with a clear message and push the branch to the remote repository.
5. Open a Pull Request: Create a PR from your branch to the main branch.
6. Address Feedback: Review and incorporate any feedback from reviewers.

This process helps maintain code quality and facilitates smooth integration of changes.

## License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
