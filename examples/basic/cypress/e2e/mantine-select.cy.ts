/// <reference types="@avenue3-dev/cypress-mantine-helpers" />

describe('MantineSelect', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('selects one option by text', () => {
    cy.get('[data-testid="select"]').mantineSelect('React')
  })

  it('selects one option by text with initial value', () => {
    cy.get('[data-testid="select-with-initial"]').mantineSelect('Angular')
  })

  it('selects one option by value', () => {
    cy.get('[data-testid="select"]').mantineSelect('value-react')
  })

  it('selects one option by text: searchable', () => {
    cy.get('[data-testid="select-searchable"]').mantineSelect('React')
  })

  it('selects one option by text: searchable, initial value', () => {
    cy.get('[data-testid="select-searchable-with-initial"]').mantineSelect(
      'Angular',
    )
  })

  it('selects multiple options by text', () => {
    cy.get('[data-testid="multi-select"]').mantineSelect(['React', 'Svelte'])
  })

  it('selects multiple options by value', () => {
    cy.get('[data-testid="multi-select"]').mantineSelect([
      'value-react',
      'value-svelte',
    ])
  })

  it('selects multiple options by value: initial value', () => {
    cy.get('[data-testid="multi-select-with-initial"]').mantineSelect([
      'value-svelte',
    ])
  })

  it('selects multiple options by text: searchable', () => {
    cy.get('[data-testid="multi-select-searchable"]').mantineSelect([
      'React',
      'Svelte',
    ])
  })

  it('selects multiple options by text: searchable, initial value', () => {
    cy.get(
      '[data-testid="multi-select-searchable-with-initial"]',
    ).mantineSelect(['React'])
  })

  it('selects value by typing', () => {
    cy.get('[data-testid="autocomplete"]').mantineSelect('React')
  })

  it('selects value by typing: initial', () => {
    cy.get('[data-testid="autocomplete-with-initial"]').mantineSelect('Angular')
  })
})
