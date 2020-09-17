const month = require('./month.js');

describe ( "test define month by number", () => {
    const may = 5;
    it ('defining month', () => {
        expect(month(1)).toBe("январь");
        expect(month(2)).toBe("февраль");
        expect(month(3)).toBe("март");
        expect(month(may)).toBe("май");
    }),
    it ('incorrect input', () => {
        expect(month(13)).toBe("неизвестно");
        expect(month("may")).toBe("неизвестно");
        expect(month("май")).toBe("неизвестно");
        expect(month(0)).toBe("неизвестно");
    });

    it ('unexpected behavior of the function', () => {
        expect(month("05.2020")).not.toBe("май");
        expect(month("5")).not.toBe("май");
        expect(month("april")).not.toBe("апрель");
    });
})