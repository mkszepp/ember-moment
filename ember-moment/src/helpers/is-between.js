import computeFn from '../utils/helper-compute.js';
import BaseHelper from './-base.js';

export default BaseHelper.extend({
  compute: computeFn(function (
    params,
    { precision, inclusivity, locale, timeZone },
  ) {
    this._super(...arguments);

    const moment = this.moment;
    const _params = [].concat(params);
    const { length } = params;

    if (length < 2 || length > 3) {
      throw new TypeError(
        'ember-moment: Invalid Number of arguments, expected 2 or 3',
      );
    }

    const args = [];

    if (length > 2) {
      args.push(_params.shift());
    }

    return this.morphMoment(moment.moment(...args), {
      locale,
      timeZone,
    }).isBetween(..._params, precision, inclusivity);
  }),
});
