import { Fragment } from 'react';

interface IHighlate {
  filter: string;
  str: string;
}

export const Hightlight = ({ filter, str }: IHighlate): any => {
  if (!filter) {
    return str;
  }
  const regExp = new RegExp(filter, 'ig');
  const matchValue = str.match(regExp);
  if (matchValue) {
    return str.split(regExp).map((el, idx, arr) => {
      if (idx < arr.length - 1) {
        const matches = matchValue.shift();
        return (
          <Fragment key={idx}>
            {el} <span style={{ backgroundColor: 'yellow' }}>{matches}</span>
          </Fragment>
        );
      }
      return el;
    });
  }
  return str;
};
