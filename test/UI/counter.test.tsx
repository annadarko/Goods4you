import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from 'components/UI/counter';
import type { ComponentProps } from 'react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

describe('Counter', () => {
  const initialValue = 2;
  const onChange = vi.fn<(next: number) => void>();

  const setup = (props: Partial<ComponentProps<typeof Counter>> = {}) => {
    render(
      <Counter
        value={initialValue}
        onChange={onChange}
        {...props}
      />,
    );

    const [minus, plus] = screen.getAllByRole('button') as HTMLButtonElement[];
    return {
      minusButton: minus,
      plusButton: plus,
    };
  };

  beforeEach(() => {
    onChange.mockReset();
  });

  test('renders current value', () => {
    setup();
    expect(screen.getByText(`${initialValue} items`)).toBeInTheDocument();
  });

  test('click plus calls onChange with value + 1', async () => {
    const { plusButton } = setup();

    await userEvent.click(plusButton);
    expect(onChange).toHaveBeenCalledWith(initialValue + 1);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('click minus calls onChange with value - 1', async () => {
    const { minusButton } = setup();

    await userEvent.click(minusButton);
    expect(onChange).toHaveBeenCalledWith(initialValue - 1);
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('disabled plus does not call onChange', async () => {
    const { plusButton } = setup({ disablePlus: true });

    await userEvent.click(plusButton);
    expect(onChange).not.toHaveBeenCalled();
  });
});
