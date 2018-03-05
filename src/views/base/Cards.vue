<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="6" md="4">
        <b-card header="Card title">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card show-footer>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <div slot="footer">Card footer</div>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="<i class='fa fa-check'></i> Card with icon">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card>
          <div slot="header">
            Card with switch
            <label class="switch switch-sm switch-text switch-info float-right mb-0">
              <input type="checkbox" class="switch-input">
              <span class="switch-label" data-on="On" data-off="Off"></span>
              <span class="switch-handle"></span>
            </label>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card>
          <div slot="header">
            Card with label
            <b-badge variant="success" class="float-right">Success</b-badge>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card>
          <div slot="header">
            Card with label
            <b-badge pill variant="danger" class="float-right">42</b-badge>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="6" md="4">
        <b-card header="Card outline" border-variant="primary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline" border-variant="secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline" border-variant="success">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline" border-variant="info">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline" border-variant="warning">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card outline" border-variant="danger">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
    </b-row><!--/.row-->

    <b-row>
      <b-col sm="6" md="4">
        <b-card class="card-accent-primary" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-secondary" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-success" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-info" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-warning" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="card-accent-danger" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="6" md="4">
        <b-card class="bg-primary text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-success text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-info text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-warning text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-danger text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card class="bg-secondary text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </b-col>
    </b-row><!--/.row-->
    <b-row>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-primary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-success">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-info">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-warning">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-danger">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
      <b-col sm="6" md="4">
        <b-card header="Card title" class="bg-secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </b-col>
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'cards'
}
</script>
