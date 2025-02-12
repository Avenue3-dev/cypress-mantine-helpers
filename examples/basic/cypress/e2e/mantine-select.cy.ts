/// <reference types="@avenue3-dev/cypress-mantine-helpers" />

describe('MantineSelect', () => {
  it('selects one option by text', () => {
    cy.visit('/')

    cy.get('[data-testid="select"]').mantineSelect('React')
  })

  it('selects one option by value', () => {
    cy.visit('/')

    cy.get('[data-testid="select"]').mantineSelect('value-react')
  })

  it('selects one option by text: searchable', () => {
    cy.visit('/')

    cy.get('[data-testid="select-searchable"]').mantineSelect('React')
  })

  it('selects multiple options by text', () => {
    cy.visit('/')

    cy.get('[data-testid="multi-select"]').mantineSelect(['React', 'Svelte'])
  })

  it('selects multiple options by value', () => {
    cy.visit('/')

    cy.get('[data-testid="multi-select"]').mantineSelect([
      'value-react',
      'value-svelte',
    ])
  })

  it('selects multiple options by text: searchable', () => {
    cy.visit('/')

    cy.get('[data-testid="multi-select-searchable"]').mantineSelect([
      'React',
      'Svelte',
    ])
  })

  it('selects value by typing', () => {
    cy.visit('/')

    cy.get('[data-testid="autocomplete"]').mantineSelect('React')
  })
})
