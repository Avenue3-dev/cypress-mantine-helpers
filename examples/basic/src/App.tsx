import {
  AppShell,
  Select,
  MultiSelect,
  Autocomplete,
  Container,
} from '@mantine/core'

function App() {
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
            data-testid="select-searchable"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite framework (Select, searchable)"
            searchable
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
            data-testid="multi-select-searchable"
            data={[
              { label: 'React', value: 'value-react' },
              { label: 'Angular', value: 'value-angular' },
              { label: 'Svelte', value: 'value-svelte' },
            ]}
            label="Pick your favourite frameworks (MultiSelect, searchable)"
            searchable
          />

          <Autocomplete
            data-testid="autocomplete"
            data={['React', 'Angular', 'Svelte']}
            label="Pick your favourite framework (Autocomplete)"
          />
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
