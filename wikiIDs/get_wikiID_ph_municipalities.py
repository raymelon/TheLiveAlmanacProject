import logging
import string
import re
from urllib import request
from bs4 import BeautifulSoup

logger = logging.getLogger(__name__)
user_agent = 'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.7) Gecko/2009021910 Firefox/3.0.7'
letters = list(string.ascii_lowercase)
headers = { 'User-Agent': user_agent, }

with open('wikiID_ph_municipalities.txt', 'w') as log:
	try:
		url = 'https://en.wikipedia.org/wiki/List_of_cities_and_municipalities_in_the_Philippines'
		req = request.Request(url, None, headers)
		html = request.urlopen(req).read().decode('utf8')

		raw = BeautifulSoup(html, 'html.parser')
		hrefs = raw.find_all('a', href=True)

		for h in hrefs:
			# print(h, file=log)
			# print(h['href'])
			print(h['href'], file=log)

	except Exception as e:
		logger.error(str(e))

print('\nDone.')
input()
