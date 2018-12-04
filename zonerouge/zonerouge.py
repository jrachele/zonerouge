from flask import render_template, request, Flask
app = Flask(__name__)


@app.route('/')
def index():
    references = ""
    with open('references.txt') as f:

        for line in f.readlines():
            caption = line.split("//")[-1].split("/")[0]
            l = "<a href='{link}'>{caption}</a></br>".format(
                link=line, caption=caption)
            references += l
    return render_template('index.html', references=references)


@app.route('/information')
def information():
    location = request.args.get('location')
    if location:
        return render_template("information/" + location + '.html')
    else:
        return render_template('information/Generic-Information.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0')
