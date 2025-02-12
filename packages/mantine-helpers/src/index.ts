/* eslint-disable @typescript-eslint/no-namespace */
export type MantineSelectFn = (
  valueOrText: string | Array<string>,
  options?: Partial<
    Cypress.Loggable & Cypress.Timeoutable & Cypress.Withinable & Cypress.Shadow
  >,
) => Cypress.Chainable<JQuery<HTMLElement>>

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select an option in Mantine `Select`, `MultiSelect` or `Autocomplete` component
       * @param valueOrText The text value or values to select
       *
       * @example
       * ```ts
       * cy.get('#mantine-select')
       *   .mantineSelect('Option 1');
       *
       * cy.get('#mantine-multiselect')
       *   .mantineSelect(['Option 1', 'Option 2']);
       * ```
       */
      mantineSelect: MantineSelectFn
    }
  }
}

const selectOptions = (
  valueOrText: string | string[],
  subject: JQuery<HTMLElement>,
  options?: Parameters<MantineSelectFn>[1],
) => {
  const values = Array.isArray(valueOrText) ? valueOrText : [valueOrText]
  values.forEach((value) => {
    cy.wrap(subject, { log: false })
      .type(value, { force: true })
      .then((target) => {
        cy.get(
          `#${target.attr('aria-controls')} [role="option"]`,
          options,
        ).each(($option) => {
          const optionText = $option.text().trim()
          const optionValue = $option.attr('value')?.trim()

          if (optionText.includes(value)) {
            cy.wrap($option, { log: false }).click()
          } else if (optionValue?.includes(value)) {
            cy.wrap($option, { log: false }).click()
          }
        })
      })
  })
}

Cypress.Commands.add(
  'mantineSelect',
  { prevSubject: 'element' },
  (subject, valueOrText, options) => {
    if (typeof valueOrText !== 'string' && !Array.isArray(valueOrText)) {
      throw new Error('valueOrText must be a string or an array of strings')
    }

    if (
      valueOrText === null ||
      valueOrText === undefined ||
      valueOrText.length === 0
    ) {
      throw new Error('valueOrText cannot be empty')
    }

    if (subject.hasClass('mantine-InputWrapper-root')) {
      cy.wrap(subject, { log: false })
        .get('input.mantine-Input-input')
        .then((input) => {
          selectOptions(valueOrText, input, options)
        })
    } else if (subject.is('input')) {
      selectOptions(valueOrText, subject, options)
    }

    return cy.wrap(subject, { log: false })
  },
)
