import { render as rtlRender, waitForElementToBeRemoved, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AppProviders } from '@/components/providers';

export const waitForLoadingToFinish = () =>
  waitForElementToBeRemoved(() => [...screen.queryAllByTestId(/loading/i), ...screen.queryAllByText(/loading/i)], {
    timeout: 4000,
  });

export const renderApp = async (ui: React.ReactElement, { user, ...renderOptions }: Record<string, unknown> = {}) => {
  const returnValue = {
    ...rtlRender(ui, {
      wrapper: AppProviders,
      ...renderOptions,
    }),
    user: null,
  };

  return returnValue;
};

export * from '@testing-library/react';
export { userEvent, rtlRender };
