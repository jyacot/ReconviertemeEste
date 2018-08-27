import { Directive, OnInit, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
    selector: '[solonumeros]'
})

export class SoloNumerosDirective implements OnInit{


    private regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
    private specialKeys: Array<string> = [ 'Tab', 'End', 'Home', '-' ];

    constructor(private el: ElementRef, private render: Renderer2){
    }
    @HostListener('keydown',['$event'])
    onkeydown(event:KeyboardEvent){
        //Verificando que no sea una tecla especial
        if(this.specialKeys.indexOf(event.key) !== -1){
            return false;
        }
        // if( event.key === 'Backspace' ){
        //     let valor = this.el.nativeElement.value;
        //     valor = this.el.nativeElement.value.slice(0,-1);
        //     this.render.setProperty(this.el.nativeElement, 'value', '')
        // }

        // Capturando el valor del elemento que instancia
        // la directiva
        const valor:string = this.el.nativeElement.value;
        // Generando una cadena próxima a ser evaluada
        let next: string = valor.concat(event.key);

        //Evaluando la cadena para ver
        // 1. Si existe la cadena
        // 2. Si no hay match con la expresión regular
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }


    ngOnInit(){
        
    }
}
