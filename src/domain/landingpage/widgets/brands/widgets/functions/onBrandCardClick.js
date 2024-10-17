export const onBrandCardClick = (brand) => {
    console.log(brand);
    window.location.href = `/search?brand=${brand}`;
}