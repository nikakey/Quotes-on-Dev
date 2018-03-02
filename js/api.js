(function($){

    var lastState = '';
    // Fetch a random quote post on the front page

    $( '#new-quote-button' ).on( 'click', function ( event ) {
        event.preventDefault();
        lastState = document.URL;

        $.ajax({
            method: 'GET',
            url: '/project-5/wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function ( data ) {
                var post = data.shift();

                // Update the quote on the page
                
                $( '.entry-content' ).html( post.content.rendered );
                $( '.entry-title' ).html( post.title.rendered );

                // Check if the quote has a source (and a url to that source) and post it on the page

                if ( post._qod_quote_source !== '' && post._qod_quote_source_url !== '' ) {
                    $( '.source' ).html( ', <a href="' + post._qod_quote_source_url + '" target="_blank">' + post._qod_quote_source + '</a>' );
                }

                else if ( post._qod_quote_source !== '' && post._qod_quote_source_url === '' ) {
                    $( '.source' ).html(', ' + post._qod_quote_source );
                }

                else {
                    $( '.source' ).html( '' );
                }

                // History api to update the URL

                history.pushState(null, null, post.link);
            }
        });

    });

    // Going back and forth to the previous and next pages

    window.addEventListener('popstate', function() {

        if (window.location.hash.indexOf('qm-overview') === 1) {
          return false;
        } 
        else {
            window.location.replace(lastState);
        }
    });

    // Submit a new quote with the form using ajax


})(jQuery);