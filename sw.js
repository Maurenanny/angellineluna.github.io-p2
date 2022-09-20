
self.addEventListener('install', (event) => {
    console.log('SW: Install');

});

self.addEventListener('fetch', (event) => {

    /*  
    if (event.request.url.includes('.css')) {
        console.log(event.request.url);

        const resp = new Response(

            `
body{
    color:red;
    background: black;
}
`   ,
            {
                headers: {
                    'Content-Type': 'text/css',
                },
            }
        );
        event.responseWith
            (resp)
    }*/

    if(event.request.url.includes('jpg')){
        event.responseWith(fetch('images/michi1.png'));
    }

});