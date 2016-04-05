
import {Directive} from "angular2/core";

@Directive({
    selector: "[hello-world]",
    host: {
        "(click)": "onClick()"
    }
})
export class TestDirective {
    
    onClick() {
        console.log("Hello, world!");
    }
    
}