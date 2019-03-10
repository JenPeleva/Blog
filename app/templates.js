angular.module('blogApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('js/aboutme/aboutMeView.html',
    "<div class=\"col-md-8 col-md-offset-2 about\">\n" +
    "\t<div class=\"text-center\">\n" +
    "\t\t<img src=\"../../css/Images/jeina.jpg\" alt=\"avatar\">\n" +
    "\t</div>\n" +
    "\t<h1 class=\"text-center \">{{ name }}</h1>\n" +
    "\t<p class=\"text-center text-muted\">jen.peleva@gmail.com</p>\n" +
    "\t<p class=\"u-mb20\">Hi everyone, my name is Jeina! I'm from the small country Bulgaria - a land of sun, mountains and a beautiful sea. I'm 24 years-old, a graduated software engineer, currently working as a front-end developer in Telerik. I also consider myself an art enthusiast. In my free time I love to draw. It's been a passion of mine, since I was very little. I often forget about everything else when I'm drawing and simply get lost in the process. There's still so much more to learn about it, though. Currently, I'm attending drawing lessons twice a week and so far they've been great. I'll keep you updated with my progress.</p>\n" +
    "\t <p>A little more about me: I'm a big fan of long walks, inspiring people, Vienna, croissants and coffee, pleasant conversations and good music. The past few months I've been doing my best to stay healthy by exercising and avoiding junk food. It's amazing that there are so many healthy AND tasty recipes, I didn't know existed. Cooking is another hobby of mine, quite stress relieving. Also, although I'm not a vegetarian, I really enjoy vegan food. There was a point in my life when I thought that no real food could be prepared without milk, eggs or meat. However, thanks to my great big sister and my super inspiring friend Dessy (whom I'll introduce in one of my posts), both vegetarians, I realized that plant based food can be incredibly fulfilling and tasty.</p>\n" +
    "\t <p>In this blog I'm planning to post about art, healthy living, cooking, traveling, Bulgaria, random thoughts and observations, as well as all kinds of things that inspire me. Hope you like it!</p>\n" +
    "</div>\n" +
    "    \n"
  );


  $templateCache.put('js/components/archive/archiveView.html',
    "<section class=\"margin-bottom-l\">\n" +
    "    <header class=\"margin-top-s margin-bottom-s\"><h2>Blog archive</h2></header>\n" +
    "    <ul>\n" +
    "        <li ng-repeat=\"(month, posts) in postsArchive\">\n" +
    "            <a href='#/archive/{{month}}'>{{ month + ' (' + posts.length + ')'}}</a>\n" +
    "            <ul>\n" +
    "                <li ng-repeat=\"post in posts\"><a href='#/details/{{post.Url}}'>{{ post.Title}}</a></li>\n" +
    "            </ul>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</section>"
  );


  $templateCache.put('js/components/quotes/quotesView.html',
    "\n" +
    "<h2>Quote of the day: </h2>\n" +
    "<blockquote class=\"text-muted\">\n" +
    "\t<em>{{ quote }}</em>\n" +
    "\t<p class=\"quote-author\"> - {{ author}}</p>\n" +
    "</blockquote>\n"
  );


  $templateCache.put('js/components/tagcloud/tagCloudView.html',
    " <section class=\"margin-bottom-l\">\n" +
    "    <header class=\"margin-top-s margin-bottom-s\"><h2>Tags</h2></header>\n" +
    "    <ul class=\"list-horizontal\">\n" +
    "        <li ng-repeat=\"tag in tags\">\n" +
    "            <p ng-class=\"tag.CssClass\"><a href='#/search/{{ tag.Name}}'>{{ tag.Name}}</a>\n" +
    "            </p>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</section>"
  );


  $templateCache.put('js/details/detailsView.html',
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-2 article-avatar\">\n" +
    "        \n" +
    "        <img src=\"css/Images/thmb-default.jpg\" alt=\"thmb-default\">\n" +
    "        \n" +
    "    </div>\n" +
    "\n" +
    "     <div class=\"col-md-7\">\n" +
    "        <a class=\"article-links\" ui-sref=\"home\">&mdash; All articles</a>\n" +
    "\n" +
    "         <article>\n" +
    "            <h1 class=\"article-title\">{{ post.Title }}</h1>\n" +
    "\n" +
    "            <div class=\"article-content\" ng-bind-html=\"post.Content | sanitize\">\n" +
    "            </div>\n" +
    "\n" +
    "            <!-- <section class=\"comments-list\">\n" +
    "              <h2>Comments:</h2>\n" +
    "\n" +
    "                <article ng-repeat=\"comment in post.Comments track by $index\">\n" +
    "                    <p>{{ comment.Comment }} </p>\n" +
    "                    <footer class=\"text-muted\">\n" +
    "                      &mdash; by {{ comment.Author }}, on {{ comment.Date | date:\"MM/dd/yyyy 'at' h:mma\" }}\n" +
    "                    </footer>\n" +
    "                </article>   \n" +
    "            </section>\n" +
    "\n" +
    "            <section class=\"comments-form\">\n" +
    "              <h2>Leave a comment:</h2>\n" +
    "                <div class=\"row\">\n" +
    "                  <div class=\"col-xs-12 col-md-8\">\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                       <label for=\"author\">Author</label>\n" +
    "                       <input type=\"text\" id=\"author\" ng-model=\"newCommentAuthor\" class=\"form-control\"/>\n" +
    "                    </div>\n" +
    "\n" +
    "                    <div class=\"form-group\">\n" +
    "                       <label for=\"author\">Comment</label>\n" +
    "                       <textarea ng-model=\"newCommentPost\"  class=\"form-control\"/>\n" +
    "                    </div>\n" +
    "\n" +
    "                  </div>\n" +
    "                </div>\n" +
    "\n" +
    "                <button type=\"button\" class=\"btn btn-default\" ng-click=\"addComment()\" >Add comment</button>\n" +
    "            </section> -->\n" +
    "\t\t\t\n" +
    "\t\t\t<section>\n" +
    "\t\t\t\t<dir-disqus disqus-shortname=\"rougesprit\"\n" +
    "                 disqus-identifier=\"{{ post.Id }}\"\n" +
    "                 disqus-url=\"{{ disqusUrl }}\"\n" +
    "                ready-to-bind=\"{{ contentLoaded }}\" >\n" +
    "        </dir-disqus>\n" +
    "\t\t\t</section>\n" +
    "\n" +
    "            <footer>\n" +
    "              <ul class=\"post-tags list-horizontal\" style=\"display:none;\">\n" +
    "                  <li ng-repeat=\"tag in post.Tags\">\n" +
    "                      {{ tag }}\n" +
    "                  </li>\n" +
    "               </ul>\n" +
    "            </footer>\n" +
    "\n" +
    "         </article>\n" +
    "\n" +
    "          <a class=\"article-links\" ui-sref=\"home\">&mdash; All articles</a>\n" +
    "     </div>\n" +
    "     <div class=\"col-md-3\"></div>\n" +
    "\n" +
    "</div>\n"
  );


  $templateCache.put('js/home/homeView.html',
    "<div class=\"rows\" infinite-scroll='loadBlogPosts()' infinite-scroll-disabled='isLoading' infinite-scroll-distance='2'>\n" +
    "\t<div class=\"col-md-9\">\n" +
    "\t\t<article class=\"media\" ng-repeat=\"bp in blogPosts\">\n" +
    "\n" +
    "\t\t    <div class=\"media-left article-avatar\">\n" +
    "\t\t\t\t<a ui-sref=\"details({url : bp.Url})\">\n" +
    "\t\t\t\t\t<img class=\"media-object\" src=\"css/Images/thmb-default.jpg\" alt=\"thmb-default\">\n" +
    "\t\t\t\t</a>\n" +
    "\t\t\t</div>\n" +
    "\n" +
    "\t\t\t<div class=\"media-body\">\n" +
    "\t\t\t\t<a ui-sref=\"details({url : bp.Url})\"><h1 class=\"media-heading\">{{bp.Title}}</h1></a>\n" +
    "\t\t\t\t<p class=\"text-muted\">&mdash; {{ bp.Date | date: 'd MMMM yyyy'}}</p>\n" +
    "\t\t\t\t<p>{{ bp.Summary }} <!-- Summary --></p>\n" +
    "\t\t\t</div>\n" +
    "\t\t    \n" +
    "\t\t</article>\n" +
    "\t</div>\n" +
    "\t<div class=\"col-md-3\"><aside class=\"quote\" quotes ></aside></div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('js/search/searchView.html',
    "\n" +
    "<ul class=\"left-col width-65\">\n" +
    "    <li ng-repeat=\"bp in blogPosts\">\n" +
    "        <h2><a href= \"#/details/{{bp.Url}}\" >{{bp.Title}}</a></h2>\n" +
    "        <article>\n" +
    "            <p>{{ bp.Content }}</p>\n" +
    "        </article>\n" +
    "    </li> \n" +
    "</ul>"
  );

}]);
