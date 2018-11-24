import React from 'react';
import { render } from 'react-testing-library';
import MyLocation from './MyLocation';

describe('<MyLocation />', () => {
    describe('geolocation is available', () => {
        beforeEach(() => {
            global.fetch = jest.fn().mockImplementation(() => {
                var p = new Promise((resolve, reject) => {
                    resolve({
                        state: 'Berlin',
                        country: 'Germany'
                    });
                });

                return p;
            });
        });

        it('should render with current location', () => {
            // Arrange
            const { getByTestId } = render(<MyLocation />);

            // Act
            const myLocation = getByTestId('my-current-location');

            // Assert
            expect(myLocation.defaultValue).toContain('Berlin, Germany');
        });
    });
});
