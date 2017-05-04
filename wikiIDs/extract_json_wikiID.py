import logging
import string
import re
import json
from urllib import request

logger = logging.getLogger(__name__)
user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
letters = list(string.ascii_lowercase)
headers = { 'User-Agent': user_agent, }

with open('wikiIDs.txt', 'r') as wk:
	urls = wk.readlines()
	#current_province = '2402209'
	current_province = 'Abra_(province)'
	urls = [u for u in urls if u[0] == 'h']
	urls = iter(urls)
	urls = [(u, next(urls, '')) for u in urls]

	with open('wikiIDs_QUERY.txt', 'w') as wk_Q:
		for url, province in urls:
			#print(url)
			try:
				if url[:8] == 'https://' and province[:8] == 'https://':
					title = url[97:]
					req = None
					req = request.urlopen(url)

					while req is None:
						print('Refetching...')
						req = request.urlopen(url)

					#with request.urlopen(url) as req:
					# data = None
					# while data is None:
					# 	print('Refetching...')
					# 	data = json.loads(req.read().decode())
					data = json.loads(req.read().decode())

					for key, val in data['query']['pages'].items():
						
						if province[97:] != current_province:
							#print(');')
							current_province = province[97:]
							print('/* ' + current_province + ' */')
							print('/* ' + current_province + ' */', file=wk_Q)
							
						#else:
							#print(key, ', /*' + title[:-1] + '*/')
							#print(key, ',', '/*' + title[:-1] + '*/', file=wk_Q)
						#print('t', title, end='')

						print('UPDATE ' + current_province.upper() + ' SET WikiID=' + key + " WHERE Municipality='" + title[:-1].split(',')[0].replace('_', ' ') + "' /* " + title[:-1] + ' */')
						print('UPDATE ' + current_province.upper() + ' SET WikiID=' + key + " WHERE Municipality='" + title[:-1].split(',')[0].replace('_', ' ') + "' /* " + title[:-1] + ' */', file=wk_Q)	

			except Exception as e:
				logger.error(str(e))
