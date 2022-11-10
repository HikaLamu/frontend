import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Datum } from "../models/anime";

@Component({
    template:`
    <h1>Anime</h1>
        <input type="text" placeholder="Enter Anime Name/Number" [(ngModel)]= "animename">
        <button (click)="getAnime()">Get Anime</button>
        <div *ngIf="animeFound">
            
            <h4>Data{{anime.data | json}}</h4>

            <img src="{{anime.img}}">  

        </div>
    `,
    selector:"anime-list"
})
export class AnimeCompnent{
    constructor(private httpClient : HttpClient){};
    animename : string = "";
    animeFound : boolean = false;
    anime : any = null;

    async getAnime(){
        const observable = this.httpClient.get<Datum>(`https://anime-facts-rest-api.herokuapp.com/api/v1/${this.animename}`);
        const body = await firstValueFrom(observable); 
        console.log(body); 
        this.animeFound = true;
        this.anime = body;
    }
}