// react-testing-library renders your components to document.body,
// this will ensure they're removed after each test.
import 'react-testing-library/cleanup-after-each';
// this adds jest-dom's custom assertions
// import 'jest-dom/extend-expect';

// Mock localStorage
const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
global.localStorage = localStorageMock;

// Mock window navigator (mainly for geolocation)
const mockGeoLocation = {
    getCurrentPosition: jest.fn().mockImplementation(success =>
        Promise.resolve(
            success({
                coords: {
                    latitude: 51.1,
                    longitude: 45.3
                }
            })
        )
    )
};

global.navigator.geolocation = mockGeoLocation;
