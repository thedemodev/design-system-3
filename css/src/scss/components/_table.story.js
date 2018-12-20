/* global document */
import { storiesOf } from '@storybook/html';

storiesOf('Components/Table', module)
.add('Basic Table', () => `
<div style="padding: 24px;">
  <h2 class="SectionTitle">Table Title</h2>
  <table class="table">
    <thead>
      <tr class="table__header-row">
        <th class="table__cell table__cell--header table__cell--identifier">PO Line Item Number</th>
        <th class="table__cell table__cell--header table__cell--numerical">Quantity</th>
        <th class="table__cell table__cell--header">Delivery Date</th>
        <th class="table__cell table__cell--header table__cell--numerical">Cost</th>
        <th class="table__cell table__cell--header">Updated By</th>
        <th class="table__cell table__cell--header">Status</th>
        <th class="table__cell table__cell--header">Notes</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-756386755</td>
        <td class="table__cell table__cell--numerical">4,200 ea</td>
        <td class="table__cell table__cell">May 26, 2019</td>
        <td class="table__cell table__cell--numerical">$745,392.00</td>
        <td class="table__cell table__cell">Anh Berg</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-756386756</td>
        <td class="table__cell table__cell--numerical">6,750 ea</td>
        <td class="table__cell table__cell">June 2, 2019</td>
        <td class="table__cell table__cell--numerical">$91,250.00</td>
        <td class="table__cell table__cell">Giovanna Mouser</td>
        <td class="table__cell table__cell">Late</td>
        <td class="table__cell table__cell">Wrong quantity has been entered by supplier.</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-75638677</td>
        <td class="table__cell table__cell--numerical">12,500 ea</td>
        <td class="table__cell table__cell">Aprli 12, 2019</td>
        <td class="table__cell table__cell--numerical">$150,042.00</td>
        <td class="table__cell table__cell">Wayne Hightower</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-756386758</td>
        <td class="table__cell table__cell--numerical">1,800 ea</td>
        <td class="table__cell table__cell">May 21, 2019</td>
        <td class="table__cell table__cell--numerical">$1,354.70</td>
        <td class="table__cell table__cell">Ozie Stimac</td>
        <td class="table__cell table__cell">Late</td>
        <td class="table__cell table__cell">The item has been held at customs.</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-756386755</td>
        <td class="table__cell table__cell--numerical">4,200 ea</td>
        <td class="table__cell table__cell">May 26, 2019</td>
        <td class="table__cell table__cell--numerical">$745,392.00</td>
        <td class="table__cell table__cell">Anh Berg</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-756386756</td>
        <td class="table__cell table__cell--numerical">6,750 ea</td>
        <td class="table__cell table__cell">June 2, 2019</td>
        <td class="table__cell table__cell--numerical">$91,250.00</td>
        <td class="table__cell table__cell">Giovanna Mouser</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-75638677</td>
        <td class="table__cell table__cell--numerical">12,500 ea</td>
        <td class="table__cell table__cell">Aprli 12, 2019</td>
        <td class="table__cell table__cell--numerical">$150,042.00</td>
        <td class="table__cell table__cell">Wayne Hightower</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-756386758</td>
        <td class="table__cell table__cell--numerical">1,800 ea</td>
        <td class="table__cell table__cell">May 21, 2019</td>
        <td class="table__cell table__cell--numerical">$1,354.70</td>
        <td class="table__cell table__cell">Ozie Stimac</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-75638677</td>
        <td class="table__cell table__cell--numerical">12,500 ea</td>
        <td class="table__cell table__cell">Aprli 12, 2019</td>
        <td class="table__cell table__cell--numerical">$150,042.00</td>
        <td class="table__cell table__cell">Wayne Hightower</td>
        <td class="table__cell table__cell">Closed</td>
        <td class="table__cell table__cell"></td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--identifier">PO-756386758</td>
        <td class="table__cell table__cell--numerical">1,800 ea</td>
        <td class="table__cell table__cell">May 21, 2019</td>
        <td class="table__cell table__cell--numerical">$1,354.70</td>
        <td class="table__cell table__cell">Ozie Stimac</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
</div>
`)
.add('Complex table', () => `
<div style="padding: 24px;">
  <div class="header-wrapper">
    <h2 class="SectionTitle">Table Title</h2>
    <section class="custom-bar">
      <button class="custom-bar__trigger">search</button>
      <button class="custom-bar__trigger">filter</button>
      <button class="custom-bar__trigger">custom-view</button>
    </section>
  </div>
  <section class="applied-filters-summary">
    <div class="applied-filters-summary__item">
      <button class="applied-filters-summary__trigger">Filter 1</button>
      <button class="applied-filters-summary__remove">X</button>
    </div>
    <div class="applied-filters-summary__item">
      <button class="applied-filters-summary__trigger">Filter 1</button>
      <button class="applied-filters-summary__remove">X</button>
    </div>
  </section>
  <div class="action-wrapper">
    <span class="multiselect-trigger">
      <input class="multiselect-trigger__checkbox" id="select" type="checkbox" />
      <label class="multiselect-trigger__label" for="select">Select / deselect all</label>
    </span>
    <section class="table-action-set">
      <button class="table-action-set__item table-action-set__item--primary-action">Add new</button>
      <button class="table-action-set__item table-action-set__item--secondary-action-trigger">More actions</button>
    </section>
  </div>
  <table class="table">
    <thead>
      <tr class="table__header-row">
        <th class="table__cell table__cell--header" colspan="2"></th>
        <th class="table__cell table__cell--header table__cell--identifier">PO Line Item Number</th>
        <th class="table__cell table__cell--header table__cell--numerical">Quantity</th>
        <th class="table__cell table__cell--header">Delivery Date</th>
        <th class="table__cell table__cell--header table__cell--numerical">Cost</th>
        <th class="table__cell table__cell--header">Updated By</th>
        <th class="table__cell table__cell--header">Status</th>
        <th class="table__cell table__cell--header">Notes</th>
        <th class="table__cell table__cell--header">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-756386755</td>
        <td class="table__cell table__cell--numerical">4,200 ea</td>
        <td class="table__cell table__cell">May 26, 2019</td>
        <td class="table__cell table__cell--numerical">$745,392.00</td>
        <td class="table__cell table__cell">Anh Berg</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-756386756</td>
        <td class="table__cell table__cell--numerical">6,750 ea</td>
        <td class="table__cell table__cell">June 2, 2019</td>
        <td class="table__cell table__cell--numerical">$91,250.00</td>
        <td class="table__cell table__cell">Giovanna Mouser</td>
        <td class="table__cell table__cell">Late</td>
        <td class="table__cell table__cell">Wrong quantity has been entered by supplier.</td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-75638677</td>
        <td class="table__cell table__cell--numerical">12,500 ea</td>
        <td class="table__cell table__cell">Aprli 12, 2019</td>
        <td class="table__cell table__cell--numerical">$150,042.00</td>
        <td class="table__cell table__cell">Wayne Hightower</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-756386758</td>
        <td class="table__cell table__cell--numerical">1,800 ea</td>
        <td class="table__cell table__cell">May 21, 2019</td>
        <td class="table__cell table__cell--numerical">$1,354.70</td>
        <td class="table__cell table__cell">Ozie Stimac</td>
        <td class="table__cell table__cell">Late</td>
        <td class="table__cell table__cell">The item has been held at customs.</td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-756386755</td>
        <td class="table__cell table__cell--numerical">4,200 ea</td>
        <td class="table__cell table__cell">May 26, 2019</td>
        <td class="table__cell table__cell--numerical">$745,392.00</td>
        <td class="table__cell table__cell">Anh Berg</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-756386756</td>
        <td class="table__cell table__cell--numerical">6,750 ea</td>
        <td class="table__cell table__cell">June 2, 2019</td>
        <td class="table__cell table__cell--numerical">$91,250.00</td>
        <td class="table__cell table__cell">Giovanna Mouser</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-75638677</td>
        <td class="table__cell table__cell--numerical">12,500 ea</td>
        <td class="table__cell table__cell">Aprli 12, 2019</td>
        <td class="table__cell table__cell--numerical">$150,042.00</td>
        <td class="table__cell table__cell">Wayne Hightower</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-756386758</td>
        <td class="table__cell table__cell--numerical">1,800 ea</td>
        <td class="table__cell table__cell">May 21, 2019</td>
        <td class="table__cell table__cell--numerical">$1,354.70</td>
        <td class="table__cell table__cell">Ozie Stimac</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-75638677</td>
        <td class="table__cell table__cell--numerical">12,500 ea</td>
        <td class="table__cell table__cell">Aprli 12, 2019</td>
        <td class="table__cell table__cell--numerical">$150,042.00</td>
        <td class="table__cell table__cell">Wayne Hightower</td>
        <td class="table__cell table__cell">Closed</td>
        <td class="table__cell table__cell"></td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
      <tr class="table__body-row">
        <td class="table__cell table__cell--dnd-trigger">a</td>
        <td class="table__cell table__cell--select"><input type="checkbox" /></td>
        <td class="table__cell table__cell--identifier">PO-756386758</td>
        <td class="table__cell table__cell--numerical">1,800 ea</td>
        <td class="table__cell table__cell">May 21, 2019</td>
        <td class="table__cell table__cell--numerical">$1,354.70</td>
        <td class="table__cell table__cell">Ozie Stimac</td>
        <td class="table__cell table__cell">On track</td>
        <td class="table__cell table__cell"></td>
        <td class="table__cell table__cell--actions">a</td>
      </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
  <nav class="pagination">
    <button>1</button>
    <button>1</button>
    <button>1</button>
  </nav>
</div>
`);
