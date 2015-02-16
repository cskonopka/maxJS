
module.exports = (Reddit) ->

	Reddit::block = (thingId, modhash, callback) ->
		
		options =
			id: thingId
			uh: modhash
		
		params = Object.keys options
		
		@_post '/api/block', options, params, (error, res) ->
		
			return callback error if error?
			
			callback()

	Reddit::compose = (
		captchaResponse
		captchaId
		subject
		message
		to
		modhash
		callback
	) ->
		
		options =
			captcha: captchaResponse
			iden: captchaId
			subject: subject
			text: message
			to: to
			uh: modhash
		
		params = Object.keys options
		
		@_post '/api/block', options, params, (error, res) ->
		
			return callback error if error?
			
			callback()

	Reddit::readMessage = (thingId, modhash) ->
		
		options =
			id: thingId
			uh: modhash
		
		params = Object.keys options
		
		@_post '/api/read_message', options, params, (error, res) ->
		
			return callback error if error?
			
			callback()

	Reddit::unreadMessage = (thingId, modhash) ->
		
		options =
			id: thingId
			uh: modhash
		
		params = Object.keys options
		
		@_post '/api/unread_message', options, params, (error, res) ->
		
			return callback error if error?
			
			callback()

	Reddit::messages = (type, options, callback) ->
		
		if typeof type is 'function'
			
			callback = type
			options = {}
			type = 'inbox'
			
		if typeof options is 'function'
			
			callback = options
			options = {}
		
		@_get "/message/#{type}.json", options, (error, res) ->
			
			return callback error if error?
			
			callback null, res.body.data?.children
				
 