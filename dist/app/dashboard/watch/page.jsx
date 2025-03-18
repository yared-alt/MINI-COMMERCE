import BlankUploadForm from "$/components/dashboardcommponent/blankUploadForm";
import React from 'react';
function page() {
    const product = {
        name: "abcd",
        description: " ldskncd vjdnvjdowmekwmdms dcsdcnsdjcndjvndvioe e",
        price: "222",
        isNew: false,
        isPopular: true,
        inStock: false,
        quantity: 33,
        frontImage: "andcmscsd/csdlckosd/scsodc",
        otheImages: "andcmscsd/csdlckosd/scsodc",
    };
    return (<BlankUploadForm product={product}/>);
}
export default page;
