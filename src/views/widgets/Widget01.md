### Widget01

This widget style can be configured by changing variant property, which name is one of standard bootstrap classes (i.e. success, info, warning, danger). If you want to change background color of widget instead of changing progress bar style add background- prefix to class (i.e. 'background-success').

Value is the procentage value of displayed progress-bar.

prop | default
--- | ---
variant  | `''`
value | `25`
header| `'header:string'`
text   | `'text:string'`
footer    | `'footer:string'`

#### Example:
>        <widget01 header="12.124" text="Lorem ipsum..." footer="Lorem ipsum dolor sit amet enim."
>                  variant="info" :value="30"/>
