import { ComponentFixture, TestBed } from "@angular/core/testing"
import { AppComponent } from "./app.component"
import { DebugElement } from "@angular/core";
import { TodosService } from "./todos.service";

//test suite
describe(
  'AppComponentTesting',
  () => {

    let appComponentFixture: ComponentFixture<AppComponent>;
    let appComponent: AppComponent;
    let appComponentTemplate: DebugElement;

    beforeEach(
      async () => {
        await TestBed
          .configureTestingModule({
            declarations: [AppComponent],
            providers: [TodosService]
          })
          .compileComponents()

        appComponentFixture = TestBed.createComponent(AppComponent)
        appComponent = appComponentFixture.componentInstance
        appComponentTemplate = appComponentFixture.debugElement
        appComponentFixture.detectChanges()
      }
    )

    afterEach(
      () => {
        appComponentFixture.destroy()
      }
    )

    it('appcomponent has title value=welcome to angular',
      () => {
        //act and assert
        expect(appComponent.title).toBe('welcome to angular')
      }
    )

    it('appcomponent display h2 with message welcome to angular',
      () => {
        //act and assert
        const html = appComponentTemplate.nativeElement as HTMLElement
        const content = html.querySelector('h2')?.textContent
        expect(content).toEqual('welcome to angular')
      }
    )

    it('appcomponent has upadted title value=welcome to angular testing',
      () => {
        //act and assert
        appComponent.updateTitle('welcome to angular testing')
        expect(appComponent.title).toBe('welcome to angular testing')
      }
    )

    it('appcomponent has upadated title value=welcome to angular testing which is dispalyed in h2',
      () => {
        //act and assert
        appComponent.updateTitle('welcome to angular testing')
        appComponentFixture.detectChanges()
        const html = appComponentTemplate.nativeElement as HTMLElement
        const content = html.querySelector('h2')?.textContent
        expect(content).toEqual('welcome to angular testing')
      }
    )

    it('appcomponent will display upadated title in h2 with service data=Welcome to Angular Testing',
      () => {
        //act and assert
        appComponent.setValue()
        appComponentFixture.detectChanges()
        const html = appComponentTemplate.nativeElement as HTMLElement
        const content = html.querySelector('h2')?.textContent
        expect(content).toEqual('Welcome to Angular Testing')
      }
    )

  }
)