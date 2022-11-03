import { io } from "socket.io-client";

// connection options 
let api_key = 'YOUR-RARITYGARDEN-API-KEY';
let socket_options = {autoConnect : true, reconnection: true, reconnectionDelay: 500, econnectionDelayMax : 500, randomizationFactor : 0};

/**
 * 
 * OPENSEA SUBSCRIPTIONS
 */

let socket = io("https://stream.rarity.garden:3001/v1/opensea", socket_options);
socket.auth = { api_key : api_key };
socket.connect();

// watch out for errors, e.g. login issues or connection limits
socket.on("connect_error", (err) => {
    console.log(err.message);
});

// available opensea specific channels

socket.on('hot listings', function(payload)
{

    console.log('hot listings', payload);
});


socket.on('cancelled', function(payload)
{

    console.log('cancelled', payload);
});

socket.on('transfers', function(payload)
{

    console.log('transfers', payload);
});

socket.on('sales', function(payload)
{

    console.log('sales', payload);
});

socket.on('trending', function(payload)
{

    console.log('trending', payload);
});

socket.on('expired', function(payload)
{

    console.log('expired', payload);
});

socket.on('discounts', function(payload)
{

    console.log('discounts', payload);
});

socket.on('listings', function(payload)
{

    console.log('listings', payload);
});


/**
 * 
 * MISC SUBSCRIPTIONS
 */

let misc = io("https://stream.rarity.garden:3001/v1/misc", socket_options);
misc.auth = { api_key : api_key };
misc.connect();

// watch out for errors, e.g. login issues or connection limits
misc.on("connect_error", (err) => {
    console.log(err.message);
});

// available misc specific channels

misc.on('pending', function(payload)
{

    console.log('pending', payload);
});

misc.on('block updates', function(payload)
{

    console.log('block updates', payload);
});

misc.on('gas updates', function(payload)
{

    console.log('gas updates', payload);
});
