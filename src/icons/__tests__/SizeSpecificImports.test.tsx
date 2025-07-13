import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Test 16px imports
import {
  Heart as Heart16,
  Home as Home16,
  User as User16,
  Icon as Icon16,
} from '../16/index';

// Test 24px imports
import {
  Heart as Heart24,
  Home as Home24,
  User as User24,
  Icon as Icon24,
} from '../24/index';

describe('Size-Specific Icon Imports', () => {
  describe('16px Icons', () => {
    it('should render Heart16 with correct default size', () => {
      render(<Heart16 data-testid='heart-16' />);

      const icon = screen.getByTestId('heart-16');
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('width')).toBe('16');
      expect(icon.getAttribute('height')).toBe('16');
      expect(icon.getAttribute('viewBox')).toBe('0 0 16 16');
      expect(icon.getAttribute('stroke-width')).toBe('1.5');
    });

    it('should render Home16 with correct default size', () => {
      render(<Home16 data-testid='home-16' />);

      const icon = screen.getByTestId('home-16');
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('width')).toBe('16');
      expect(icon.getAttribute('height')).toBe('16');
      expect(icon.getAttribute('viewBox')).toBe('0 0 16 16');
    });

    it('should render User16 with correct default size', () => {
      render(<User16 data-testid='user-16' />);

      const icon = screen.getByTestId('user-16');
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('width')).toBe('16');
      expect(icon.getAttribute('height')).toBe('16');
      expect(icon.getAttribute('viewBox')).toBe('0 0 16 16');
    });

    it('should support custom size override on 16px icons', () => {
      render(<Heart16 size={20} data-testid='heart-16-custom' />);

      const icon = screen.getByTestId('heart-16-custom');
      expect(icon.getAttribute('width')).toBe('20');
      expect(icon.getAttribute('height')).toBe('20');
    });
  });

  describe('24px Icons', () => {
    it('should render Heart24 with correct default size', () => {
      render(<Heart24 data-testid='heart-24' />);

      const icon = screen.getByTestId('heart-24');
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('width')).toBe('24');
      expect(icon.getAttribute('height')).toBe('24');
      expect(icon.getAttribute('viewBox')).toBe('0 0 24 24');
      expect(icon.getAttribute('stroke-width')).toBe('2');
    });

    it('should render Home24 with correct default size', () => {
      render(<Home24 data-testid='home-24' />);

      const icon = screen.getByTestId('home-24');
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('width')).toBe('24');
      expect(icon.getAttribute('height')).toBe('24');
      expect(icon.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    it('should render User24 with correct default size', () => {
      render(<User24 data-testid='user-24' />);

      const icon = screen.getByTestId('user-24');
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('width')).toBe('24');
      expect(icon.getAttribute('height')).toBe('24');
      expect(icon.getAttribute('viewBox')).toBe('0 0 24 24');
    });

    it('should support custom size override on 24px icons', () => {
      render(<Heart24 size={32} data-testid='heart-24-custom' />);

      const icon = screen.getByTestId('heart-24-custom');
      expect(icon.getAttribute('width')).toBe('32');
      expect(icon.getAttribute('height')).toBe('32');
    });
  });

  describe('Base Icon Components', () => {
    it('should render Icon16 with custom content', () => {
      render(
        <Icon16 data-testid='custom-16'>
          <circle cx='8' cy='8' r='6' />
        </Icon16>
      );

      const icon = screen.getByTestId('custom-16');
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('viewBox')).toBe('0 0 16 16');
      expect(icon.querySelector('circle')).toBeInTheDocument();
    });

    it('should render Icon24 with custom content', () => {
      render(
        <Icon24 data-testid='custom-24'>
          <circle cx='12' cy='12' r='10' />
        </Icon24>
      );

      const icon = screen.getByTestId('custom-24');
      expect(icon).toBeInTheDocument();
      expect(icon.getAttribute('viewBox')).toBe('0 0 24 24');
      expect(icon.querySelector('circle')).toBeInTheDocument();
    });
  });

  describe('Tailwind CSS Support', () => {
    it('should support Tailwind classes on 16px icons', () => {
      render(
        <Heart16
          className='text-red-500 w-4 h-4'
          data-testid='heart-16-tailwind'
        />
      );

      const icon = screen.getByTestId('heart-16-tailwind');
      expect(icon).toHaveClass('text-red-500');
      expect(icon).toHaveClass('w-4');
      expect(icon).toHaveClass('h-4');
    });

    it('should support Tailwind classes on 24px icons', () => {
      render(
        <Heart24
          className='text-blue-500 w-6 h-6'
          data-testid='heart-24-tailwind'
        />
      );

      const icon = screen.getByTestId('heart-24-tailwind');
      expect(icon).toHaveClass('text-blue-500');
      expect(icon).toHaveClass('w-6');
      expect(icon).toHaveClass('h-6');
    });
  });
});
