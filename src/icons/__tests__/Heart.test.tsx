import React from 'react';
import { render, screen } from '@testing-library/react';
import { Heart } from '../Heart';

describe('Heart Icon', () => {
  it('renders correctly with default props', () => {
    render(<Heart data-testid='heart-icon' />);
    const icon = screen.getByTestId('heart-icon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('width', '20');
    expect(icon).toHaveAttribute('height', '20');
  });

  it('applies custom size', () => {
    render(<Heart size={32} data-testid='heart-icon' />);
    const icon = screen.getByTestId('heart-icon');
    expect(icon).toHaveAttribute('width', '32');
    expect(icon).toHaveAttribute('height', '32');
  });

  it('applies custom color', () => {
    render(<Heart color='#ff0000' data-testid='heart-icon' />);
    const icon = screen.getByTestId('heart-icon');
    expect(icon).toHaveAttribute('stroke', '#ff0000');
  });

  it('applies custom className', () => {
    render(<Heart className='custom-class' data-testid='heart-icon' />);
    const icon = screen.getByTestId('heart-icon');
    expect(icon).toHaveClass('custom-class');
  });

  it('applies predefined size', () => {
    render(<Heart size='lg' data-testid='heart-icon' />);
    const icon = screen.getByTestId('heart-icon');
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });
});
