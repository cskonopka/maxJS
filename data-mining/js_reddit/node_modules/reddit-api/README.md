# Welcome!

This is a project to wrap and make the Reddit API easily accessible to your node.js applications.

See [the Reddit API documentation](http://www.reddit.com/dev/api) for details on what to do.

Please note, this is not finished. I will be developing it as I go. I am working on my own projects to leverage the reddit API, so I started the effort. Pull requests are very welcome!

# Example

Please don't mind the coffeescript example for the time being. Again, this is a work in prorgess. :)

You would launch this like:
`user=foo password=bar coffee test.coffee`

## Immediate mode (default):

```
Reddit = require 'reddit-api'

reddit = new Reddit 'cutebot v0.1 by /u/YOUR_REDDIT_USERNAME_HERE'

# Enable logging.
reddit.setIsLogging true

# Login operation.  
{user, password} = process.env
reddit.login user, password, (error) ->

    throw error if error?

	# Check the user's inbox.
	reddit.messages (error, messages) ->
		
		throw error if error?
		
		console.log messages

```

## Deferred (burst) mode:

```
Reddit = require 'reddit-api'

reddit = new Reddit 'cutebot v0.1 by /u/YOUR_REDDIT_USERNAME_HERE'

# Enable logging.
reddit.setIsLogging true

# Login operation.  
{user, password} = process.env
reddit.login user, password, (error) ->

    throw error if error?

	# Deferred dispatching.
	reddit.setDispatchMode 'deferred'
	
	# Check the user's inbox.
	reddit.messages (error, messages) ->
		
		throw error if error?
		
		console.log messages

	console.log 'Chilling for 2 seconds before the burst!'
	setTimeout(
		-> reddit.burst()
		2000
	)

```

## Rate-limited mode:

```
Reddit = require 'reddit-api'

reddit = new Reddit 'cutebot v0.1 by /u/YOUR_REDDIT_USERNAME_HERE'

# Enable logging.
reddit.setIsLogging true

# Rate-limited dispatching.
reddit.setDispatchMode 'limited'

# Login operation.  
{user, password} = process.env
reddit.login user, password, (error) ->

    throw error if error?

# Check the user's inbox.
reddit.messages (error, messages) ->
	
	throw error if error?
	
	console.log messages

# Notification when all queued operations are complete.
reddit.on 'drain', ->

    # Shut it down.
    reddit.setDispatchMode 'immediate'

```

# TODO

* Obviously, implement more of the API including OAuth
