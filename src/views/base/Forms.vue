<template>
  <CRow>
    <CCol>
      <CCard>
        <CCardHeader>
          <strong>Vue Forms</strong>
        </CCardHeader>
        <CCardBody>
          <CRow>
          <CCol md="6">
            <h4>Overview</h4>
          <Example href="forms/overview.html#overview">
            <CForm>
                <div class="mb-3">
                    <CFormLabel for="exampleInputEmail1">Email address</CFormLabel>
                    <CFormInput type="email" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <CFormText id="emailHelp">We'll never share your email with anyone else.</CFormText>
                </div>
                <div class="mb-3">
                    <CFormLabel for="exampleInputPassword1">Email Password</CFormLabel>
                    <CFormInput type="password" id="exampleInputPassword1" />
                </div>
                <CFormCheck
                    class="mb-3"
                    label="Check me out"
                />
                <CButton type="submit" color="primary">
                    Submit
                </CButton>
            </CForm>
          </Example>
          </CCol>
          <CCol md="6">
          <h4 class="mt-4">Disabled fieldset example</h4>
          <Example href="forms/overview.html#disabled-forms">
            <CForm>
                <fieldset disabled>
                    <div class="mb-3">
                    <CFormLabel for="disabledTextInput">Disabled input</CFormLabel>
                    <CFormInput id="disabledTextInput" placeholder="Disabled input" />
                    </div>
                    <div class="mb-3">
                    <CFormLabel for="disabledSelect">Disabled select menu</CFormLabel>
                    <CFormSelect id="disabledSelect">
                        <option>Disabled select</option>
                    </CFormSelect>
                    </div>
                    <div class="mb-3">
                    <CFormCheck id="disabledFieldsetCheck" label="Can't check this" disabled />
                    </div>
                    <CButton type="submit">Submit</CButton>
                </fieldset>
            </CForm>
          </Example>
          </CCol>
          </CRow>
          <h4 class="mt-4">Sizing</h4>
          <Example href="forms/form-control.html#sizing">
            <CFormInput type="text" size="lg" placeholder="Large input" aria-label="lg input example"/>
            <br/>
            <CFormInput type="text" placeholder="Default input" aria-label="default input example"/>
            <br/>
            <CFormInput type="text" size="sm" placeholder="Small input" aria-label="sm input example"/>
          </Example>
          <h4 class="mt-4">Input file</h4>
          <Example href="forms/form-control.html#file-input">
            <div class="mb-3">
              <CFormLabel for="formFile">Default file input example</CFormLabel>
              <CFormInput type="file" id="formFile"/>
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileMultiple">Multiple files input example</CFormLabel>
              <CFormInput type="file" id="formFileMultiple" multiple/>
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileDisabled">Disabled file input example</CFormLabel>
              <CFormInput type="file" id="formFileDisabled" disabled/>
            </div>
            <div class="mb-3">
              <CFormLabel for="formFileSm">Small file input example</CFormLabel>
              <CFormInput type="file" size="sm" id="formFileSm"/>
            </div>
            <div>
              <CFormLabel for="formFileLg">Large file input example</CFormLabel>
              <CFormInput type="file" size="lg" id="formFileLg"/>
            </div>
          </Example>
          <h4 class="mt-4">Color</h4>
          <Example href="forms/form-control.html#color">
            <CFormLabel for="exampleColorInput">Color picker</CFormLabel>
            <CFormInput type="color" id="exampleColorInput" defaultValue="#563d7c" title="Choose your color" />
          </Example>
          <h4 class="mt-4">Select</h4>
          <Example href="forms/select.html#default">
            <CRow>
            <CCol md="3">
            <CFormSelect class="mb-3" aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            </CCol>
            <CCol md="3">
            <CFormSelect size="lg" class="mb-3" aria-label="Large select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            </CCol>
            <CCol md="3">
            <CFormSelect size="sm" class="mb-3" aria-label="Small select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            </CCol>
            <CCol md="3">
            <CFormSelect size="lg" class="mb-3" multiple aria-label="Multiple select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            </CCol>
            <CCol md="3">
            <CFormSelect htmlSize="3" class="mb-3" multiple aria-label="size 3 select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            </CCol>
            <CCol md="3">
            <CFormSelect aria-label="Disabled select example" class="mb-3" disabled>
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </CFormSelect>
            </CCol>
            </CRow>
          </Example>
          <h4 class="mt-4">Checks</h4>
          <Example href="forms/checks-radios.html#checks">
            <CRow>
            <CCol md="4">
              <CFormCheck id="flexCheckDefault" label="Default checkbox"/>
              <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />
            </CCol>
            <CCol md="4">
              <CFormCheck label="Disabled checkbox" disabled/>
              <CFormCheck label="Disabled checked checkbox" defaultChecked disabled/>
            </CCol>
            </CRow>
          </Example>
          <h4 class="mt-4">Radios</h4>
          <Example href="forms/checks-radios.html#radios">
            <CRow>
            <CCol md="4">
              <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault1" label="Default radio"/>
              <CFormCheck type="radio" name="flexRadioDefault" id="flexRadioDefault2" label="Checked radio" defaultChecked/>
            </CCol>
            <CCol md="4">
              <CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioDisabled" label="Disabled radio" disabled/>
              <CFormCheck type="radio" name="flexRadioDisabled" id="flexRadioCheckedDisabled" label="Disabled checked radio" defaultChecked disabled/>
            </CCol>
            </CRow>
          </Example>
          <h4 class="mt-4">Switches</h4>
          <Example href="forms/checks-radios.html#switches">
            <CRow>
            <CCol md="4">
              <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>
              <CFormSwitch label="Checked switch checkbox input" id="formSwitchCheckChecked" defaultChecked/>
              <CFormSwitch label="Disabled switch checkbox input" id="formSwitchCheckDisabled" disabled/>
              <CFormSwitch label="Disabled checked switch checkbox input" id="formSwitchCheckCheckedDisabled" defaultChecked disabled/>
            </CCol>
            <CCol md="4">
              <CFormSwitch label="Default switch checkbox input" id="formSwitchCheckDefault"/>
              <CFormSwitch size="lg" label="Large switch checkbox input" id="formSwitchCheckDefaultLg"/>
              <CFormSwitch size="xl" label="Extra large switch checkbox input" id="formSwitchCheckDefaultXL"/>
            </CCol>
            </CRow>
          </Example>
          <h4 class="mt-4">Inline Checks and Radios</h4>
          <Example href="forms/checks-radios.html#inline">
            <CRow>
            <CCol md="4">
              <h5 class="mt-2 mb-2">Checks</h5>
              <CFormCheck inline id="inlineCheckbox1" value="option1" label="1"/>
              <CFormCheck inline id="inlineCheckbox2" value="option2" label="2"/>
              <CFormCheck inline id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>
            </CCol>
            <CCol md="4">
              <h5 class="mt-2 mb-2">Radios</h5>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox1" value="option1" label="1"/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox2" value="option2" label="2"/>
              <CFormCheck inline type="radio" name="inlineRadioOptions" id="inlineCheckbox3" value="option3" label="3 (disabled)" disabled/>
            </CCol>
            </CRow>
          </Example>
          <h4 class="mt-4">Toggle buttons</h4>
          <Example href="forms/checks-radios.html#checkbox-toggle-buttons">
            <CRow>
            <CCol md="4">
              <h5 class="mt-2 mb-2">Checkbox toggle buttons</h5>
              <div class="mb-2">
                <CFormCheck :button="{ color: 'primary' }" id="btn-check" autoComplete="off" label="Single toggle"/>
              </div>
              <div class="mb-2">
                <CFormCheck :button="{ color: 'primary' }" id="btn-check-2" autoComplete="off" label="Checked" defaultChecked/>
              </div>
              <div class="mb-2">
                <CFormCheck :button="{ color: 'primary' }" id="btn-check-3" autoComplete="off" label="Disabled" disabled/>
              </div>
            </CCol>
            <CCol md="4">
              <h5 class="mt-2 mb-2">Radio toggle buttons</h5>
              <CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option1" autoComplete="off" label="Checked" defaultChecked/>
              <CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option2" autoComplete="off" label="Radio"/>
              <CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option3" autoComplete="off" label="Radio" disabled/>
              <CFormCheck :button="{ color: 'secondary' }" type="radio" name="options" id="option4" autoComplete="off" label="Radio"/>
            </CCol>
            <CCol md="4">
              <h5 class="mt-2 mb-2">Outlined styles</h5>
              <div> 
                <CFormCheck :button="{ color: 'primary', variant: 'outline' }" id="btn-check-outlined" autoComplete="off" label="Single toggle"/>
              </div>
              <div>
                <CFormCheck :button="{ color: 'secondary', variant: 'outline' }" id="btn-check-2-outlined" autoComplete="off" label="Checked" defaultChecked/>
              </div>
              <div>
                <CFormCheck :button="{ color: 'success', variant: 'outline' }" type="radio" name="options-outlined" id="success-outlined" autoComplete="off" label="Radio" defaultChecked/>
                <CFormCheck :button="{ color: 'danger', variant: 'outline' }" type="radio" name="options-outlined" id="danger-outlined" autoComplete="off" label="Radio"/>
              </div>
            </CCol>
            </CRow>
          </Example>
          <h4 class="mt-4">Range</h4>
          <Example href="forms/range.html#overview">
            <CRow>
            <CCol md="6">
              <CFormLabel for="customRange1">Example range</CFormLabel>
              <CFormRange id="customRange1"/>
            </CCol>
            <CCol md="6">
              <CFormLabel for="disabledRange">Disabled range</CFormLabel>
              <CFormRange id="disabledRange" disabled/>
            </CCol>
            <CCol md="6">
              <CFormLabel for="customRange2">Example range max="5"</CFormLabel>
              <CFormRange min="0" max="5" defaultValue="3" id="customRange2"/> 
            </CCol>
            <CCol md="6">
              <CFormLabel for="customRange3">Example range step="0.5"</CFormLabel>
              <CFormRange min="0" max="5" step="0.5" defaultValue="3" id="customRange3"/> 
            </CCol>
            </CRow>
          </Example>
          <h4 class="mt-4">Floating labels</h4>
          <Example href="forms/floating-labels.html#example">
            <CRow>
            <CCol md="6">
              <h5 class="mt-2 mb-2">Input</h5>
              <CFormFloating class="mb-3">
                <CFormInput type="email" id="floatingInput" placeholder="name@example.com" />
                <CFormLabel for="floatingInput">Email address</CFormLabel>
              </CFormFloating>
              <CFormFloating>
                <CFormInput type="password" id="floatingPassword" placeholder="Password" />
                <CFormLabel for="exampleFormControlPassword">Password</CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md="6">
              <h5 class="mt-2 mb-2">Input with value</h5>
              <CFormFloating>
                <CFormInput
                  type="email"
                  id="floatingInputValue"
                  placeholder="name@example.com"
                  value="test@example.com"
                />
                <CFormLabel for="floatingInputValue">Input with value</CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md="6">
              <h5 class="mt-2 mb-2">Text areas</h5>
              <CFormFloating>
                <CFormTextarea
                  id="floatingTextarea"
                  placeholder="Leave a comment here"
                ></CFormTextarea>
                <CFormLabel for="floatingTextarea">Comments</CFormLabel>
              </CFormFloating>
            </CCol>
            <CCol md="6">
              <h5 class="mt-2 mb-2">Select</h5>
              <CFormFloating>
                <CFormSelect id="floatingSelect" aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
                <CFormLabel for="floatingSelect">Works with selects</CFormLabel>
              </CFormFloating>
            </CCol>
            </CRow>
          </Example>
          <h4 class="mt-4">Vue input group (basic example)</h4>
          <Example href="forms/input-group.html#basic-example">
            <CInputGroup class="mb-3">
              <CInputGroupText id="basic-addon1">@</CInputGroupText>
              <CFormInput placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
            </CInputGroup>
            <CInputGroup class="mb-3">
              <CFormInput placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <CInputGroupText id="basic-addon2">@example.com</CInputGroupText>
            </CInputGroup>
            <CFormLabel for="basic-url">Your vanity URL</CFormLabel>
            <CInputGroup class="mb-3">
              <CInputGroupText id="basic-addon3">https://example.com/users/</CInputGroupText>
              <CFormInput id="basic-url" aria-describedby="basic-addon3"/>
            </CInputGroup>
            <CInputGroup class="mb-3">
              <CInputGroupText>$</CInputGroupText>
              <CFormInput aria-label="Amount (to the nearest dollar)"/>
              <CInputGroupText>.00</CInputGroupText>
            </CInputGroup>
            <CInputGroup class="mb-3">
              <CFormInput placeholder="Username" aria-label="Username"/>
              <CInputGroupText>@</CInputGroupText>
              <CFormInput placeholder="Server" aria-label="Server"/>
            </CInputGroup>
            <CInputGroup>
              <CInputGroupText>With textarea</CInputGroupText>
              <CFormTextarea aria-label="With textarea"></CFormTextarea>
            </CInputGroup>
          </Example>

          <CRow>
          <CCol md="6">
          <h4 class="mt-4">Input group sizing</h4>
          <Example href="forms/input-group.html#sizing">
            <CInputGroup size="sm" class="mb-3">
              <CInputGroupText id="inputGroup-sizing-sm">Small</CInputGroupText>
              <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
            </CInputGroup>
            <CInputGroup class="mb-3">
              <CInputGroupText id="inputGroup-sizing-default">Default</CInputGroupText>
              <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </CInputGroup>
            <CInputGroup size="lg">
              <CInputGroupText id="inputGroup-sizing-lg">Large</CInputGroupText>
              <CFormInput aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
            </CInputGroup>
          </Example>
          </CCol>
          <CCol md="6">
            <h4 class="mt-4">Checkboxes and radios</h4>
            <Example href="forms/input-group.html#checkboxes-and-radios">
              <CInputGroup class="mb-3">
                <CInputGroupText>
                  <CFormCheck type="checkbox" value="" aria-label="Checkbox for following text input"/>
                </CInputGroupText>
                <CFormInput aria-label="Text input with checkbox"/>
              </CInputGroup>
              <CInputGroup>
                <CInputGroupText>
                  <CFormCheck type="radio" value="" aria-label="Radio button for following text input"/>
                </CInputGroupText>
                <CFormInput aria-label="Text input with radio button"/>
              </CInputGroup>
            </Example> 
          </CCol>
          <CCol md="6">
            <h4 class="mt-4">Multiple inputs</h4>
            <Example href="forms/input-group.html#multiple-inputs">
              <CInputGroup>
                <CInputGroupText>First and last name</CInputGroupText>
                <CFormInput aria-label="First name"/>
                <CFormInput aria-label="Last name"/>
              </CInputGroup>
            </Example> 
          </CCol>
          <CCol md="6">

            <h4 class="mt-4">Multiple addons</h4>
            <Example href="forms/input-group.html#multiple-addons">
              <CInputGroup class="mb-3">
                <CInputGroupText>$</CInputGroupText>
                <CInputGroupText>0.00</CInputGroupText>
                <CFormInput aria-label="Dollar amount (with dot and two decimal places)"/>
              </CInputGroup>
              <CInputGroup>
                <CFormInput aria-label="Dollar amount (with dot and two decimal places)"/>
                <CInputGroupText>$</CInputGroupText>
                <CInputGroupText>0.00</CInputGroupText>
              </CInputGroup>
            </Example> 

          </CCol>
          <CCol md="6">

            <h4 class="mt-4">Button addons</h4>
            <Example href="forms/input-group.html#button-addons">
              <CInputGroup class="mb-3">
                <CButton type="button" color="secondary" variant="outline" id="button-addon1">Button</CButton>
                <CFormInput placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CFormInput placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <CButton type="button" color="secondary" variant="outline" id="button-addon2">Button</CButton>
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CButton type="button" color="secondary" variant="outline">Button</CButton>
                <CButton type="button" color="secondary" variant="outline">Button</CButton>
                <CFormInput placeholder="" aria-label="Example text with two button addons"/>
              </CInputGroup>
              <CInputGroup>
                <CFormInput placeholder="Recipient's username" aria-label="Recipient's username with two button addons"/>
                <CButton type="button" color="secondary" variant="outline">Button</CButton>
                <CButton type="button" color="secondary" variant="outline">Button</CButton>
              </CInputGroup>

            </Example> 

          </CCol>
          <CCol md="6">

            <h4 class="mt-4">Buttons with dropdowns</h4>
            <Example href="forms/input-group.html#buttons-with-dropdowns">
              <CInputGroup class="mb-3">
                <CDropdown variant="input-group"> 
                  <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider/>
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with dropdown button"/>
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CFormInput aria-label="Text input with dropdown button"/>
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider/>
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>
              <CInputGroup>
                <CDropdown variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider/>
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with 2 dropdown buttons"/>
                <CDropdown alignment="end" variant="input-group">
                  <CDropdownToggle color="secondary" variant="outline">Dropdown</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider/>
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>

            </Example> 

          </CCol>
          <CCol md="6">
            <h4 class="mt-4">Segmented buttons</h4>
            <Example href="forms/input-group.html#segmented-buttons">
              <CInputGroup class="mb-3">
                <CDropdown variant="input-group">
                  <CButton type="button" color="secondary" variant="outline">Action</CButton>
                  <CDropdownToggle color="secondary" variant="outline" split/>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider/>
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CFormInput aria-label="Text input with segmented dropdown button"/>
              </CInputGroup>
              <CInputGroup>
                <CFormInput aria-label="Text input with segmented dropdown button"/>
                <CDropdown alignment="end" variant="input-group">
                  <CButton type="button" color="secondary" variant="outline">Action</CButton>
                  <CDropdownToggle color="secondary" variant="outline" split/>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>
                    <CDropdownItem href="#">Something else here</CDropdownItem>
                    <CDropdownDivider/>
                    <CDropdownItem href="#">Separated link</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CInputGroup>
            </Example> 
          </CCol>
          <CCol md="6">
            <h4 class="mt-4">Custom select</h4>
            <Example href="forms/input-group.html#custom-select">
              <CInputGroup class="mb-3">
                <CInputGroupText component="label" for="inputGroupSelect01">Options</CInputGroupText>
                <CFormSelect id="inputGroupSelect01">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CFormSelect id="inputGroupSelect02">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
                <CInputGroupText component="label" for="inputGroupSelect02">Options</CInputGroupText>
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CButton type="button" color="secondary" variant="outline">Button</CButton>
                <CFormSelect id="inputGroupSelect03" aria-label="Example select with button addon">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
              </CInputGroup>
              <CInputGroup>
                <CFormSelect id="inputGroupSelect04" aria-label="Example select with button addon">
                  <option>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </CFormSelect>
                <CButton type="button" color="secondary" variant="outline">Button</CButton>
              </CInputGroup>
            </Example> 
          </CCol>
          <CCol md="6">
            <h4 class="mt-4">Custom file input</h4>
            <Example href="forms/input-group.html#custom-file-input">
              <CInputGroup class="mb-3">
                <CInputGroupText component="label" for="inputGroupFile01">Upload</CInputGroupText>
                <CFormInput type="file" id="inputGroupFile01"/>
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CFormInput type="file" id="inputGroupFile02"/>
                <CInputGroupText component="label" for="inputGroupFile02">Upload</CInputGroupText>
              </CInputGroup>
              <CInputGroup class="mb-3">
                <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon03">Button</CButton>
                <CFormInput type="file" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" aria-label="Upload"/>
              </CInputGroup>
              <CInputGroup>
                <CFormInput type="file" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
                <CButton type="button" color="secondary" variant="outline" id="inputGroupFileAddon04">Button</CButton>
              </CInputGroup>
            </Example> 
          </CCol>
          </CRow>
          <CRow>
          <CCol md="8">
            <h4 class="mt-4">Horizonstal form</h4>
            <Example href="forms/layout.html#horizontal-form">
              <CForm>
                <CRow class="mb-3">
                  <CFormLabel for="inputEmail3" class="col-sm-2 col-form-label">Email</CFormLabel>
                  <CCol sm="10">
                    <CFormInput type="email" id="inputEmail3"/>
                  </CCol>
                </CRow>
                <CRow class="mb-3">
                  <CFormLabel for="inputPassword3" class="col-sm-2 col-form-label">Password</CFormLabel>
                  <CCol sm="10">
                    <CFormInput type="password" id="inputPassword3"/>
                  </CCol>
                </CRow>
                <fieldset class="row mb-3">
                  <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                  <CCol sm="10">
                    <CFormCheck type="radio" name="gridRadios" id="gridRadios1" value="option1" label="First radio" defaultChecked/>
                    <CFormCheck type="radio" name="gridRadios" id="gridRadios2" value="option2" label="Second radio"/>
                    <CFormCheck type="radio" name="gridRadios" id="gridRadios3" value="option3" label="Third disabled radio" disabled/>
                  </CCol>
                </fieldset>
                <CRow class="mb-3">
                  <div class="col-sm-10 offset-sm-2">
                    <CFormCheck type="checkbox" id="gridCheck1" label="Example checkbox"/>
                  </div>
                </CRow>
                <CButton type="submit">Sign in</CButton>
              </CForm>
            </Example>

          </CCol>
          </CRow>
            <h4 class="mt-4">Vue form validation custom styles</h4>
            <Example href="forms/validation.html#custom-styles">
            <CForm class="row g-3 needs-validation" noValidate :validated="validatedCustom01" @submit="handleSubmitCustom01">
              <CCol md="4">
                <CFormLabel for="validationCustom01">Email</CFormLabel>
                <CFormInput id="validationCustom01" defaultValue="Mark" required/>
                <CFormFeedback valid>
                  Looks good!
                </CFormFeedback>
              </CCol>
              <CCol md="4">
                <CFormLabel for="validationCustom02">Email</CFormLabel>
                <CFormInput id="validationCustom02" defaultValue="Otto" required/>
                <CFormFeedback valid>
                  Looks good!
                </CFormFeedback>
              </CCol>
              <CCol md="4">
                <CFormLabel for="validationCustomUsername">Username</CFormLabel>
                <CInputGroup class="has-validation">
                  <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
                  <CFormInput id="validationCustomUsername" defaultValue="" aria-describedby="inputGroupPrepend" required/>
                  <CFormFeedback invalid>
                  Please choose a username.
                  </CFormFeedback>
                </CInputGroup>
              </CCol>
              <CCol md="6">
                <CFormLabel for="validationCustom03">City</CFormLabel>
                <CFormInput id="validationCustom03" required/>
                <CFormFeedback invalid>
                  Please provide a valid city.
                </CFormFeedback>
              </CCol>
              <CCol md="3">
                <CFormLabel for="validationCustom04">City</CFormLabel>
                <CFormSelect id="validationCustom04">
                  <option disabled>Choose...</option>
                  <option>...</option>
                </CFormSelect>
                <CFormFeedback invalid>
                  Please provide a valid city.
                </CFormFeedback>
              </CCol>
              <CCol md="3">
                <CFormLabel for="validationCustom05">City</CFormLabel>
                <CFormInput id="validationCustom05" required/>
                <CFormFeedback invalid>
                  Please provide a valid zip.
                </CFormFeedback>
              </CCol>
              <CCol xs="12">
                <CFormCheck type="checkbox" id="invalidCheck" label="Agree to terms and conditions" required/>
                <CFormFeedback invalid>
                  You must agree before submitting.
                </CFormFeedback>
              </CCol>
              <CCol xs="12">
                <CButton color="primary" type="submit">Submit form</CButton>
              </CCol>
            </CForm>
            </Example>

            <h4 class="mt-4">Vue form validation browser defaults</h4>
            <Example href="forms/validation.html#browser-defaults">
              <CForm class="row g-3 needs-validation" :validated="validatedDefault01" @submit="handleSubmitDefault01">
                <CCol md="4">
                  <CFormLabel for="validationDefault01">Email</CFormLabel>
                  <CFormInput id="validationDefault01" defaultValue="Mark" required/>
                  <CFormFeedback valid>
                    Looks good!
                  </CFormFeedback>
                </CCol>
                <CCol md="4">
                  <CFormLabel for="validationDefault02">Email</CFormLabel>
                  <CFormInput id="validationDefault02" defaultValue="Otto" required/>
                  <CFormFeedback valid>
                    Looks good!
                  </CFormFeedback>
                </CCol>
                <CCol md="4">
                  <CFormLabel for="validationDefaultUsername">Username</CFormLabel>
                  <CInputGroup class="has-validation">
                    <CInputGroupText id="inputGroupPrepend02">@</CInputGroupText>
                    <CFormInput id="validationDefaultUsername" defaultValue="" aria-describedby="inputGroupPrepend02" required/>
                    <CFormFeedback invalid>
                    Please choose a username.
                    </CFormFeedback>
                  </CInputGroup>
                </CCol>
                <CCol md="6">
                  <CFormLabel for="validationDefault03">City</CFormLabel>
                  <CFormInput id="validationDefault03" required/>
                  <CFormFeedback invalid>
                    Please provide a valid city.
                  </CFormFeedback>
                </CCol>
                <CCol md="3">
                  <CFormLabel for="validationDefault04">City</CFormLabel>
                  <CFormSelect id="validationDefault04">
                    <option disabled>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                  <CFormFeedback invalid>
                    Please provide a valid city.
                  </CFormFeedback>
                </CCol>
                <CCol md="3">
                  <CFormLabel for="validationDefault05">City</CFormLabel>
                  <CFormInput id="validationDefault05" required/>
                  <CFormFeedback invalid>
                    Please provide a valid zip.
                  </CFormFeedback>
                </CCol>
                <CCol xs="12">
                  <CFormCheck type="checkbox" id="invalidCheck" label="Agree to terms and conditions" required/>
                  <CFormFeedback invalid>
                    You must agree before submitting.
                  </CFormFeedback>
                </CCol>
                <CCol xs="12">
                  <CButton color="primary" type="submit">Submit form</CButton>
                </CCol>
              </CForm>
            </Example>



            <h4 class="mt-4">Validation styles for components</h4>
            <Example href="forms/validation.html#supported-elements">
              <CForm :validated="true">
                <div class="mb-3">
                  <CFormLabel for="validationTextarea" class="form-label">Textarea</CFormLabel>
                  <CFormTextarea id="validationTextarea" placeholder="Required example textarea" invalid required></CFormTextarea>
                  <CFormFeedback invalid>
                    Please enter a message in the textarea.
                  </CFormFeedback>
                </div>
                <CFormCheck class="mb-3" id="validationFormCheck1" label="Check this checkbox" required/>
                <CFormFeedback invalid>Example invalid feedback text</CFormFeedback>
                <CFormCheck type="radio" name="radio-stacked" id="validationFormCheck2" label="Check this checkbox" required/>
                <CFormCheck class="mb-3" type="radio" name="radio-stacked" id="validationFormCheck3" label="Or toggle this other radio" required/>
                <CFormFeedback invalid>More example invalid feedback text</CFormFeedback>
                <div class="mb-3">
                  <CFormSelect required aria-label="select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </CFormSelect>
                  <CFormFeedback invalid>Example invalid select feedback</CFormFeedback>
                </div>
                <div class="mb-3">
                  <CFormInput type="file" id="validationTextarea" aria-label="file example" required />
                  <CFormFeedback invalid>Example invalid form file feedback</CFormFeedback>
                </div>
                <div class="mb-3">
                  <CButton type="submit" color="primary" disabled>Submit form</CButton>
                </div>
              </CForm>
            </Example>
        </CCardBody>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
export default {
  name: "Forms",
    data: () => {
      return {
        validatedCustom01: null,
        validatedDefault01: null,
        validatedTooltip01: null,
      }
    },
    methods: {
      handleSubmitCustom01(event) {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        this.validatedCustom01 = true
      },
      handleSubmitDefault01(event) {
        const form = event.currentTarget
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        this.validatedDefault01 = true
      },
    }
};
</script>