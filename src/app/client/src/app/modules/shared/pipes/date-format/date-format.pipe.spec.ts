import { DateFormatPipe } from './date-format.pipe';
import dayjs from 'dayjs';

describe('DateFormatPipe', () => {
  describe('#transform', () => {
    it('should take default format for date', () => {
      const pipe = new DateFormatPipe();
      const date = new Date();
      const result = pipe.transform(date, '');
      const ans = dayjs(date).format('DD MMMM YYYY');
      expect(result).toBe(ans);
    });

    it('test for given format for date', () => {
      const pipe = new DateFormatPipe();
      const date = new Date();
      const result = pipe.transform(date, 'MMMM YYYY DD');
      const ans = dayjs(date).format('MMMM YYYY DD');
      expect(result).toBe(ans);
    });

    it('if date is blank', () => {
      const pipe = new DateFormatPipe();
      const result = pipe.transform('', 'DD MMMM YYYY');
      expect(result).toBe('-');
    });

  });
});
