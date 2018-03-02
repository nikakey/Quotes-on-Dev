(function($){

    //fetch a random quote post on the front page

    $( '#new-quote-button' ).on( 'click', function ( event ) {
        event.preventDefault();
        $.ajax({
            method: 'GET',
            url: 'wp-json/wp/v2/posts?filter[orderby]=rand&filter[posts_per_page]=1',
            success: function ( data ) {
                var post = data.shift();
                
                console.log(post);
                
                $( '.entry-content' ).html( post.content.rendered );
                $( '.entry-title' ).html( post.title.rendered );

                if ( post._qod_quote_source !== '' && post._qod_quote_source_url !== '' ) {
                    $( '.source' ).html( ', <a href="' + post._qod_quote_source_url + '">' + post._qod_quote_source + '</a>' );
                }

                else if ( post._qod_quote_source !== '' && post._qod_quote_source_url === '' ) {
                    $( '.source' ).html(', ' + post._qod_quote_source );
                }

                else {
                    $( '.source' ).html( '' );
                }
            }
        
        });
    });

    //history api, 

    //submit a new quote with the form using ajax


})(jQuery);