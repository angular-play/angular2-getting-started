

import { Component, OnInit } from "angular2/core";
import { Track, JanineService} from "./jannine.service"
import { RouteParams, Router } from "angular2/router";

@Component({
    templateUrl: "app/jannine/track-detail.component.html",
    styleUrls: ["app/jannine/jannine.component.css"]
})
export class TrackDetailComponent implements OnInit {
    track: Track;

    constructor(private service: JanineService,
        private router: Router,
        private params: RouteParams) {

    }

    ngOnInit(): void {
        var id = this.params.get("id");
        this.track = this.service.getTrack(id);
    }
    onBack(): void {
        this.router.navigate(['Jannine']);
    }
}