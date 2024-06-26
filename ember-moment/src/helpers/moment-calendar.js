import computeFn from '../utils/helper-compute.js';
import BaseHelper from './-base.js';

export default BaseHelper.extend({
  compute: computeFn(function (params, formatHash = {}) {
    this._super(...arguments);

    if (!params || (params && params.length > 3)) {
      throw new TypeError(
        'ember-moment: Invalid Number of arguments, at most 3',
      );
    }

    const moment = this.moment;
    const { locale, timeZone } = formatHash;
    const [date, referenceTime, formats] = params;
    const mergedFormats = {
      ...formatHash,
      locale: null,
      timeZone: null,
      ...formats,
    };

    return this.morphMoment(moment.moment(date), { locale, timeZone }).calendar(
      referenceTime,
      mergedFormats,
    );
  }),
});
