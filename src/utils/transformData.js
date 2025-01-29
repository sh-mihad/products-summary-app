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
                const emptyCelIndex= existingProduct.variant.findIndex((item)=>item.rate === 0 && item.qty === 0 )
                existingProduct.variant[emptyCelIndex]=({ rate: item.rate, qty: item.qty });
            }

            existingProduct.totalQty += item.qty;
            existingProduct.totalAmount += item.rate * item.qty;
        }
    });

    return result;
}