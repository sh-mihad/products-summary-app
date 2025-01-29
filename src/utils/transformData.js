export default function transformProducts(input) {
    const result = [];
    input.forEach((item) => {
        const existingProduct = result.find(p => p.itemName === item.itemName);

        if (!existingProduct) {
            result.push({
                itemName: item.itemName,
                variant: [{ rate: item.rate, qty: item.qty },...Array(4).fill({ rate: 0, qty: 0 })],
                totalQty: item.qty,
                totalAmount: item.rate * item.qty,
            });
        } else {
            const existingVariant = existingProduct.variant.find(v => v.rate === item.rate);

            if (existingVariant) {
                console.log("ekhane ");
                existingVariant.qty += item.qty;
            } else {
                console.log("new value");
                existingProduct.variant.push({ rate: item.rate, qty: item.qty });
            }

            existingProduct.totalQty += item.qty;
            existingProduct.totalAmount += item.rate * item.qty;
        }
    });

    return result;
}