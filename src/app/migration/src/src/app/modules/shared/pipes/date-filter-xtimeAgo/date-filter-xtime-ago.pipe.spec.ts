import { DateFilterXtimeAgoPipe } from './date-filter-xtime-ago.pipe';
import * as moment from 'moment';

describe('DateFilterXtimeAgoPipe', () => {
  describe('#transform', () => {
    it('should take default format for date', () => {
      const pipe = new DateFilterXtimeAgoPipe();
      const date = new Date();
      const result = pipe.transform(date, '');
      const ans = moment(date).format('YYYY-MM-DD HH:mm:ss');
      expect(result).toBe(ans);
    });

    it('test for given format for date', () => {
      const pipe = new DateFilterXtimeAgoPipe();
      const date = new Date();
      const result = pipe.transform(date, 'YYYY-MM-DD HH:mm:ss');
      const ans = moment(date).format('YYYY-MM-DD HH:mm:ss');
      expect(result).toBe(ans);
    });

    it('if date is blank', () => {
      const pipe = new DateFilterXtimeAgoPipe();
      const result = pipe.transform('', 'YYYY-MM-DD HH:mm:ss');
      expect(result).toBe('Invalid date');
    });

  });
});
