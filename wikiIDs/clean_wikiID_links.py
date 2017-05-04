
with open('wikiIDs_links.txt', 'r') as wk:
	content = wk.readlines()
	# for l in wk.readlines()[::2]:
	# 	print(l)

	content = [c for c in content if c[0] == '/']

with open('wikiIDs_links.txt', 'w') as wk:
	content = iter(content)
	content = [c + next(content, '') for c in content]
	for c in content:
		print(c, file=wk)
	# for l in content:#[::2]:
	# 	print(l, file=wk)

print('Done.')
input()
