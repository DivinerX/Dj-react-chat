import styled from 'styled-components'

type messageType = 'my' | 'other'

export const Div = {
  /* eslint-disable */
  container: styled.div(({ type }: { type: messageType }) => `
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.1875rem;
    border-radius: 8px;
    max-width: 84%;
    background-color: ${type === 'my' ? "var(--pBlue-300)" : "var(--pGray-300)"};
    align-self: ${type === 'my' ? "flex-end" : "flex-start"};
    color: ${type === 'my' ? "var(--pGray-100)" : "var(--pBlack-600)"};

    .time {
      font-size: 0.6rem;
    }
    
  `)
  /* eslint-enable */
}
