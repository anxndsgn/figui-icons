import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Heart, Home } from '../index';

describe('Tailwind CSS Integration', () => {
  it('should apply className to Heart icon', () => {
    render(
      <Heart
        className='test-class w-6 h-6 text-red-500'
        data-testid='heart-icon'
      />
    );

    const icon = screen.getByTestId('heart-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('test-class');
    expect(icon).toHaveClass('w-6');
    expect(icon).toHaveClass('h-6');
    expect(icon).toHaveClass('text-red-500');
  });

  it('should apply className to Home icon', () => {
    render(
      <Home
        className='test-home w-8 h-8 text-blue-500'
        data-testid='home-icon'
      />
    );

    const icon = screen.getByTestId('home-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('test-home');
    expect(icon).toHaveClass('w-8');
    expect(icon).toHaveClass('h-8');
    expect(icon).toHaveClass('text-blue-500');
  });

  it('should combine className with size and color props', () => {
    render(
      <Heart
        size={32}
        color='#ff0000'
        className='custom-style border-2'
        data-testid='styled-heart'
      />
    );

    const icon = screen.getByTestId('styled-heart');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('custom-style');
    expect(icon).toHaveClass('border-2');
    expect(icon).toHaveAttribute('width', '32');
    expect(icon).toHaveAttribute('height', '32');
    expect(icon).toHaveAttribute('stroke', '#ff0000');
  });
});
