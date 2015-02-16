
module.exports = (Reddit) ->

	Reddit::clearSessions = (modhash, password, url, callback) ->
		
		options =
			curpass: password
			dest: url
			uh: modhash
		
		params = Object.keys options
		
		@_post '/api/clear_sessions', options, params, (error, res) =>
			
			return callback error if error?
			
			callback()
				
	Reddit::deleteUser = (username, password, modhash, callback) ->
		
		options =
			confirm: true
			passwd: password
			uh: modhash
			user: username
		
		params = Object.keys options
		
		@_post '/api/delete_user', options, params, (error, res) =>
			
			return callback error if error?
			
			callback()
				
	Reddit::login = (username, password, callback) ->
		
		params = ['user', 'passwd']
		
		options =
			api_type: 'json'
			user: username
			passwd: password
			rem: false
		
		@_post '/api/login', options, params, (error, res) =>
			
			@_agent.jar.setCookies([
				"reddit_session=#{res.body?.json?.data?.cookie}; Domain=reddit.com; Path=/; HttpOnly"
			])
			
			return callback error if error?
		
			callback null, res.body.json?.data?.modhash
	
	Reddit::oAuthAuthorize = (clientId, clientSecret, state, code, scope = ['identity'], callback) ->
		
		if typeof scope is 'function'
			
			callback = scope
			scope = ['identity']
	
		options =
			state: state
			scope: scope.join ','
			client_id: 'tMsPeTkhps5_tg'
			redirect_uri: 'http://reddichat.com/reddit/oauth'
			code: code
			grant_type: 'authorization_code'
		
		details =
			name: "reddit OAuth authorization"
			options: options
		
		@_enqueue details, (finished) =>
			
			@_agent
				.post("https://#{clientId}:#{clientSecret}@ssl.reddit.com/api/v1/access_token")
				.set('Content-Type', 'application/x-www-form-urlencoded')
				.set('User-Agent', @_userAgent)
				.send(options)
				.end (res) ->
					
					if res.status is 200
						
						callback null, res.body
						
					else
						
						callback new Error JSON.stringify details
						
					
					finished() 
		
	Reddit::oAuthMe = (token, callback) ->
		
		details =
			name: "reddit OAuth Me"
			options:
				token: token
		
		@_enqueue details, (finished) =>
			
			@_agent
				.get('https://oauth.reddit.com/api/v1/me')
				.set('Authorization', "bearer #{token}")
				.set('User-Agent', @_userAgent)
				.end (res) ->
					
					if res.status is 200
						
						callback null, res.body
						
					else
						
						callback new Error JSON.stringify details
						
					finished() 
					
	Reddit::me = (callback) ->
				
		@_get '/api/me.json', (error, res) ->
		
			return callback error if error?
			
			callback null, res.body.data

	Reddit::update = (password, email, newPassword, modhash, callback) ->
		
		options =
			curpass: password
			email: email
			newpass: newPassword
			uh: modhash
			verify: true
			verpass: newPassword
		
		params = Object.keys options
		
		@_post '/api/update', options, params, (error, res) ->
		
			return callback error if error?
			
			callback()

