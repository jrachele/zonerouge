import wikipedia
import os
import pprint

TEMPLATE = """
    <ul class="uk-nav-parent-icon uk-nav-primary" uk-nav="multiple: true">
    <li class="uk-active">
        <a href="#">{Title}</a>
    </li>
    <hr>
    <li class="uk-parent">
        <a href="#">À propos</a>
        <ul class="uk-nav-sub">
            <p>
                {Body}
            </p>
        </ul>

    </li>
    <li class="uk-parent">
        <a href="#">Images</a>
        <ul class="uk-nav-sub">
            <div uk-lightbox="animation: slide">
                <div>
                    <a class="uk-inline" href="static/img/{Title_Lower}/1.jpg" data-caption="">
                        <img src="static/img/{Title_Lower}/1.jpg" alt="">
                    </a>
                </div>
                <div>
                    <a class="uk-inline" href="static/img/{Title_Lower}/2.jpg" data-caption="">
                        <img src="static/img/{Title_Lower}/2.jpg" alt="">
                    </a>
                </div>
                <div>
                    <a class="uk-inline" href="static/img/{Title_Lower}/3.jpg" data-caption="">
                        <img src="static/img/{Title_Lower}/3.jpg" alt="">
                    </a>
                </div>
                <div>
                    <a class="uk-inline" href="static/img/{Title_Lower}/4.jpg" data-caption="">
                        <img src="static/img/{Title_Lower}/4.jpg" alt="">
                    </a>
                </div>
            </div>

        </ul>
    </li>
</ul>
"""

wikipedia.set_lang('fr')
for f in os.listdir('zonerouge/templates/information'):
    if '.html' in f:
        with open('zonerouge/templates/information/' + f, 'w') as nf:
            nf.writelines(TEMPLATE.format(
                Title=f[:-5],
                Body=wikipedia.summary(f[:-5]),
                Title_Lower=f[:-5].lower()
            ))
