
# localstorage

  Component for saving an object to localStorage.

## Installation

    $ component install michalmiskernik/localstorage

## API

    var storage = new Storage('example');

    storage.save({ foo: 'bar' });

    // reload page

    var obj = storage.load();
    // obj == { foo: 'bar' };

## License

  MIT
