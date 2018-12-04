import webbrowser
import os
for f in sorted(os.listdir('zonerouge/static/img')):
    webbrowser.open_new_tab(
        'https://books.google.com/books?hl=fr&id=eAVLAQAAIAAJ&dq=l%27homme+que+j%27ai+tu%C3%A9&focus=searchwithinvolume&q={}'.format(f))
