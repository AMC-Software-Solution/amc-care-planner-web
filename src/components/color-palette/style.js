import Styled from 'styled-components';

const borderd = type => {
  return `
        background: #ffffff;
        color: #5A5F7D;
        border: 1px solid ${type};
    `;
};
const content = () => {
  return `
        justify-content: space-around;
    `;
};
const bg = () => {
  return `
        color: #5A5F7D;
      `;
};
const grad = (type, direction) => {
  return `
         background-image: linear-gradient(${direction}, ${type[0]}, ${type[1]});
         height: 100px;
        `;
};

const ColorPalette = Styled.div`
    width: 100%;
    height: 44px;
    background: ${({ type }) => type}
    border-radius: 5px;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: center;
    ${({ isbordered, type }) => isbordered && borderd(type)}
    ${({ iscontent }) => iscontent && content()}
    ${({ isbg }) => isbg && bg()}
    ${({ isgrad, type, direction }) => isgrad && grad(type, direction)}
`;

export { ColorPalette };
