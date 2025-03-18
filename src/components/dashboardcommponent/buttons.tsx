"use client"
import React, { useState, useEffect } from 'react'
// import { Eye,Trash2,Pencil } from 'lucide-react';

 function buttons({ type }) {
    var I;
    switch (type) {
        case "Eye":
            I =  import("lucide-react").then((module) => module.Eye)
            break;
        case "Pencil":
            I =  import("lucide-react").then((module) => module.Pencil)
            break;
        case "Trash2":
            I =  import("lucide-react").then((module) => module.Trash2)
            break;
        case "BadgePlus":
            I =  import("lucide-react").then((module) => module.BadgePlus)
            break;

        case "ArrowDownToLine":
            I =  import("lucide-react").then((module) => module.ArrowDownToLine)
            break;


        case "ChevronsUpDown":
            I =  import("lucide-react").then((module) => module.ChevronsUpDown)
            break;


        // case "ArrowDownToLine":
        //     I = await import("lucide-react").then((module) => module.ArrowDownToLine)
        //     break;


        // case "ArrowDownToLine":
        //     I = await import("lucide-react").then((module) => module.ArrowDownToLine)
        //     break;


        // case "ArrowDownToLine":
        //     I = await import("lucide-react").then((module) => module.ArrowDownToLine)
            break;
        default:
            break;
    }
    // console.log(I)
    return <I />;

}

export default buttons;
