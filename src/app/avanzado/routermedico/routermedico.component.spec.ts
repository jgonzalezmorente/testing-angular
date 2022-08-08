import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutermedicoComponent } from './routermedico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';



class FakeRouter {
  navigate( params: any ) {}
}

class FakeActivatedRoute {  

  // private subject = new Subject();

  params: Observable<any> = of( { id: 'nuevo' });

  // get params() {
  //   return this.subject.asObservable();
  // }

  // push( valor: any ) {
  //   this.subject.next( valor );
  // }

}


describe('RoutermedicoComponent', () => {
  let component: RoutermedicoComponent;
  let fixture: ComponentFixture<RoutermedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutermedicoComponent ],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }        
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutermedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it( 'Debe de redireccionar a Médico cuando se guarde', () => {
    const router = TestBed.inject(Router);
    const spy = spyOn( router, 'navigate' );

    component.guardarMedico();
    expect( spy ).toHaveBeenCalledWith( ['medico', '123'] );
  });

  it( 'Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;
    expect( component.id ).toBe( 'nuevo' );




  });

});
