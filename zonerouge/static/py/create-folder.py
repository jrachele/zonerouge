import os
for f in os.listdir('zonerouge/templates/information'):
    if '.html' in f:
        p = 'zonerouge/static/img/' + f[:-5].lower()
        if not os.path.exists(p):
            os.mkdir(p)
