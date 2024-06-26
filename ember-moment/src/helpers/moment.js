import BaseHelper from './-base.js';

export default BaseHelper.extend({
  compute(params, { locale, timeZone }) {
    this._super(...arguments);

    const moment = this.moment;

    return this.morphMoment(moment.moment(...params), { locale, timeZone });
  },
});
