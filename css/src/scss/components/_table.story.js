/* global document */
import { storiesOf } from '@storybook/html';

storiesOf('Components/Table', module)
.add('Basic Table', () => `
  <table class="table">
    <thead>
      <tr class="table__header-row">
        <th class="table__cell table__cell--header">PO Line Item Number</th>
        <th class="table__cell table__cell--header">Quantity</th>
        <th class="table__cell table__cell--header">Delivery Date</th>
        <th class="table__cell table__cell--header">Updated By</th>
        <th class="table__cell table__cell--header">Status</th>
        <th class="table__cell table__cell--header">Notes</th>
      </tr>
    </thead>
    <tbody>
    <tr class="table__body-row">
      <td class="table__cell table__cell--identifier">PO-756386755</td>
      <td class="table__cell table__cell--numerical">4200 ea</td>
      <td class="table__cell table__cell">Cell 1</td>
      <td class="table__cell table__cell---numerical">745,392.00</td>
    </tr>
    <tr class="table__body-row">
      <td class="table__cell table__cell--identifier">PO-756386756</td>
      <td class="table__cell table__cell--numerical">6750 ea</td>
      <td class="table__cell table__cell">{Delivery Date}</td>
      <td class="table__cell table__cell">{Updated By}</td>
      <td class="table__cell table__cell">{Status}</td>
      <td class="table__cell table__cell">{Notes}</td>
    </tr>
    <tr class="table__body-row">
      <td class="table__cell table__cell--identifier">PO-75638677</td>
      <td class="table__cell table__cell--numerical">12500 ea</td>
      <td class="table__cell table__cell">Cell 1</td>
      <td class="table__cell table__cell---numerical">745,392.00</td>
    </tr>
    <tr class="table__body-row">
      <td class="table__cell table__cell--identifier">PO-756386758</td>
      <td class="table__cell table__cell--numerical">1800 ea</td>
      <td class="table__cell table__cell">Cell 1</td>
      <td class="table__cell table__cell---numerical">745,392.00</td>
    </tr>
    </tbody>
    <tfoot></tfoot>
  </table>
`);
