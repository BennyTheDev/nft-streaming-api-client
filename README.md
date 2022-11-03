# NFT Streaming API Client

[Rarity Garden](https://rarity.garden)

An NFT streaming API client by Rarity Garden

## Synopsis

No more OpenSea API keys and expensive nodes required. Get trading data pushed in real-time. No more polling required. Clutter removed.

Subscribe to various channels like new listings, trending NFTs, sub-floor discounts and many more.

Get 1-year free access to our stream api! Join our [Discord](https://discord.gg/Ur8XGaurSd), invite 10 people and ask for your Rarity Garden api key.

## Installation

The streaming API makes use of [Socket.IO](https://socket.io/). Clients for socket.io are available for various platforms.

The client examples from the kitchen sink are done with node.js, but you may also use [Python](https://python-socketio.readthedocs.io/en/latest/) or [C#](https://github.com/doghappy/socket.io-client-csharp).

To run the kitchen sink install node.js first and download this repository's sources.

After unzip, locate the root folder of the download using your terminal or console program and run:

```bash
npm install
```

This will install all necessary dependencies.

Then open the file api_client_kitchen_sink.js in a code editor and add your Rarity Garden api key.

Again in your terminal or console program run:

```bash
node api_client_kitchen_sink.js
```

It is recommended to use the [PM2](https://pm2.keymetrics.io/) package for production.

You may now explore and enjoy the data. For detailed questions, feel free to visit the support in our [Discord](https://discord.gg/Ur8XGaurSd).

## Available Subscription Channels

Currently, there is only OpenSea and EIP-721 support but we will add a lot more with further development.

Here is a summary of available channels you may subscribe to:

/v1/opensea

* listings
* * Cleaned and verified new listing events.
* hot listings
* * Pre-verified new listings with limited data but speedier.
* sales
* * Cleaned and verified sale events.
* cancelled
* * Cleaned and verified cancellations. Also includes bulk canncellations and transfer of listed items.
* expired
* * Expired items
* transfers
* * Transfers of listed items. Useful to track if items on sale are moved in the meanwhile.
* trending
* * Frequently updated list of trending collections.
* discounts
* * Same as listings but only those being sold for 10% below floor or even less.

There is also a misc subscription with useful data:

/v1/misc

* pending
* * All currently pending ERC-721 sales.
* block updates
* * Block and block time updates.
* gas updates
* * The current fast gas price.