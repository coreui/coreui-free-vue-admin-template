### Widget05

This widget style can be configured by changing variant property, which name is one of standard bootstrap classes (i.e. success, info, warning, danger). If you want to change background color of widget instead of changing progress bar style add background- prefix to class (i.e. 'background-success').

Value is the procentage value of displayed progress-bar.

prop | default
--- | ---
variant  | `success`
value | `30`
iconClasses  |  `icon-people`
header| `header:string`
text   | `text:string`

>     <widget05 iconClasses="icon-basket-loaded" header="1238" text="Products sold" variant="background-warning"/>
