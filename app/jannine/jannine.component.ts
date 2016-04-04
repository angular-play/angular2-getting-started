

import { Component, OnInit } from "angular2/core"
import { Track, JanineService } from "./jannine.service"
import { ROUTER_DIRECTIVES } from "angular2/router";

@Component({
    styleUrls: ["app/jannine/jannine.component.css"],
    templateUrl: "app/jannine/jannine.component.html",
    directives: [ROUTER_DIRECTIVES]
})
export class JannineComponent implements OnInit {

    private tracks: Track[];

    constructor(private _jannineService: JanineService) {}

    ngOnInit(): void {
        this._jannineService.getPlaylist().subscribe( x => this.tracks = x);
    }
}