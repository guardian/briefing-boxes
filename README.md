# embeds
A nifty little process for building and deploying embeds for articles based on the Trashers built by @sammorrisdesign

#Getting set up
You will need

 * [Node.js](http://nodejs.org/)
 * [Bower](http://bower.io/)

Then install the project dependencies with
```
npm install
```

and
```
bower install
```

#Creating an embed
Get started by creating a new Embed with
```
grunt new --folderName=the-name-of-your-embed
```

This will create a folder with the required files at `/embeds/the-name-of-your-embed`. You will be prompted to enter some information about the embed, this isn't currently used anywhere but is useful to have and can be used with the `/embeds/the-name-of-your-embed/source.json`

You are now ready to build your Embed using the `style.scss` and `index.html` inside your newly created folder. Once you have built your embed use the generated `embed.html` file to add it to composer.

### Compiling and Deploying

Once you have edited the `index.html` and `style.scss` files the embeds workflow brings the styles inline in the `embed.html` file. If you are linking to any files e.g `main.js` or images create this file in `_source` and use `@@assetPath@@/name-of-your-file-here` this will be replaced by the real url when you run remote or local. The only difference between these two is that one will run a local server and one will upload to S3.

To run locally, use
```
grunt local --folderName=the-name-of-your-embed
```

To run remotely, you'll need access to Interactives Prod via Janus. With Janus credentials, run
```
grunt remote --folderName=the-name-of-your-embed
```

To compile and deploy *everything* run the above commands without the `--folderName` option. **WARNING: This should be done with caution, as it might take a while to compile all Embeds**

##Getting the paths

To put your Embed in an article you will need a url. This url is S3url which is generated when you run the remote command. You can also retrieve this by running:
```
grunt paths --folderName=the-name-of-your-embed
```

##Embedding your embed

All you need for this is the S3path, paste it into composer and press the embed button.
