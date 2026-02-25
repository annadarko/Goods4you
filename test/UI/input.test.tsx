import { describe, beforeEach, test, vi, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Input } from '../../src/components/UI/Input/Input'
import userEvent from "@testing-library/user-event";

describe("Тестирование Input", () => {
    describe("Тестирование базовых свойств", () => {
      const inputValue = "test";
      const placeholder = "Search by title";
      const onChangeInput = vi.fn();
      let input: HTMLInputElement;
  
      beforeEach(() => {
        render(
          <Input
            placeholder={placeholder}
            value={inputValue} 
            onChange={onChangeInput}
          />,
        );
        input = screen.getByPlaceholderText(placeholder) as HTMLInputElement;
      });
  
      test("check default value", () => {
        expect(input.value).toBe(inputValue);
      });

      test ('user change data - called onChange callback', async () => {
        await userEvent.type(input, 'text');
        expect(onChangeInput).toHaveBeenCalledTimes(4);

        expect(onChangeInput).toHaveBeenCalledWith(
            expect.objectContaining({type: 'change'}),
        );
      });

      test ('Input use html tag input', () => {
        expect(input.tagName). toBe('INPUT');
      });

      test ('Input have placeholder', () => {
        expect(input).toHaveAttribute('placeholder', placeholder);
      });
    });
});
