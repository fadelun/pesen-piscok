export default function formatPrice(numStr) {
    const num = parseInt(numStr, 10);
    return new Intl.NumberFormat("id-ID").format(num);
}