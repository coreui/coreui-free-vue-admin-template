<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Credit Card</strong> <small>Form</small>
          </div>
          <b-row>
            <b-col sm="12">
              <b-form-fieldset label="Name">
                <b-form-input type="text" id="name" placeholder="Enter your name"></b-form-input>
              </b-form-fieldset>
            </b-col>
          </b-row><!--/.row-->
          <b-row>
            <b-col sm="12">
              <b-form-fieldset label="Credit Card Number">
                <b-form-input type="text" id="ccnumber" placeholder="0000 0000 0000 0000"></b-form-input>
              </b-form-fieldset>
            </b-col>
          </b-row><!--/.row-->
          <b-row>
            <b-col sm="4">
              <b-form-fieldset label="Month">
                <b-form-select
                  :plain="true"
                  :options="[1,2,3,4,5,6,7,8,9,10,11,12]">
                </b-form-select>
              </b-form-fieldset>
            </b-col><!--/.col-->
            <b-col sm="4">
              <b-form-fieldset label="Year">
                <b-form-select
                  :plain="true"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]">
                </b-form-select>
              </b-form-fieldset>
            </b-col><!--/.col-->
            <b-col sm="4">
              <b-form-fieldset label="CVV/CVC">
                <b-form-input type="text" id="cvv" placeholder="123"></b-form-input>
              </b-form-fieldset>
            </b-col><!--/.col-->
          </b-row><!--/.row-->
        </b-card>
      </b-col><!--/.col-->
      <b-col sm="6">
        <b-card>
          <div slot="header">
            <strong>Company</strong> <small>Form</small>
          </div>
          <b-form-fieldset label="Company">
            <b-form-input type="text" id="company" placeholder="Enter your company name"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset label="VAT">
            <b-form-input type="text" id="vat" placeholder="PL1234567890"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset label="Street">
            <b-form-input type="text" id="street" placeholder="Enter street name"></b-form-input>
          </b-form-fieldset>
          <b-row>
            <b-col sm="8">
              <b-form-fieldset label="City">
                <b-form-input type="text" id="city" placeholder="Enter your city"></b-form-input>
              </b-form-fieldset>
            </b-col><!--/.col-->
            <b-col sm="4">
              <b-form-fieldset label="Postal Code">
                <b-form-input type="text" id="postal-code" placeholder="Postal Code"></b-form-input>
              </b-form-fieldset>
            </b-col><!--/.col-->
          </b-row><!--/.row-->
          <b-form-fieldset label="Country">
            <b-form-input type="text" id="country" placeholder="Country name"></b-form-input>
          </b-form-fieldset>
        </b-card>
      </b-col><!--/.col-->
    </b-row><!--/.row-->
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Basic Form</strong> Elements
          </div>
          <b-form-fieldset
            description="Let us know your full name."
            label="Enter your name"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="text"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Static"
            :label-cols="3"
            :horizontal="true">
            <b-form-input plaintext type="text" value="Username"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            description="This is a help text"
            label="Text Input"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="text" placeholder="Text"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            description="Please enter your email"
            label="Email Input"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="email" placeholder="Enter your email"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            description="Please enter a complex password"
            label="Password Input"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="password" placeholder="Enter your password"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Disabled Input"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="text" :disabled="true" placeholder="Disabled"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Textarea"
            :label-cols="3"
            :horizontal="true">
            <b-form-input :textarea="true" :rows="9" placeholder="Content.."></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Select"
            :label-cols="3"
            :horizontal="true">
            <b-form-select
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              value="Please select">
            </b-form-select>
          </b-form-fieldset>
          <b-form-fieldset
            label="Select large"
            :label-cols="3"
            :horizontal="true">
            <b-form-select
              size="lg"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              value="Please select">
            </b-form-select>
          </b-form-fieldset>
          <b-form-fieldset
            label="Select small"
            :label-cols="3"
            :horizontal="true">
            <b-form-select
              size="sm"
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              value="Please select">
            </b-form-select>
          </b-form-fieldset>
          <b-form-fieldset
            label="Disabled select"
            :label-cols="3"
            :horizontal="true">
            <b-form-select
              :plain="true"
              :options="['Please select','Option 1', 'Option 2', 'Option 3']"
              :disabled="true"
              value="Please select">
            </b-form-select>
          </b-form-fieldset>
          <b-form-fieldset
            label="Select"
            :label-cols="3"
            :horizontal="true">
            <b-form-select
              :plain="true"
              :multiple="true"
              :options="[
                {
                  text: 'Please select some item',
                  value: null
                },
                {
                  text: 'This is First option',
                  value: 'a'
                }, {
                  text: 'Default Selected Option',
                  value: 'b'
                }, {
                  text: 'This is another option',
                  value: 'c'
                }, {
                  text: 'This one is disabled',
                  value: 'd',
                  disabled: true
                }]"
              :value="[null,'c']">
            </b-form-select>
          </b-form-fieldset>
          <b-form-fieldset
            label="Radios"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group
              :plain="true"
              :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
              value="1"
              stacked>
            </b-form-radio-group>
          </b-form-fieldset>
          <b-form-fieldset
            label="Radios - custom"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group
              :options="[
                {text: 'Option 1',value: '1'},
                {text: 'Option 2',value: '2'},
                {text: 'Option 3',value: '3'}
              ]"
              value="1"
              stacked>
            </b-form-radio-group>
          </b-form-fieldset>
          <b-form-fieldset
            label="Inline radios"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group
              :plain="true"
              :options="[
                {text: 'Option 1 ',value: '1'},
                {text: 'Option 2 ',value: '2'},
                {text: 'Option 3 ',value: '3'}
              ]"
              value="1">
            </b-form-radio-group>
          </b-form-fieldset>
          <b-form-fieldset
            label="Inline radios - custom"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio-group
              :options="[
                {text: 'Option 1',value: '1'},
                {text: 'Option 2',value: '2'},
                {text: 'Option 3',value: '3'}
              ]"
              value="1">
            </b-form-radio-group>
          </b-form-fieldset>
          <b-form-fieldset
            label="Checkboxes"
            :label-cols="3"
            :horizontal="true">
              <b-form-checkbox :plain="true" value="1">Option 1</b-form-checkbox><br>
              <b-form-checkbox :plain="true" value="2">Option 2</b-form-checkbox><br>
              <b-form-checkbox :plain="true" value="3">Option 3</b-form-checkbox><br>
          </b-form-fieldset>
          <b-form-fieldset
            label="Inline checkboxes"
            :label-cols="3"
            :horizontal="true">
              <b-form-checkbox :plain="true" value="1">Option 1</b-form-checkbox>
              <b-form-checkbox :plain="true" value="2">Option 2</b-form-checkbox>
              <b-form-checkbox :plain="true" value="3">Option 3</b-form-checkbox>
          </b-form-fieldset>
          <b-form-fieldset
            label="Checkboxes - custom"
            :label-cols="3"
            :horizontal="true">
              <b-form-checkbox value="1">Option 1</b-form-checkbox><br>
              <b-form-checkbox value="2">Option 2</b-form-checkbox><br>
              <b-form-checkbox value="3">Option 3</b-form-checkbox><br>
          </b-form-fieldset>
          <b-form-fieldset
            label="Inline checkboxes - custom"
            :label-cols="3"
            :horizontal="true">
              <b-form-checkbox value="1">Option 1</b-form-checkbox>
              <b-form-checkbox value="2">Option 2</b-form-checkbox>
              <b-form-checkbox value="3">Option 3</b-form-checkbox>
          </b-form-fieldset>
          <b-form-fieldset
            label="File input"
            :label-cols="3"
            :horizontal="true">
              <b-form-file :plain="true"></b-form-file>
          </b-form-fieldset>
          <b-form-fieldset
            label="Multiple file input"
            :label-cols="3"
            :horizontal="true">
              <b-form-file :plain="true" :multiple="true"></b-form-file>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Inline</strong> Form
          </div>
          <!-- Bootstrap Vue has some problems with Inline forms that's why we use some standard bootstrap classes -->
          <b-form inline>
            <label class="mr-sm-2" for="inlineInput1">Name: </label>
            <b-input id="inlineInput1" type="text" placeholder="Jane Doe"></b-input>
            <label class="mr-sm-2" for="inlineInput2">Email: </label>
            <b-input id="inlineInput2" type="email" placeholder="jane.doe@example.com"></b-input>
          </b-form>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <div slot="header">
            <strong>Horizontal</strong> Form
          </div>
          <b-form-fieldset
            label="Email"
            description="Please enter your email."
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="email" placeholder="Enter Email.."></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Password"
            description="Please enter your password."
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="email" placeholder="Enter Password.."></b-form-input>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
        <b-card>
          <div slot="header">
            <strong>Normal</strong> Form
          </div>
          <b-form-fieldset
            label="Email"
            description="Please enter your email.">
            <b-form-input type="email" placeholder="Enter Email.."></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Password"
            description="Please enter your password.">
            <b-form-input type="email" placeholder="Enter Password.."></b-form-input>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
        <b-card no-body :no-block="true">
          <div slot="header">
            Input <strong>Grid</strong>
          </div>
          <b-card-body>
            <b-row class="form-group">
              <b-col sm="3">
                <b-form-input type="text" placeholder=".col-sm-3"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="4">
                <b-form-input type="text" placeholder=".col-sm-4"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="5">
                <b-form-input type="text" placeholder=".col-sm-5"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="6">
                <b-form-input type="text" placeholder=".col-sm-6"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="7">
                <b-form-input type="text" placeholder=".col-sm-7"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="8">
                <b-form-input type="text" placeholder=".col-sm-8"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="9">
                <b-form-input type="text" placeholder=".col-sm-9"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="10">
                <b-form-input type="text" placeholder=".col-sm-10"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="11">
                <b-form-input type="text" placeholder=".col-sm-11"></b-form-input>
              </b-col>
            </b-row>
            <b-row class="form-group">
              <b-col sm="12">
                <b-form-input type="text" placeholder=".col-sm-12"></b-form-input>
              </b-col>
            </b-row>
          </b-card-body>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-user"></i> Login</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
        <b-card>
          <div slot="header">
            Input <strong>Sizes</strong>
          </div>
          <b-form-fieldset
            label="Small input"
            :label-cols="5"
            :horizontal="true">
            <b-form-input type="text" size="sm" placeholder="size='sm'"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Normal  input"
            :label-cols="5"
            :horizontal="true">
            <b-form-input type="text" placeholder="normal"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Large input"
            :label-cols="5"
            :horizontal="true">
            <b-form-input type="text" size="lg" placeholder="size='lg'"></b-form-input>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Validation feedback</strong> Form
          </div>
          <b-card-body>
            <b-form-group>
              <label class="col-form-label" for="inputIsValid">Input is valid</label>
              <input type="text" class="form-control is-valid" id="inputIsValid">
              <b-form-valid-feedback>
                Input is valid.
              </b-form-valid-feedback>
            </b-form-group>
            <b-form-group>
              <label class="col-form-label" for="inputIsInvalid">Input is invalid</label>
              <input type="text" class="form-control is-invalid" id="inputIsInvalid">
              <b-form-invalid-feedback>
                Please provide a valid information.
              </b-form-invalid-feedback>
            </b-form-group>
          </b-card-body>
        </b-card>
      </b-col>
      <b-col sm="12" md="6">
        <b-card no-body :no-block="true">
          <div slot="header">
            <strong>Validation feedback</strong> Form
          </div>
          <b-card-body>
            <b-form validated novalidate>
              <b-form-group label-for="inputSuccess2" label="Non-required input">
                <b-form-input type="text" class="form-control-success" id="inputSuccess2"></b-form-input>
                <b-form-valid-feedback>
                  Input is not required.
                </b-form-valid-feedback>
              </b-form-group>
              <b-form-group label-for="inputError2" label="Required input">
                <b-form-input type="text" class="form-control-warning" id="inputError2" required></b-form-input>
                <b-form-valid-feedback>
                  Input provided.
                </b-form-valid-feedback>
                <b-form-invalid-feedback>
                  Please provide a required input.
                </b-form-invalid-feedback>
              </b-form-group>
            </b-form>
          </b-card-body>
        </b-card>
      </b-col><!--/.col-->
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Icon/Text</strong> Groups
          </div>
          <b-form-fieldset>
            <b-input-group left="<i class='fa fa-user'></i>">
              <b-form-input type="text" placeholder="Username"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group right="<i class='fa fa-envelope-o'></i>">
              <b-form-input type="email" placeholder="Email"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group left="<i class='fa fa-euro'></i>" right=".00">
              <b-form-input type="text" placeholder="ex. $1.000.000"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Buttons</strong> Groups
          </div>
          <b-form-fieldset>
            <b-input-group>
              <b-form-input type="text" placeholder="Username"></b-form-input>
              <!-- Attach Left button -->
              <b-input-group-button slot="left">
                <b-button variant="primary">
                  <i class="fa fa-search"></i> Search
                </b-button>
              </b-input-group-button>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group>
              <b-form-input type="email" placeholder="Email"></b-form-input>
              <!-- Attach Right button -->
              <b-input-group-button slot="right">
                <b-button variant="primary">Submit</b-button>
              </b-input-group-button>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group>
              <b-form-input type="email" placeholder="Email"></b-form-input>
              <!-- Attach Right button -->
              <b-input-group-button slot="left">
                <b-button variant="primary"><i class="fa fa-facebook"></i></b-button>
              </b-input-group-button>
              <b-input-group-button slot="right">
                <b-button variant="primary"><i class="fa fa-twitter"></i></b-button>
              </b-input-group-button>
            </b-input-group>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            <strong>Dropdowns</strong> Groups
          </div>
          <b-form-fieldset>
              <b-input-group>
                <!-- Attach Left button -->
                <b-input-group-button slot="left">
                  <b-dropdown text="Action" variant="primary">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here...</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                  </b-dropdown>
                </b-input-group-button>
                <b-form-input placeholder="Username"></b-form-input>
              </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
              <b-input-group>
                <b-form-input placeholder="Email"></b-form-input>
                <!-- Attach Right button -->
                <b-input-group-button slot="right">
                  <b-dropdown text="Action" variant="primary">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here...</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                  </b-dropdown>
                </b-input-group-button>
              </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
              <b-input-group>
                <!-- Attach Left button -->
                <b-input-group-button slot="left">
                  <b-dropdown text="Split" variant="primary" split>
                    <b-dropdown-item href="#">Action</b-dropdown-item>
                    <b-dropdown-item href="#">Another action</b-dropdown-item>
                    <b-dropdown-item href="#">Something else here...</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                  </b-dropdown>
                </b-input-group-button>
                <b-form-input placeholder="..."></b-form-input>
                <!-- Attach Right button -->
                <b-input-group-button slot="right">
                  <b-dropdown text="Action" variant="primary">
                    <b-dropdown-item>Action</b-dropdown-item>
                    <b-dropdown-item>Another action</b-dropdown-item>
                    <b-dropdown-item>Something else here...</b-dropdown-item>
                    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
                  </b-dropdown>
                </b-input-group-button>
              </b-input-group>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="success"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="6">
        <b-card>
          <div slot="header">
            Use the grid for big devices! <small><code>.col-lg-*</code> <code>.col-md-*</code> <code>.col-sm-*</code></small>
          </div>
          <b-row class="form-group">
            <b-col md="8">
              <b-form-input type="text" placeholder=".col-md-8"></b-form-input>
            </b-col>
            <b-col md="4">
              <b-form-input type="text" placeholder=".col-md-4"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="7">
              <b-form-input type="text" placeholder=".col-md-7"></b-form-input>
            </b-col>
            <b-col md="5">
              <b-form-input type="text" placeholder=".col-md-5"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="6">
              <b-form-input type="text" placeholder=".col-md-6"></b-form-input>
            </b-col>
            <b-col md="6">
              <b-form-input type="text" placeholder=".col-md-6"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="5">
              <b-form-input type="text" placeholder=".col-md-5"></b-form-input>
            </b-col>
            <b-col md="7">
              <b-form-input type="text" placeholder=".col-md-7"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col md="4">
              <b-form-input type="text" placeholder=".col-md-4"></b-form-input>
            </b-col>
            <b-col md="8">
              <b-form-input type="text" placeholder=".col-md-8"></b-form-input>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary">Action</b-button>
            <b-button type="button" size="sm" variant="danger">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-warning">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-info">Action</b-button>
            <b-button type="button" size="sm" variant="success">Action</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card>
          <div slot="header">
            Input Grid for small devices! <small> <code>.col-*</code></small>
          </div>
          <b-row class="form-group">
            <b-col cols="4">
              <b-form-input type="text" placeholder=".col-4"></b-form-input>
            </b-col>
            <b-col cols="8">
              <b-form-input type="text" placeholder=".col-8"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="5">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
            <b-col cols="7">
              <b-form-input type="text" placeholder=".col-7"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="6">
              <b-form-input type="text" placeholder=".col-6"></b-form-input>
            </b-col>
            <b-col cols="6">
              <b-form-input type="text" placeholder=".col-6"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="7">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
            <b-col cols="5">
              <b-form-input type="text" placeholder=".col-5"></b-form-input>
            </b-col>
          </b-row>
          <b-row class="form-group">
            <b-col cols="8">
              <b-form-input type="text" placeholder=".col-8"></b-form-input>
            </b-col>
            <b-col cols="4">
              <b-form-input type="text" placeholder=".col-4"></b-form-input>
            </b-col>
          </b-row>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary">Action</b-button>
            <b-button type="button" size="sm" variant="danger">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-warning">Action</b-button>
            <b-button type="button" class="btn btn-sm btn-info">Action</b-button>
            <b-button type="button" size="sm" variant="success">Action</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form-fieldset>
            <b-input-group left="Username" right="<i class='fa fa-user'></i>">
              <b-form-input type="text"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group left="Email" right="<i class='fa fa-envelope'></i>">
              <b-form-input type="email"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group left="Password" right="<i class='fa fa-asterisk'></i>">
              <b-form-input type="password"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <div class="form-group form-actions">
            <b-button type="submit" size="sm" variant="primary">Submit</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form-fieldset>
            <b-input-group right="<i class='fa fa-user'></i>">
              <b-form-input type="text" placeholder="Username"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group right="<i class='fa fa-envelope'></i>">
              <b-form-input type="email" placeholder="Email"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group right="<i class='fa fa-asterisk'></i>">
              <b-form-input type="password" placeholder="Password"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <div class="form-group form-actions">
            <b-button type="submit" class="btn btn-sm btn-secondary">Submit</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col sm="4">
        <b-card>
          <div slot="header">
            Example Form
          </div>
          <b-form-fieldset>
            <b-input-group left="<i class='fa fa-user'></i>">
              <b-form-input type="text" placeholder="Username"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group left="<i class='fa fa-envelope'></i>">
              <b-form-input type="email" placeholder="Email"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset>
            <b-input-group left="<i class='fa fa-asterisk'></i>">
              <b-form-input type="password" placeholder="Password"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <div class="form-group form-actions">
            <b-button type="submit" size="sm" variant="success">Submit</b-button>
          </div>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col lg="12">
        <b-card>
          <div slot="header">
            <i class="fa fa-edit"></i> Form Elements
          </div>
          <b-form-fieldset label="Prepended text" description="Here's some help text">
            <b-input-group left="@">
              <b-form-input type="email"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset label="Appended text" description="Here's some help text">
            <b-input-group right=".00">
              <b-form-input type="text"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset label="Append and prepend" description="Here's some help text">
            <b-input-group left="$" right=".00">
              <b-form-input type="text"></b-form-input>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset label="Append with button" description="Here's some help text">
            <b-input-group>
              <b-form-input type="text"></b-form-input>
              <b-input-group-button slot="right">
                <b-button variant="primary">Go!</b-button>
              </b-input-group-button>
            </b-input-group>
          </b-form-fieldset>
          <b-form-fieldset label="Two-buttons append">
            <b-input-group>
              <b-form-input type="text"></b-form-input>
              <b-input-group-button slot="right">
                <b-button variant="primary">Search</b-button>
              </b-input-group-button>
              <b-input-group-button slot="right">
                <b-button variant="danger">Options</b-button>
              </b-input-group-button>
            </b-input-group>
          </b-form-fieldset>
          <div class="form-actions">
            <b-button type="submit" variant="primary">Save changes</b-button>
            <b-button type="button" variant="secondary">Cancel</b-button>
          </div>
        </b-card>
      </b-col><!--/.col-->
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'forms',
  methods: {
    click () {
      // do nothing
    }
  }
}
</script>
