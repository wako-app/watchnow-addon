import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Episode, Show } from '@wako-app/mobile-sdk';
import { PluginLoaderService } from '../services/plugin-loader.service';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItemSliding,
  IonItem,
  IonItemOptions,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'episode.page.html',
  styleUrls: ['episode.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItem, IonItemOptions],
})
export class EpisodePage implements OnInit {
  @ViewChild('episodeRef', { read: ViewContainerRef, static: true })
  episodeVCRef: ViewContainerRef;

  @ViewChild('episodeItemOptionRef', { read: ViewContainerRef, static: true })
  episodeItemOptionVCRef: ViewContainerRef;

  @ViewChild('showRef', { read: ViewContainerRef, static: true })
  showVCRef: ViewContainerRef;

  data: { show: Show; episode: Episode };

  constructor(private pluginLoader: PluginLoaderService) {}

  ngOnInit() {
    this.data = JSON.parse(
      `{"show":{"provider":"trakt","type":"show","ids":{"trakt":138163,"slug":"the-witcher-2019","tvdb":"362696","imdb":"tt5180504","tmdb":71912,"tvrage":null},"title":"The Witcher","overview":"Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.","imagesUrl":{"poster":"https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdrop":"https://image.tmdb.org/t/p/w500/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg"},"firstAired":"2019-12-20T08:00:00.000Z","year":2019,"certification":"TV-MA","runtime":60,"genres":["drama","action","adventure","fantasy","science-fiction"],"alternativeTitles":{"sa":"الساحر","bg":"Вещерът","cz":"Zaklínač","gr":"Ο Γητευτής","us":"The Witcher","ir":"ویچر","fi":"The Witcher – Noituri","il":"המכשף","hr":"Vještac","hu":"Vaják","jp":"ウィッチャー","ge":"მხედვარი","kr":"위쳐","lt":"Raganius","lv":"Raganis","pl":"Wiedźmin","ru":"Ведьмак","sk":"Zaklínač","rs":"Вештац","th":"เดอะ วิทเชอร์ นักล่าจอมอสูร","ua":"Відьмак","vn":"Thợ Săn Quái Vật","tw":"獵魔士","cn":"猎魔人","hk":"獵魔士"},"originalTitle":"The Witcher","ratings":{"imdb":{"name":"IMDb","url":"https://imdb.com/title/tt5180504","rating":null,"votes":null},"trakt":{"name":"Trakt","url":"https://trakt.tv/shows/138163","rating":8.2,"votes":13446}},"rating":8.2,"votes":13446,"status":"returning series","totalEpisodesWatched":0,"trailer":null,"language":"us","network":"Netflix","airedEpisodes":16,"images_url":{"poster":"https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdrop":"https://image.tmdb.org/t/p/w500/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg"},"imdbId":"tt5180504","traktId":138163,"tmdbId":71912},"episode":{"provider":"trakt","type":"episode","title":"Of Banquets, Bastards and Burials","overview":"Against his better judgment, Geralt accompanies Jaskier to a royal ball. Ciri wanders into an enchanted forest. Yennefer tries to protect her charges.","rating":7.9,"votes":4434,"imagesUrl":{"poster":"https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdrop":"https://image.tmdb.org/t/p/w500/AfebvAOUQDaIy2TMmzhWk1ddZMJ.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/AfebvAOUQDaIy2TMmzhWk1ddZMJ.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"},"ids":{"trakt":3790232,"tvdb":"7428571","imdb":"tt8343772","tmdb":1954614,"tvrage":null},"ratings":{"imdb":{"name":"IMDb","url":"https://imdb.com/title/tt8343772","rating":null,"votes":null},"trakt":{"name":"Trakt","url":"https://trakt.tv/shows/138163/seasons/1/episodes/4","rating":7.9,"votes":4434}},"seasonNumber":1,"number":4,"absoluteNumber":4,"code":"S01E04","firstAired":"2019-12-20T08:00:00.000Z","runtime":62,"watched":false,"images_url":{"poster":"https://image.tmdb.org/t/p/w342/7vjaCdMw15FEbXyLQTVa04URsPm.jpg","backdrop":"https://image.tmdb.org/t/p/w500/AfebvAOUQDaIy2TMmzhWk1ddZMJ.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/AfebvAOUQDaIy2TMmzhWk1ddZMJ.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg"},"imdbId":"tt8343772","trakt":3790232,"tmdbId":1954614,"traktSeasonNumber":1,"traktNumber":4}}`,
    );
    this.data = JSON.parse(
      `{"show":{"provider":"simkl","type":"show","title":"Rick and Morty","overview":"Rick is a mentally-unbalanced but scientifically gifted old man who has recently reconnected with his family. He spends most of his time involving his young grandson Morty in dangerous, outlandish adventures throughout space and alternate universes. Compounded with Morty's already unstable family life, these events cause Morty much distress at home and school.","imagesUrl":{"poster":"https://image.tmdb.org/t/p/w342/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg","backdrop":"https://image.tmdb.org/t/p/w500/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg"},"firstAired":"2013-12-03T04:00:00Z","ids":{"simkl":34902,"slug":"rick-and-morty","tvdb":"275274","offen":"https://www.adultswim.com/videos/rick-and-morty","imdb":"tt2861424","zap2it":"EP01833673","tvdbslug":"rick-and-morty","fb":"RickandMorty","instagram":"rickandmorty","tw":"RickandMorty","tmdb":60625,"traktslug":"rick-and-morty"},"year":2013,"certification":"TV-MA","runtime":23,"genres":["Comedy","Animation","Science-Fiction","Adventure"],"alternativeTitles":{"us":"Rick and Morty","ru":"Рик и Морти","es":"Rick y Morty","pl":"Rick i Morty","fr":"Rick et Morty","ua":"Рік та Морті","gr":"Ρικ και Μόρτι","cn":"瑞克和莫蒂","cz":"Rick a Morty","br":"Rick e Morty","il":"ריק ומורטי","mx":"Rick y Morty","ro":"Rick și Morty","bg":"Рик и Морти","rs":"Рик и Морти","hu":"Rick és Morty","tw":"瑞克和莫蒂","kr":"릭 앤 모티","ca":"Rick et Morty","ir":"ریک و مورتی","uz":"Rik va Morti","sa":"ريك ومورتي","lv":"Riks un Mortijs","lt":"Rikas ir Mortis","sk":"Rick a Morty","jp":"リック・アンド・モーティー","th":"ริค แอนด์ มอร์ตี้","hr":"Rick i Morty","vn":"Rick và Morty","ge":"რიკი და მორტი","ae":"ريك ومورتي","sg":"瑞克和莫蒂","in":"रिक और मोर्टी","si":"Rick in Morty"},"originalTitle":"Rick and Morty","ratings":{"simkl":{"name":"SIMKL","url":"https://simkl.com/tv/34902","rating":8.8,"votes":2779}},"rating":null,"votes":null,"status":"airing","totalEpisodesWatched":0,"trailer":"WNhH00OIPP0","language":"US","network":"Adult Swim","airedEpisodes":71,"images_url":{"poster":"https://image.tmdb.org/t/p/w342/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg","backdrop":"https://image.tmdb.org/t/p/w500/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/rBF8wVQN8hTWHspVZBlI3h7HZJ.jpg"},"imdbId":"tt2861424","tmdbId":60625},"episode":{"provider":"simkl","type":"episode","rating":null,"votes":null,"ratings":{},"ids":{"simkl":11643889},"seasonNumber":7,"number":4,"absoluteNumber":4,"code":"S07E04","firstAired":"2023-11-05T23:00:00-05:00","runtime":null,"watched":false,"title":"That's Amorte","overview":"BROH, THAT'S-A SOME GOOD SPAGHETTI.","imagesUrl":{"poster":"https://image.tmdb.org/t/p/w342/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg","backdrop":"https://image.tmdb.org/t/p/w500/b5KOiBYZxYnfl4wL2IlvpqtU3tC.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/b5KOiBYZxYnfl4wL2IlvpqtU3tC.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg"},"images_url":{"poster":"https://image.tmdb.org/t/p/w342/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg","backdrop":"https://image.tmdb.org/t/p/w500/b5KOiBYZxYnfl4wL2IlvpqtU3tC.jpg","backdropOriginal":"https://image.tmdb.org/t/p/original/b5KOiBYZxYnfl4wL2IlvpqtU3tC.jpg","posterOriginal":"https://image.tmdb.org/t/p/original/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg"},"traktSeasonNumber":7,"traktNumber":4}}`,
    );

    this.loadPlugin();
  }

  loadPlugin() {
    this.pluginLoader.createComponent('episodes', this.episodeVCRef, this.data);

    this.pluginLoader.createComponent('episodes-item-option', this.episodeItemOptionVCRef, this.data);

    this.pluginLoader.createComponent('shows', this.showVCRef, this.data);
  }
}
