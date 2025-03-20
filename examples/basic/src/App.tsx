import {
  AppShell,
  Select,
  MultiSelect,
  Autocomplete,
  Container,
} from '@mantine/core'
import { useField } from '@mantine/form'

function App() {
  const selectField = useField({ initialValue: 'value-react' })
  const selectSearchableField = useField({ initialValue: 'value-react' })
  const multiSelectField = useField({ initialValue: ['value-react'] })
  const multiSelectSearchableField = useField({ initialValue: ['value-react'] })
  const autocompleteField = useField({ initialValue: 'React' })

  return (
    <AppShell>
      <AppShell.Main>
        <Container>
          <Select
            data-testid="select"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite framework (Select)"
          />

          <Select
            data-testid="select-with-initial"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite framework (Select, initial value)"
            {...selectField.getInputProps()}
          />

          <Select
            data-testid="select-searchable"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite framework (Select, searchable)"
            searchable
          />

          <Select
            data-testid="select-searchable-with-initial"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite framework (Select, searchable, initial value)"
            searchable
            {...selectSearchableField.getInputProps()}
          />

          <MultiSelect
            data-testid="multi-select"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite frameworks (MultiSelect)"
          />

          <MultiSelect
            data-testid="multi-select-with-initial"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite frameworks (MultiSelect, initial value)"
            {...multiSelectField.getInputProps()}
          />

          <MultiSelect
            data-testid="multi-select-searchable"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite frameworks (MultiSelect, searchable)"
            searchable
          />

          <MultiSelect
            data-testid="multi-select-searchable-with-initial"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite frameworks (MultiSelect, searchable, initial value)"
            searchable
            {...multiSelectSearchableField.getInputProps()}
          />

          <Autocomplete
            data-testid="autocomplete"
            data={['React', 'Angular', 'Svelte']}
            label="Pick your favourite framework (Autocomplete)"
          />

          <Autocomplete
            data-testid="autocomplete-with-initial"
            data={['React', 'Angular', 'Svelte']}
            label="Pick your favourite framework (Autocomplete)"
            {...autocompleteField.getInputProps()}
          />
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
