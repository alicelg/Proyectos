import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  isCollapsed: boolean

  @ViewChild('tw') typewriterElement;
  @ViewChild('tw2') typewriterElement2;
  @ViewChild('tw3') typewriterElement3;

  constructor() {
    this.isCollapsed = true
  }



  ngAfterViewInit(): void {

    const target3 = this.typewriterElement3.nativeElement;


    const writer3 = new Typewriter(target3, {
      typeColor: 'yellow',
      // loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
    })

    // writer3
    //   .strings(
    //     400,
    //     "Set many strings",
    //     "In just one call",
    //     "Using the 'strings' method"
    //   ).rest(500)
    //   .start()


    writer3
      .type('Estudiante de Ciencia Política y Gobierno')
      .rest(500)
      // .changeOps({ deleteSpeed: 80 })
      .clear()
      .type('Politóloga')
      .rest(500)
      .clear()
      .type('Estudiante de Relaciones Internacionales')
      .rest(500)
      .clear()
      .type('Internacionalista')
      .rest(500)
      .clear()
      .type('Estudiante de Bootcamp')
      .rest(500)
      .clear()
      .type('FullStack Web Developer')
      // .rest(5000)

      // .clear()
      // .type('Estudiante de Bootcamp')


      // .type('edit')
      // .rest(500)
      // .remove(4)
      // .type('synchronize callbacks')
      // .rest(500)
      // // .changeOps({ deleteSpeed: 20 })
      // .remove(21)
      // .type('change options on the go')
      // .rest(500)
      // .clear()
      .start()



    //   writer3
    //     .type("Full Stack")
    //     .rest(500)
    //     .clear()
    //     .changeTypeColor('red')
    //     .type("defy user expectations")
    //     .rest(500)
    //     .clear()
    //     .changeTypeColor('blue')
    //     .type("generate a custom loop")
    //     .rest(500)
    //     .clear()
    //     .changeTypeColor('black')
    //     .start()
  }
}


