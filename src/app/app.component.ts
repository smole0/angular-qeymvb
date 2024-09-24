import { Component, ViewEncapsulation } from "@angular/core";
import { Contact, contacts } from "./contacts";
import { chartPieIcon, SVGIcon } from "@progress/kendo-svg-icons";

@Component({
  selector: "my-app",
  styleUrls: ["./orders-skeleton-app.component.css"],
  styles: [
    `
      my-app {
        padding-bottom: 0;
      }
    `,
  ],
  template: `
    <!--Load the utils package for the UI elements:-->
    <link
      rel="stylesheet"
      href="https://unpkg.com/@progress/kendo-theme-utils@dev/dist/all.css"
    />

    <div class="orders-demo card-container">
      <div class="k-card custom-card !k-flex-row">
        <div class="custom-card-header k-skeleton">
          <div
            class="card-actions-container k-pt-4 k-gap-2.5 k-flex-layout k-align-items-center k-flex-col"
          >
            <div
              class="custom-card-header-action k-skeleton k-rounded-full"
            ></div>
            <div
              class="custom-card-header-action k-skeleton k-rounded-full"
            ></div>
          </div>
        </div>
        <div class="card-content k-p-8 k-w-full">
          <h4 class="k-h4">Order History</h4>
          <div class="card-columns k-gap-8 k-flex-layout">
            <div class="card-content-column k-flex-1">
              <kendo-label text="Contact person:">
                <kendo-multicolumncombobox
                  [data]="contacts"
                  [listHeight]="145"
                  [popupSettings]="{ width: '22%' }"
                  textField="name"
                  valueField="id"
                  [adaptiveMode]="'auto'"
                >
                  <kendo-combobox-column
                    field="name"
                    title="Contact Name"
                    [width]="200"
                  >
                  </kendo-combobox-column>
                  <kendo-combobox-column
                    field="jobTitle"
                    title="Title"
                    [width]="200"
                  >
                  </kendo-combobox-column>
                  <kendo-combobox-column
                    field="company"
                    title="Company"
                    [width]="200"
                  >
                  </kendo-combobox-column>
                  <ng-template kendoMultiColumnComboBoxFooterTemplate>
                    <strong> {{ contacts.length }} records in total </strong>
                  </ng-template>
                </kendo-multicolumncombobox>
              </kendo-label>
              <div
                class="skeleton-wrapper k-d-flex k-flex-col k-align-items-start k-gap-1 k-flex-layout k-mt-5"
              >
                <div class="k-skeleton k-rounded skeleton-text-small"></div>
                <div
                  class="k-skeleton k-rounded skeleton-text-medium k-w-full"
                ></div>
              </div>
              <div
                class="skeleton-wrapper k-d-flex k-flex-col k-align-items-start k-gap-1 k-mt-5 padding-top-5"
              >
                <div class="k-skeleton k-rounded skeleton-text-small"></div>
                <div
                  class="k-skeleton k-rounded skeleton-text-large k-w-full"
                ></div>
              </div>
            </div>
            <div class="card-content-column card-image-column k-flex-1">
              <div
                class="skeleton-wrapper k-h-full k-flex-col k-align-items-start k-gap-1"
              >
                <div
                  class="k-skeleton k-h-full k-rounded skeleton-image-large !k-d-flex k-justify-content-center k-align-items-center"
                >
                  <kendo-svg-icon
                    size="xxlarge"
                    [icon]="chartPieIcon"
                  ></kendo-svg-icon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None, // Encapsulation is disabled for demo purposes only.
})
export class AppComponent {
  public contacts: Contact[] = contacts;
  public chartPieIcon: SVGIcon = chartPieIcon;

  public getContactImageUrl(contactId: string): string {
    return `assets/dropdowns/contacts/${contactId}.jpg`;
  }
}
