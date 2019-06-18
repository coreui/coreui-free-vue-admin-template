<template>
  <div>
    <div class="c-card">
      <div class="c-card-header">
        Headings
      </div>
      <div class="c-card-body">
        <p>Documentation and examples for Bootstrap typography,
          including global settings, headings, body text, lists, and more.</p>
        <table class="c-table">
          <thead>
            <tr>
              <th>Heading</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <p>
                  <code class="c-highlighter-rouge">
                    &lt;h1&gt;&lt;/h1&gt;
                  </code>
                </p>
              </td>
              <td><span class="c-h1">h1. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p>
                  <code class="c-highlighter-rouge">
                    &lt;h2&gt;&lt;/h2&gt;
                  </code>
                </p>
              </td>
              <td><span class="c-h2">h2. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p>
                  <code class="c-highlighter-rouge">
                    &lt;h3&gt;&lt;/h3&gt;
                  </code>
                </p>
              </td>
              <td><span class="c-h3">h3. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p>
                  <code class="c-highlighter-rouge">
                    &lt;h4&gt;&lt;/h4&gt;
                  </code>
                </p>
              </td>
              <td><span class="c-h4">h4. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p>
                  <code class="c-highlighter-rouge">
                    &lt;h5&gt;&lt;/h5&gt;
                  </code>
                </p>
              </td>
              <td><span class="c-h5">h5. Bootstrap heading</span></td>
            </tr>
            <tr>
              <td>
                <p>
                  <code class="c-highlighter-rouge">
                    &lt;h6&gt;&lt;/h6&gt;
                  </code>
                </p>
              </td>
              <td><span class="c-h6">h6. Bootstrap heading</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="c-card">
      <div class="c-card-header">
        Headings
      </div>
      <div class="c-card-body">
        <p>
          <code class="c-highlighter-rouge">.h1</code> through
          <code class="c-highlighter-rouge">.h6</code>
          classes are also available, for when you want to match the font
          styling of a heading but cannot use the associated HTML element.
        </p>
        <div class="c-bd-example">
          <p class="c-h1">h1. Bootstrap heading</p>
          <p class="c-h2">h2. Bootstrap heading</p>
          <p class="c-h3">h3. Bootstrap heading</p>
          <p class="c-h4">h4. Bootstrap heading</p>
          <p class="c-h5">h5. Bootstrap heading</p>
          <p class="c-h6">h6. Bootstrap heading</p>
        </div>
      </div>
    </div>
    <div class="c-card">
      <div class="c-card-header">
        Display headings
      </div>
      <div class="c-card-body">
        <p>
          Traditional heading elements are designed to work best in the meat
          of your page content. When you need a heading to stand out,
          consider using a <strong>display heading</strong>—a larger,
           slightly more opinionated heading style.
        </p>
        <div class="c-bd-example c-bd-example-type">
          <table class="c-table">
            <tbody>
              <tr>
                <td><span class="c-display-1">Display 1</span></td>
              </tr>
              <tr>
                <td><span class="c-display-2">Display 2</span></td>
              </tr>
              <tr>
                <td><span class="c-display-3">Display 3</span></td>
              </tr>
              <tr>
                <td><span class="c-display-4">Display 4</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="c-card">
      <div class="c-card-header">
        Inline text elements
      </div>
      <div class="c-card-body">
        <p>
          Traditional heading elements are designed to work best in the meat
          of your page content. When you need a heading to stand out,
          consider using a <strong>display heading</strong>—a larger,
          slightly more opinionated heading style.
        </p>
        <div class="c-bd-example">
          <p>You can use the mark tag to <mark>highlight</mark> text.</p>
          <p><del>
            This line of text is meant to be treated as deleted text.
          </del></p>
          <p><s>
            This line of text is meant to be treated as no longer accurate.
          </s></p>
          <p><ins>
            This line of text is meant to be treated as an addition to the document.
          </ins></p>
          <p><u>This line of text will render as underlined</u></p>
          <p><small>
            This line of text is meant to be treated as fine print.
          </small></p>
          <p><strong>This line rendered as bold text.</strong></p>
          <p><em>This line rendered as italicized text.</em></p>
        </div>
      </div>
    </div>
    <div class="c-card">
      <div class="c-card-header">
        Description list alignment
      </div>
      <div class="c-card-body">
        <p>
          Align terms and descriptions horizontally by using our grid system’s
          predefined classes (or semantic mixins). For longer terms, you can
          optionally add a <code class="highlighter-rouge">.text-truncate</code>
          class to truncate the text with an ellipsis.
        </p>
        <div class="c-bd-example">
          <dl class="c-row">
            <dt class="c-col-sm-3">Description lists</dt>
            <dd class="c-col-sm-9">
              A description list is perfect for defining terms.
            </dd>

            <dt class="c-col-sm-3">Euismod</dt>
            <dd class="c-col-sm-9">
              <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
              <p>Donec id elit non mi porta gravida at eget metus.</p>
            </dd>

            <dt class="c-col-sm-3">Malesuada porta</dt>
            <dd class="c-col-sm-9">
              Etiam porta sem malesuada magna mollis euismod.
            </dd>

            <dt class="c-col-sm-3 text-truncate">Truncated term is truncated</dt>
            <dd class="c-col-sm-9">
              Fusce dapibus, tellus ac cursus commodo, tortor mauris
              condimentum nibh, ut fermentum massa justo sit amet risus.
            </dd>

            <dt class="c-col-sm-3">Nesting</dt>
            <dd class="c-col-sm-9">
              <dl class="c-row">
                <dt class="c-col-sm-4">Nested definition list</dt>
                <dd class="c-col-sm-8">
                  Aenean posuere, tortor sed cursus feugiat, nunc augue nunc.
                </dd>
              </dl>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'typography'
}
</script>
