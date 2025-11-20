define(['jquery'], function($) {
    function appendProductsFromHtml(html) {
        // parse html and find product items container
        var $parsed = $('<div/>').html(html);

        // try common selectors used by Luma/theme
        var selectors = [
            '.products.wrapper .product-items',
            '.product-items',
            '.products-grid',
            '.products.list .products'
        ];
        var $items = $();
        for (var i=0;i<selectors.length;i++){
            var s = selectors[i];
            var found = $parsed.find(s).children();
            if (found.length) { $items = found; break; }
        }

        if ($items.length) {
            // append to the existing product container on current page
            var targetSelectors = ['.products.wrapper .product-items', '.product-items', '.products-grid', '.products.list .products'];
            var appended = false;
            for (var j=0;j<targetSelectors.length;j++){
                var t = $(targetSelectors[j]);
                if (t.length){
                    t.append($items);
                    appended = true; break;
                }
            }
            if (!appended){
                // fallback: append to content
                $('main, .columns, .page-main, .page-wrapper').first().append($items);
            }
        }

        // remove original pager if present
        $('.pages').remove();
    }


    function loadNext() {
        if (loading) return;
        var nextUrl = findNextUrl();
        if (!nextUrl) return;
        loading = true;
        $loader.show();
        $.get(nextUrl).done(function(data){
            appendProductsFromHtml(data);
        }).fail(function(){
        // fail silently
        }).always(function(){
            loading = false;
            $loader.hide();
        });
    }


    // throttle scroll watcher
    var checkInterval = 250;
    setInterval(function(){
        if (loading) return;
        var scrollBottom = $(window).scrollTop() + $(window).height();
        var docHeight = $(document).height();
        // when user is within 300px of bottom
        if (docHeight - scrollBottom < 300) {
            loadNext();
        }
    }, checkInterval);
});