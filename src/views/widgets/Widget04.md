### Widget04
This widget style depends on type property which defines which social widget background color and icon will be used (i.e facebook, twitter, linkedin, google-plus). Inside component there is slot for placing data chart.

prop | default
--- | ---
type  | `facebook`
rightHeader   | `'rightHeader:string'`
rightFooter   | `'rightFooter:string'`
leftHeader   | `'leftHeader:string'`
leftFooter   | `'leftFooter:string'`


#### Example:
>     <widget04 type="linkedin" rightHeader="500+" rightFooter="contracts" leftHeader="292" leftFooter="feeds">
>       <line-chart1 chartId="linkedIn" :data='[15, 22, 34, 46, 58, 70, 68, 58, 52, 60, 64, 71]'
>                    label='Contracts' style='height:100px'  backgroundColor='rgba(255,255,255,.1)'/>
>     </widget04>
