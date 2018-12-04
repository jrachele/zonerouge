import os
import webbrowser
import requests
for f in sorted(os.listdir('zonerouge/static/img')):
    if '.' not in f and not os.listdir('zonerouge/static/img/'+f):
        # Folder is empty
        webbrowser.open_new_tab(
            'https://www.google.com/search?q={}&source=lnms&tbm=isch'.format(f))
        print("Just opened {}, l8r".format(f))
        with open('zonerouge/references.txt', 'a') as ref:
            for i in range(1, 5):
                url = input("Enter a URL for {}.jpg: ".format(i))
                if url:
                    ref.write(url + "\n")
                    img_data = requests.get(url).content
                    with open('zonerouge/static/img/{}/{}.jpg'.format(f, i), 'wb') as handler:
                        handler.write(img_data)
                    print("Successfully input {}.jpg".format(i))
                else:
                    break
        break
