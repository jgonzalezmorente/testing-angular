import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicosService } from '../../intermedio/espias/medicos.service';
import { HttpClientModule } from '@angular/common/http';

describe( 'Médico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {

        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [ MedicosService ],
            imports: [ HttpClientModule ]
        });

        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;

    });

    it( 'Debe de crearse el componente', () => {
        expect( component ).toBeTruthy();
    });

    it( 'Debe de retornar el nombre del médico', () => {
        const nombre = 'Juan';
        const res = component.saludarMedico( nombre );
        expect( res ).toContain( nombre );
    });    
});