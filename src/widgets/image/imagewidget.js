import React, { useState, useEffect } from 'react';
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from '../../configuration';
const ImageWidget = ({ filename }) => {
    return (
        <img id="image" src={filename}/>
    );
};

export default ImageWidget;
