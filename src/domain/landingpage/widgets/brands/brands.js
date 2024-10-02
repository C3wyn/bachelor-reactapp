import { getBrands } from "./functions/getBrands";
import React, { useEffect, useState } from "react";
import { BrandCard } from "./widgets/logocard/logocard";
import "./brands.styles.css";
export const Brands = () => {
    const [brands, setBrands] = useState([]);

    //Use Effect to get the brands
    useEffect(() => {
        getBrands(setBrands);
    }, [setBrands]);
    

    return (
        <div className="brands">
            <h1 className="title-medium">Marken</h1>
            <div className="brand-list">
                {brands.map((brand) => (
                    <li><BrandCard key={brand.id} brand={brand} /></li>
                ))}
            </div>
        </div>
    );
}