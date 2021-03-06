with open("zonerouge/static/js/map.js") as f:
    for line in f.readlines():
        if "title: " in line:
            title = line.split(": ")[1].strip()[1:-1]
            print(title)
            content = """
    <ul class="uk-nav-parent-icon uk-nav-primary" uk-nav="multiple: true">
    <li class="uk-active">
        <a href="#">{}</a>
    </li>
    <hr>
    <li class="uk-parent">
        <a href="#">À propos</a>
        <ul class="uk-nav-sub">
            <p>
                Le 21 février 1916, le tonnerre des canons marque le début de la bataille de Verdun. Situé sur le
                secteur de Verdun, le village perdu par les troupes françaises le 23 février 1916 et repris le 8
                octobre 1918 disparaîtra totalement sous l'acharnement des pilonnages des obus français et allemands.

                Cette commune ne possède aucun habitant. C'est l'un des neufs villages français détruits durant la
                Première Guerre mondiale et non reconstruit dans ce secteur déclarés « village mort pour la France » à
                la fin des hostilités. Il fut décidé de conserver cette commune en mémoire des événements qui s'y
                déroulèrent. La commune est aujourd'hui administrée par un conseil de trois personnes désignées par le
                préfet de la Meuse.
            </p>
        </ul>

    </li>
    <li class="uk-parent">
        <a href="#">Images</a>
        <ul class="uk-nav-sub">
            <div uk-lightbox="animation: slide">
                <div>
                    <a class="uk-inline" href="static/img/beaumont/4.jpg" data-caption="Avant Guerre">
                        <img src="static/img/beaumont/4.jpg" alt="">
                    </a>
                </div>
                <div>
                    <a class="uk-inline" href="static/img/beaumont/3.jpg" data-caption="Avant Guerre">
                        <img src="static/img/beaumont/3.jpg" alt="">
                    </a>
                </div>
                <div>
                    <a class="uk-inline" href="static/img/beaumont/2.jpg" data-caption="Avant Guerre">
                        <img src="static/img/beaumont/2.jpg" alt="">
                    </a>
                </div>
                <div>
                    <a class="uk-inline" href="static/img/beaumont/1.jpg" data-caption="Aujourd'hui">
                        <img src="static/img/beaumont/1.jpg" alt="">
                    </a>
                </div>
            </div>

        </ul>
    </li>
</ul>
                    """.format(title)
            with open("zonerouge/templates/information/" + title + ".html", "w") as n:
                n.writelines(content)
