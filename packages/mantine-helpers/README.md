# Cypress Mantine Helpers

![MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![CI](https://img.shields.io/github/actions/workflow/status/Avenue3-dev/cypress-mantine-helpers/run-cypress.yml?style=flat-square&label=Run%20Cypress)
<a href="https://www.npmjs.com/package/@avenue3-dev/cypress-mantine-helpers">
![NPM](https://img.shields.io/npm/v/%40avenue3-dev%2Fcypress-mantine-helpers?style=flat-square&label=Lates%20Version)
</a>

A collection of custom Cypress commands to work with Mantine components.

## Installation

```bash
pnpm add @avenue3-dev/cypress-mantine-helpers
```

## Usage

Add the following to your `cypress/support/commands.ts` file:

```ts
import '@avenue3-dev/cypress-mantine-helpers'
```

## Commands

### `mantineSelect`

Selects an option or options from a Mantine `Select`, `MultiSelect`, or `Autocomplete` component.

```ts
// Select a single option by the label
cy.get('[data-testid="select"]').mantineSelect('Option 1')

// Select multiple options by the labels
cy.get('[data-testid="multiselect"]').mantineSelect(['Option 1', 'Option 2'])

// Select single by value
cy.get('[data-testid="select"]').mantineSelect('option-1')

// Select multiple by values
cy.get('[data-testid="multiselect"]').mantineSelect(['option-1', 'option-2'])
```
