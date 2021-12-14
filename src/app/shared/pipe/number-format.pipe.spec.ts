import { NumberFormatPipe } from './number-format.pipe';

const pipe = new NumberFormatPipe();

describe('NumberFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('should have comma', () => {
    const val = 99912394;
    const result = pipe.transform(val);
    expect(result).toBe('99,912,394');
  });

  it('should not have comma', () => {
    const val = 394;
    const result = pipe.transform(val);
    expect(result).toBe('394');
  });

  it('should return original string', () => {
    const val = 'original';
    const result = pipe.transform(val);
    expect(result).toBe(val);
  });
});
