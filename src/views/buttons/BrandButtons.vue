<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col cols="12">
        <b-card>
          <div slot="header">
            <strong>Brand Button</strong>
          </div>
          <small>Usage </small><code style="text-transform:lowercase">&lt;b-button variant="facebook"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/b-button&gt;</code>
          <hr/>
          <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
          <p>
            <b-button size="sm" class="btn-brand" variant="facebook"><i class="fa fa-facebook"></i><span>Facebook</span></b-button>
            <b-button size="sm" class="btn-brand" variant="twitter"><i class="fa fa-twitter"></i><span>Twitter</span></b-button>
            <b-button size="sm" variant="linkedin" class="btn-brand"><i class="fa fa-linkedin"></i><span>LinkedIn</span></b-button>
            <b-button size="sm" variant="flickr" class="btn-brand"><i class="fa fa-flickr"></i><span>Flickr</span></b-button>
            <b-button size="sm" variant="tumblr" class="btn-brand"><i class="fa fa-tumblr"></i><span>Tumblr</span></b-button>
            <b-button size="sm" variant="xing" class="btn-brand"><i class="fa fa-xing"></i><span>Xing</span></b-button>
            <b-button size="sm" variant="github" class="btn-brand"><i class="fa fa-github"></i><span>Github</span></b-button>
            <b-button size="sm" variant="html5" class="btn-brand"><i class="fa fa-html5"></i><span>HTML5</span></b-button>
            <b-button size="sm" variant="openid" class="btn-brand"><i class="fa fa-openid"></i><span>OpenID</span></b-button>
            <b-button size="sm" variant="stack-overflow" class="btn-brand"><i class="fa fa-stack-overflow"></i><span>StackOverflow</span></b-button>
            <b-button size="sm" variant="css3" class="btn-brand"><i class="fa fa-css3"></i><span>CSS3</span></b-button>
            <b-button size="sm" variant="youtube" class="btn-brand"><i class="fa fa-youtube"></i><span>YouTube</span></b-button>
            <b-button size="sm" variant="dribbble" class="btn-brand"><i class="fa fa-dribbble"></i><span>Dribbble</span></b-button>
            <b-button size="sm" variant="google-plus" class="btn-brand"><i class="fa fa-google-plus"></i><span>Google+</span></b-button>
            <b-button size="sm" variant="instagram" class="btn-brand"><i class="fa fa-instagram"></i><span>Instagram</span></b-button>
            <b-button size="sm" variant="pinterest" class="btn-brand"><i class="fa fa-pinterest"></i><span>Pinterest</span></b-button>
            <b-button size="sm" variant="vk" class="btn-brand"><i class="fa fa-vk"></i><span>VK</span></b-button>
            <b-button size="sm" variant="yahoo" class="btn-brand"><i class="fa fa-yahoo"></i><span>Yahoo</span></b-button>
            <b-button size="sm" variant="behance" class="btn-brand"><i class="fa fa-behance"></i><span>Behance</span></b-button>
            <b-button size="sm" variant="dropbox" class="btn-brand"><i class="fa fa-dropbox"></i><span>Dropbox</span></b-button>
            <b-button size="sm" variant="reddit" class="btn-brand"><i class="fa fa-reddit"></i><span>Reddit</span></b-button>
            <b-button size="sm" variant="spotify" class="btn-brand"><i class="fa fa-spotify"></i><span>Spotify</span></b-button>
            <b-button size="sm" variant="vine" class="btn-brand"><i class="fa fa-vine"></i><span>Vine</span></b-button>
            <b-button size="sm" variant="foursquare" class="btn-brand"><i class="fa fa-foursquare"></i><span>Forsquare</span></b-button>
            <b-button size="sm" variant="vimeo" class="btn-brand"><i class="fa fa-vimeo"></i><span>Vimeo</span></b-button>
          </p>
          <h6>Size Normal</h6>
          <p>
            <b-button variant="facebook" class="btn-brand"><i class="fa fa-facebook"></i><span>Facebook</span></b-button>
            <b-button variant="twitter" class="btn-brand"><i class="fa fa-twitter"></i><span>Twitter</span></b-button>
            <b-button variant="linkedin" class="btn-brand"><i class="fa fa-linkedin"></i><span>LinkedIn</span></b-button>
            <b-button variant="flickr" class="btn-brand"><i class="fa fa-flickr"></i><span>Flickr</span></b-button>
            <b-button variant="tumblr" class="btn-brand"><i class="fa fa-tumblr"></i><span>Tumblr</span></b-button>
            <b-button variant="xing" class="btn-brand"><i class="fa fa-xing"></i><span>Xing</span></b-button>
            <b-button variant="github" class="btn-brand"><i class="fa fa-github"></i><span>Github</span></b-button>
            <b-button variant="html5" class="btn-brand"><i class="fa fa-html5"></i><span>HTML5</span></b-button>
            <b-button variant="openid" class="btn-brand"><i class="fa fa-openid"></i><span>OpenID</span></b-button>
            <b-button variant="stack-overflow" class="btn-brand"><i class="fa fa-stack-overflow"></i><span>StackOverflow</span></b-button>
            <b-button variant="css3" class="btn-brand"><i class="fa fa-css3"></i><span>CSS3</span></b-button>
            <b-button variant="youtube" class="btn-brand"><i class="fa fa-youtube"></i><span>YouTube</span></b-button>
            <b-button variant="dribbble" class="btn-brand"><i class="fa fa-dribbble"></i><span>Dribbble</span></b-button>
            <b-button variant="google-plus" class="btn-brand"><i class="fa fa-google-plus"></i><span>Google+</span></b-button>
            <b-button variant="instagram" class="btn-brand"><i class="fa fa-instagram"></i><span>Instagram</span></b-button>
            <b-button variant="pinterest" class="btn-brand"><i class="fa fa-pinterest"></i><span>Pinterest</span></b-button>
            <b-button variant="vk" class="btn-brand"><i class="fa fa-vk"></i><span>VK</span></b-button>
            <b-button variant="yahoo" class="btn-brand"><i class="fa fa-yahoo"></i><span>Yahoo</span></b-button>
            <b-button variant="behance" class="btn-brand"><i class="fa fa-behance"></i><span>Behance</span></b-button>
            <b-button variant="dropbox" class="btn-brand"><i class="fa fa-dropbox"></i><span>Dropbox</span></b-button>
            <b-button variant="reddit" class="btn-brand"><i class="fa fa-reddit"></i><span>Reddit</span></b-button>
            <b-button variant="spotify" class="btn-brand"><i class="fa fa-spotify"></i><span>Spotify</span></b-button>
            <b-button variant="vine" class="btn-brand"><i class="fa fa-vine"></i><span>Vine</span></b-button>
            <b-button variant="foursquare" class="btn-brand"><i class="fa fa-foursquare"></i><span>Forsquare</span></b-button>
            <b-button variant="vimeo" class="btn-brand"><i class="fa fa-vimeo"></i><span>Vimeo</span></b-button>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <b-button size="lg" variant="facebook" class="btn-brand"><i class="fa fa-facebook"></i><span>Facebook</span></b-button>
            <b-button size="lg" variant="twitter" class="btn-brand"><i class="fa fa-twitter"></i><span>Twitter</span></b-button>
            <b-button size="lg" variant="linkedin" class="btn-brand"><i class="fa fa-linkedin"></i><span>LinkedIn</span></b-button>
            <b-button size="lg" variant="flickr" class="btn-brand"><i class="fa fa-flickr"></i><span>Flickr</span></b-button>
            <b-button size="lg" variant="tumblr" class="btn-brand"><i class="fa fa-tumblr"></i><span>Tumblr</span></b-button>
            <b-button size="lg" variant="xing" class="btn-brand"><i class="fa fa-xing"></i><span>Xing</span></b-button>
            <b-button size="lg" variant="github" class="btn-brand"><i class="fa fa-github"></i><span>Github</span></b-button>
            <b-button size="lg" variant="html5" class="btn-brand"><i class="fa fa-html5"></i><span>HTML5</span></b-button>
            <b-button size="lg" variant="openid" class="btn-brand"><i class="fa fa-openid"></i><span>OpenID</span></b-button>
            <b-button size="lg" variant="stack-overflow" class="btn-brand"><i class="fa fa-stack-overflow"></i><span>StackOverflow</span></b-button>
            <b-button size="lg" variant="css3" class="btn-brand"><i class="fa fa-css3"></i><span>CSS3</span></b-button>
            <b-button size="lg" variant="youtube" class="btn-brand"><i class="fa fa-youtube"></i><span>YouTube</span></b-button>
            <b-button size="lg" variant="dribbble" class="btn-brand"><i class="fa fa-dribbble"></i><span>Dribbble</span></b-button>
            <b-button size="lg" variant="google-plus" class="btn-brand"><i class="fa fa-google-plus"></i><span>Google+</span></b-button>
            <b-button size="lg" variant="instagram" class="btn-brand"><i class="fa fa-instagram"></i><span>Instagram</span></b-button>
            <b-button size="lg" variant="pinterest" class="btn-brand"><i class="fa fa-pinterest"></i><span>Pinterest</span></b-button>
            <b-button size="lg" variant="vk" class="btn-brand"><i class="fa fa-vk"></i><span>VK</span></b-button>
            <b-button size="lg" variant="yahoo" class="btn-brand"><i class="fa fa-yahoo"></i><span>Yahoo</span></b-button>
            <b-button size="lg" variant="behance" class="btn-brand"><i class="fa fa-behance"></i><span>Behance</span></b-button>
            <b-button size="lg" variant="dropbox" class="btn-brand"><i class="fa fa-dropbox"></i><span>Dropbox</span></b-button>
            <b-button size="lg" variant="reddit" class="btn-brand"><i class="fa fa-reddit"></i><span>Reddit</span></b-button>
            <b-button size="lg" variant="spotify" class="btn-brand"><i class="fa fa-spotify"></i><span>Spotify</span></b-button>
            <b-button size="lg" variant="vine" class="btn-brand"><i class="fa fa-vine"></i><span>Vine</span></b-button>
            <b-button size="lg" variant="foursquare" class="btn-brand"><i class="fa fa-foursquare"></i><span>Forsquare</span></b-button>
            <b-button size="lg" variant="vimeo" class="btn-brand"><i class="fa fa-vimeo"></i><span>Vimeo</span></b-button>
          </p>
        </b-card>
      </b-col><!--/.col-->
      <b-col cols="12">
        <b-card>
          <div slot="header">
            <strong>Brand Button </strong> <small>Icons only</small>
          </div>
          <small>Usage </small> <code style="text-transform:lowercase">&lt;b-button variant="facebook icon"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/b-button&gt;</code>
          <hr/>
          <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
          <p>
            <b-button size="sm" variant="facebook icon" class="btn-brand"><i class="fa fa-facebook"></i></b-button>
            <b-button size="sm" variant="twitter icon" class="btn-brand"><i class="fa fa-twitter"></i></b-button>
            <b-button size="sm" variant="linkedin icon" class="btn-brand"><i class="fa fa-linkedin"></i></b-button>
            <b-button size="sm" variant="flickr icon" class="btn-brand"><i class="fa fa-flickr"></i></b-button>
            <b-button size="sm" variant="tumblr icon" class="btn-brand"><i class="fa fa-tumblr"></i></b-button>
            <b-button size="sm" variant="xing icon" class="btn-brand"><i class="fa fa-xing"></i></b-button>
            <b-button size="sm" variant="github icon" class="btn-brand"><i class="fa fa-github"></i></b-button>
            <b-button size="sm" variant="html5 icon" class="btn-brand"><i class="fa fa-html5"></i></b-button>
            <b-button size="sm" variant="openid icon" class="btn-brand"><i class="fa fa-openid"></i></b-button>
            <b-button size="sm" variant="stack-overflow icon" class="btn-brand"><i class="fa fa-stack-overflow"></i></b-button>
            <b-button size="sm" variant="css3 icon" class="btn-brand"><i class="fa fa-css3"></i></b-button>
            <b-button size="sm" variant="youtube icon" class="btn-brand"><i class="fa fa-youtube"></i></b-button>
            <b-button size="sm" variant="dribbble icon" class="btn-brand"><i class="fa fa-dribbble"></i></b-button>
            <b-button size="sm" variant="google-plus icon" class="btn-brand"><i class="fa fa-google-plus"></i></b-button>
            <b-button size="sm" variant="instagram icon" class="btn-brand"><i class="fa fa-instagram"></i></b-button>
            <b-button size="sm" variant="pinterest icon" class="btn-brand"><i class="fa fa-pinterest"></i></b-button>
            <b-button size="sm" variant="vk icon" class="btn-brand"><i class="fa fa-vk"></i></b-button>
            <b-button size="sm" variant="yahoo icon" class="btn-brand"><i class="fa fa-yahoo"></i></b-button>
            <b-button size="sm" variant="behance icon" class="btn-brand"><i class="fa fa-behance"></i></b-button>
            <b-button size="sm" variant="dropbox icon" class="btn-brand"><i class="fa fa-dropbox"></i></b-button>
            <b-button size="sm" variant="reddit icon" class="btn-brand"><i class="fa fa-reddit"></i></b-button>
            <b-button size="sm" variant="spotify icon" class="btn-brand"><i class="fa fa-spotify"></i></b-button>
            <b-button size="sm" variant="vine icon" class="btn-brand"><i class="fa fa-vine"></i></b-button>
            <b-button size="sm" variant="foursquare icon" class="btn-brand"><i class="fa fa-foursquare"></i></b-button>
            <b-button size="sm" variant="vimeo icon" class="btn-brand"><i class="fa fa-vimeo"></i></b-button>
          </p>
          <h6>Size Normal</h6>
          <p>
            <b-button variant="facebook icon" class="btn-brand"><i class="fa fa-facebook"></i></b-button>
            <b-button variant="twitter icon" class="btn-brand"><i class="fa fa-twitter"></i></b-button>
            <b-button variant="linkedin icon" class="btn-brand"><i class="fa fa-linkedin"></i></b-button>
            <b-button variant="flickr icon" class="btn-brand"><i class="fa fa-flickr"></i></b-button>
            <b-button variant="tumblr icon" class="btn-brand"><i class="fa fa-tumblr"></i></b-button>
            <b-button variant="xing icon" class="btn-brand"><i class="fa fa-xing"></i></b-button>
            <b-button variant="github icon" class="btn-brand"><i class="fa fa-github"></i></b-button>
            <b-button variant="html5 icon" class="btn-brand"><i class="fa fa-html5"></i></b-button>
            <b-button variant="openid icon" class="btn-brand"><i class="fa fa-openid"></i></b-button>
            <b-button variant="stack-overflow icon" class="btn-brand"><i class="fa fa-stack-overflow"></i></b-button>
            <b-button variant="css3 icon" class="btn-brand"><i class="fa fa-css3"></i></b-button>
            <b-button variant="youtube icon" class="btn-brand"><i class="fa fa-youtube"></i></b-button>
            <b-button variant="dribbble icon" class="btn-brand"><i class="fa fa-dribbble"></i></b-button>
            <b-button variant="google-plus icon" class="btn-brand"><i class="fa fa-google-plus"></i></b-button>
            <b-button variant="instagram icon" class="btn-brand"><i class="fa fa-instagram"></i></b-button>
            <b-button variant="pinterest icon" class="btn-brand"><i class="fa fa-pinterest"></i></b-button>
            <b-button variant="vk icon" class="btn-brand"><i class="fa fa-vk"></i></b-button>
            <b-button variant="yahoo icon" class="btn-brand"><i class="fa fa-yahoo"></i></b-button>
            <b-button variant="behance icon" class="btn-brand"><i class="fa fa-behance"></i></b-button>
            <b-button variant="dropbox icon" class="btn-brand"><i class="fa fa-dropbox"></i></b-button>
            <b-button variant="reddit icon" class="btn-brand"><i class="fa fa-reddit"></i></b-button>
            <b-button variant="spotify icon" class="btn-brand"><i class="fa fa-spotify"></i></b-button>
            <b-button variant="vine icon" class="btn-brand"><i class="fa fa-vine"></i></b-button>
            <b-button variant="foursquare icon" class="btn-brand"><i class="fa fa-foursquare"></i></b-button>
            <b-button variant="vimeo icon" class="btn-brand"><i class="fa fa-vimeo"></i></b-button>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <b-button size="lg" variant="facebook icon" class="btn-brand"><i class="fa fa-facebook"></i></b-button>
            <b-button size="lg" variant="twitter icon" class="btn-brand"><i class="fa fa-twitter"></i></b-button>
            <b-button size="lg" variant="linkedin icon" class="btn-brand"><i class="fa fa-linkedin"></i></b-button>
            <b-button size="lg" variant="flickr icon" class="btn-brand"><i class="fa fa-flickr"></i></b-button>
            <b-button size="lg" variant="tumblr icon" class="btn-brand"><i class="fa fa-tumblr"></i></b-button>
            <b-button size="lg" variant="xing icon" class="btn-brand"><i class="fa fa-xing"></i></b-button>
            <b-button size="lg" variant="github icon" class="btn-brand"><i class="fa fa-github"></i></b-button>
            <b-button size="lg" variant="html5 icon" class="btn-brand"><i class="fa fa-html5"></i></b-button>
            <b-button size="lg" variant="openid icon" class="btn-brand"><i class="fa fa-openid"></i></b-button>
            <b-button size="lg" variant="stack-overflow icon" class="btn-brand"><i class="fa fa-stack-overflow"></i></b-button>
            <b-button size="lg" variant="css3 icon" class="btn-brand"><i class="fa fa-css3"></i></b-button>
            <b-button size="lg" variant="youtube icon" class="btn-brand"><i class="fa fa-youtube"></i></b-button>
            <b-button size="lg" variant="dribbble icon" class="btn-brand"><i class="fa fa-dribbble"></i></b-button>
            <b-button size="lg" variant="google-plus icon" class="btn-brand"><i class="fa fa-google-plus"></i></b-button>
            <b-button size="lg" variant="instagram icon" class="btn-brand"><i class="fa fa-instagram"></i></b-button>
            <b-button size="lg" variant="pinterest icon" class="btn-brand"><i class="fa fa-pinterest"></i></b-button>
            <b-button size="lg" variant="vk icon" class="btn-brand"><i class="fa fa-vk"></i></b-button>
            <b-button size="lg" variant="yahoo icon" class="btn-brand"><i class="fa fa-yahoo"></i></b-button>
            <b-button size="lg" variant="behance icon" class="btn-brand"><i class="fa fa-behance"></i></b-button>
            <b-button size="lg" variant="dropbox icon" class="btn-brand"><i class="fa fa-dropbox"></i></b-button>
            <b-button size="lg" variant="reddit icon" class="btn-brand"><i class="fa fa-reddit"></i></b-button>
            <b-button size="lg" variant="spotify icon" class="btn-brand"><i class="fa fa-spotify"></i></b-button>
            <b-button size="lg" variant="vine icon" class="btn-brand"><i class="fa fa-vine"></i></b-button>
            <b-button size="lg" variant="foursquare icon" class="btn-brand"><i class="fa fa-foursquare"></i></b-button>
            <b-button size="lg" variant="vimeo icon" class="btn-brand"><i class="fa fa-vimeo"></i></b-button>
          </p>
        </b-card>
      </b-col><!--/.col-->

      <b-col cols="12">
        <b-card>
          <div slot="header">
            <strong>Brand Button </strong> <small>Text only</small>
          </div>
          <small>Usage </small> <code style="text-transform:lowercase">&lt;b-button variant="facebook text"&gt;&lt;span&gt;Facebook&lt;/span&gt;&lt;/b-button&gt;</code>
          <hr/>
          <h6>Size Small <small>Add <code>size="sm"</code></small></h6>
          <p>
            <b-button size="sm" variant="facebook text" class="btn-brand"><span>Facebook</span></b-button>
            <b-button size="sm" variant="twitter text" class="btn-brand"><span>Twitter</span></b-button>
            <b-button size="sm" variant="linkedin text" class="btn-brand"><span>LinkedIn</span></b-button>
            <b-button size="sm" variant="flickr text" class="btn-brand"><span>Flickr</span></b-button>
            <b-button size="sm" variant="tumblr text" class="btn-brand"><span>Tumblr</span></b-button>
            <b-button size="sm" variant="xing text" class="btn-brand"><span>Xing</span></b-button>
            <b-button size="sm" variant="github text" class="btn-brand"><span>Github</span></b-button>
            <b-button size="sm" variant="html5 text" class="btn-brand"><span>HTML5</span></b-button>
            <b-button size="sm" variant="openid text" class="btn-brand"><span>OpenID</span></b-button>
            <b-button size="sm" variant="stack-overflow text" class="btn-brand"><span>StackOverflow</span></b-button>
            <b-button size="sm" variant="css3 text" class="btn-brand"><span>CSS3</span></b-button>
            <b-button size="sm" variant="youtube text" class="btn-brand"><span>YouTube</span></b-button>
            <b-button size="sm" variant="dribbble text" class="btn-brand"><span>Dribbble</span></b-button>
            <b-button size="sm" variant="google-plus text" class="btn-brand"><span>Google+</span></b-button>
            <b-button size="sm" variant="instagram text" class="btn-brand"><span>Instagram</span></b-button>
            <b-button size="sm" variant="pinterest text" class="btn-brand"><span>Pinterest</span></b-button>
            <b-button size="sm" variant="vk text" class="btn-brand"><span>VK</span></b-button>
            <b-button size="sm" variant="yahoo text" class="btn-brand"><span>Yahoo</span></b-button>
            <b-button size="sm" variant="behance text" class="btn-brand"><span>Behance</span></b-button>
            <b-button size="sm" variant="dropbox text" class="btn-brand"><span>Dropbox</span></b-button>
            <b-button size="sm" variant="reddit text" class="btn-brand"><span>Reddit</span></b-button>
            <b-button size="sm" variant="spotify text" class="btn-brand"><span>Spotify</span></b-button>
            <b-button size="sm" variant="vine text" class="btn-brand"><span>Vine</span></b-button>
            <b-button size="sm" variant="foursquare text" class="btn-brand"><span>Forsquare</span></b-button>
            <b-button size="sm" variant="vimeo text" class="btn-brand"><span>Vimeo</span></b-button>
          </p>
          <h6>Size Normal</h6>
          <p>
            <b-button variant="facebook text" class="btn-brand"><span>Facebook</span></b-button>
            <b-button variant="twitter text" class="btn-brand"><span>Twitter</span></b-button>
            <b-button variant="linkedin text" class="btn-brand"><span>LinkedIn</span></b-button>
            <b-button variant="flickr text" class="btn-brand"><span>Flickr</span></b-button>
            <b-button variant="tumblr text" class="btn-brand"><span>Tumblr</span></b-button>
            <b-button variant="xing text" class="btn-brand"><span>Xing</span></b-button>
            <b-button variant="github text" class="btn-brand"><span>Github</span></b-button>
            <b-button variant="html5 text" class="btn-brand"><span>HTML5</span></b-button>
            <b-button variant="openid text" class="btn-brand"><span>OpenID</span></b-button>
            <b-button variant="stack-overflow text" class="btn-brand"><span>StackOverflow</span></b-button>
            <b-button variant="css3 text" class="btn-brand"><span>CSS3</span></b-button>
            <b-button variant="youtube text" class="btn-brand"><span>YouTube</span></b-button>
            <b-button variant="dribbble text" class="btn-brand"><span>Dribbble</span></b-button>
            <b-button variant="google-plus text" class="btn-brand"><span>Google+</span></b-button>
            <b-button variant="instagram text" class="btn-brand"><span>Instagram</span></b-button>
            <b-button variant="pinterest text" class="btn-brand"><span>Pinterest</span></b-button>
            <b-button variant="vk text" class="btn-brand"><span>VK</span></b-button>
            <b-button variant="yahoo text" class="btn-brand"><span>Yahoo</span></b-button>
            <b-button variant="behance text" class="btn-brand"><span>Behance</span></b-button>
            <b-button variant="dropbox text" class="btn-brand"><span>Dropbox</span></b-button>
            <b-button variant="reddit text" class="btn-brand"><span>Reddit</span></b-button>
            <b-button variant="spotify text" class="btn-brand"><span>Spotify</span></b-button>
            <b-button variant="vine text" class="btn-brand"><span>Vine</span></b-button>
            <b-button variant="foursquare text" class="btn-brand"><span>Forsquare</span></b-button>
            <b-button variant="vimeo text" class="btn-brand"><span>Vimeo</span></b-button>
          </p>
          <h6>Size Large <small>Add <code>size="lg"</code></small></h6>
          <p>
            <b-button size="lg" variant="facebook text" class="btn-brand"><span>Facebook</span></b-button>
            <b-button size="lg" variant="twitter text" class="btn-brand"><span>Twitter</span></b-button>
            <b-button size="lg" variant="linkedin text" class="btn-brand"><span>LinkedIn</span></b-button>
            <b-button size="lg" variant="flickr text" class="btn-brand"><span>Flickr</span></b-button>
            <b-button size="lg" variant="tumblr text" class="btn-brand"><span>Tumblr</span></b-button>
            <b-button size="lg" variant="xing text" class="btn-brand"><span>Xing</span></b-button>
            <b-button size="lg" variant="github text" class="btn-brand"><span>Github</span></b-button>
            <b-button size="lg" variant="html5 text" class="btn-brand"><span>HTML5</span></b-button>
            <b-button size="lg" variant="openid text" class="btn-brand"><span>OpenID</span></b-button>
            <b-button size="lg" variant="stack-overflow text" class="btn-brand"><span>StackOverflow</span></b-button>
            <b-button size="lg" variant="css3 text" class="btn-brand"><span>CSS3</span></b-button>
            <b-button size="lg" variant="youtube text" class="btn-brand"><span>YouTube</span></b-button>
            <b-button size="lg" variant="dribbble text" class="btn-brand"><span>Dribbble</span></b-button>
            <b-button size="lg" variant="google-plus text" class="btn-brand"><span>Google+</span></b-button>
            <b-button size="lg" variant="instagram text" class="btn-brand"><span>Instagram</span></b-button>
            <b-button size="lg" variant="pinterest text" class="btn-brand"><span>Pinterest</span></b-button>
            <b-button size="lg" variant="vk text" class="btn-brand"><span>VK</span></b-button>
            <b-button size="lg" variant="yahoo text" class="btn-brand"><span>Yahoo</span></b-button>
            <b-button size="lg" variant="behance text" class="btn-brand"><span>Behance</span></b-button>
            <b-button size="lg" variant="dropbox text" class="btn-brand"><span>Dropbox</span></b-button>
            <b-button size="lg" variant="reddit text" class="btn-brand"><span>Reddit</span></b-button>
            <b-button size="lg" variant="spotify text" class="btn-brand"><span>Spotify</span></b-button>
            <b-button size="lg" variant="vine text" class="btn-brand"><span>Vine</span></b-button>
            <b-button size="lg" variant="foursquare text" class="btn-brand"><span>Forsquare</span></b-button>
            <b-button size="lg" variant="vimeo text" class="btn-brand"><span>Vimeo</span></b-button>
          </p>
        </b-card>
      </b-col><!--/.col-->
    </b-row><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'brand-buttons'
}
</script>

<style scoped lang="css">
.btn {
  margin-bottom: 4px;
}
</style>
