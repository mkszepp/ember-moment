import { typeOf } from '@ember/utils';

import computeFn from '../utils/helper-compute.js';
import BaseHelper from './-base.js';

export default BaseHelper.extend({
  compute: computeFn(function (params, { precision, locale, timeZone }) {
    this._super(...arguments);

    const moment = this.moment;
    const { length } = params;
    const args = [];
    const additionArgs = [];

    if (length === 1) {
      additionArgs.push(params[0]);
    } else if (
      length === 2 &&
      typeOf(params[0]) === 'number' &&
      typeOf(params[1]) === 'string'
    ) {
      additionArgs.push(...params);
    } else {
      args.push(params[0]);
      additionArgs.push(...params.slice(1));
    }

    return this.morphMoment(moment.moment(...args), { locale, timeZone }).add(
      ...additionArgs,
      precision,
    );
  }),
});
