### Widget04
This widget style depends on type property which defines which social widget background color and icon will be used (i.e facebook, twitter, linkedin, google-plus). Inside component there is default slot for placing data chart.

prop | default
--- | ---
type  | `facebook`
rightHeader   | `'rightHeader:string'`
rightFooter   | `'rightFooter:string'`
leftHeader   | `'leftHeader:string'`
leftFooter   | `'leftFooter:string'`


#### Example:
>             <widget04 type="linkedin" rightHeader="500+" rightFooter="contracts"
>                       leftHeader="292" leftFooter="feeds"/>
