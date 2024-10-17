export const getTotal = (items) => {
    let sum = 0;

    items.forEach((item) => {
        sum += item.price;
    });

    return sum;
}