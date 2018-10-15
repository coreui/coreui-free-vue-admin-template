### Widget06

This widget can style is defined by cardClasses. Inside component there is additional slot for chart (name="chart").

prop | default
--- | ---
cardClasses  | `''`
header| `header:string`
text   | `text:string`

>     <widget06 cardClasses="bg-primary" header="9.823" text="Members online">
      <b-dropdown class="float-right" variant="transparent p-0" right>
        <template slot="button-content">
          <i class="icon-settings"></i>
        </template>
        <b-dropdown-item>Action</b-dropdown-item>
        <b-dropdown-item>Another action</b-dropdown-item>
        <b-dropdown-item>Something else here...</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </widget06>
